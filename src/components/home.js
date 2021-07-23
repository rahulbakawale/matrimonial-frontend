import React from 'react';

 const Home = (props) => {
  const handleClick = () =>{
    localStorage.clear();
    props.history.push('/login')

  }
    return(
      <button type="button" className="logout-button" onClick={handleClick}>Logout</button>
    );
  };
     
 export default Home 