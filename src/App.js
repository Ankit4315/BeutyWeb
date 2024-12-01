// import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Loginpage from "./components/Loginpage/Loginpage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="app-container"> */}
      <Navbar />
      {/* <main className="main-content"> */}
      <Routes>
        <Route path="/login" element={<Loginpage />} />
      </Routes>
      {/* </main> */}
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
