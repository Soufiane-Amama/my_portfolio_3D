// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc"; // الحاوية 
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");


import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc"; // الحاوية 
import { technologies } from "../constants";

const Tech = () => {
  const icons = Object.values(technologies).map((technology) => technology.icon);
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <div className='w-full h-[75vh] mx-auto'>
          <BallCanvas icons={icons} />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");