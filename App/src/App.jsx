
import Aboutclass from './Components/Aboutclass';
import Count from './Components/Count';

export default function App() {
   let fname = "Saroj";
   let age = 21;
  return (
    <div>
      <h1>Destniny</h1>
      <Aboutclass name = {fname} age = {age}/>
      <Count />
      <h4>Thankyou</h4>
    </div>
  )
}
