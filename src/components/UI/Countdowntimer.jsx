import { useState , useEffect } from "react";
import DisplayTimeAndDate from "./DisplayTimeAndDate";

const Countdowntimer = ({deadline}) => {
  const deadlineDate = new Date(deadline).getTime();

const currentTime = new Date().getTime()
const [countDown, setCountDown] = useState(deadlineDate - new Date().getTime())

useEffect(() => {
  const timer = setInterval(() => {
      if (countDown > 0) {
          setCountDown(deadlineDate - new Date().getTime())
      }
    }, 1000) 
    // console.log(countDown / 1000)
  return () => {
      clearInterval(timer);
    }
},[countDown])
   

  return (
    <>
      <div className="container myContainer mt-5">
        <div className="row">
          {console.log(countDown % (1000 * 60))}
          <DisplayTimeAndDate
          title="day"  val={Math.floor(countDown / (1000 * 60 * 60 * 24))}
          />
          <DisplayTimeAndDate 
         title="hour"  val={Math.floor(countDown%(1000 * 60 * 60 * 24) / (1000 * 60 * 60))}
          />
          <DisplayTimeAndDate
             title="minute" val={Math.floor(countDown%(1000 * 60 * 60) / (1000 * 60))}
          />
          <DisplayTimeAndDate
          title="seconds" val={Math.floor(countDown%(1000 * 60) / 1000)}
          />
        </div>
      </div>
    </>
  );
};

export default Countdowntimer;
