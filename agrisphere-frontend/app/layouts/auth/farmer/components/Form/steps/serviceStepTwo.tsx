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
        Please provide the <span className="font-bold">Service Provider</span> Details
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="my-6">
          <div className="flex flex-col gap-4">
            <input
              {...form.register("companyName")}
              placeholder="Company Name"
              className="border p-2 rounded"
            />
            <input
              {...form.register("firstName")}
              placeholder="First Name"
              className="border p-2 rounded"
            />
            <input
              {...form.register("middleName")}
              placeholder="Middle Name"
              className="border p-2 rounded"
            />
            <input
              {...form.register("lastName")}
              placeholder="Last Name"
              className="border p-2 rounded"
            />
            <input
              {...form.register("email")}
              placeholder="Email"
              className="border p-2 rounded"
            />
            <input
              {...form.register("phone")}
              placeholder="Phone"
              className="border p-2 rounded"
            />
            <input
              {...form.register("country")}
              placeholder="Country"
              className="border p-2 rounded"
            />
            <input
              {...form.register("state")}
              placeholder="State"
              className="border p-2 rounded"
            />
            <input
              {...form.register("city")}
              placeholder="City"
              className="border p-2 rounded"
            />
            <input
              {...form.register("address")}
              placeholder="Address"
              className="border p-2 rounded"
            />
            <input
              {...form.register("dateOfBirth")}
              placeholder="Date of Birth"
              type="date"
              className="border p-2 rounded"
            />
            <select {...form.register("sex")} className="border p-2 rounded">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="flex justify-between mt-8">
            <Button type="button" className="bg-gray-400" onClick={prevStep}>
              Back
            </Button>
            <Button type="submit" className="bg-green-500">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ServiceStepTwo;
