import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function TextBoxInput(props) {
  const [ltp, setLtp] = useState("");
  useEffect(() => {
    props.TextLog(ltp);
  }, [ltp, props]);

  const updateValue = (event) => {
    setLtp(event.target.value);
  };

  return (
    <div className="textField">
      <TextField
        id="outlined-basic"
        label="LTP"
        value={ltp}
        variant="outlined"
        onChange={(e) => updateValue(e)}
      />
      {/* <input type="text" name="name" value={ltp} onChange={e => updateValue(e)} /> */}
    </div>
  );
}

export default TextBoxInput;
