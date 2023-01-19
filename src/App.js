import "./App.css";
import TextDisplay from "./components/TextDisplay";
import Button from "@mui/material/Button";
import { useState } from "react";
import TargetFindingCalculator from "./components/TargetFindingCalculator";
import ProfitFindingCalculator from "./components/ProfitFindingCalculator";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function App() {
  const handleCalcTypeChange = () => {
    const isPercentCalc = calcType === "profit" ? true : false;
    if (isPercentCalc) {
      setCalcType("percent");
    } else {
      setCalcType("profit");
    }
  };
  const [type, setType] = useState(true);
  const marginText = type === true ? "Intraday (Margin)" : "";
  const [calcType, setCalcType] = useState("percent");

  console.log("type", type);
  return (
    <div className="App">
      <header className="App-header">
        <TextDisplay
          className={"bluish"}
          text={"Zerodha " + marginText + " Calculator"}
          header={"h4"}
        ></TextDisplay>
        <div className="divController">
          {calcType === "percent" && (
            <Button variant="contained" onClick={() => setType(!type)}>
              Margin Or Normal
            </Button>
          )}
          <FormControlLabel
            control={<Switch defaultChecked onChange={handleCalcTypeChange} />}
            label="Profit/Percent"
            labelPlacement="start"
          />
        </div>
        {calcType === "percent" ? (
          <TargetFindingCalculator type={type}></TargetFindingCalculator>
        ) : (
          <ProfitFindingCalculator></ProfitFindingCalculator>
        )}
      </header>
    </div>
  );
}

export default App;
