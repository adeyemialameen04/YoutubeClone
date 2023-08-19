import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RoutesManager from "./components/RoutesManager";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesManager />
    </BrowserRouter>
  );
}

export default App;
