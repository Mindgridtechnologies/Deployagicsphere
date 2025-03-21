/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, XIcon } from "lucide-react";

interface StepFiveData {
  otp: number;
}

interface StepFiveProps {
  submitForm: () => void;
}

const StepFive: React.FC<StepFiveProps> = () => {
  const OTP = "123456";
  const [stepFive, setStepFive] = useState<{ otp: number | undefined }>({
    otp: undefined,
  });
  const [enteredOTP, setEnteredOTP] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<StepFiveData>({
    defaultValues: stepFive,
    mode: "onChange",
  });

  const onSubmit = (data: StepFiveData) => {
    if (enteredOTP !== OTP) {
      setIsDialogOpen(false);
      setError("otp", { type: "manual", message: "Wrong input, try again" });
      return;
    }

    clearErrors("otp");
    setStepFive({ otp: Number(enteredOTP) });
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-col gap-4 mx-auto text-center py-12">
      <h4 className="font-quicksand font-bold text-3xl text-[#2D0305]">
        OTP Verification
      </h4>
      <p className="font-quicksand font-normal text-sm text-[#3C3232]">
        Confirm the link sent to your email, and you will receive an{" "}
        <span className="font-bold">OTP</span> to continue <br /> your
        registration process.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center mx-auto mt-8"
      >
        {errors.otp && (
          <p className="text-left font-raleway font-semibold text-sm text-red mb-3">
            {errors.otp.message}
          </p>
        )}
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          className={!!errors.otp ? "border-red bg-[#FF000012] text-red" : ""}
          onChange={(value) => {
            setEnteredOTP(value);
            if (errors.otp) clearErrors("otp");
          }}
        >
          <InputOTPGroup className="font-raleway font-bold text-3xl">
            {[...Array(6)].map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className={
                  !!errors.otp
                    ? "border-red bg-[#FF000012] text-red"
                    : "bg-[#F4F4F4]"
                }
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        <p className="font-quicksand font-medium text-sm text-[#100505] text-left my-5 underline">
          Request a new code
        </p>
        <p className="text-center font-quicksand font-normal text-sm text-[#302323]">
          By submitting this form you agree to
          <span className="font-semibold"> Agrisphere’s </span>
          <span className="text-error-red font-bold">
            Term of use
          </span> <br /> and consent to
          <span className="font-semibold"> Agrisphere’s </span>
          <span className="text-error-red font-bold">Privacy Statement</span>
        </p>

        <Dialog open={isDialogOpen}>
          <DialogTrigger asChild>
            <Button
              type="submit"
              disabled={enteredOTP.length !== 6 || !!errors.otp}
              className={`w-[400px] h-18 cursor-pointer mx-auto my-7 ${
                enteredOTP.length !== 6 || !!errors.otp
                  ? "bg-btn-grey cursor-not-allowed"
                  : "bg-green hover:bg-green"
              }`}
            >
              Submit
            </Button>
          </DialogTrigger>
          <DialogContent className="md:max-w-[760px]">
            <div className="flex justify-between items-center ">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-6 right-4"
              >
                <div className="w-6 h-6 rounded-full border border-[#E0E0E0] flex items-center pl-1">
                  <XIcon color="#ED1651" size={14} />
                </div>
              </button>
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 rounded-full border border-[#E0E0E0] flex items-center pl-1">
                  <ChevronLeft size={14} />
                </div>
                <p className="font-raleway font-medium text-lg text-[#200506]">
                  Back
                </p>
              </div>
            </div>
            <DialogHeader>
              <DialogTitle className="font-quicksand font-bold text-3xl text-green text-center">
                Welcome to Agrisphere
              </DialogTitle>
              <DialogDescription className="font-quicksand font-medium text-base text-[#5E5E5E] text-center">
                Complete the following <span className="font-bold">KYC</span> to
                activate your <br />{" "}
                <span className="font-bold">Agrisphere</span> Account
              </DialogDescription>
            </DialogHeader>
            <div className="w-[480px] h-[185px] border border-[#EBEBEB] rounded-2xl px-10 py-8 my-8 mx-auto">
              <ul className="flex flex-col gap-2">
                <li className="font-quicksand font-normal text-base text-[#344054] flex gap-2 items-center">
                  {" "}
                  <span className="w-4.5 h-4.5 rounded-full border-6 bg-white border-[#A0A0A0]"></span>
                  BVN
                </li>
                <li className="font-quicksand font-normal text-base text-[#344054] flex gap-2 items-center">
                  {" "}
                  <span className="w-4.5 h-4.5 rounded-full border-6 bg-white border-[#A0A0A0]"></span>
                  Face Verification
                </li>
                <li className="font-quicksand font-normal text-base text-[#344054] flex gap-2 items-center">
                  {" "}
                  <span className="w-4.5 h-4.5 rounded-full border-6 bg-white border-[#A0A0A0]"></span>
                  NIN
                </li>
                <li className="font-quicksand font-normal text-base text-[#344054] flex gap-2 items-center">
                  <span className="w-4.5 h-4.5 rounded-full border-6 bg-white border-[#A0A0A0]"></span>
                  Business Verification
                </li>
              </ul>
            </div>
            <DialogFooter className="flex flex-col gap-4 mx-auto">
              <Button
                type="submit"
                className="w-[400px] h-18 border-0 bg-green hover:bg-green hover:border-0 cursor-pointer"
              >
                Complete KYC
              </Button>
              <Button className="w-[400px] h-18 bg-[#BBEAD6] hover:bg-[#BBEAD6] text-green hover:border-0 cursor-pointer">
                Skip
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
};

export default StepFive;
