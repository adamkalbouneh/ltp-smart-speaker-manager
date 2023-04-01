import React, { useState } from 'react';
import { Input, Button, Paper, Text, useMantineTheme } from '@mantine/core';

function SignUpPage() {

  const theme = useMantineTheme();

  const handleSignup = async (event) => {
  // Handle sign up logic here

    const form = document.getElementById('signupForm');
    var email = document.getElementById("email").value.toLowerCase();
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // stops the form from refreshing the page when credentials are invalid
    event.preventDefault();

    //sets variables for validation
    var validEmail = true;
    var validPassword = true;
    var passwordMatch = true

    // if email not valid
    if (!(email.includes("@") && email.includes("."))) {
      validEmail = false;// 1 = invalid, email variable is invalid
      alert("invalid email")
      return;
    }

    //if password is too short
    if (password.length < 8) {
      validPassword = false; //password is too short
      alert("password should contain at least 8 characters")
      return;
    }

    //if both email and password is invalid
    if (validEmail === 1 && validPassword === 1) {
      //return error message that both email/password is invalid
      alert("invalid email and password")
      return;
    }

    //if only email is invalid
    if (validEmail === 1) {
      //email invalid error
      alert("invalid email")
      return;
    }

    //if only password invalid (not entered anything)
    if (validPassword === 1) {
      //invalid password error
      alert("invalid password")
      return;
    }

    //if password and confirmed password do not match
    if (password != confirmPassword) {
      passwordMatch = false;
      //passwords do not match error
      alert("passwords do not match")
      return;  
    }

    //if credentials provided pass checks
    if ((validEmail = true) && (validPassword = true) && (passwordMatch = true)) {
      

      //Check email exists in database

      // Construct the data object to send in the POST request
      let data = {
        email: email
      };

      // Send a POST request to the Flask API endpoint
      let response = await fetch('/checkEmailExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Convert respone to text format
      let serverResponse = await response.text();

      // If email already exists in database, return error message
      if (serverResponse == "Email already exists"){
        alert("Email already exists")
      } else {
        // Create account
          
        // Construct the data object to send in the POST request
        data = {
          name: name,
          email: email,
          password: password
        };

        // Send a POST request to the Flask API endpoint
        response = await fetch('/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        serverResponse = await response.text();
        
        window.location = "/login";
        alert("sign up successful, please log in")
        

      }
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
            maxLength="30"
            placeholder="Enter your name"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Input
            required
            type="email"
            id="email"
            label="Email"
            maxLength="30"
            placeholder="Enter your email address"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Input
            required
            id="password"
            type="password"
            label="Password"
            maxLength="20"
            placeholder="Enter your password"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Input
            required
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            maxLength="20"
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