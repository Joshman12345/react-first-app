import { useState } from "react";

const SkillLevelDisplay = () => {
  const [skillLevel, setSkillLevel] = useState(0);
  const handleIncreaseval = () => {
    if (skillLevel < 10) {
      setSkillLevel(skillLevel + 1);
    }
  };
  const handleDecreaseval = () => {
    if (skillLevel > 0) {
      setSkillLevel(skillLevel - 1);
    }
  };
  const handleResetval = () => {
    setSkillLevel(0);
  };

  return (
    <>
      <div className="ms-3 mt-3">
        <h6>react skill(0-10)</h6>
        <h1>{skillLevel}</h1>
        <button onClick={handleIncreaseval}>ADD</button>
        <button onClick={handleDecreaseval}>SUBTRACT</button>
        <button onClick={handleResetval}>reset</button>
      </div>
    </>
  );
};

export default SkillLevelDisplay;

//  const [skillLevel,setSkillLevel] = useState(0)
//  const handleIncreaseval = () => {
//   if (skillLevel < 10) {
//     setSkillLevel(skillLevel + 1)
//   }
//  }
//  const handleDecreaseval = () => {
//   if (skillLevel > 0) {
//     setSkillLevel(skillLevel - 1)
//   }}
//   const handleResetval = () => {
//      setSkillLevel(0)

// return(
// <>
// <h6>react skill(0-10)</h6>
// <h1>{skillLevel}</h1>
// <button onClick={handleIncreaseval}>+</button>
// <button onClick={handleDecreaseval}>-</button>
// <button onClick={handleResetval}>reset</button>
// </>

// )
