import React, { useState } from "react";


export const Registration = () => {
  const data = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }
  const [user, setUser] = useState(data)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const fillName = () => {  
    if(user.email.includes("@")){ 
      const [userName, domain] = user.email.split('@');
      if (user.username === '' && userName.length>0 ) {
            setUser({...user, username: userName }) 
      }
    };
  }
  
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log('Form data', user);
    if (user.password !== user.passwordConfirm) {
      setPasswordMatchError(true);
      return;
    } else {
      setUser({ ...user, [name]: value });
      setPasswordMatchError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>      
      <input
        type="text"
        onBlur={fillName}
        name="email"
        value={user.email}
        placeholder="Email Address"
       onChange={handleChange}
       required
      />        
      <input
        type="text"       
        name="username"
        value={user.username}
        placeholder="User Name:"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={user.password}
        placeholder="Password:"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="passwordConfirm"
        value={user.passwordConfirm}
        placeholder="Confirm Password:"
        onChange={handleChange}
        required
      />
      <button type="submit" >
        Register
      </button>
      {passwordMatchError && (
            <p>Passwords do not match.</p>
          )}
      </form>
      );
    };
    export default Registration   