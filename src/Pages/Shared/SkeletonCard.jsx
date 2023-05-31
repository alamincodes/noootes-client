import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonCard = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((card, i) => (
      <div key={i} className="p-2">
        <div className="relative">
          <Skeleton baseColor="#202020" highlightColor="#444" height={120} />
          <div className="absolute w-full bottom-2 px-2">
          <Skeleton baseColor="#0F1114"  count={1} />
        </div>
        </div>
        
      </div>
    ));
};

export default SkeletonCard;
