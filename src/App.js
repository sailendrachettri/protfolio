import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import './App.css'
import Grpahics from "./components/pages/Grpahics";
import ScrollToAnchor from './components/pages/ScrollToAnchor';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    return (
        <>
            <ScrollToAnchor />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/graphics" element={<Grpahics />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
            </Routes>
        </>
    )
}

export default App;
