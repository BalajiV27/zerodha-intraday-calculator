import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

function TextBoxInput({ TextLog }) {
  const [ltp, setLtp] = useState("");
  useEffect(() => {
    TextLog(ltp);
  }, [ltp]);

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
        onChange={updateValue}
      />
    </div>
  );
}

export default TextBoxInput;