import React from 'react';


const SkeletonCard = () => {

  return (

    <div className="animate-pulse flex flex-col items-center justify-around p-6">

      <div className="h-12 w-12 bg-gray-300 rounded-full"></div>

      <div className="h-4 w-48 bg-gray-300 rounded-full mt-4"></div>

      <div className="h-4 w-64 bg-gray-300 rounded-full mt-4"></div>

    </div>

  );

};


export default SkeletonCard;