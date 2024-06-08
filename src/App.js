import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import './App.css'
import Grpahics from "./components/pages/Grpahics";
import ScrollToAnchor from './components/pages/ScrollToAnchor';
import Login from "./components/Login";
// import Signup from "./components/Signup";
import Addprojects from "./components/Addprojects";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProject from "./components/pages/EditProject";
import AddTechStack from "./components/pages/AddTechStack";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import LoadingPage from "./Utils/LoadingPage";



function App() {
    const {userInfo} = useContext(UserContext);
    const username = userInfo?.username;

    return (
        <>
            <ScrollToAnchor />
            <ToastContainer />
                <Routes>
                    <Route path="/loading" element={<LoadingPage />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/graphics" element={<Grpahics />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/register" element={<Signup />} /> */}
                    <Route path="/addprojects" element={<Addprojects />} />
                    <Route path="/addskills" element={username ? <AddTechStack />: <Login />} />
                    <Route path="/update/:id" element={<EditProject />} />
                </Routes>
        </>
    )
}

export default App;
