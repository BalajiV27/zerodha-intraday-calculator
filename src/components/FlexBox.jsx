import TextDisplay from "./TextDisplay";

const doMath = (item, idx, isPositive, multiplies, type) => {
  let typeOperand = type === true ? parseFloat(0.2) : parseFloat(1);
  if (!parseFloat(item)) return 0;
  var calc = (parseFloat(item) * typeOperand * idx * multiplies) / 100;
  return isPositive ? calc + parseFloat(item) : calc - parseFloat(item);
};

function FlexBox(props) {
  const generateCalc = () => {
    let rows = [];
    for (let i = 1; i < 11; i++) {
      rows.push(
        <div className="flex" key={i}>
          <span className="span">{i * props.multiples}%</span>
          <TextDisplay
            header={"h5"}
            className={"bullish"}
            text={doMath(
              props.ltp,
              i,
              true,
              props.multiples,
              props.type
            ).toFixed(2)}
          ></TextDisplay>
          <span className="span">-{i * props.multiples}%</span>
          <TextDisplay
            header={"h5"}
            className={"bearish"}
            text={doMath(
              props.ltp,
              i,
              false,
              props.multiples,
              props.type
            ).toFixed(2)}
          ></TextDisplay>
        </div>
      );
    }
    return rows;
  };

  return <div className="flex-container">{generateCalc()}</div>;
}

export default FlexBox;
