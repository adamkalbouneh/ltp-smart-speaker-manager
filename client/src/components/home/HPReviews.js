import React from 'react';
import { Accordion } from '@mantine/core';

const HPReviews = () => {
  return (
    <Accordion defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Carol  ⭐⭐⭐⭐⭐</Accordion.Control>
        <Accordion.Panel>I recently purchased this smart speaker, and I must say, it has truly transformed my day-to-day life! As someone who's always juggling a busy schedule, the smart speaker has become my go-to personal assistant, helping me stay organized and on top of my tasks.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Rachel ⭐⭐⭐⭐</Accordion.Control>
        <Accordion.Panel>I particularly love how the smart speaker integrates with my favorite streaming services, allowing me to enjoy my favorite music and podcasts throughout the day. Plus, the sound quality is impressive, filling my living space with rich, clear audio..</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>Alice ⭐⭐⭐⭐⭐</Accordion.Control>
        <Accordion.Panel>This empathetic companion conducts daily check-ins, ensuring you're feeling okay and offering a caring ear when you need it most. Its attentive nature helps create a supportive environment, fostering emotional well-being and promoting self-awareness. By actively engaging in your emotional journey, our smart speaker becomes more than just an assistant—it becomes a trusted ally in nurturing a balanced and healthy mindset, making a positive impact on your overall well-being.</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
    );
};

export default HPReviews;
