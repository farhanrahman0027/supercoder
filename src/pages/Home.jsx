import React, { useState } from "react";
import banner from "../assets/images/customer-banner.svg";
import seminar from "../assets/images/edm-04.svg";
import banner1 from "../assets/images/customer-baner-img-bg.svg";
import { Link } from "react-router-dom";
import Profilecard from "../components/Profilecard";
import starbg from "../assets/images/starbg.svg";
import VideoComponent from "../components/videocomponent";
import RemoteDev from "../components/RemoteDev";
import Faq from "../components/Faq";
import manage from "../assets/images/manage-bg.svg";
import Footer from "../components/Footer";
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const profiles = [
    {
      name: "Farhan",
      role: "Full Stack Developer",
      level: "Supercoder level 4",
      description:
        "Farhan is a highly skilled software engineer with 10+ years of experience. He specializes in web and mobile applications, microservices, etc.",
      skills: [
        { name: "React", experience: 8 },
        { name: "ReactNative", experience: 7 },
      ],
      otherSkills: [
        { name: "Node.js", experience: 3 },
        { name: "TypeScript", experience: 2 },
      ],
      totalExperience: 10,
      expectedSalary: "$3,000/month",
    },
    {
      name: "Manoj",
      role: "Backend Developer",
      level: "Supercoder level 3",
      description:
        "Manoj is a backend engineer with 8 years of experience focusing on scalable microservices, APIs, and cloud architecture.",
      skills: [
        { name: "Node.js", experience: 8 },
        { name: "Express.js", experience: 7 },
      ],
      otherSkills: [
        { name: "AWS", experience: 5 },
        { name: "Docker", experience: 4 },
      ],
      totalExperience: 8,
      expectedSalary: "$2,800/month",
    },
    {
      name: "Priya",
      role: "Frontend Developer",
      level: "Supercoder level 5",
      description:
        "Priya is an expert frontend developer with 6+ years of experience in creating interactive and responsive user interfaces.",
      skills: [
        { name: "React", experience: 6 },
        { name: "Vue.js", experience: 5 },
      ],
      otherSkills: [
        { name: "CSS", experience: 6 },
        { name: "JavaScript", experience: 6 },
      ],
      totalExperience: 6,
      expectedSalary: "$2,500/month",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2770&q=80",
  ];

  const itemsToShow = 3; // Number of images to show at a time
  // Handle Prev Button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsToShow : prevIndex - 1
    );
  };

  // Handle Next Button
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - itemsToShow ? 0 : prevIndex + 1
    );
  };
  return (
    <div className=" py-24">
      {/* Header Section */}
      <div className="bg-blue-100 min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[75px] font-libreaskerville leading-tight font-semibold w-full lg:w-3/4">
            Hire top-tier remote Developers
          </h2>
          <p className="font-medium mt-4 text-base sm:text-lg md:text-xl w-full lg:w-3/5">
            Hire top 5% elite software engineers with strong technical and
            communication skills in less than 2 weeks.
          </p>
          <div className="mt-6 max-w-full">
            <div className="flex flex-col sm:flex-row">
              <input
                className="py-2 h-12 border border-blue-500 bg-white w-full sm:w-2/3 lg:w-1/3 rounded-md sm:rounded-l-md sm:rounded-r-none outline-none px-4"
                type="email"
                id="name"
                required
                minLength="4"
                maxLength="50"
                placeholder="Your work email"
              />
              <button className="bg-blue-500 h-12 text-center px-6 py-2 font-semibold text-white mt-2 sm:mt-0 sm:rounded-r-md sm:rounded-l-none rounded-md">
                Hire Now
              </button>
            </div>
            <p className="mt-4 font-normal text-base sm:text-lg text-center sm:text-left">
              Looking for jobs instead?{" "}
              <Link to="/" className="text-blue-600 underline ml-2">
                Apply for Job
              </Link>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            src={banner}
            alt="logo"
          />
        </div>
      </div>

      {/*  */}

      <div className="px-6 sm:px-10 lg:px-20 bg-white min-h-screen py-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mt-10">
          What Supercoder offers?
        </h1>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl text-blue-500 font-semibold">
              Fast Hiring
            </h2>
            <p className="mt-3 text-base sm:text-lg lg:text-xl w-full sm:w-4/5">
              Onboard your new member in less than 2 weeks
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl text-blue-500 font-semibold">
              Quality
            </h2>
            <p className="mt-3 text-base sm:text-lg lg:text-xl w-full sm:w-4/5">
              Only the top 5% of our developers will be matched with you
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl text-blue-500 font-semibold">
              Simple Hiring Process
            </h2>
            <p className="mt-3 text-base sm:text-lg lg:text-xl w-full sm:w-4/5">
              We will handle all the pre-hiring and post-hiring HR tasks for you
            </p>
          </div>
        </div>

        {/* Seminar Banner */}
        <div className="text-white rounded-md mt-20 bg-gradient-to-r from-blue-700 to-blue-400 flex flex-col lg:flex-row items-center justify-between p-6 lg:p-10 gap-8">
          <div className="w-full lg:w-2/3 space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Latest seminar
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-semibold">
              &lt; Microsoft Account Tech Strategist Hyunsoo Kim &gt; Using
              Smart ChatGPT Watch
            </p>
            <Link
              to="/"
              className="underline text-xl sm:text-2xl font-semibold"
            >
              watch
            </Link>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center relative">
            <img
              className="h-40 sm:h-52 md:h-60 lg:h-[250px] z-10 relative"
              src={banner1}
              alt="Seminar Banner 1"
            />
            <img
              className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-28 sm:w-36 md:w-40 lg:w-48"
              src={seminar}
              alt="Seminar Badge"
            />
          </div>
        </div>
      </div>

      {/*network section*/}

      <div className="bg-slate-100 py-16 sm:py-20 px-4 sm:px-10 lg:px-20">
        {/* Heading */}
        <div className="text-center flex justify-center items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-[38px] w-full sm:w-4/5 lg:w-3/5 pb-10 sm:pb-16 font-semibold font-libreaskerville">
            Find top-tier developers in the Supercoder network
          </h1>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <Profilecard key={index} profile={profile} />
          ))}
        </div>
      </div>

      {/*SBS news section*/}
      <div className="py-16 px-4 sm:px-10 lg:px-20">
        {/* Heading */}
        <div className="text-center flex justify-center items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold font-libreaskerville">
            Supercoder on SBS News
          </h1>
        </div>

        {/* Content */}
        <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Video */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/Bie-qAFL8ZA?si=XBXIUd6LvRX8MBDY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl sm:text-2xl font-libreaskerville font-semibold text-blue-500">
              SBS NEWS
            </h1>
            <h3 className="pt-4 font-semibold text-base sm:text-lg">
              SBS News "Why Korean developers? Even big companies have turned
              their attention"
            </h3>
            <p className="pt-4 text-sm sm:text-base">
              "In terms of job performance, foreign developers are not lacking
              either. When I meet startup people, they say that the advantages
              of Southeast Asian developers are not insignificant, considering
              the difficulty of finding people and the need to cut costs, among
              other things." - Journalist Jung Joon-ho.
            </p>
            <p className="pt-4 text-sm sm:text-base">February 20, 2023</p>
            <Link>
              <p className="underline pt-4 text-blue-500 text-sm sm:text-base">
                See more media
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/*stats section*/}

      <div className="px-4 sm:px-10 lg:px-24 py-16 lg:py-20 bg-blue-50">
        {/* Heading */}
        <div className="flex justify-center text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-libreaskerville font-semibold">
            Supercoder keeps you to hire the best talent
          </h1>
        </div>

        {/* Stats Grid */}
        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16"
          style={{
            backgroundImage: `url(${starbg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* Column 1 */}
          <div className="text-center">
            <div className="py-4">
              <h1 className="text-3xl sm:text-4xl font-libreaskerville font-semibold text-blue-500">
                100+
              </h1>
              <p className="text-base sm:text-lg">
                Countries where developers are joining
              </p>
            </div>
            <div className="pt-6 sm:pt-8">
              <h1 className="text-3xl sm:text-4xl font-libreaskerville font-semibold text-blue-500">
                40%
              </h1>
              <p className="text-base sm:text-lg">Remote team expansion</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-center">
            <div className="py-4">
              <h1 className="text-3xl sm:text-4xl font-libreaskerville font-semibold text-blue-500">
                11000+
              </h1>
              <p className="text-base sm:text-lg">Developers vetted</p>
            </div>
            <div className="pt-6 sm:pt-14">
              <h1 className="text-3xl sm:text-4xl font-libreaskerville font-semibold text-blue-500">
                100%
              </h1>
              <p className="text-base sm:text-lg">Client retention rate</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="text-center">
            <div className="py-4">
              <h1 className="text-3xl sm:text-4xl font-libreaskerville font-semibold text-blue-500">
                2
              </h1>
              <p className="text-base sm:text-lg">
                Weeks average time of hiring
              </p>
            </div>
            <div className="pt-6 sm:pt-14">
              <h1 className="text-3xl sm:text-4xl font-libreaskerville font-semibold text-blue-500">
                95%
              </h1>
              <p className="text-base sm:text-lg">Satisfied customers</p>
            </div>
          </div>
        </div>
      </div>

      {/*reveiw section*/}
      <div className="bg-white">
        {/* Top Section */}
        <div className="py-12 sm:py-20 lg:py-24 flex justify-center items-center">
          <div className="text-center w-full px-4 sm:px-10 lg:w-4/5 lg:ml-20">
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-libreaskerville font-semibold">
              What our customers say
            </h1>
            <p className="text-base sm:text-lg lg:text-[24px] font-semibold mt-4">
              Supercoder has helped more than 30+ clients from all around the
              world to hire global software engineers. Here’s what they say
              about us
            </p>
          </div>
        </div>

        {/* Video Component (responsive wrapping assumed inside the component) */}
        <VideoComponent />
      </div>

      {/*hire developers*/}

      <div className="py-12 sm:py-16 lg:py-24 px-6 sm:px-10 lg:px-20 bg-blue-50 mt-10 sm:mt-16 lg:mt-28">
        {/* Title Section */}
        <div className="flex justify-center px-6 sm:px-16 lg:px-28">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-libreaskerville font-semibold text-center">
            How to hire top remote developers through Supercoder?
          </h1>
        </div>

        {/* RemoteDev Component */}
        <div className="w-full mt-8 sm:mt-10 lg:mt-12">
          <RemoteDev />
        </div>

        {/* Button Section */}
        <div className="flex justify-center items-center mt-12 sm:mt-14 lg:mt-16">
          <button className="bg-blue-500 px-10 sm:px-16 lg:px-20 py-2 text-white font-libreaskerville rounded-full border border-blue-100">
            Hire Developers
          </button>
        </div>
      </div>

      {/*faq section*/}

      <div className="bg-white px-20 py-24 ">
        <div>
          <h1 className="text-center font-semibold font-libreaskerville text-3xl mb-10">
            Most Frequently Asked Question ?
          </h1>
          <Faq />
        </div>
      </div>

      {/*  hire and manage developers*/}

      <div className="flex flex-col lg:flex-row mt-16 bg-[#1E2736] w-full">
        {/* Left Column */}
        <div className="flex flex-col ml-6 sm:ml-12 lg:ml-28 py-12 sm:py-16 lg:py-20 gap-4 text-white text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Hire and manage remote developers
          </h1>
          <p className="font-semibold text-lg sm:text-xl lg:text-lg mt-4">
            Tell us the skills you need and we'll find the best developer for
            you in days, not weeks.
          </p>
          <button className="bg-white py-3 text-black font-semibold rounded-full w-52 sm:w-60 lg:w-52 mt-4">
            Hire Developers
          </button>
        </div>

        {/* Right Column (Image) */}
        <div className="flex justify-center items-center ml-6 sm:ml-12 lg:ml-16 py-8 sm:py-12 lg:py-20">
          <img
            src={manage}
            alt="Manage Developers"
            className="max-w-full sm:max-w-lg lg:max-w-full"
          />
        </div>
      </div>

      {/*footer section */}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
