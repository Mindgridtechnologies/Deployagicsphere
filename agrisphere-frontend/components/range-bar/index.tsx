import React, { useState } from "react";

interface ProgressBarProps {
  initialProgress?: number; // Optional prop to set initial progress value
}

const RangeBar: React.FC<ProgressBarProps> = ({ initialProgress = 50 }) => {
  // State to track the progress value (default is 50%)
  const [progress, setProgress] = useState<number>(initialProgress);

  // Handler for the slider value change
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(event.target.value));
  };

  return (
    <div className="relative space-y-4">
      {/* Curved Progress Bar */}
      <div className="relative w-[255px] h-6 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer z-10"
      />

      <div className="absolute w-full top-1/2 left-0 z-10">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSliderChange}
          className="range-slider"
        />
      </div>

      <style jsx>{`
        .range-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          background: transparent; /* Transparent background */
          border-radius: 50px;
          outline: none;
          cursor: pointer;
          position: absolute;
          top: 50%;
          left: 0;
          z-index: 10;
          transform: translateY(-50%); /* To center the slider */
        }

        .range-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 6px;
          background: transparent;
        }

        .range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #0a8d56; /* Green thumb */
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid white; /* Thumb border for better visibility */
        }

        .range-slider::-moz-range-track {
          width: 100%;
          height: 6px;
          background: transparent;
        }

        .range-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #0a8d56; /* Green thumb */
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid white; /* Thumb border for better visibility */
        }

        .range-slider:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default RangeBar;
