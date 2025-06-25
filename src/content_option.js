const logotext = "BRYAN";

const meta = {
    title: "Bryan Jinez - Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in modern web technologies. Expert in React, Node.js, and MySQL. Building scalable applications from concept to production.",
};

const introdata = {
  title: "I'm Bryan Jinez",
  animated: {
    first: "I build full-stack applications",
    second: "I create scalable web solutions",
    third: "I optimize user experiences",
    fourth: "I deploy to the cloud"
  },
  description:
    "Passionate Full Stack Web Developer with expertise in modern web technologies. I specialize in creating end-to-end solutions that combine robust backend architectures with intuitive frontend experiences. ",
  your_img_url: require("./images/me5.jpg"),
  
  
};


const dataabout = {
    title: "About Me",
    aboutme: "I'm a dedicated Full Stack Web Developer with a passion for creating comprehensive web solutions. My journey spans both data science and web development, giving me a unique perspective on building data-driven applications. I excel at bridging the gap between complex backend systems and user-friendly interfaces, ensuring seamless experiences from database to browser. When I'm not coding, I'm exploring new technologies and contributing to friends projects.",
};

const worktimeline = [
    {
        jobtitle: "Tics area assistant ",
        where: "Empresa Pública -Empresa Municipal Mercado Mayorista Ambato",
        date: "2024 - 2025",
        description: "Leading development of enterprise web applications using React, Node.js, and SQL"
    },
  
];

const skills = [
    // Frontend Technologies
    {
        name: "React/Next.js",
        value: 95,
        category: "Frontend"
    },
    {
        name: "TypeScript",
        value: 90,
        category: "Frontend"
    },
    {
        name: "Vue.js",
        value: 80,
        category: "Frontend"
    },
    {
        name: "HTML5/CSS3",
        value: 95,
        category: "Frontend"
    },
    {
        name: "Tailwind CSS",
        value: 90,
        category: "Frontend"
    },
    
    // Backend Technologies
    {
        name: "Node.js/Express",
        value: 90,
        category: "Backend"
    },
    {
        name: "Python",
        value: 80,
        category: "Backend"
    },
    {
        name: "RESTful APIs",
        value: 92,
        category: "Backend"
    },
    {
        name: "GraphQL",
        value: 75,
        category: "Backend"
    },
    
    // Database & DevOps
       {
        name: "MySQL",
        value: 95,
        category: "Database"
    },
    {
        name: "PostgreSQL/MongoDB",
        value: 88,
        category: "Database"
    },
    {
        name: "Git",
        value: 90,
        category: "DevOps"
    }
];

const services = [
    {
        title: "Frontend Web Development",
        description: "I build modern, responsive user interfaces using HTML, CSS, JavaScript, and frameworks like React and Angular. Passionate about clean design and user experience.",
        icon: "🎨"
    },
    {
        title: "Full Stack Applications",
        description: "I develop complete web applications connecting frontend and backend using React, Node.js, and databases like MySQL and Firebase.",
        icon: "🧩"
    },
    {
        title: "Basic Mobile Development",
        description: "I've explored mobile development with React Native and Android Studio, building small projects as part of my learning journey.",
        icon: "📱"
    },
    {
        title: "Database Management",
        description: "Experience working with relational (MySQL, Oracle) and non-relational (Firebase) databases, focusing on schema design and basic querying.",
        icon: "🗃️"
    },
    {
        title: "Version Control & Collaboration",
        description: "I use Git and GitHub to manage code versions, contribute to projects, and maintain clean development practices.",
        icon: "🔧"
    },
    {
        title: "UI Design & Prototyping",
        description: "I create visual prototypes in Figma to plan interfaces and enhance user experience before coding.",
        icon: "🖌️"
    }
];


const dataportfolio = [
    {
        img: require("./images/bank/ban1.png"),
        title: "Bank Simulator",
        description: "Credit and investment simulator",
        link: "https://github.com/21edclique/FrontBanco",
        tech: ["React", "Node.js", "MySQL", ],
        gallery: [
            require("./images/bank/ban1.png"),
             require("./images/bank/ban2.png"),
              require("./images/bank/ban3.png"),
        ]
    },
     {
        img: require("./images/bitacoras/bit1.png"),
        title: "EP-EMA Blogs",
        description: "registration of insidents for EP-EMA employees",
        link: "https://github.com/21edclique/Bitacoras_Mayorista",
        tech: ["React", "Node.js", "MySQL", ],
        gallery: [
          require("./images/bitacoras/bit1.png"),
            require("./images/bitacoras/bi2.png"),
             require("./images/bitacoras/bit3.png"),
        ]
    },
    {
        img: require("./images/Precios/pre1 (1).png"),
        title: "EP-EMA price record",
        description: "EPEMA daily market product price register",
        link: "https://github.com/21edclique/preciosMayorista",
        tech: ["React", "Node.js", "MySQL", ],
        gallery: [
          require("./images/Precios/pre1 (1).png"),
          require("./images/Precios/pre1 (2).png"),
          require("./images/Precios/pre1 (3).png"),
          require("./images/Precios/pre1 (4).png"),
          require("./images/Precios/pre1 (5).png"),
        ]
    },
   
   
];

const certifications = [
    {
        title: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023"
    },
    {
        title: "React Developer Certification",
        issuer: "Meta",
        date: "2022"
    },
    {
        title: "Node.js Application Developer",
        issuer: "OpenJS Foundation",
        date: "2022"
    }
];

const contactConfig = {
    YOUR_EMAIL: "bryan.jinez@email.com",
    YOUR_FONE: "+593 961114871",
    location: "Ecuador",
    description: "Ready to bring your ideas to life with cutting-edge web technologies. Let's discuss how we can build something amazing together. Available for full-time opportunities and freelance projects.",
    // EmailJS configuration
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/21edclique",
    linkedin: "https://linkedin.com/in/bjinez",
};

const techStack = {
    frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SASS"],
    backend: ["Node.js", "Express", "Django", "FastAPI", "GraphQL", "REST APIs"],
    database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"],
    cloud: ["AWS", "Vercel", "Netlify", "Docker", "Kubernetes"],
    tools: ["Git", "Webpack", "Vite", "Jest", "Cypress", "Figma"]
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    certifications,
    techStack,
};