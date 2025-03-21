/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ChevronsUpDown, Plus } from "lucide-react";
import LocationMap from "../../LocationMap";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { StepThreeData } from "@/app/layouts/auth/farmer/type";

const formSchema = z.object({
  land_size: z.coerce.number().min(1, { message: "Land size is required" }),
  ownership_type: z.string().min(1, { message: "Ownership type is required" }),
  produce: z.string().min(1, { message: "Produce is required" }),
  location: z.string(),
});

interface StepThreeProps {
  nextStep: () => void;
}

const numbers = Array.from({ length: 100 }, (_, i) => ({
  value: i + 1,
  label: i + 1,
}));

const StepThree: React.FC<StepThreeProps> = ({ nextStep }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [livestockList, setLivestockList] = React.useState<string[]>([]);
  const [cropList, setCropList] = React.useState<string[]>([]);
  const [storageList, setStorageList] = React.useState<string[]>([]);
  const [equipmentList, setEquipmentList] = React.useState<string[]>([]);

  const defaultStepThree = StepThree || {
    land_size: "",
    ownership_type: "",
    produce: "",
    crops: [],
    livestock: [],
    storage: [],
    equipment: [],
    location: "",
  };

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      land_size: 0,
      ownership_type: "",
      produce: "",
      crops: [],
      livestock: [],
      storage: [],
      equipment: [],
      location: "",
    },
    mode: "onChange",
  });

  const isFormValid =
    cropList.length > 0 &&
    livestockList.length > 0 &&
    storageList.length > 0 &&
    equipmentList.length > 0;

  const onSubmit = (data: StepThreeData) => {
    if (cropList.length === 0) {
      toast("At least one crop is required.");
      return;
    }
    if (livestockList.length === 0) {
      toast("At least one livestock is required");
      return;
    }
    if (storageList.length === 0) {
      toast("At least one storage is required");
      return;
    }
    if (equipmentList.length === 0) {
      toast("At least one equipment is required");
      return;
    }

    console.log("Form Data Submitted:", {
      ...data,
      crops: cropList,
      livestock: livestockList,
      storage: storageList,
      equipment: equipmentList,
    });

    nextStep();
  };

  return (
    <div className="flex flex-col gap-2 px-10 py-4">
      <h4 className="font-quicksand font-bold text-4xl text-left text-[#01190F] ">
        Farm Details
      </h4>

      <Form
        {...{
          ...useForm<z.infer<typeof formSchema>>({
            // resolver: zodResolver(formSchema),
            defaultValues: {
              land_size: 0,
              ownership_type: "",
              produce: "",
              location: "",
            },
            mode: "onChange",
          }),
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="my-3 flex flex-col">
          <div className="flex flex-row gap-5">
            <Controller
              name="land_size"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Land Size
                  </FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[180px] h-11 justify-between pl-0.5"
                      >
                        <span className="flex gap-2 items-center p-1 rounded-md bg-[#F1F1F1] w-[70px] h-10 font-instrument font-normal text-sm text-black">
                          Acres
                          <ChevronsUpDown className="opacity-50" />
                        </span>
                        {field.value
                          ? numbers.find(
                              (number) =>
                                number.value.toString() ===
                                field.value.toString()
                            )?.label
                          : "0"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[180px] p-0">
                      <Command>
                        <CommandList>
                          <CommandGroup>
                            {numbers.map((number) => (
                              <CommandItem
                                key={number.value}
                                value={number.value.toString()}
                                onSelect={(currentValue) => {
                                  const selectedNumber = numbers.find(
                                    (num) =>
                                      num.value.toString() === currentValue
                                  );
                                  field.onChange(
                                    selectedNumber
                                      ? selectedNumber.value.toString()
                                      : ""
                                  );
                                  setOpen(false);
                                }}
                              >
                                {number.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <Controller
              name="ownership_type"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Type of Ownership
                  </FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                    >
                      <SelectTrigger className="w-[220px] h-11 font-semibold font-raleway text-sm text-input-black">
                        <SelectValue
                          placeholder="Select type of ownership"
                          className="font-instrument font-normal text-sm placeholde:text-placeholder-grey"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="individual">
                            Individual Ownership
                          </SelectItem>
                          <SelectItem value="cooperative">
                            Cooperative
                          </SelectItem>
                          <SelectItem value="company">Company</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex flex-col gap-2 font-quicksand font-normal text-base text-text-black">
              <p>Select the type of produce your farm specializes in</p>
              <Controller
                name="produce"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    defaultValue="both"
                    className="flex flex-row gap-4"
                    onValueChange={field.onChange}
                    // defaultValue={field.value}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="livestock" id="r1" />
                      <Label htmlFor="r1">Livestock</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="crop" id="r2" />
                      <Label htmlFor="r2">Crop</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="r3" />
                      <Label htmlFor="r3">Both</Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between my-3">
            <Controller
              name="crops"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-row gap-1 font-raleway font-bold text-sm text-text-black uppercase">
                    Crops Grown
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        className="absolute w-[320px] h-11 rounded-md border border-input-grey placeholder:text-placeholder-grey placeholder:font-instrument placeholder:font-normal placeholder:text-sm"
                        placeholder="Enter the type of crop grown"
                      />
                      <Button
                        variant="ghost"
                        className="absolute left-[290px] right-0 top-1"
                        type="button"
                        onClick={() => {
                          if (
                            typeof field.value === "string" 
                          ) {
                            setCropList([...cropList, field.value]);
                            field.onChange("");
                          }
                        }}
                      >
                        <Plus size={24} />
                      </Button>
                    </div>
                  </FormControl>
                  {/* Display the list of crops grown */}
                  <ul className="mt-12 flex flex-row gap-2">
                    {cropList.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#D9F3E8] py-1.5 px-4 rounded-3xl text-sm font-quicksand font-medium text-black flex items-center gap-2"
                      >
                        {item}
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700"
                          onClick={() =>
                            setCropList(cropList.filter((_, i) => i !== index))
                          }
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                </FormItem>
              )}
            />

            <Controller
              name="livestock"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Livestock
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        className="w-[320px] h-11 rounded-md border border-input-grey placeholder:text-placeholder-grey placeholder:font-instrument placeholder:font-normal placeholder:text-sm"
                        placeholder="List Livestock type"
                      />
                      <Button
                        variant="ghost"
                        className="absolute left-[290px] right-1 top-1"
                        type="button"
                        onClick={() => {
                          if (
                            typeof field.value === "string" 
                          ) {
                            setLivestockList([...livestockList, field.value]);
                            field.onChange("");
                          }
                        }}
                      >
                        <Plus size={24} />
                      </Button>
                    </div>
                  </FormControl>
                  <ul className="mt-2 flex flex-row gap-2">
                    {livestockList.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#D9F3E8] py-1.5 px-4 rounded-3xl text-sm font-quicksand font-medium text-black flex items-center gap-2"
                      >
                        {item}
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700"
                          onClick={() =>
                            setLivestockList(
                              livestockList.filter((_, i) => i !== index)
                            )
                          }
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-row justify-between mb-3">
            <Controller
              name="storage"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex flex-row gap-1 font-raleway font-bold text-sm text-text-black uppercase">
                    Storage Facilities
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        className="absolute w-[320px] h-11 rounded-md border border-input-grey placeholder:text-placeholder-grey placeholder:font-instrument placeholder:font-normal placeholder:text-sm"
                        placeholder="List of storage facilities"
                      />
                      <Button
                        variant="ghost"
                        className="absolute left-[290px] right-0 top-1"
                        type="button"
                        onClick={() => {
                          if (
                            typeof field.value === "string"
                          ) {
                            setStorageList([...storageList, field.value]);
                            field.onChange("");
                          }
                        }}
                      >
                        <Plus size={24} />
                      </Button>
                    </div>
                  </FormControl>
                  {/* Display the list of storage */}
                  <ul className="mt-12 flex flex-row gap-2">
                    {storageList.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#D9F3E8] py-1.5 px-4 rounded-3xl text-sm font-quicksand font-medium text-black flex items-center gap-2"
                      >
                        {item}
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700"
                          onClick={() =>
                            setStorageList(
                              storageList.filter((_, i) => i !== index)
                            )
                          }
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                </FormItem>
              )}
            />

            <Controller
              name="equipment"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-raleway font-bold text-sm text-text-black uppercase">
                    Equipment Ownership
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        className="w-[320px] h-11 rounded-md border border-input-grey placeholder:text-placeholder-grey placeholder:font-instrument placeholder:font-normal placeholder:text-sm"
                        placeholder="List of owned equipment"
                      />
                      <Button
                        variant="ghost"
                        className="absolute left-[290px] right-1 top-1"
                        type="button"
                        onClick={() => {
                          if (
                            typeof field.value === "string" 
                          ) {
                            setEquipmentList([...equipmentList, field.value]);
                            field.onChange("");
                          }
                        }}
                      >
                        <Plus size={24} />
                      </Button>
                    </div>
                  </FormControl>
                  <ul className="mt-2 flex flex-row gap-2">
                    {equipmentList.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#D9F3E8] py-1.5 px-4 rounded-3xl text-sm font-quicksand font-medium text-black flex items-center gap-2"
                      >
                        {item}
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700"
                          onClick={() =>
                            setEquipmentList(
                              equipmentList.filter((_, i) => i !== index)
                            )
                          }
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                </FormItem>
              )}
            />
          </div>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <LocationMap
                selectedLocation={field.value}
                onLocationChange={(newLocation) => field.onChange(newLocation)}
              />
            )}
          />
          <div className="flex items-center mt-80">
            <Button
              type="submit"
              className={`px-[200px] py-8 mx-auto text-white cursor-pointer ${
                isFormValid
                  ? "bg-green hover:bg-green"
                  : "bg-btn-grey hover:bg-btn-grey"
              }`}
              disabled={!isFormValid}
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default StepThree;
