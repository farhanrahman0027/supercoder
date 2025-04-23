import React from "react";

const remotedev = [
  {
    id: "01",
    description: "Share the skill you look for",
    detail: "We’ll schedule a call and understand your requirements.",
  },
  {
    id: "02",
    description: "We match the best candidate for you",
    detail: "Get a list of pre-vetted candidates within days.",
  },
  {
    id: "03",
    description: "Schedule interviews",
    detail: "Meet and select the developers you like.",
  },

  {
    id: "04",
    description: "Start working with the developer",
    detail: "Start building.",
  },
];

function RemoteDev() {
  return (
    <div className="flex flex-wrap gap-4 w-full justify-center">
      {remotedev.map((item, index) => (
        <div
          key={index}
          className="bg-white gap-4 w-full sm:w-5/12 md:w-3/12 py-4 px-4 rounded-md border border-blue-100"
        >
          <div className="text-4xl text-blue-500 font-semibold font-libreaskerville">
            <h2>{item.id}</h2>
          </div>
          <div className="">
            <p className="font-semibold">{item.description}</p>
            <p className="mt-2 text-[15px]">{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RemoteDev;
