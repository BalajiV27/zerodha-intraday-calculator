import { useState } from "react";
import DropDownInput from "./DropDownInput";
import FlexBox from "./FlexBox";
import TextBoxInput from "./TextBoxInput";

function TargetFindingCalculator(props) {
  const [multiples, setMultiples] = useState("");
  const [ltp, setLtp] = useState("");

  const TextLog = (val) => {
    setLtp(val);
  };

  const SelectLog = (val) => {
    setMultiples(val);
  };

  return (
    <>
      <div className="userInput">
        <TextBoxInput label={"LTP"} TextLog={TextLog}></TextBoxInput>
        <h6>Multiples of</h6>
        <DropDownInput SelectLog={SelectLog}></DropDownInput>
      </div>
      <FlexBox ltp={ltp} type={props.type} multiples={multiples}></FlexBox>
    </>
  );
}

export default TargetFindingCalculator;
