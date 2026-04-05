// src/components/Skills/Skills.jsx
<<<<<<< HEAD
import React, { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import HobbyModal from "./HobbyModal";

const Skills = () => {
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHobbyClick = (skill) => {
    handleOpenModal(skill);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHobby(null);
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
  };

  const handleOpenModal = (skill) => {
    if (skill.images) {
      setSelectedHobby(skill);
      setIsModalOpen(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <section
        id="skills"
        className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
      >
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS/HOBBIES</h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          { <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my Hobbies and technical skills and expertise honed through various projects and experiences
          </p> }
        </div>

        {/* Skill Categories */}
        <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                {category.title}
              </h3>

              {/* Skill Items - 3 per row on larger screens */}
              <Tilt
                key={category.title}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() => handleHobbyClick(skill)}
                      className={`flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center ${
                        skill.images 
                          ? 'cursor-pointer hover:border-[#8245ec] hover:shadow-lg hover:shadow-purple-500/50 transition-all' 
                          : ''
                      }`}
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                      <span className="text-xs sm:text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </section>

      {/* Hobby Modal - Outside clip-path container */}
      <HobbyModal 
        hobby={selectedHobby} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </>
  )
};
=======
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS/HOBBIES</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      { <p className="text-gray-400 mt-4 text-lg font-semibold">
      A collection of my Hobbies and technical skills and expertise honed through various projects and experiences
      </p> }
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);
>>>>>>> a8145ec31ba80b6519609ade73cac7f7f98e722c

export default Skills;
