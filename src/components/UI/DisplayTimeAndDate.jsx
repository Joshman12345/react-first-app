import {useEffect , useState } from 'react' ;



const DisplayTimeAndDate = ({title, val}) => {
    const [space, setSpace] = useState(1)
  const [countDown, setCountDown] = useState(60)
   
  useEffect(() => {
        const timer = setInterval(() => {
            if (countDown > 0) {
                setCountDown(countDown - 1)
            }
        }, 1000) 
        return () => {
            clearInterval(timer);
        }
    },[countDown])

  return (
    <div className="col-md-3 text-center">
      <h1>{countDown}</h1 >
      <div className="h1 text-primary">{val}</div>
      <div className="fw-bold">
        <i>{title}</i>
      </div>
    </div>
  );
};
export default DisplayTimeAndDate;
