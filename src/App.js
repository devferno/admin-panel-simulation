import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes></Routes>
      <SideBar />
    </>
  );
}

export default App;
