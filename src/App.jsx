
import { useState } from 'react'
import './App.css'
import Allcards from './Component/Allcards'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Selectedcard from './Component/Selectedcard'
import Tab from './Component/Tab'

const dataset = async () => {
  let call = await fetch("/models.json");
  return call.json();
}
let data = dataset()  

function App() {
  const [active, setActive] = useState('Model'); 
  const [card, setCard] = useState([]) 
  console.log(card);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Tab setActive={setActive} active={active}></Tab>
      {active === 'Model' && (
        <Allcards data={data} card={card} setCard={setCard}></Allcards>
      )}
      {active === 'Cards' && (
        <Selectedcard card={card} setCard={setCard}></Selectedcard>
      )}
      <Footer></Footer>
    </>
  );
}

export default App
