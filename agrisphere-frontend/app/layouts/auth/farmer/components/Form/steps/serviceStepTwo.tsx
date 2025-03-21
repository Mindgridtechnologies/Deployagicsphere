import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

interface ServiceStepTwoProps {
  nextStep: () => void;
  prevStep: () => void;
}

interface ServiceStepTwoFormData {
  companyName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  address: string;
  dateOfBirth: string;
  sex: string;
}

const ServiceStepTwo: React.FC<ServiceStepTwoProps> = ({
  nextStep,
  prevStep,
}) => {
  const form = useForm<ServiceStepTwoFormData>({
    defaultValues: {
      companyName: "",
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      city: "",
      address: "",
      dateOfBirth: "",
      sex: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ServiceStepTwoFormData> = (data) => {
    console.log("Form Submitted:", data);
    nextStep();
  };

  return (
    <div className="flex flex-col gap-3 p-14">
      <p className="font-livvic font-normal text-2xl text-[#0E0606] text-left">
        Please provide the <span className="font-bold">Service provider </span>
        Details
      </p>

      <Form>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-6">
          
          
          <div className="flex justify-between mt-8">
            <Button type="button" className="bg-gray-400" onClick={prevStep}>
              Back
            </Button>
            <Button type="submit" className="bg-green">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ServiceStepTwo;
