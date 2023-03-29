import React, { useState } from 'react';
import { Input, Button, Paper, Text, useMantineTheme } from '@mantine/core';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const theme = useMantineTheme();

  const handleSignup = () => {
    // Handle sign up logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper padding="xl" style={{ width: '400px', backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1] }}>
        <Text align="center" weight={700} size="xl" style={{ marginBottom: theme.spacing.md }}>Sign up</Text>
        <form onSubmit={handleSignup}>
          <Input
            required
            autofocus
            type="text"
            label="Name"
            maxlength="30"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Input
            required
            type="email"
            label="Email"
            maxlength="30"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Input
            required
            type="password"
            label="Password"
            maxlength="20"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Input
            required
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            maxlength="20"
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder="Confirm your password"
            style={{ marginBottom: theme.spacing.md }}
          />
          <Button type="submit" variant="gradient" color="teal" fullWidth style={{ marginBottom: theme.spacing.md }}>Sign up</Button>
        </form>
      </Paper>
    </div>
  );
}

export default SignUpPage;
