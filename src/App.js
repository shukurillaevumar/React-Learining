import "./App.css";
import ConditionalRendering from "./Components/ConditionalRendering";
import Footer from "./Components/Footer";
import Image from "./Components/Image";
import RenderingLists from "./Components/RenderingLists";
import RespondingEvents from "./Components/RespondingEvents";
import UpdateScreenTogether from "./Components/UpdateScreenTogether";
import UpdateScreen from "./Components/UpdatingScreen";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my App</h1>
      <Image />
      <ConditionalRendering />
      <RenderingLists />
      <RespondingEvents />
      <UpdateScreen />
      <UpdateScreenTogether />
      <Footer />
    </div>
  );
}

export default App;
