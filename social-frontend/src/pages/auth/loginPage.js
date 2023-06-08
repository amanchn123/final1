import React, { useEffect, useState } from "react";
import { Dispatch } from "react";
import { LoginAction } from "../../actions/authAction";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { useToast } from "@chakra-ui/toast";

export default function LoginPage() {
  const[tun,setTun]=useState(false)
  const toast = useToast();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const authdata = useSelector((state) => state.ReducerLogin);
  const loading = authdata ? authdata.loading : false;
  const checkuser=authdata?authdata.success:""

  console.log('fff',authdata.message?authdata.message:"")

  const dispatch = useDispatch();

  const submits = async (e) => {
    e.preventDefault();
    dispatch(LoginAction(data))
    setTun(true)
  };

  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };




  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      {loading ? (
        <div className="Auth-form-container">
          {/* <form className="Auth-formss"> */}
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>username</label>
                <input
                  required={true}
                  name="username"
                  value={data.username}
                  onChange={handlechange}
                  type="username"
                  className="form-control mt-1"
                  placeholder="give your username"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  required={true}
                  name="password"
                  value={data.password}
                  onChange={handlechange}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                  onClick={submits}
                >
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          {/* </form> */}
        </div>
      ) : (
        <div className="Auth-form-container">
          {/* <form className="Auth-form" > */}
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>username</label>
                <input
                  required={true}
                  name="username"
                  value={data.username}
                  onChange={handlechange}
                  type="username"
                  className="form-control mt-1"
                  placeholder="give your username"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  required={true}
                  name="password"
                  value={data.password}
                  onChange={handlechange}
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                  onClick={submits}
                >
                  Submit
                </button>
              </div>
             <span style={{color:"red"}}>{authdata.message?authdata.message:""}</span> 
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          {/* </form> */}
        </div>
      )}
    </div>
  );
}
