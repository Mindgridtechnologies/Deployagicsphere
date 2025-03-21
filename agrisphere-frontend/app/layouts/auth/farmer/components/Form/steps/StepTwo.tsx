"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  middleName: z.string().min(1, { message: "Middle Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
  city: z.string().min(1, { message: "City is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  dateOfBirth: z.string({ required_error: "Date of Birth is required" }),
  sex: z.string().min(1, { message: "Sex is required" }),
});

interface StepTwoProps {
  nextStep: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ nextStep}) => {
  const router = useRouter();
  const [date, setDate] = useState<Date | null>(null);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    watch,
    getValues,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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

  const onSubmit = () => {
    console.log("Step two clicked");
    console.log("Step Two Data:", { ...getValues(), dateOfBirth: date });
    router.push("?tab=3");
    nextStep();
  };

  return (
    <div className="flex flex-col gap-3 px-6 py-6 mx-auto">
      <h4 className="font-quicksand font-bold text-4xl text-[#01190F] ">
        Farmer: Enter your personal details
      </h4>

      <Form {...useForm<z.infer<typeof formSchema>>()}>
        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
          <div className="flex flex-row gap-5">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-[220px] h-11 font-semibold text-input-black placeholder:text-placeholder-grey placeholder:font-medium font-raleway text-sm"
                      placeholder="First Name"
                    />
                  </FormControl>
                  <FormMessage>{errors.firstName?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Controller
              name="middleName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Middle Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-[220px] h-11 font-semibold text-input-black placeholder:text-placeholder-grey placeholder:font-medium font-raleway text-sm"
                      {...field}
                      placeholder="Middle Name"
                    />
                  </FormControl>
                  <FormMessage>{errors.middleName?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-[220px] h-11 font-semibold text-input-black placeholder:text-placeholder-grey placeholder:font-medium font-raleway text-sm"
                      {...field}
                      placeholder="Last Name"
                    />
                  </FormControl>
                  <FormMessage>{errors.lastName?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row gap-5 my-5">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-[220px] h-11 font-semibold text-input-black placeholder:text-placeholder-grey placeholder:font-medium font-raleway text-sm"
                      {...field}
                      placeholder="Emmanuellaobi@email.com"
                    />
                  </FormControl>
                  <FormMessage>{errors.email?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <div className="flex flex-row border rounded-md">
                      <div className="w-[60px] h-11 flex flex-row gap-2 px-1 items-center">
                        <Image
                          src="/icons/ng.svg"
                          alt="NG flag"
                          width={24}
                          height={24}
                          className="mx-auto"
                        />
                        <ChevronDown size={16} />
                      </div>
                      <Input
                        type="tel"
                        {...field}
                        className="w-[160px] h-11 rounded-l-none border-y-0 border-r-0 font-semibold text-input-black placeholder:text-placeholder-grey placeholder:font-medium font-raleway text-sm"
                        placeholder="+234 7054238967"
                      />
                    </div>
                  </FormControl>
                  <FormMessage>{errors.phone?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Country
                  </FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[220px] h-11 font-semibold font-raleway text-sm text-input-black">
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Countries</SelectLabel>
                          <SelectItem value="Nigeria">Nigeria</SelectItem>
                          <SelectItem value="Ghana">Ghana</SelectItem>
                          <SelectItem value="Kenya">Kenya</SelectItem>
                          <SelectItem value="Togo">Togo</SelectItem>
                          <SelectItem value="Uganda">Uganda</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage>{errors.country?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row gap-5 my-5">
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    State
                  </FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[220px] h-11 font-semibold font-raleway text-sm text-input-black">
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>States</SelectLabel>
                          <SelectItem value="Lagos">Lagos</SelectItem>
                          <SelectItem value="Ibadan">Ibadan</SelectItem>
                          <SelectItem value="Abuja">Abuja</SelectItem>
                          <SelectItem value="Sokoto">Sokoto</SelectItem>
                          <SelectItem value="Port Harcourt">
                            Port Harcourt
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage>{errors.state?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    City
                  </FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[220px] h-11 font-semibold font-raleway text-sm text-input-black">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Cities</SelectLabel>
                          <SelectItem value="Lagos">Lagos</SelectItem>
                          <SelectItem value="Ibadan">Ibadan</SelectItem>
                          <SelectItem value="Abuja">Abuja</SelectItem>
                          <SelectItem value="Sokoto">Sokoto</SelectItem>
                          <SelectItem value="Port Harcourt">
                            Port Harcourt
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage>{errors.city?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row gap-5 my-5">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Google Address
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="text"
                        className="w-[460px] h-11 px-10 font-semibold text-input-black placeholder:text-placeholder-grey placeholder:font-medium font-raleway text-sm"
                        {...field}
                        placeholder="Address"
                      />
                      <Image
                        src="/icons/maps.svg"
                        alt="icon"
                        width={17}
                        height={24}
                        className="absolute top-2 left-3"
                      />
                    </div>
                  </FormControl>
                  <FormMessage>{errors.address?.message}</FormMessage>
                </FormItem>
              )}
            />
            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Date of Birth
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] h-11 justify-start text-left font-semibold font-raleway text-sm text-input-black",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {date ? format(date, "P") : <span>MM/DD/YYYY</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date ?? undefined}
                        onSelect={(selectedDate) => {
                          if (selectedDate) {
                            setDate(selectedDate);
                            field.onChange(format(selectedDate, "yyyy-MM-dd"));
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage>{errors.dateOfBirth?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row gap-5 my-5">
            <Controller
              name="sex"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Sex
                  </FormLabel>
                  <FormControl>
                    <div className="flex flex-row gap-5">
                      {["Male", "Female"].map((role) => (
                        <label key={role} className="flex items-center gap-3">
                          <input
                            type="radio"
                            value={role}
                            checked={watch("sex") === role}
                            onChange={() => field.onChange(role)}
                            className="hidden"
                          />
                          <span
                            className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                              watch("sex") === role ? "border-green bg-white" : "border-gray-400"
                            }`}
                          >
                            {watch("sex") === role && <span className="w-4 h-4 rounded-full bg-green"></span>}
                          </span>
                          <p className="font-inter font-bold text-base text-black uppercase">
                            {role}
                          </p>
                        </label>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage>{errors.sex?.message}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <div className="flex  mt-10">
            <Button
              type="submit"
              className={`px-[200px] py-8 mx-auto text-white cursor-pointer ${
                isValid
                  ? "bg-green hover:bg-green"
                  : "bg-btn-grey hover:bg-btn-grey"
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

export default StepTwo;
