
import { useState } from 'react';
import SkillLevelDisplay from './components/SkillLevelDisplay';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card, {SampleText}from './components/Card';
import Countdowntimer from './components/UI/Countdowntimer';
export const App = () => {
  const [show , setShow] = useState('false')
  const handleToggleShow = () => {
    setShow (!show)
  }

// 4days deadline----------------------------
const FOUR_DAYS_IN_MILLISECONDS = 4 * 24 * 60 * 60 * 1000;
const CURRENT_TIME_IN_MILLISECONDS = new Date().getTime();
// const startCountdownFromHere = FOUR_DAYS_IN_MILLISECONDS + CURRENT_TIME_IN_MILLISECONDS
const startCountdownFromHere = 1690898906822;
return(
  <>
  <SkillLevelDisplay />
 
  <Card title = "Card 1" 
  imageUrl = "image 1"
  color = "green"
  toggleTitle ={handleToggleShow}
  showText = {show} 
  bgColor="black"/>

  <Card title = "Card 2" 
  imageUrl = "image 2"
  color="red"
  toggleTitle ={handleToggleShow}
  showText = {show}
  bgColor="black"/>

  <Card title = "Card 3" 
  imageUrl = "image 3"
  color = "blue"
  toggleTitle ={handleToggleShow}
  showText = {show}
  bgColor="black"/>
  
  <Countdowntimer  deadline={startCountdownFromHere}/>
   

   
   {/* <div className='mt-3'>
   <div>
    Card 1
  image 1
   </div>
   <div>
     Card 2
     image 2
     </div>
   <div>
     Card 3
     image 3
     </div>
   </div> */}
  </>
  
) 
}
  
 
export default App;



