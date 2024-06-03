function RespondingEvents() {
  function handleClick() {
    alert("You clicked the button");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Respond to the event</h3>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default RespondingEvents;
