import { useState ,useEffect} from "react";
import React from 'react';
import { Link } from "react-router-dom";

const Profile=()=>{
    
    const [user, setUser] = useState({});
    
    useEffect(() => {
      const id = sessionStorage.getItem("id");
  
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }, []);

    return(
        <div className='Profile'>
            <div className="image">
                <img src={user.image} alt="img" />
            </div>
            <div className="about">
                <p>Name: {user.firstName} {user.lastName}</p>
                <p>Genger: {user.gender}</p>
                <p>Email:{user.email}</p>
            </div>
            <button type="" className="">
                <Link to={"/"}>Logout</Link>
            </button>
        </div>
    )
}

export default Profile;