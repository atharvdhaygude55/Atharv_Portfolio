import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.png';

const About = () => (
  <section
    id="about"
    className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
  >
    <div className="flex flex-col-reverse md:flex-row justify-between items-center">
      {/* Left Side */}
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        {/* Greeting */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          Hi, I am
        </h1>
        {/* Name */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Atharv Dhaygude
        </h2>
        {/* Skills Heading with Typing Effect */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
          <span className="text-white">I am a </span>
          <ReactTypingEffect
            text={[
              'Mechanical Engineer',
            ]}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={2000}
            cursorRenderer={(cursor) => (
              <span className="text-[#8245ec]">{cursor}</span>
            )} />
        </h3>
        {/* About Me Paragraph */}
        <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          I'm a student who enjoys exploring technology, automobiles, 
          and creative project ideas. I like working on practical models that solve real-life problems and 
          help make everyday tasks easier. I'm always curious to learn new skills, try different ideas, and 
          improve my knowledge through projects and experimentation.
        </p>

      </div>
      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Tilt
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <img
            src={profileImage}
            alt="Om Darade"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" />
        </Tilt>
      </div>
    </div>
  </section>
);

export default About;
