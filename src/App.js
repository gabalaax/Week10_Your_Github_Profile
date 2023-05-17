import React, { useState, useEffect } from "react";
import MyProfile from "./components/MyProfile";
import axios from "axios";
import "./App.css";
function App() {
    const [profile, setProfile ] = useState([]);
    const [followers, setFollowers ] = useState([]);
    const [following, setFollowing ] = useState([]);
    useEffect(() => {
      axios.get("https://api.github.com/users/gabalaax")
        .then((res) => {
          setProfile(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, []);
    useEffect(() => {
      axios.get("https://api.github.com/users/gabalaax/followers")
        .then((res) => {
          setFollowers(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, []);
  
    useEffect(() => {
      axios.get("https://api.github.com/users/gabalaax/following")
        .then((res) => {
          setFollowing(res.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }, []); 
    return (
      <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <MyProfile profile ={ profile } followers ={ followers } following ={ following } />
    </div>
    );
  }
  
  export default App;