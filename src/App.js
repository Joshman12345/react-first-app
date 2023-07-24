
import { useState } from 'react';
import SkillLevelDisplay from './components/SkillLevelDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card';

export const App = () => {
  const [show , setShow] = useState('false')
  const handleToggleShow = () => {
    setShow (!show)
  }
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

   <div className='mt-3'>
   <div>day: 5</div>
   <div>hours: 15</div>
   <div>minute: 45</div>
   <div>seconds: 20</div>
   </div>
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



