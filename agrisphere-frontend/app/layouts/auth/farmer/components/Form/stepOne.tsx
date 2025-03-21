"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const roles = [
  "Farmer",
  "Service Providers",
  "Processors (SMEs)",
  "Program Sponsors",
  "Aggregators",
];

const StepOne: React.FC<{ nextStep: () => void }> = ({ nextStep }) => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const { handleSubmit } = useForm();

  const selectRole = (selectedRole: string) => {
    setSelectedRole(selectedRole);
    router.push(`/?role=${encodeURIComponent(selectedRole)}&tab=1`);
  };

  const onSubmit = () => {
    if (!selectedRole) return;
    router.push(`/?tab=2&role=${encodeURIComponent(selectedRole)}`);
    nextStep();
  };

  return (
    <div className="flex flex-col gap-3 my-20 items-center justify-center">
      <h4 className="font-quicksand font-bold text-4xl text-[#01190F] ">
        Select your role
      </h4>
      <p className="font-quicksand text-sm font-normal text-black">
        This helps us give you more relevant service
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col gap-5"
      >
        {roles.map((role) => (
          <div
            key={role}
            className={`flex gap-4 border w-[400px] h-14 rounded-xl items-center px-5 cursor-pointer ${
              selectedRole === role ? "border-green" : ""
            }`}
            onClick={() => selectRole(role)}
          >
            <input
              type="radio"
              className="hidden"
              checked={selectedRole === role}
              readOnly
            />
            <span
              className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                selectedRole === role
                  ? "border-green bg-white"
                  : "border-gray-400"
              }`}
            >
              {selectedRole === role && (
                <span className="w-4 h-4 rounded-full bg-green"></span>
              )}
            </span>
            <p
              className={`font-quicksand font-medium text-xl text-black ${
                selectedRole === role ? "text-green" : ""
              }`}
            >
              {role}
            </p>
          </div>
        ))}
        <button
          type="submit"
          className={`w-[400px] py-4 rounded-md font-quicksand text-base font-semibold text-white cursor-pointer ${
            selectedRole ? "bg-green" : "bg-btn-grey"
          }`}
          disabled={!selectedRole || selectedRole.trim() === ""}
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default StepOne;