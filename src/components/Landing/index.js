import React, { useEffect} from 'react';
import { LandingContainer, LandingText } from './LandingElements'
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {

  const animate_1_len = 400
  const animate_2_len = 1100
  const animate_3_len = 1100
  const wait_first_page = 4100
  const animate_4_len = 10000
  const scroll_len = animate_1_len + animate_2_len + animate_3_len + wait_first_page

  useEffect(() => {
    const scrollDown = () => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth', // smooth scroll
      });
    };

    const timeout = setTimeout(scrollDown, scroll_len);

    return () => clearTimeout(timeout);
  }, [scroll_len]);

  return (
    <LandingContainer>
      <LandingText>
      <div>
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          '',
          animate_1_len,
          '...',
          animate_1_len, // wait 1s before replacing "Mice" with "Hamsters"
          'hey',
          animate_2_len,
          'it\'s david',
          animate_3_len,
          'it\'s david :)',
          animate_4_len,
          'it\'s david :D',
        ]}
        wrapper="span"
        speed={1}
        repeat={0}
      />
      </div>
      </LandingText>
    </LandingContainer>
  );
};

export default Landing
