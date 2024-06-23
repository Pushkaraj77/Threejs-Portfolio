import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  krushna53,
  gdsc,
  yariga,
  vow,
  yugma,
  piimh,
  express,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FreeLancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Krushna53",
    icon: krushna53,
    iconBg: "#383E56",
    date: "Sept 2023 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Google Developers Student Club",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Planned and conducted workshops on various technologies and tools provided by Google, such as Android development, Firebase, TensorFlow, and more.",
      "Acted as a mentor to students by providing guidance on their technical projects, helping them troubleshoot issues, and offering advice on best practices in software development. ",
      "Worked closely with the core team to strategize and implement initiatives that align with the goals of the GDSC.",
      "Fostered a sense of community within the club by organizing hackathons, coding competitions, and collaborative projects.",
    ],
  },
  {
    title: "Technical Co-ordinator",
    company_name: "Google Developers Student Club",
    icon: gdsc,
    iconBg: "#383E56",
    date: "Sept 2023 - Feb 2024",
    points: [
      "Assisted in planning and executing technical events, including coding bootcamps, hackathons, and tech talks.",
      "Acted as a go-to resource for technical queries and issues.",
      "Managed communications, prepared necessary materials, and ensured that sessions were tailored to meet the learning needs of the participants.",
      "Maintained and updated the club's technical resources, such as repositories, project documentation, and learning materials.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Real Estate | Yariga",
    description:
      "A web-based platform that allows users to perform CRUD operations and post properties & it uses Refine for creating avanced admin panel & deliver smooth user experience.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: yariga,
    source_code_link: "https://github.com/Pushkaraj77/RealEstate",
    demo_link: "https://propertyestate.netlify.app/",
  },
  {
    name: "Web3 Donations | Vow",
    description:
      "Blockchain based Crowd-funding based on Ethereum network and uses smart contract to keep track of user donations, contains MetaMask Wallet Integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "thirdweb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: vow,
    source_code_link: "https://github.com/Pushkaraj77/Web3FundingApp",
    demo_link: "https://vow-fund.netlify.app/",
  },
  {
    name: "Portfolio | Yugma",
    description:
      "An Organization portfolio using modern website design to build visually appealing User Interface",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: yugma,
    source_code_link: "https://github.com/krushna53/yugma-ventures-main",
    demo_link: "https://yugmav.in/",
  },
  {
    name: "Portfolio | PIIMH",
    description:
      "A Gatsby framework based client portfolio built using Content Management System(CMS) and REST APIS to fetch data using GraphQL query.",
    tags: [
      {
        name: "gatsby",
        color: "blue-text-gradient",
      },
      {
        name: "contentful",
        color: "green-text-gradient",
      },
      {
        name: "graphql",
        color: "pink-text-gradient",
      },
    ],
    image: piimh,
    source_code_link: "https://github.com/krushna53/Piimh",
    demo_link: "https://piimh.com/",
  },
  {
    name: "Car Dealership",
    description:
      "A comprehensive Car dealership platform that allows user to search for vehicles using different filters, it is based on DRUPAL.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "drupal",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: express,
    source_code_link: "https://github.com/krushna53/express-motors",
    demo_link: "https://express-motors.krushna53.com/",
  },
  {
    name: "Personal Portfolio",
    description:
      "Portfolio website which makes use of 3D models & three.js capabilities, along with framer motion to make dynamic designs.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "framer",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Pushkaraj77/Threejs-Portfolio",
    demo_link: "https://pushkaraj-portfolio.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
