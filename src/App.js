
import './App.css';
import TextDisplay from './components/TextDisplay';
import TextBoxInput from './components/TextBoxInput';
import FlexBox from './components/FlexBox';
import DropDownInput from './components/DropDownInput';
import { useState } from 'react';

function App() {
  const TextLog = (val)=>{
    setLtp(val);
  }

  const SelectLog = (val)=>{
    setMultiples(val);
  }

  const [multiples,setMultiples] = useState("");
  const [ltp,setLtp] = useState("");
 
  return (
    
    <div className="App">
      <header className="App-header">
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <TextDisplay className={'bluish'} text="Zerodha Intraday(margin) Calculator" header={'h4'}></TextDisplay>
    <div className="userInput">      <TextBoxInput TextLog={TextLog}></TextBoxInput>
          <h6>Multiples of</h6><DropDownInput SelectLog={SelectLog} ></DropDownInput></div>
          <FlexBox ltp={ltp} multiples={multiples} ></FlexBox>
        
      </header>
    </div>
  );
}

export default App;
