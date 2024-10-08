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
      { skill: "Angular.js", percentage: "70%" },
    ],
  },
  {
    title: "Backend",
    icon: `${backend_icon}`,
    skills: [
      { skill: "Node.js", percentage: "85%" },
      { skill: "Express.js", percentage: "80%" },
      { skill: "Spring", percentage: "70%" },
      { skill: "Spring Boot", percentage: "75%" },
      { skill: "Mongoose", percentage: "75%" },
    ],
  },
  {
    title: "Full Stack",
    icon: `${backend_icon}`,
    skills: [{ skill: "Next.js", percentage: "75%" }],
  },
  {
    title: "Database",
    icon: `${backend_icon}`,
    skills: [
      { skill: "MySQL", percentage: "80%" },
      { skill: "MS SQL Server", percentage: "75%" },
      { skill: "Postgresql", percentage: "60%" },
      { skill: "Mongo DB", percentage: "75%" },
      { skill: "Firebase", percentage: "60%" },
    ],
  },
  {
    title: "Tools",
    icon: `${tools_icon}`,
    skills: [
      { skill: "Visual Studio Code", percentage: "80%" },
      { skill: "Eclipse IDE", percentage: "70%" },
      { skill: "IntelliJ IDEA", percentage: "70%" },
      { skill: "Github", percentage: "80%" },
      { skill: "Git", percentage: "80%" },
    ],
  },
  {
    title: "Technical Skills",
    icon: `${soft_skill_icon}`,
    skills: [
      { skill: "Java", percentage: "80%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "C#", percentage: "75%" },
      { skill: "Python", percentage: "70%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Freelance Web Developer",
    date: "May 2024 - June 2024",
    responsibilites: [
      "User Experience Enhancement",
      "Cross-Browser Compatibility",
    ],
  },

  {
    title: "Database Administrator",
    date: "June 2024 - Present",
    responsibilites: ["Database Management", "Security and Compliance"],
  },
];
