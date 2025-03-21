import React from "react";
import { Suspense } from "react";
import Image from "next/image";
import MultiStepForm from "./layouts/auth/farmer/components/Form/MultiStepForm";

const page = () => {
  return (
    <Suspense>
      <div className="flex flex-row h-dvh">
        <div className="flex flex-col gap-4 bg-linear-[177.08deg,#14C47A_2.42%,#17BA75_40.93%,#0A8D56_98.5%] w-[40%] px-6 py-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <Image
                src="/icons/logo.svg"
                alt="Agrisphere Logo"
                width={29}
                height={35}
                className="w-auto h-auto"
              />
              <h3 className="font-medium text-white text-3xl font-livvic">
                Agrisphere
              </h3>
            </div>
            <p className="font-inter font-medium text-sm text-[#1D1919]">
              Empowering Farmers, Strengthening Ecosystems.
            </p>
          </div>
          <div className="relative rounded-4xl">
            <Image
              src="/login-image.png"
              className="mx-auto w-auto h-[500px]"
              alt="agrisphere"
              width={543}
              height={100}
              priority
            />
            <div className="absolute left-3 right-0 bottom-2 flex flex-col justify-center bg-linear-[179.98deg,rgba(22,22,22,0) 0.02%,rgba(0,0,0,0.42) 106.77%] p-6">
              <h4 className="font-helvetica font-bold text-[40px] text-white">
                Amara Eberechi
              </h4>
              <p className="font-montreal text-[#DCDCDC] font-normal text-xl">
                Poultry Farmer from Onicha-olona in Delta State
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <Image
              src="/icons/left-quote.svg"
              alt="left-quote"
              width={50}
              height={50}
              className="top-0"
            />
            <p className="font-quicksand text-white font-normal text-base">
              Before joining this platform, I struggled to find affordable feed
              suppliers and reliable buyers for my eggs. Now, I can compare feed
              prices in real-time and sell directly to processors at fair rates.
              The advisory alerts saved my flock during a disease outbreak too!
              My income has doubled in six months.
            </p>
            <Image
              src="/icons/left-quote.svg"
              alt="left-quote"
              width={50}
              height={50}
              className="bottom-0"
            />
          </div>
        </div>

        <div className="w-[60%]">
          <MultiStepForm />
        </div>
      </div>
    </Suspense>
  );
};

export default page;
