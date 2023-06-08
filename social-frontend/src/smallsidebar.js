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
import {RiCloseFill} from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import { AiFillHome } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logosearch from "./components/profile/logosearch";
import Modal from "react-bootstrap/Modal";
import CreatePost from "./createPost";
import { clearRedux } from "./actions/authAction";


export default function Smallsidebar() {
  const [log, setLog] = useState(false);
  const verify = async () => {
    const tok = (await JSON.parse(localStorage.getItem("Auth")))
      ? JSON.parse(localStorage.getItem("Auth")).token
      : null;

    if (tok) {
      setLog(true);
    } else {
      setLog(false);
    }
    console.log("log",tok)
  };
  const dispatch = useDispatch();
  let checkUser = useSelector((state) => state.ReducerLogin.authdata);
  
useEffect(()=>{
  verify()
})

  const navigate = useNavigate();
  const logout = async () => {
    await localStorage.clear();
    navigate("/auth");
    dispatch(clearRedux());
  };

  const [showcreate, setShowcreate] = useState(false);
  const handleClosecreate = () => setShowcreate(false);
  const handleShowcreate = () => setShowcreate(true);

  const options = {
    name: "Enable both scrolling & backdrop (default)",
    scroll: true,
    backdrop: false,
  };

  const name = "Enable both scrolling & backdrop";

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const handleShow = () => setShow(true);

  return (
    <div className="first" style={{display:log?"grid":"none" }}>
      <div
        className="sections"
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          marginLeft: "0px",
          justifyContent:"space-evenly"
        }}
      >
<span>        <NavLink to="/">
          <span
            style={{
              placeItems: "center",
              fontSize: "150%",
              border: "none",
            }}
          >
            <AiFillHome />
        
          </span>
        </NavLink></span>
        <span
          style={{
            placeItems: "center",
            fontSize: "150%",
            cursor: "pointer",
          }}
          onClick={toggleShow}
        >
          <ImSearch />
          
        </span>

        <Offcanvas
          show={show}
          onHide={handleClose}
          {...options}
          style={{
            marginLeft: "80px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Offcanvas.Header>
            <Offcanvas.Title><span
            className="closse"
              onClick={handleClose}
              variant=""
              style={{ color: "white", cursor: "pointer",fontSize:"30px" }}
            >
              <RiCloseFill /> 
            </span>  Search User</Offcanvas.Title>
            
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Logosearch />
          </Offcanvas.Body>
        </Offcanvas>
        <span
          style={{
            placeItems: "center",
            fontSize: "150%",

          }}
        >
          <BiMessageRoundedDots />
         
        </span>
        <span
          style={{

            placeItems: "center",
            fontSize: "150%",
          }}
        >
          <MdOutlineNotificationsNone />
        
        </span>

        <span
          style={{
            placeItems: "center",
            fontSize: "150%",
            cursor: "pointer",
          }}
          onClick={handleShowcreate}
        >
          <BsPlusSquare />
        </span>

        <span>
        <NavLink to="/profilepage">
          <span
            style={{
              placeItems: "center",
              fontSize: "150%",
            }}
          >
            <CgProfile />
            
          </span>
        </NavLink></span>

        <span
          style={{
            fontSize: "150%",
            color:"white",
            placeItems: "center",
            padding: "0px 40px",
            cursor: "pointer",
          }}
          onClick={logout}
        >
          Logout
        </span>
      </div>

      <Modal show={showcreate} onHide={handleClosecreate}>
        <CreatePost />
      </Modal>
    </div>
  );
}
