import TextDisplay from "./TextDisplay";

const doMath = (item, idx, isPositive, multiplies) => {
  if (!parseFloat(item)) return 0;
  var calc = (parseFloat(item) * 0.2 * idx * multiplies) / 100;
  return isPositive ? calc + parseFloat(item) : calc - parseFloat(item);
};

function FlexBox(props) {
  const generateCalc = () => {
    let rows = [];
    for (let i = 1; i < 11; i++) {
      rows.push(
        <div className="flex" key={i}>
          <span>{i * props.multiples}%</span>
          <TextDisplay
            header={"h5"}
            className={"bullish"}
            text={doMath(props.ltp, i, true, props.multiples).toFixed(2)}
          ></TextDisplay>
          <span>-{i * props.multiples}%</span>
          <TextDisplay
            header={"h5"}
            className={"bearish"}
            text={doMath(props.ltp, i, false, props.multiples).toFixed(2)}
          ></TextDisplay>
        </div>
      );
    }
    return rows;
  };

  return <div className="flex-container">{generateCalc()}</div>;
}

export default FlexBox;