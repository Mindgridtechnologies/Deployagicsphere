import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface StepFourProps {
  nextStep: () => void;
}

const StepFour: React.FC<StepFourProps> = ({ nextStep }) => {
  const router = useRouter();
  const [stepFour, setStepFour] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    defaultValues: stepFour,
    mode: "onChange",
  });

  const password = form.watch("password", "");
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  interface StepFourFormData {
    password: string;
    confirmPassword: string;
  }

  const onSubmit = (data: StepFourFormData) => {
    setStepFour(data);
    router.push("?tab=5");
    nextStep();
  };

  return (
    <div className="flex flex-col gap-3 p-14 mx-auto">
      <h4 className="font-quicksand font-bold text-4xl text-[#01190F]">
        Create password
      </h4>
      <p className="font-quicksand font-medium text-base text-[#2D0305]">
        Set up your password to get started
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-6">
          <div className="flex justify-between gap-4">
            <Controller
              name="password"
              control={form.control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /[A-Z]/,
                  message: "Must contain at least one uppercase letter",
                },
                validate: (value) =>
                  /[0-9]/.test(value) ||
                  "Password must contain at least one number",
              }}
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        className="w-full h-11 border border-input-grey"
                      />
                      {showPassword ? (
                        <Eye
                          className="absolute right-3 top-3 cursor-pointer"
                          onClick={() => setShowPassword(false)}
                          color="black"
                        />
                      ) : (
                        <EyeClosed
                          className="absolute right-3 top-3 cursor-pointer"
                          onClick={() => setShowPassword(true)}
                          color="black"
                        />
                      )}
                    </div>
                  </FormControl>
                  {/* <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage> */}
                </FormItem>
              )}
            />

            <Controller
              name="confirmPassword"
              control={form.control}
              rules={{
                required: "Please confirm your password",
                validate: (value) =>
                  value === form.getValues("password") ||
                  "Passwords do not match",
              }}
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full h-11 border border-input-grey"
                      />
                      {showConfirmPassword ? (
                        <Eye
                          className="absolute right-3 top-3 cursor-pointer"
                          onClick={() => setShowConfirmPassword(false)}
                          color="black"
                        />
                      ) : (
                        <EyeClosed
                          className="absolute right-3 top-3 cursor-pointer"
                          onClick={() => setShowConfirmPassword(true)}
                          color="black"
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.confirmPassword?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <ul className="mt-6 font-raleway text-sm">
            <li className={hasMinLength ? "text-green-600" : "text-red-600"}>
              {hasMinLength ? "✅" : "❌"} Password must be 8+ characters
            </li>
            <li className={hasUppercase ? "text-green-600" : "text-red-600"}>
              {hasUppercase ? "✅" : "❌"} Password must have at least one uppercase letter
            </li>
            <li className={hasNumber ? "text-green-600" : "text-red-600"}>
              {hasNumber ? "✅" : "❌"} Password must have at least one number
            </li>
          </ul>

          <div className="mt-30 flex justify-between">
            <Button
              type="submit"
              className={`w-[400px] h-16 text-white mx-auto ${
                form.formState.isValid
                  ? "bg-green hover:bg-green cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default StepFour;
