import React from "react";
import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = 5;

  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (index < fullStars) {
      return <Star key={index} color="#F2C94C" size={16} fill="#F2C94C" />;
    } else if (index === fullStars && hasHalfStar) {
      return <StarHalf key={index} color="#F2C94C" size={16} fill="#F2C94C" />;
    } else {
      return <Star key={index} color="gray" size={16} />;
    }
  });

  return (
    <div className="flex gap-1 items-center">
      {stars} <span className="text-[8px]">{rating}</span>
    </div>
  );
};

export default Rating;
