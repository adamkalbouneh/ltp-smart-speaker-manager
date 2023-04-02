import React, { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';


function SignUpPage() {

  const loginTextClicked = () => {
    window.location = "/login"
  }


  const handleSignup = async (event) => {
  // Handle sign up logic here

    const form = document.getElementById('signupForm');
    var email = document.getElementById("email").value.toLowerCase();
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // This is the error message element to be displayed to user
    var errorMessage = document.getElementById("error")

    // stops the form from refreshing the page when credentials are invalid
    event.preventDefault();

    // if no name was entered
    if (name.length == 0) {
      errorMessage.innerText = "Enter a first name";
      errorMessage.style.display = "block"; //displays error msg
      return;
    }

    // if email not valid
    if (!(email.includes("@") && email.includes("."))) {
      errorMessage.innerText = "Invalid email";
      errorMessage.style.display = "block"; //displays error msg
      return;
    }

    //if password is too short
    if (password.length < 7) {
      errorMessage.innerText = "Password should contain at least 7 characters";
      errorMessage.style.display = "block"; //displays error msg
      return;
    }

    //if password and confirmed password do not match
    if (password != confirmPassword) {
      errorMessage.innerText = "Passwords do not match";
      errorMessage.style.display = "block"; //displays error msg
      return;  
    }

    //if credentials provided pass checks

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
      errorMessage.innerText = "Email address already registered";
      errorMessage.style.display = "block"; //displays error msg
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
      
      window.location = "/database";
      

    }
    

  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component="button" onClick={loginTextClicked}>
          Login here
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">

        <TextInput label="First Name" 
        placeholder="e.g. John, Jane" 
        maxLength="30"
        id="name"
        autofocus
        required />

        <TextInput label="Email" 
        placeholder="example@email.com" 
        maxLength="30"
        id="email"
        required />

        <PasswordInput label="Password"
        id="password"
        maxLength="20"
        placeholder="Your password"
        required/>

        <PasswordInput label="Confirm Password" 
        id="confirmPassword"
        maxLength="20"
        placeholder="Confirm your password"
        required/>

        <p className="error-text hide" id="error">Invalid credentials</p>

        <Button fullWidth mt="xl" onClick={handleSignup}>Sign up</Button>
      </Paper>
    </Container>
  );
}

export default SignUpPage;
