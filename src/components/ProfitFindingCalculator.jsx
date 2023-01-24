import { useEffect, useState } from "react";
import TextBoxInput from "./TextBoxInput";
import TextDisplay from "./TextDisplay";

function ProfitFindingCalculator(props) {
  const [ltp, setLtp] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [profit, setProfit] = useState("");
  const [profitPercent,setProfitPercent] = useState("");
  const TextLog = (val) => {
    setLtp(val);
  };
  const LotSizeLog = (val) => {
    setLotSize(val);
  };

  const SellPriceLog = (val) => {
    setSellPrice(val);
  };

  useEffect(() => {
    setProfit(sellPrice * lotSize - ltp * lotSize);
    setProfitPercent((((sellPrice-ltp)/100)*100).toFixed(2))
  }, [sellPrice, lotSize, ltp, props]);

  return (
    <div class="full">
      <div className="profitUserInput">
        <TextBoxInput label={"LTP"} TextLog={TextLog}></TextBoxInput>
        <TextBoxInput label={"Quantity"} TextLog={LotSizeLog}></TextBoxInput>
        <TextBoxInput label={"Target"} TextLog={SellPriceLog}></TextBoxInput>
      </div>
      <TextDisplay
        header={"h3"}
        className={profit > 0 ? "bullish" : "bearish"}
        text={profit > 0 ? `Profit : ${profit}` : `Loss : ${profit}`}
      ></TextDisplay>
      <TextDisplay
        header={"h4"}
        className={profit > 0 ? "bullish" : "bearish"}
        text={profit > 0 ? `Percent : ${profitPercent}%` : `Percent : ${profitPercent}%` }
      ></TextDisplay>
    </div>
  );
}
export default ProfitFindingCalculator;
