import { useState , useEffect } from "react";
import DisplayTimeAndDate from "./DisplayTimeAndDate";

const Countdowntimer = ({deadline}) => {
  const deadlineDate = new Date(deadline).getTime();

const currentTime = new Date().getTime()
const [countDown, setCountDown] = useState(deadlineDate - new Date().getTime())
const [Day, setDay] = useState(0)
const [Hour, setHour] = useState(0)
const [Minute, setMinute] = useState(0)
const [seconds, setSeconds] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
      if (countDown > 0) {
          setCountDown(deadlineDate - new Date().getTime())
          setDay(Math.floor(countDown / (1000 * 60 * 60 * 24)))
          setHour(Math.floor(countDown%(1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
          setMinute(Math.floor(countDown%(1000 * 60 * 60) / (1000 * 60)))
          setSeconds(Math.floor(countDown%(1000 * 60) / 1000))
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
          // title="day"  val={Math.floor(countDown / (1000 * 60 * 60 * 24))}
          // />

          title="Day" val={Day}
          />

          <DisplayTimeAndDate 
        //  title="hour"  val={Math.floor(countDown%(1000 * 60 * 60 * 24) / (1000 * 60 * 60))}
        //   />

         title="Hour"  val={Hour}
          />


          <DisplayTimeAndDate
          //    title="minute" val={Math.floor(countDown%(1000 * 60 * 60) / (1000 * 60))}
          // />
              title="Minute" val={Minute}
          />


          <DisplayTimeAndDate
          // title="seconds" val={Math.floor(countDown%(1000 * 60) / 1000)}
          // />
          title="Seconds" val={seconds}
          />
        </div>
      </div>
    </>
  );
};

export default Countdowntimer;
