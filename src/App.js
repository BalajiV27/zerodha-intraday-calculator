
import './App.css';
import TextDisplay from './components/TextDisplay';
import TextBoxInput from './components/TextBoxInput';
import FlexBox from './components/FlexBox';
import DropDownInput from './components/DropDownInput';
import Button from '@mui/material/Button';
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
  const [type,setType] = useState(true);
  const marginText = type===true? 'Intraday (Margin)':'';
 console.log('type', type)
  return (
    
    <div className="App">
      <header className="App-header">
       <TextDisplay className={'bluish'} text={"Zerodha "+marginText+" Calculator"} header={'h4'}></TextDisplay><Button  variant="contained" onClick={()=>setType(!type)}>Click to change calculator</Button>
    <div className="userInput">      <TextBoxInput TextLog={TextLog}></TextBoxInput>
          <h6>Multiples of</h6><DropDownInput SelectLog={SelectLog} ></DropDownInput></div>
          <FlexBox ltp={ltp} type={type} multiples={multiples} ></FlexBox>
        
      </header>
    </div>
  );
}

export default App;
