import React from "react";
import Star from "../star";

function Review({data}) {
  return (
    <>
      {console.log(data)}
      <div className="testimonial-card bg-white rounded-lg p-5 w-72 shadow-lg relative text-left">
        <div className="client-photo absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={data.image}
            alt=""
            className="object-cover w-full h-full rounded"
          />
        </div>
        <div className="client-review mt-16 text-center">
          <h4 className="text-lg font-bold">{data.name}</h4>
          <p className="review-date text-gray-500 text-xs">12/23/5677</p>
          <div className="flex justify-center my-2">
            <Star rating={data.star} />
          </div>
          <p>{data.text}</p>
        </div>
      </div>
    </>
  );
}

export default Review;
