"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import roleSteps from "@/app/utils/roleSteps";
import StepOne from "./stepOne";

interface StepProps {
  nextStep: () => void;
  prevStep: () => void;
}

const MultiStepForm: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const role = decodeURIComponent(params.get("role") || "")
    .toLowerCase()
    .replace(/\s+/g, "-");
  const tabParam = params.get("tab");
  const currentStepIndex = tabParam ? Number(tabParam) - 1 : 0;

  const steps = roleSteps[role as keyof typeof roleSteps] || [];
  const StepComponent = dynamic<StepProps>(
    () => import(`./steps/${steps[currentStepIndex - 1]}`),
    {
      loading: () => <div>Loading...</div>,
      ssr: false,
    }
  );

  const nextStep = () => {
    router.push(`?tab=${currentStepIndex + 2}&role=${role}`);
  };

  if (!role || currentStepIndex === 0) {
    return <StepOne nextStep={nextStep} />;
  }

  const prevStep = () => {
    router.push(`?tab=${currentStepIndex}&role=${role}`);
  };

  return (
    <Suspense>
      <div className="flex flex-col gap-5 px-12 py-5">
        <div className="flex flex-col gap-3">
          <p className="font-quicksand text-xs font-normal text-black text-right">
            Have an account? <span className="font-bold">Login</span>
          </p>
          <div className="w-full flex gap-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-[200px] h-1.5 rounded-full ${
                  currentStepIndex - 1 >= index ? "bg-green" : "bg-[#DADADA]"
                }`}
              ></div>
            ))}
          </div>
          <h2 className="font-quicksand font-semibold text-xl text-[#6D6D6D]">
            Step {currentStepIndex} of {steps.length}
          </h2>
        </div>
        <StepComponent nextStep={nextStep} prevStep={prevStep} />
      </div>
    </Suspense>
  );
};

export default MultiStepForm;
