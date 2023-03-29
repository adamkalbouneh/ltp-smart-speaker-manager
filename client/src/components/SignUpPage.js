import React, { useState } from 'react';
import { Input, Button, Paper, Text, useMantineTheme } from '@mantine/core';

function SignUpPage() {

  const theme = useMantineTheme();

  const handleSignup = (event) => {
  // Handle sign up logic here

    const form = document.getElementById('signupForm');
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // this line stops the form from refreshing the page
    event.preventDefault();

    //sets variables for validation
    // 0 = valid
    var validEmail = true;
    var validPassword = true;
    var passwordMatch = true

    // if email not valid
    if (!(email.includes("@") && email.includes("."))) {
        validEmail = false;// 1 = invalid, email variable is invalid
        alert("invalid email")
        return;
    }

    //if no password has been entered
    if (password.length < 8) {
        validPassword = false; //password variable is invalid
        alert("password should contain at least 8 characters")
        return;
    }

    //if both email and password is invalid
    if (validEmail === 1 && validPassword === 1){
        //return error message that both email/password is invalid
        alert("invalid email and password")
        return;
    }

    //if only email is invalid
    if (validEmail === 1){
        //email invalid error
        alert("invalid email")
        return;
    }

    //if only password invalid (not entered anything)
    if (validPassword === 1){
        //invalid password error
        alert("invalid password")
        return;
    }

    //if password and confirmed password do not match
    if (password != confirmPassword){
      passwordMatch = false;
      //passwords do not match error
      alert("passwords do not match")
      return;  
  }

  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper padding="xl" style={{ width: '400px', backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1] }}>
        <Text align="center" weight={700} size="xl" style={{ marginBottom: theme.spacing.md }}>Sign up</Text>
        <form id="signupForm" onSubmit={handleSignup}>
          <Input
            required
            autofocus
            id="name"
            type="text"
            label="Name"
            maxlength="30"
            placeholder="Enter your name"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Input
            required
            type="email"
            id="email"
            label="Email"
            maxlength="30"
            placeholder="Enter your email address"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Input
            required
            id="password"
            type="password"
            label="Password"
            maxlength="20"
            placeholder="Enter your password"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Input
            required
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            maxlength="20"
            placeholder="Confirm your password"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Button type="submit" id="submitButton" variant="gradient" color="teal" fullWidth style={{ marginBottom: theme.spacing.md }}>Sign up</Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignUpPage;
