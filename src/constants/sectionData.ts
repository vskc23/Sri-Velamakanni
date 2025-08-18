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
      "My tech journey began with over two years of software engineering at DBS Tech India, focusing on full-stack development with ReactJS and Spring Boot. I participated in the 2020 DBS Hack2Hire Hackathon, which led to a role as a Software Developer at DBS Bank. Currently, I'm delving into Natural Language Processing (NLP) and its potential. I'm seeking full-time Software Engineering roles starting December 2024. I'm excited to tackle new challenges, collaborate with professionals, and contribute to impactful projects. Let's connect!",
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
        startDate: "2022-03",
        endDate: "2023-12",
        title: "DBS Bank",
        subtitle: "Software Engineer",
        description: "As a Software Engineer, I played a pivotal role in enhancing system efficiency and data accessibility. I led the redesign of scheduling services, employing cron jobs to generate critical reports stored in region-specific S3 buckets with access constraints. By implementing Hazelcast, I significantly optimized data caching, elevating application performance. My Agile leadership was evident in sprint activities, ensuring a high Say/Do ratio, while my efforts in documentation and onboarding yielded a 10% increase in developer productivity. Collaborating on user-centric designs, I contributed to a remarkable 95% user satisfaction rating through feedback surveys.",
        skills: ["Hazelcast", "Liquibase", "Agile Methodologies", "REST APIs"],
        location: "Hyderabad, IN",
        imageUrl: `${process.env.PUBLIC_URL}/icons/DBS.ico`,
      },
      {
        startDate: "2020-06",
        endDate: "2023-03",
        title: "DBS Bank",
        subtitle: "Associate Software Engineer",
        description: "As a Full Stack Developer, I led the development of reusable React components, enhancing code reusability and efficiency, and crafted real-time Statistics Dashboards using technologies like React, Redux, Saga, High Charts, and Axios. I optimized software delivery through efficient Jenkins pipelines and collaborated on user-centric UX/UI designs, receiving positive feedback. I significantly reduced technical debt by 90%, embraced Test-driven development for system stability, and orchestrated a seamless migration to a modern tech stack, achieving cost savings and improved performance. My role as a Associate Software Engineer was characterized by innovation, collaboration, and a commitment to technical excellence.",
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
          endDate: "2024-12",
          gpa: "3.66",
          title: "Pennsylvania State University",
          subtitle: "Master of Science in Computer Science",
          skills: ["Machine Learning", "Natural Language Processing", "Data Driven Design"],
          location: "State College, SC",
          imageUrl: `${process.env.PUBLIC_URL}/icons/pennState.ico`,
          isAcademics: true,
        },
        {
          startDate: "2016-06",
          endDate: "2020-06",
          gpa: "3.57",
          title: "GITAM (Deemed to be University)",
          subtitle: "Bachelor of Technology in Computer Science and Engineering",
          skills: ["Data Structures & Algorithms", "Operating Systems", "Computer Architecheture","Software Engineering"],
          location: "Hyderabad, IN",
          imageUrl: `${process.env.PUBLIC_URL}/icons/download.jpg`,
          isAcademics: true,
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
        skills: ["Machine Learning", "Data Analysis", "Predictive Modeling", "Ensemble Learning"],
        // imageUrl: `${process.env.PUBLIC_URL}/images/Bird_Flight.webp`, // Assuming you have images in a public/images folder
        // visualType: "image", // New property indicating this is an image
        // isProject: true,
        imageUrl: `${process.env.PUBLIC_URL}/icons/pennState.ico`,
      },
      {
        startDate: "2023-09",
        endDate: "2023-12",
        title: "Mitigating Plagiarism and Data Leakage in AI Models",
        description: "Developed methods to reduce plagiarism and PII leakage in fine-tuned GPT-2 models, achieving up to 50% reduction in idea plagiarism and over 90% reduction in PII leakage. Implemented pipelines to filter out PII and conducted extensive experiments to validate effectiveness",
        skills: ["Natural Language Processing", "Data Privacy", "Model Fine-Tuning", "Elasticsearch"],
 
        imageUrl: `${process.env.PUBLIC_URL}/icons/pennState.ico`,
        // isProject: true,
      },
      {
        startDate: "2023-09",
        endDate: "2023-12",
        title: "User Manual Summarization using Text Generation Techniques",
        description: "Developed a high-accuracy news classification model using BiLSTMs, CNNs, and XLNet, achieving up to 84% F1 score. Addressed class imbalance with advanced techniques, conducted in-depth EDA, and evaluated model performance using various metrics to ensure robustness.",
        skills: ["Text Classification", "Imbalanced Dataset Handling", "Transfer Learning"],
 
        imageUrl: `${process.env.PUBLIC_URL}/icons/pennState.ico`,
        // isProject: true,
      },
      {
        startDate: "2023-01",
        endDate: "2023-04",
        title: "Comparative Study of Static and Dynamic Code Analysis Tools",
        description: "Conducted a comparative analysis of static and dynamic code analysis tools, improving vulnerability detection and software security by up to 50%. Identified and analyzed critical security vulnerabilities, demonstrating trade-offs between detection accuracy and performance overhead.",
        skills: ["Code Analysis", "Vulnerability Detection", "Software Security", "Performance Analysis"],
   
        imageUrl: `${process.env.PUBLIC_URL}/icons/pennState.ico`,
        // isProject: true,
      },
      {
        startDate: "2023-09",
        endDate: "2023-12",
        title: "Systolic Arrays for Neural Network Acceleration",
        description: "Analyzed ResNet-18 and GoogLeNet architectures, optimizing systolic array configurations to reduce computation cycles by up to 50%. Demonstrated the best balance of performance and resource utilization with a 32x32 array size, and enhanced MobileNet architecture through extensive simulations.",
        skills: ["Hardware Optimization", "Neural Network Architectures", "Performance Analysis"],
  
        imageUrl: `${process.env.PUBLIC_URL}/icons/pennState.ico`,
        // isProject: true,
      },
      {
        startDate: "2024-01",
        endDate: "2024-04",
        title: "Enhancing Accessibility for Color Vision Deficiency",
        description: "Developed a CNN-based system to enhance accessibility for individuals with CVD, improving image classification accuracy by up to 38.13%. Trained models using CIFAR-100 dataset and demonstrated real-time applications with GAN-like models for dynamic color correction, enhancing visual accessibility.",
        skills: ["Convolutional Neural Networks", "Accessibility Enhancement", "Image Classification", "GANs"],
  
        imageUrl: `${process.env.PUBLIC_URL}/icons/pennState.ico`,
        // isProject: true,
      },
    ],
    isProject: true,
  },
  {
    id: "achievements",
    title: "Leadership / Achievements",
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
