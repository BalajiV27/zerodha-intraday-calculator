import TextDisplay from "./TextDisplay";

const doMath = (item,idx, isPositive, multiplies) =>{
    if(!parseInt(item))
        return 0;
    console.log(item,'test');
    var calc = (parseInt(item)*0.2*idx*multiplies)/100;
    return isPositive ? calc + parseInt(item) : calc - parseInt(item)
}


function FlexBox(props){
const generateCalc = ()=>{
    let rows = [];
    for (let i = 1; i < 11; i++) {
      rows.push(<div className="flex" key={i}>
        <span>{i*props.multiples}%</span><TextDisplay key={i} header={'h5'} className={'bullish'} text={doMath(props.ltp,i,true, props.multiples)}></TextDisplay>
        <span>-{i*props.multiples}%</span><TextDisplay header={'h5'} className={'bearish'} text={doMath(props.ltp,i,false, props.multiples)}></TextDisplay>
      </div>);
    }
    return rows;
};

    return (<div className="flex-container">
   {generateCalc(props.ltp)} 
  </div>)
}

export default FlexBox;