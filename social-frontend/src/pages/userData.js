import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { followAction, getUser } from "../actions/authAction";
import { Button } from "react-bootstrap";
import { Api_url } from "../apiurl";
import './userdata.css'


export default function UserData() {
  const[post,setPost]=useState([])

  const dispatch=useDispatch()

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const getUsers = useSelector((state) =>
    state.getAllUserReducer.data
      ? state.getAllUserReducer.data
        ? state.getAllUserReducer.data.result
        : []
      : []
  );

  useEffect(() => {
    dispatch(getUser());
  });

  const userData = useSelector((state) =>
  state.ReducerLogin.authdata
    ? state.ReducerLogin.authdata.response
    : "nodata"
);


const followaction = (id) => {
    const ids = { id, currId: userData._id };
    dispatch(followAction(ids));
  };

  const getPost=async()=>{
    const tok=JSON.parse(localStorage.getItem("Auth"))?JSON.parse(localStorage.getItem("Auth")).token:""
    try{
      const response=await axios.get(`${Api_url}/apii/getpost?userId=${id}`,{
        headers:{
            authorization:tok
         }
      })
      setPost(response.data)
    }catch(error){
        console.log(error)
    }
  }

  const user = getUsers.filter((people) => people._id === id);
 useEffect(()=>{
   getPost()
 },[id,followAction])

  return (
    <div
      style={{ backgroundColor: "black",height:"100vh", width: "100%",padding:"30px",color:"white",position:"absolute",overflowY:"scroll" }}
    >
      <div className="row" style={{ height: "20rem" }}>
        <div className="col-sm-4" style={{ display:"flex",justifyContent:"end",marginRight:"-10px" }}>
          <img
            style={{ borderRadius: "50%", height: "300px", width: "300px" }}
            src={user ? user[0].profilePic : ""}
            alt="profilePic"
          />
        </div>
        <div className="col-sm-8" style={{display:"",marginTop:"50px" }}>
          <div className="row" style={{ display: "flex", placeItems: "end",bottom:"-50px" }}>
            <h3>
              {user ? user[0].username : "rfr"} &nbsp;{" "}{Object.values(user[0].followers).includes(userData._id) ? (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => followaction(user[0]._id)}
                        >
                          following
                        </Button>
                      ) : (
                        <Button
                          style={{ right: "0px",cursor:"pointer" }}
                          variant="light"
                          size="sm"
                          onClick={() => followaction(user[0]._id)}
                        >
                          follow
                        </Button>
                      )}
                      
              &nbsp;
            </h3>
          </div>
          <div
                className="row"
                style={{ display: "flex", placeItems: "center" }}
              >
                <div className="following" style={{}}>
                  <h4>
                    {post ? post.length : ""} Post &nbsp;&nbsp;{" "}
                    {user ? user[0].followers.length : ""} Followers
                    &nbsp;&nbsp;&nbsp;{" "}
                    {user ? user[0].following.length : ""} Following
                  </h4>
                </div>
              </div>
              <div
                className="row"
                style={{ display: "flex", placeItems: "start" }}
              >
                <h5>Hi I am aman chouhan and I</h5>
              </div>
              
        </div>
      </div>
      <hr />
      <div
            className="row imgg"
            style={{
             
              justifyContent: "center",
              padding: "15px",
              
            }}
          >
          
            {post
              ? post.length !== 0
                ? post
                  ? post.map((people) => {
                      return (
                        <div
                          className="col-sm-3 container"
                          style={{
                            backgroundColor: "blue",
                            margin: "5px",
                            height: "200px",
                            padding: "0%",
                            width: "200px",
                          }}
                        >
                          <img
                            src={people ? people.image : ""}
                            style={{ width: "100%", height: "100%" }}
                          />
                          <div className="overlay">
                            <div className="content">
                              <h3>
                                {people ? people.likes.length : ""} <FcLike />
                                
                              </h3>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : "ede"
                : <h3 style={{color:"white",display:"flex",position:"absolute",left:"550px"}}>No images</h3>
              : "no image"}
          </div>
    </div>
  );
}
