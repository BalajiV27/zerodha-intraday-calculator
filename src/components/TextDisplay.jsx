function TextDisplay(props) {
  return (
    <div className={props.className}>
      <props.header>{props.text}</props.header>
    </div>
  );
}

export default TextDisplay;
