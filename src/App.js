import { BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"
import Home from "./pages/Home";
import Barbers from "./pages/Barbers";
import Posts from "./pages/Posts";

import './styles/App.css';
function App() {
  const location = useLocation();
  return (
      <AnimatePresence  mode="wait">
        <Routes>
          <Route path="/" element={<AnimateRoute><Welcome /></AnimateRoute>} />
          <Route path="/signIn" element={<AnimateRoute><SignIn /></AnimateRoute>} />
          <Route path="/signUp" element={<AnimateRoute><SignUp /></AnimateRoute>} />
          <Route path="/home" element={<AnimateRoute><Home /></AnimateRoute>} />
          <Route path="/barbers" element={<AnimateRoute><Barbers /></AnimateRoute>} />
          <Route path="/posts" element={<AnimateRoute><Posts /></AnimateRoute>} />
        </Routes>
      </AnimatePresence>
  );
}

const AnimateRoute = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default App;
