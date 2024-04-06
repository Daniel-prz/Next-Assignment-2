"use client";
import React, { useState } from "react";

export default function UserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    alert(
      `Account created! Username:  + ${username} + Password:  + ${password}`
    );
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmission}>
        <label>
          Username:
          <input className="input" onChange={handleUsername} type="text" />
        </label>
        <label>
          Password:
          <input className="input" onChange={handlePassword} type="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
