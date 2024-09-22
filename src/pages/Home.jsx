import React from "react";
import banner from "../assets/images/customer-banner.svg";
import seminar from "../assets/images/edm-04.svg";
import banner1 from "../assets/images/customer-baner-img-bg.svg";
import { Link } from "react-router-dom";
import Profilecard from "../components/Profilecard";
function Home() {
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
  return (
    <div className="">
      {/* Header Section */}
      <div className=" bg-blue-100 h-[100vh]">
        <div className="pt-24 px-20">
          <h2 className="text-[75px] w-3/4 font-libreaskerville leading-tight font-semibold">
            Hire top-tier remote Developers
          </h2>
          <p className="font-semibold w-2/5 mt-4 text-xl">
            Hire top 5% elite software engineers with strong technical and
            communication skills in less than 2 weeks.
          </p>
          <div className="mt-8 mw-100 ">
            <div className="flex">
              <input
                className="py-2 h-10 border-solid border bg-white w-1/3 border-blue-500 rounded-l-md outline-none"
                type="text"
                id="name"
                required
                minlength="4"
                maxlength="50"
                placeholder="Your work email"
              />
              <button className="bg-blue-500 h-10 rounded-r-md text-center px-6 py-2 font-semibold text-white">
                Hire Now
              </button>
            </div>
            <div className="">
              <p className="mt-4 font-normal py-2 px-4 text-xl pl-0">
                Looking for jobs instead?{" "}
                <Link to="/" className="text-blue-600 underline ml-4">
                  Apply for Job
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end -mt-80">
          <img className="" src={banner} alt="logo"></img>
        </div>
      </div>
      {/*  */}

      <div className="px-20 bg-white h-[100vh]">
        <h1 className="text-5xl font-semibold mt-20">
          What Supercoder offers?
        </h1>
        <div className="mt-6 grid grid-cols-3">
          <div className="">
            <h2 className=" text-3xl text-blue-500 font-semibold">
              Fast Hiring
            </h2>
            <p className="w-4/5 mt-4 text-xl ">
              Onboard your new member in less than 2 weeks
            </p>
          </div>
          <div className="">
            <h2 className=" text-3xl text-blue-500 font-semibold">Quality</h2>
            <p className="w-4/5 mt-4 text-xl ">
              Only the top 5% of our developers will be matched with you
            </p>
          </div>
          <div className="">
            <h2 className=" text-3xl text-blue-500 font-semibold">
              Simple Hiring Process
            </h2>
            <p className="w-4/5 mt-4 text-xl ">
              We will handle all the pre-hiring and post-hiring HR tasks for you
            </p>
          </div>
          <div className="bg-blue-500"></div>
        </div>
        <div className="text-white h-40 rounded-md mt-32 bg-gradient-to-r from-blue-700 to-blue-400 flex">
          <div className="flex-row w-5/6 ml-8 mt-6 space-y-3">
            <h2 className="text-2xl font-semibold">Latest seminar</h2>
            <p className="text-[16px] font-semibold ">
              &lt; Microsoft Account Tech Strategist Hyunsoo Kim &gt; Using
              Smart ChatGPT Watch
            </p>
            <Link to="/" className="underline text-3xl font-semibold ">
              watch
            </Link>
          </div>
          <div>
            <div className=" flex flex-col items-center justify-center">
              <img className=" h-[250px] -mt-[80px] " src={banner1}></img>
              <img className=" -mt-64 ml-32" src={seminar}></img>
            </div>
          </div>
        </div>
      </div>

      {/*network section*/}

      <div className="bg-slate-100 py-24 px-20">
        <div className="text-center flex justify-center items-center">
          <h1 className="text-[38px]  w-3/5 pb-16 font-semibold font-libreaskerville ">
            Find top-tier developers in the Supercoder network
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <Profilecard key={index} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
