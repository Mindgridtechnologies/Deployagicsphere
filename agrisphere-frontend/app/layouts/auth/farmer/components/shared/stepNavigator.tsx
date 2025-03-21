"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import roleSteps from "@/app/utils/roleSteps";

interface StepProps {
  nextStep: () => void;
}

interface StepNavigatorProps {
  currentStepIndex: number;
  setCurrentStepIndex: (index: number) => void;
}

const StepNavigator: React.FC<StepNavigatorProps> = ({
  currentStepIndex,
  setCurrentStepIndex,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") as keyof typeof roleSteps;

  if (!role || !roleSteps[role]) return <div>Error: Invalid role</div>;

  const steps = roleSteps[role];

  const StepComponent = dynamic<StepProps>(
    () =>
      import(`../steps/${steps[currentStepIndex]}`).catch(() => {
        console.error("Failed to load step component.");
      }),
    {
      loading: () => (
        <div className="w-5 h-5 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-green border-t-[#EEFFF8] rounded-full animate-spin"></div>
        </div>
      ),
    }
  );

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      router.push(`?tab=${currentStepIndex + 2}&role=${role}`);
    }
  };

  return (
    <Suspense>
      <StepComponent nextStep={nextStep} />
    </Suspense>
  );
};

export default StepNavigator;
