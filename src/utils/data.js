import frontend_icon from "../img/frontend-icon.png";
import backend_icon from "../img/backend-icon.png";
import tools_icon from "../img/tools-icon.png";
import soft_skill_icon from "../img/soft-skills-icon.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: `${frontend_icon}`,
    skills: [
      { skill: "HTML5", percentage: "80%" },
      { skill: "CSS3 (Sass/Scss)", percentage: "90%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "React.js", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: `${backend_icon}`,
    skills: [
      { skill: "Node.js", percentage: "85%" },
      { skill: "Express.js", percentage: "80%" },
      { skill: "Mongoose", percentage: "75%" },
      { skill: "Firebase", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: `${tools_icon}`,
    skills: [
      { skill: "Visual Studio COde", percentage: "80%" },
      { skill: "Github", percentage: "90%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: `${soft_skill_icon}`,
    skills: [
      { skill: "Problem Solving", percentage: "80%" },
      { skill: "Collaboration", percentage: "90%" },
      { skill: "Attention to Details", percentage: "75%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Frontend Developer",
    date: "November 2023 - Present",
    responsibilites: [
      "User Experience Enhancement",
      "Cross-Browser Compatibility",
    ],
  },
  {
    title: "Backend Developer",
    date: "December 2023 - Present",
    responsibilites: ["Performance Optimization", "Server-Side Development"],
  },
  {
    title: "Database Engineer",
    date: "January 2024 - Present",
    responsibilites: ["Database Development:", "Security and Compliance"],
  },
];
