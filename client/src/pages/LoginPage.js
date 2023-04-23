import React from "react";
import { TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button, } from '@mantine/core';

function LoginPage() {

  const signupTextClicked = () => {
    window.location = "/signup"
  }

  const handleLogin = async (event) => {
    //Handle login logic here

    const form = document.getElementById('loginForm');
    var email = document.getElementById("email").value.toLowerCase();
    var password = document.getElementById("password").value;
    
    // This is the error message element to be displayed to user
    var errorMessage = document.getElementById("error")

    // stops the form from refreshing the page when credentials are invalid
    event.preventDefault();

    //sets variables for validation
    var validEmail = true;
    var validPassword = true;

    // if email not valid
    if (!(email.includes("@") && email.includes("."))) {
      validEmail = false;// 1 = invalid, email variable is invalid
      alert("invalid email")
      return;
    }

    //if password is too short
    if (password.length < 7) {
      validPassword = false; //password is too short
      alert("password should contain at least 7 characters")
      return;
    }

    //if credentials provided pass checks
    if ((validEmail = true) && (validPassword = true)) {
      

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
          
        // Construct the data object to send in the GET request
        data = {
          email: email,
          password: password
        };

        // Send a POST request to the Flask API endpoint
        response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        serverResponse = await response.text();

        if (serverResponse == "Login successful!") {
          window.location = "/home";
        } else {
          errorMessage.innerText = "Incorrect password";
          errorMessage.style.display = "block"; //displays error msg
        }
        

      } else {
        errorMessage.innerText = "There is no account registered to this email";
        errorMessage.style.display = "block"; //displays error msg
      }
    }

  };

    return (
      <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Welcome Back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Don't have an account?{' '}
        <Anchor size="sm" component="button" onClick={signupTextClicked}>
          Register here
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">

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

        <p className="error-text hide" id="error">Invalid credentials</p>

        <Button fullWidth mt="xl" className="bg-gradient-to-br from-teal-600 to-indigo-700 hover:bg-gradient-to-bl" onClick={handleLogin}>Login</Button>
      </Paper>
    </Container>
  );
}
export default LoginPage;
