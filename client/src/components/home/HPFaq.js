import React from 'react';
import { Accordion } from '@mantine/core';

const HPFaq = () => {
  return (
    <Accordion defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Q: How does your smart speakers work?</Accordion.Control>
        <Accordion.Panel>A: We use built-in microphones to listen for voice commands, which are then processed by the device's AI-powered virtual assistant. The virtual assistant interprets the command and performs the requested task or provides the necessary information.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Q: Does the speaker require an internet connection?</Accordion.Control>
        <Accordion.Panel>A: Yes, smart speakers require a Wi-Fi or internet connection to access online services and perform most tasks, such as playing the radio, providing weather updates, or answering questions.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>Q: Can I send messages from the companion app to the speaker?</Accordion.Control>
        <Accordion.Panel>A: Yes, you can send messages to your speaker from the web app. You can remind your loved ones to do their daily wellbeing check or to not miss their appointment that you can see on their schedule.</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    );
};

export default HPFaq;
