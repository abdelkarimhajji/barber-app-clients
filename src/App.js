import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"
import Home from "./pages/Home";
import Barbers from "./pages/Barbers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/barbers" element={<Barbers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
