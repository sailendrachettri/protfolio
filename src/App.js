import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import './App.css'
import Grpahics from "./components/pages/Grpahics";
import ScrollToAnchor from './components/pages/ScrollToAnchor';

function App() {
    return (
        <>
            <ScrollToAnchor />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/graphics" element={<Grpahics />} />
            </Routes>
        </>
    )
}

export default App;
