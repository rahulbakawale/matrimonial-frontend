import React from 'react';


 const Home = (props) => {
  const handleClick = () =>{
    localStorage.clear();
    props.history.push('/')


  }
    return(
      <button type="submit" className="btn query_btn" onClick={handleClick}>Logout</button>
    );
  };
     
 export default Home 