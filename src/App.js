import React, { useState, useEffect} from "react";

// Import the "useState" and "useEffect" hooks from React
// Soo jiido "useState" iyo "useEffect"

// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka

// Import the "axios" library
// Soo jiido "axios" hoos
import axios from "axios";
import "./App.css";
import MyProfile from "./components/MyProfile";

function App() {

  /*
  // Create 3 states, "profile", "followers", and "following"
  // Samee 3 state, "profile", "followers", iyo "following"

  const [ profile, setProfile ] = useState();
  const [ followers, setFollowers ] = useState();
  const [ following, setFollowing ] = useState();

  // API For Profile = https://api.github.com/users/<your-github-username>
  // API for Followers = https://api.github.com/users/<your-github-username>/followers
  // API for Following = https://api.github.com/users/<your-github-username>/following

  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal
 useEffect(() => {
  axios.get("https://api.github.com/users/gabalaax")
  .then((res) => {
    setProfile(res.data)
  })
  .catch((error) =>{
    console.log(error)
  })
 }, [])
 useEffect(() => {
  axios.get("https://api.github.com/users/gabalaax/followers/")
  .then((res) => {
    setFollowers(res.data)
  })
  .catch((error) =>{
    console.log(error)
  })
 }, [])
 useEffect(() => {
  axios.get("https://api.github.com/users/gabalaax/following/")
  .then((res) => {
    setFollowing(res.data)
  })
  .catch((error) =>{
    console.log(error)
  })
 }, [])*/

 const [profile, setProfile] = useState();
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await axios.get(
          "https://api.github.com/users/gabalaax"
        );
        const followersResponse = await axios.get(
          "https://api.github.com/users/gabalaax/followers"
        );
        const followingResponse = await axios.get(
          "https://api.github.com/users/gabalaax/following"
        );

        setProfile(profileResponse.data);
        setFollowers(followersResponse.data);
        setFollowing(followingResponse.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      {/* Show "MyProfile" component here and give it 3 props, "profile", "followers", and "following" */}
      {/* Halkaan soo gali "MyProfile", 3 props-na sii, "profile", "followers", iyo "following" */}
      <MyProfile profile={profile} followers={followers} following={following} />
    </div>
  );
}

export default App;
