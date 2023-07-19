import MenuNavegacao from "./components/MenuNavegacao";

import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <MenuNavegacao />
      <Outlet />
    </div>
  );
}

export default App;
