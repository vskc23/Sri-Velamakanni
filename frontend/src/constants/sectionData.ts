export const sections: {
  id: string;
  title?: string;
  content: string | any[];
  isAchievement?: boolean;
  isProject?: boolean;
}[] = [
  {
    id: "about",
    content:
      "My journey in the tech industry began with a solid foundation in software engineering, leading to over two years of experience at DBS Tech India. There, I refined my skills in full-stack development, with a particular focus on ReactJS and Spring Boot. I'm a quick learner with a passion for technology, always seeking to expand my knowledge in the dynamic field of computer science. In 2020, I participated in the DBS Hack2Hire Hackathon, demonstrating my innovative problem-solving abilities and teamwork, which ultimately resulted in an offer to join DBS Bank as a Software Developer. Currently, I'm captivated by the field of Natural Language Processing (NLP) and its vast potential. As I look to the future, I'm actively searching for opportunities as a Software Engineer beginning summer 2024. I'm enthusiastic about tackling new challenges, collaborating with like-minded professionals, and contributing to impactful projects. If you're interested in connecting or learning more about my journey, please feel free to reach out. I'm excited about the possibility of working together to develop innovative solutions that make a difference.",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
    content: [
      {
        startDate: "2023-08",
        endDate: "Present",
        title: "Pennsylvania State University",
        subtitle: "Graduate Teaching Assistant",
        description: "As a Teaching Assistant for CMPSC 461 (Programming Language Concepts), my responsibilities include, but are not limited to conducting office hours and helping students with their doubts, designing and grading assignments mini projects, and proctoring exams.",
        skills: ["Python", "Scheme", "Functional Programming"],
        location: "State College, SC",
        imageUrl: `${process.env.PUBLIC_URL}/icons/pennState.ico`,
      },
      {
        startDate: "2020-09",
        endDate: "2022-03",
        title: "DBS Tech India",
        subtitle: "Software Engineer (Analyst)",
        description: "As a Software Engineer (Analyst), I played a pivotal role in enhancing system efficiency and data accessibility. I led the redesign of scheduling services, employing cron jobs to generate critical reports stored in region-specific S3 buckets with access constraints. By implementing Hazelcast, I significantly optimized data caching, elevating application performance. My Agile leadership was evident in sprint activities, ensuring a high Say/Do ratio, while my efforts in documentation and onboarding yielded a 10% increase in developer productivity. Collaborating on user-centric designs, I contributed to a remarkable 95% user satisfaction rating through feedback surveys.",
        skills: ["Hazelcast", "Liquibase", "Agile Methodologies", "REST APIs"],
        location: "Hyderabad, IN",
        imageUrl: `${process.env.PUBLIC_URL}/icons/DBS.ico`,
      },
      {
        startDate: "2022-09",
        endDate: "2023-03",
        title: "DBS Tech India",
        subtitle: "Software Engineer (Senior Officer)",
        description: "As a Full Stack Developer, I led the development of reusable React components, enhancing code reusability and efficiency, and crafted real-time Statistics Dashboards using technologies like React, Redux, Saga, High Charts, and Axios. I optimized software delivery through efficient Jenkins pipelines and collaborated on user-centric UX/UI designs, receiving positive feedback. I significantly reduced technical debt by 90%, embraced Test-driven development for system stability, and orchestrated a seamless migration to a modern tech stack, achieving cost savings and improved performance. My role as a Senior Officer Software Engineer was characterized by innovation, collaboration, and a commitment to technical excellence.",
        skills: ["Version Control", "Redux", "React.js", "Spring Boot", "Saga Pattern"],
        location: "Hyderabad, IN",
        imageUrl: `${process.env.PUBLIC_URL}/icons/DBS.ico`,
      },
      {
        startDate: "2022-09",
        endDate: "2023-03",
        title: "Institute for Development and Research in Banking Technology",
        subtitle: "Project Trainee",
        description: "Designed an intuitive GUI dashboard on Hadoop User Experience (HUE) with integrated classification and analytical algorithms (e.g., Support Vector Machine and Random Forest), empowering bankers for enhanced data analytics",
        skills: ["Python", "Django", "PostgreSQL"],
        location: "Hyderabad, IN",
        imageUrl: `${process.env.PUBLIC_URL}/icons/IDRBT.jpg`,
      },
    ],
  },
  {
    id: "academics",
    title: "Academics",
    content: [
        {
          startDate: "2023-01",
          endDate: "2023-04",
          title: "Pennsylvania State University",
          subtitle: "Master of Science in Computer Science",
          description: "As a Teaching Assistant for CMPSC 461 (Programming Language Concepts), my responsibilities include, but are not limited to conducting office hours and helping students with their doubts, designing and grading assignments mini projects, and proctoring exams.",
          skills: ["Python", "Scheme", "Functional Programming"],
          location: "State College, SC",
          imageUrl: `${process.env.PUBLIC_URL}/icons/pennState.ico`,
        },
        {
          startDate: "2016-06",
          endDate: "2020-04",
          title: "GITAM (Deemed to be University)",
          subtitle: "Bachelor of Technology in Computer Science and Engineering",
          description: "As a Software Engineer (Analyst), I played a pivotal role in enhancing system efficiency and data accessibility. I led the redesign of scheduling services, employing cron jobs to generate critical reports stored in region-specific S3 buckets with access constraints. By implementing Hazelcast, I significantly optimized data caching, elevating application performance. My Agile leadership was evident in sprint activities, ensuring a high Say/Do ratio, while my efforts in documentation and onboarding yielded a 10% increase in developer productivity. Collaborating on user-centric designs, I contributed to a remarkable 95% user satisfaction rating through feedback surveys.",
          skills: ["Hazelcast", "Liquibase", "Agile Methodologies", "REST APIs"],
          location: "Hyderabad, IN",
          imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
        },
      ],
  },
  {
    id: "projects",
    title: "Projects",
    content: [
      {
        startDate: "2023-01",
        endDate: "2023-04",
        title: "Pennsylvania State University",

        description: "As a Teaching Assistant for CMPSC 461 (Programming Language Concepts), my responsibilities include, but are not limited to conducting office hours and helping students with their doubts, designing and grading assignments mini projects, and proctoring exams.",
        skills: ["Python", "Scheme", "Functional Programming"],
        location: "State College, SC",
        imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
        // isProject: true,
      },
      {
        startDate: "2016-06",
        endDate: "2020-04",
        title: "GITAM (Deemed to be University)",
        description: "As a Software Engineer (Analyst), I played a pivotal role in enhancing system efficiency and data accessibility. I led the redesign of scheduling services, employing cron jobs to generate critical reports stored in region-specific S3 buckets with access constraints. By implementing Hazelcast, I significantly optimized data caching, elevating application performance. My Agile leadership was evident in sprint activities, ensuring a high Say/Do ratio, while my efforts in documentation and onboarding yielded a 10% increase in developer productivity. Collaborating on user-centric designs, I contributed to a remarkable 95% user satisfaction rating through feedback surveys.",
        skills: ["Hazelcast", "Liquibase", "Agile Methodologies", "REST APIs"],
        location: "Hyderabad, IN",
        imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
        // isProject: true,
      },
    ],
    isProject: true,
  },
  {
    id: "achievements",
    title: "Achievements",
    content: [
      "Won first place in a coding competition",
      "Published a research paper on machine learning",
      "Received the Employee of the Year award",
      "Completed a marathon",
      "Developed a successful open-source project"
    ],
    isAchievement: true,
  },
];
