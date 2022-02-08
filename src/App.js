import { useState } from 'react';
import './App.css';

function App() {
  const [showText, setShowText] =  useState(false);

  const changeState = ()=>{
    setTimeout(() => {
      setShowText(true)
    }, 500);
  }
  return (<div className='flex flex-col justify-center items-center'>

      {showText && <div>I am visible I am the text</div>}
      {!showText && <div>click to see the text</div>}

      <button onClick={changeState} className='bg-blue-400 rounded-full w-fit px-5 hover:bg-blue-700'>
        show text
      </button>
  
  </div>);
}

export default App;
