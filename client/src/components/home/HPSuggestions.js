import React from 'react';
import { Accordion } from '@mantine/core';

const HPSuggestions = () => {
    return (
        <Accordion defaultValue="customization">
            <Accordion.Item value="customization">
                <Accordion.Control>To play the radio</Accordion.Control>
                <Accordion.Panel>"Hey Adam, Play Capital FM"</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="flexibility">
                <Accordion.Control>To hear jokes</Accordion.Control>
                <Accordion.Panel> "Hey Adam, are you funny?" </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="focus-ring">
                <Accordion.Control> To set reminders </Accordion.Control>
                <Accordion.Panel>"Hey Adam, set a reminder for tomorrow at 10AM to call the dentist "</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="affirmations">
                <Accordion.Control> To hear daily affirmations </Accordion.Control>
                <Accordion.Panel>"Hey Adam, tell me something nice "</Accordion.Panel>
            </Accordion.Item>
        
      </Accordion >
      
      );
  };

export default HPSuggestions;
