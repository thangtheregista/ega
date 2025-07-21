import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Client from "./pages/client/client.jsx";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login/login.jsx";
import RegisterPage from "./pages/register/register.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Client />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
    </>
  )
}

export default App
