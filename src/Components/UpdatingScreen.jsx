import { useState } from "react";

function UpdateScreen() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>Update the screen</h3>
      <button onClick={handleClick}>Number of presses: {count}</button>
    </div>
  );
}

export default UpdateScreen;
