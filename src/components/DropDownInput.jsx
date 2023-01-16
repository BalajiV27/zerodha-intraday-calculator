import { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'

function TextBoxInput(props){

    const [multiples,setMultiples] = useState(1);
    useEffect(() => {
        props.SelectLog(multiples);
},[multiples, props]);

const updateValue = (event) =>{
    setMultiples(event.target.value);
}

    return (<div className="select">
<Select defaultValue={1} labelId="demo-simple-select-label" name="multiples" id="multiples" label="Multiples Of" onChange={e => updateValue(e)}>
  <MenuItem value="1">1%</MenuItem>
  <MenuItem value="2">2%</MenuItem>
  <MenuItem value="3">3%</MenuItem>
  <MenuItem value="5">5%</MenuItem>
  <MenuItem value="10">10%</MenuItem>
  <MenuItem value="20">20%</MenuItem>
</Select>
    </div>)
}

export default TextBoxInput;