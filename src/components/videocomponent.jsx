import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const feedBack = [
  {
    Companyname: "QWERKY",
    name: "CTO Chunwoo Kang",
    feedback:
      "“The first week with Thinh has been great! We have only good things to say about our experiences with him so far. He has been an amazing teammate and exceeded all expectations”.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    video: "https://www.youtube.com/embed/wcG9VubcPcY?si=nXyHwkENflacboRc",
  },
  {
    Companyname: "YP Labs",
    name: "PM Kyunghoon Kim",
    feedback:
      "“Huy is doing really well and has been an extremely valuable member of our team. He’s been really great at getting the tasks done that were assigned to him and is a great communicator”.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    video: "https://www.youtube.com/embed/wcG9VubcPcY?si=nXyHwkENflacboRc",
  },
  {
    Companyname: "Stockeeper",
    name: "CEO Jaehyun Ahn",
    feedback:
      "“Supercoder has brought us very good solutions so far. You can count us as happy customers. We would definitely encourage other companies looking to hire quality engineering talent with Supercoder”.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    video: "https://www.youtube.com/embed/wcG9VubcPcY?si=nXyHwkENflacboRc",
  },
  {
    Companyname: "Stockeeper",
    name: "CEO Jaehyun Ahn",
    feedback:
      "“Supercoder has brought us very good solutions so far. You can count us as happy customers. We would definitely encourage other companies looking to hire quality engineering talent with Supercoder”.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    video: "https://www.youtube.com/embed/wcG9VubcPcY?si=nXyHwkENflacboRc",
  },
];

const VideoComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current starting index

  // Function to handle clicking the next button
  const handleNext = () => {
    if (currentIndex + 3 < feedBack.length) {
      setCurrentIndex(currentIndex + 1); // Move to the next set of divs
    }
  };

  // Function to handle clicking the previous button
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous set of divs
    }
  };

  return (
    <div className="relative w-full px-4 md:px-20">
      <div className="flex gap-4 overflow-hidden">
        {feedBack.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3"
            key={index}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "20px",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <h1>{item.Companyname}</h1>
            <h2>{item.name}</h2>
            <p>{item.feedback}</p>

            <button
              style={{
                padding: "2px 30px",
                backgroundColor: "#007BFF",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <a
                href={item.video}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "white" }}
              >
                Watch Video
              </a>
            </button>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-4 text-4xl rounded-full bg-gray-500 text-white ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === 0}
      >
        <MdNavigateBefore />
      </button>

      <button
        onClick={handleNext}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-4 text-4xl rounded-full bg-gray-500 text-white ${
          currentIndex + 3 >= feedBack.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={currentIndex + 3 >= feedBack.length}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
};

export default VideoComponent;
