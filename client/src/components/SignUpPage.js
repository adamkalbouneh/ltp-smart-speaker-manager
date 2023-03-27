import React from "react";


const SignUpPage = () => {
  return <body>
    <h1>Sign up page</h1>
    <div>
      <h2>Sign Up Page</h2>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" required />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>

  </body>
};

export default SignUpPage;