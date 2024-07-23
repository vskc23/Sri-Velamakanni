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
        startDate: "2024-01",
        endDate: "2024-04",
        title: "Skyward Analytics",

        description: "Predicted flight delays using advanced machine learning techniques (Logistic Regression, Random Forest, SVM, XGBoost) with up to 83.09% accuracy. Integrated bird strike data for enhanced predictions, conducted detailed EDA, and implemented ensemble techniques to address class imbalance and refine feature selection.",
        skills: ["Python", "Scheme", "Functional Programming"],

        imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
        // isProject: true,
      },
      {
        startDate: "2023-09",
        endDate: "2023-12",
        title: "Mitigating Plagiarism and Data Leakage in AI Models",
        description: "Developed methods to reduce plagiarism and PII leakage in fine-tuned GPT-2 models, achieving up to 50% reduction in idea plagiarism and over 90% reduction in PII leakage. Implemented pipelines to filter out PII and conducted extensive experiments to validate effectiveness",
        skills: ["Hazelcast", "Liquibase", "Agile Methodologies", "REST APIs"],
 
        imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
        // isProject: true,
      },
      {
        startDate: "2023-09",
        endDate: "2023-12",
        title: "User Manual Summarization using Text Generation Techniques",
        description: "Developed a high-accuracy news classification model using BiLSTMs, CNNs, and XLNet, achieving up to 84% F1 score. Addressed class imbalance with advanced techniques, conducted in-depth EDA, and evaluated model performance using various metrics to ensure robustness.",
        skills: ["Hazelcast", "Liquibase", "Agile Methodologies", "REST APIs"],
 
        imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
        // isProject: true,
      },
      {
        startDate: "2023-01",
        endDate: "2023-04",
        title: "Comparative Study of Static and Dynamic Code Analysis Tools",
        description: "Conducted a comparative analysis of static and dynamic code analysis tools, improving vulnerability detection and software security by up to 50%. Identified and analyzed critical security vulnerabilities, demonstrating trade-offs between detection accuracy and performance overhead.",
        skills: ["Hazelcast", "Liquibase", "Agile Methodologies", "REST APIs"],
   
        imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
        // isProject: true,
      },
      {
        startDate: "2023-09",
        endDate: "2023-12",
        title: "Systolic Arrays for Neural Network Acceleration",
        description: "Analyzed ResNet-18 and GoogLeNet architectures, optimizing systolic array configurations to reduce computation cycles by up to 50%. Demonstrated the best balance of performance and resource utilization with a 32x32 array size, and enhanced MobileNet architecture through extensive simulations.",
        skills: ["Hazelcast", "Liquibase", "Agile Methodologies", "REST APIs"],
  
        imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
        // isProject: true,
      },
      {
        startDate: "2024-01",
        endDate: "2024-04",
        title: "Enhancing Accessibility for Color Vision Deficiency",
        description: "Developed a CNN-based system to enhance accessibility for individuals with CVD, improving image classification accuracy by up to 38.13%. Trained models using CIFAR-100 dataset and demonstrated real-time applications with GAN-like models for dynamic color correction, enhancing visual accessibility.",
        skills: ["Hazelcast", "Liquibase", "Agile Methodologies", "REST APIs"],
  
        imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
        // isProject: true,
      },
    ],
    isProject: true,
  },
  {
    id: "achievements",
    title: "Achievements",
    "content": [
      "Conducted tech workshops for 1,200 students in Hyderabad via DBS Bank's Campus Connect.",
      "Organized team-bonding sessions as part of DBS's engagement squad.",
      "Led sustainable initiatives, managing plantations at DBS and the University.",
      "Represented school and university in Table Tennis tournaments.",
      "Won Super Rookie award for two consecutive quarters and multiple spot awards at DBS.",
      "Ranked in the top 10 percentile among 1,500 students, earning an undergraduate scholarship."
    ],
    isAchievement: true,
  },
];
