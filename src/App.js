import "./App.css";
import Home from "./Home";
import TabsRender from "./Tabs";
import Tabs from "./Tabs";
require("dotenv").config();

function App() {
  return (
    <div className="h-screen">
      <TabsRender />
      <Home />
    </div>
  );
}

export default App;
