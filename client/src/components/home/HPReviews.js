import React from 'react';
import { Accordion } from '@mantine/core';

const HPReviews = () => {
  return (
    <Accordion defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Carol</Accordion.Control>
        <Accordion.Panel>Meet our innovative smart speaker, your ultimate personal assistant. With advanced AI, access news, weather, and local radio using just your voice. Effortlessly manage smart home devices and daily tasks, while experiencing the perfect blend of convenience and innovation. Embrace the captivating world of voice-activated assistance and revolutionize your everyday life.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Rachel</Accordion.Control>
        <Accordion.Panel>Introducing our charming smart speaker, designed not only to assist but also to be your uplifting companion. With a vast repertoire of jokes, compliments, and words of affirmation, it brings a touch of warmth and positivity to your everyday life. This friendly helper not only entertains you with its witty humor but also brightens your day with heartfelt compliments and empowering affirmations.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>Alice</Accordion.Control>
        <Accordion.Panel>This empathetic companion conducts daily check-ins, ensuring you're feeling okay and offering a caring ear when you need it most. Its attentive nature helps create a supportive environment, fostering emotional well-being and promoting self-awareness. By actively engaging in your emotional journey, our smart speaker becomes more than just an assistant—it becomes a trusted ally in nurturing a balanced and healthy mindset, making a positive impact on your overall well-being.</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    );
};

export default HPReviews;
