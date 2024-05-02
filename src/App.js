import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import './App.css'
import Grpahics from "./components/pages/Grpahics";
import ScrollToAnchor from './components/pages/ScrollToAnchor';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Addprojects from "./components/Addprojects";
import { UserContextProvider } from "./UserContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProject from "./components/pages/EditProject";
  

function App() {
    return (
        <>
            <ScrollToAnchor />
            <ToastContainer />
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/graphics" element={<Grpahics />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/addprojects" element={<Addprojects />} />
                    <Route path="/update/:id" element={<EditProject />} />
                </Routes>
            </UserContextProvider>
        </>
    )
}

export default App;
