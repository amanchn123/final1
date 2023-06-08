import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Auth from "./pages/auth";
import { ChakraProvider, LinkBox } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Profilepage from "./pages/profile/profilePage.js";
import Profile from "./components/profile/profile";
import Allstory from "./components/postSide/allstory";
import Sidebar from "./sidebar";
import UserData from "./pages/userData";

function App() {
  const [log, setLog] = useState(false);
  let checkUser = useSelector((state) => state.ReducerLogin.authdata);
  const verify = async () => {
    const tok = (await JSON.parse(localStorage.getItem("Auth")))
      ? JSON.parse(localStorage.getItem("Auth")).token
      : null;

    if (tok) {
      setLog(true);
    } else {
      setLog(false);
    }
  };

  const navigate = useNavigate();

  const [showcreate, setShowcreate] = useState(false);

  const options = {
    name: "Enable both scrolling & backdrop (default)",
    scroll: true,
    backdrop: false,
  };

  const name = "Enable both scrolling & backdrop";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    verify();
  });

  return (
    <div className="Apps row" style={{width:"103vw"}}>
   
        <div
          className="col-sm-2 side"
          style={{
            // position: "fixed",
            // width: "250px",
            
            
          }}
        >
          {log ? <Sidebar /> : ""}
        </div>
        <div
          onClick={handleClose}
          className="col-sm-10 maincomp"
          style={{
            // marginLeft: log ? "250px" : "0px", 
            width: "auto",
            height:"",
            // position: "fixed"
            overflowY:"hidden"
          }}
        >
          <Routes>
            <Route
              path="/"
              element={log ? <Navigate to="home" /> : <Navigate to="auth" />}
            />
            <Route
              path="/home"
              element={log ? <Home /> : <Navigate to="../auth" />}
            />

            <Route
              path="/auth"
              element={log ? <Navigate to="../home" /> : <Auth />}
            />

            <Route
              path="/profilepage"
              element={log ? <Profilepage /> : <Navigate to="../auth" />}
            />
            <Route
              path="/search"
              element={log ? <Profile /> : <Navigate to="../auth" />}
            />

            <Route
              path="/story"
              element={log ? <Allstory /> : <Navigate to="../auth" />}
            />

            <Route
              path="/userData"
              element={log ? <UserData /> : <Navigate to="../auth" />}
            />

            <Route
              path="*"
              element={log ? <Navigate to="/" /> : <Navigate to="../auth" />}
            />
          </Routes>
        </div>
    </div>
  );
}

export default App;
