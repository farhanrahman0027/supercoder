import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    Q: "What Is The Supercoder Global Tech HR Platform?",
    ans: "Supercoder’s Tech HR Platform allows you to find pre-vetted remote software engineers from all around the world. We help you get matched with the perfect developer based on the role, tech stack, and seniority. We take care of all the pre-hire tasks such as sourcing, vetting, and recommending a good candidate. Additionally, we provide post-hire services such as HR/Payment compliance, and monthly performance reviews to ensure quality."
  },
  {
    Q: "How Is Supercoder Different From Other Hiring And Remote HR Platforms?",
    ans: "There are three key differentiators for Supercoder. First, we focus on the Asian market, and we are the only Tech HR Platform provider in the region, ensuring access to the best developers with excellent skills and work ethics. Second, we provide a part-time PM (Product Management) service for clients unfamiliar with the remote working environment, helping to ensure a smooth transition. Lastly, our fee is more reasonable compared to other platforms in developed countries."
  },
  {
    Q: "Can Supercoder Help Build A Remote Development Team?",
    ans: "Yes, Supercoder can build a remote development team for you based on your requirements, leveraging our global pool of developers."
  },
  {
    Q: "Why Should I Hire Remote Developers From Supercoder?",
    ans: "You should hire with Supercoder because you'll have access to top-tier remote engineers from the global market at a reasonable price. Only 5% of candidates pass our vetting process, ensuring that they possess proven tech and communication skills. Additionally, our service fee is more competitive than other Tech HR Platforms."
  },
  {
    Q: "What Is The Process To Hire A Developer Through Supercoder?",
    ans: "You sign up for the Supercoder platform, post your job description, and developers will apply for your position. You evaluate their work experience, review their coding test results, and schedule a final interview. After the interview, you can hire a developer with just a click."
  },
  {
    Q: "Is There A Probation Period?",
    ans: "Yes, Supercoder provides a 1-month probation period. If you're dissatisfied with your hire within the first month, Supercoder refunds 80% of the matching fee. Plus, we will recommend 10 other candidates for you to interview over the next 6 months, with the matching fee waived if you hire from these candidates."
  },
  {
    Q: "What Is The Price Of Hiring Supercoder Engineers?",
    ans: "Typically, the salary for hiring a Supercoder developer ranges from USD $2,500 to USD $5,000 per month, depending on their experience and communication level. Supercoder’s service fee is separate."
  },
  {
    Q: "Do All Supercoder Engineers Speak Good English?",
    ans: "Yes, Supercoder evaluates every developer’s English communication skills. Most of our developers speak at least two languages, so if you're looking for a bilingual developer, Supercoder is an excellent place to find talent."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="grid grid-cols-1 w-10/12 mx-auto justify-between items-center">
      {faqData.map((item, index) => (
        <div key={index} className="bg-blue-100 border rounded-md p-4 mb-4 font-libreaskerville">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => handleToggle(index)}
          >
            <h1 className="font-medium text-lg">{item.Q}</h1>
            <span className="text-3xl">{openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </button>
          {openIndex === index && (
            <p className="mt-2 text-gray-800 border-t-2 border-black p-4">{item.ans}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
