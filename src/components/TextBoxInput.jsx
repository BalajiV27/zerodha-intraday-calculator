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
        type="number"
        id="outlined-basic"
        label={props.label}
        value={ltp}
        variant="outlined"
        onChange={updateValue}
      />
    </div>
  );
}

export default TextBoxInput;
