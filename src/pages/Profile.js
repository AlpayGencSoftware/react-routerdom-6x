import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
    let navigate= useNavigate();
    let {username}= useParams();
  return (
    <div>This is the profile page {username}
        
        <button onClick={()=>{
        navigate("/about");
    }}>About page</button></div>
  )
}

export default Profile