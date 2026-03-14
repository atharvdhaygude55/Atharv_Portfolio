// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

import postmanLogo from './assets/tech_logo/postman.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import pccoelogo from './assets/education_logo/pccoelogo.png';
import logo_12th from './assets/education_logo/12th_School_logo.png';
import school from './assets/education_logo/school.jpg';

// Project Section Logo's
import travel_buddy from './assets/work_logo/Travel_buddy.png';
import freelancerlogo from './assets/work_logo/freelancer_hub_logo.png';

import whether_logo from './assets/work_logo/whether_app.png';
import AIPDFNoteTake from './assets/work_logo/AI-pdf-note-taker.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: pccoelogo,
      school: "Pimpri Chinchwad College of Engineering",
      date: "2025 - 2029 ",
      degree: "Mechanical Engineering (Btech) ",
    },
    // {
    //   id: 1,
    //   img: bsaLogo,
    //   school: "BSA College, Mathura",
    //   date: "Sept 2018 - Aug 2021",
    //   grade: "73.2%",
    //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    //   degree: "Bachelor of Science - BSC (Computer Science)",
    // },
    {
      id: 2,
      img: logo_12th,
      school: "Vidya valley north point junior college",
      date: "2023 - 2025",
      degree: "HSC(XII) - PCM",
    },
    {
      id: 3,
      img: school,
      school: "Vidya Nikatan English Medium School",
      date: " 2022 - 2023",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Travel_Buddy",
      description:
        "Wonderlust is a visually appealing and intuitive full-stack web application built to simplify hotel discovery and management. Designed with user-friendliness in mind, the platform allows admins to seamlessly upload and manage hotel details including name, image, location, description, and price. Powered by Node.js, Express, MongoDB, and EJS, Wonderlust offers a clean, responsive interface that ensures smooth navigation and data handling.",
      image: travel_buddy,
      tags: ["HTML", "CSS", "JavaScript", "EJS","Node.js", "MongoDB", "Express",],
      github: "https://github.com/omdarade19/Wanderlust",
      webapp: "https://lnkd.in/dnmxM-gM",
    },
    {
      id: 1,
      title: "FREELANCER_HUB",
      description:
        "FreelancerHub is a full-stack freelance services platform built to connect clients with skilled professionals. Designed with seamless user experience in mind, the platform enables users to register, create profiles, upload project listings with images, and securely manage authentication using Passport.js and JWT. Built with Node.js, Express, MongoDB, and EJS.",
      image: freelancerlogo,
      tags: ["HTML", "CSS", "JavaScript", "EJS","Node.js", "MongoDB", "Express"],
      github: "https://github.com/Anix12/FreelancerHub",
      // webapp: "https://csprep.netlify.app/",
    },
   
    // {
    //   id: 3,
    //   title: "ZERODHA_CLONE",
    //   description:
    //     "Zerodha Clone is an efficient and visually accurate front-end replica of the popular stock trading platform Zerodha. Built using React.js, the project focuses on delivering a clean, responsive UI that mirrors the core layout and design of the original platform. Ideal for frontend practice and UI/UX learning, this clone demonstrates component-based architecture, modern styling, and attention to detail — making it a valuable addition to any developer’s portfolio.",
    //   image: zerodha_logo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation","MongoDB", "Express"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    {
      id: 4,
      title: "AI-PDF-Note-Taker",
      description:
        "AI-PDF Note Taker is a full-stack web app built with React.js, Node.js, Express, and MongoDB, integrated with AI-powered summarization to extract key insights from PDFs. It enables users to upload documents, generate concise notes, and manage them through a clean and responsive interface.",
      image: AIPDFNoteTake,
      tags: ["React JS","Next.js","JavaScript", "CSS", "Node.js", "Cleark","ConvexDB"],
      github: "https://github.com/omdarade19/AI-PDF-Note-Taker",
      webapp: "http://ai-pdf-note-taker-tawny.vercel.app",
    },
    {
      id: 5,
      title: "WHETHER APP",
      description:
        "Weather App is a mini project built using React.js that displays real-time weather information by fetching data from a public weather API. Users can enter any city name to instantly view current temperature, weather conditions, and other key details. With its clean interface and smooth functionality, this project demonstrates effective API integration, dynamic rendering, and responsive design—making it a great example of a small yet practical React-based application.",
      image: whether_logo,
      tags: ["HTML", "CSS", "JavaScript", "React JS","API"],
      github: "https://github.com/omdarade19/Whether_app",
      webapp: "https://whetherapp19.netlify.app/",
    },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  