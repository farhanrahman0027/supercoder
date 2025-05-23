import profileIcon from "../assets/images/developers-icon.svg";

const Profilecard = ({ profile }) => {
  return (
    <div className="border border-black p-6 rounded-lg bg-white">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row gap-8 items-center">
        <img
          src={profileIcon}
          alt={`${profile.name} profile`}
          className="w-16 h-16 sm:w-20 sm:h-20"
        />
        <div className="text-center sm:text-left">
          <h2 className="font-bold text-xl">{profile.name}</h2>
          <p>{profile.role}</p>
          <p className="text-blue-500">{profile.level}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <p className="line-clamp-3">{profile.description}</p>
      </div>

      {/* Verified Skills */}
      <div className="mt-6">
        <p className="mb-2 font-medium">Verified</p>
        <div className="flex flex-wrap gap-4">
          {profile.skills.map((skill, index) => (
            <p
              key={index}
              className="py-1 px-2 bg-blue-800 rounded-md text-white font-normal"
            >
              {skill.name} | {skill.experience} yrs
            </p>
          ))}
        </div>
      </div>

      {/* Other Skills */}
      <div className="mt-6">
        <p className="mb-2 font-medium">Other</p>
        <div className="flex flex-wrap gap-4">
          {profile.otherSkills.map((otherSkill, index) => (
            <p
              key={index}
              className="py-1 px-2 bg-slate-200 rounded-md font-normal"
            >
              {otherSkill.name} | {otherSkill.experience} yrs
            </p>
          ))}
        </div>

        {/* Experience and Salary */}
        <div className="flex flex-col sm:flex-row mt-4 gap-12">
          <div>
            <p className="font-semibold">Experience</p>
            <p>{profile.totalExperience} years</p>
          </div>
          <div>
            <p className="font-semibold">Expected salary</p>
            <p>{profile.expectedSalary}</p>
          </div>
        </div>
      </div>

      {/* Hire Button */}
      <div className="flex mt-6 justify-center items-center">
        <button className="px-4 py-3 bg-blue-500 rounded-full w-full sm:w-3/4 text-white font-semibold">
          Hire me
        </button>
      </div>
    </div>
  );
};

export default Profilecard;
