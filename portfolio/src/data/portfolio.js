// ============================================================
// All portfolio content lives here. Edit this file to update
// your site — no need to touch component code.
// ============================================================

import profilePhoto from '../assets/photo.png'
import resumeFile from '../../public/DUBBAKA_RENUKA_PRASAD_ATS.pdf'

export const profile = {
  name: 'Renuka Prasad Dubbaka',
  firstName: 'Renuka Prasad',
  role: 'Frontend Developer',
  taglineWords: [
    'Frontend Developer',
    'React.js Developer',
    'JavaScript & TypeScript Engineer',
    'REST API Integrator',
  ],
  location: 'Hyderabad, India',
  email: 'dubbakarenukaprasad@gmail.com',
  phone: '+91-9440195462',
  linkedin: 'https://www.linkedin.com/in/renuka-prasad-dubbaka-299b87283',
  github:  'https://github.com/renucse21',
  photo: profilePhoto,
  resumeFile: resumeFile,
  summary:
    'Software Developer with experience in React.js, JavaScript, HTML, CSS, and Git. Proficient in developing responsive web applications, integrating RESTful APIs, and collaborating in Agile environments. Seeking an opportunity to contribute to innovative projects while continuously enhancing technical expertise.',
  goal:
    'Seeking opportunities to contribute to innovative software development projects, deepen my expertise in scalable frontend architecture, and grow as a well-rounded software engineer through an M.Tech in Computer Science and Engineering.',
}

export const stats = [
  { label: 'Years experience', value: '1.5+' },
  { label: 'Certifications', value: '12+' },
  { label: 'Core stack', value: 'React' },
]

export const skills = {
  Frontend: [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML5', level: 92 },
    { name: 'CSS3', level: 88 },
    { name: 'Redux / Context API', level: 82 },
  ],
  'APIs & Data': [
    { name: 'REST APIs', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 75 },
    { name: 'Postman', level: 80 },
    { name: 'Python', level: 72 },
  ],
  'Tools & Practices': [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Agile / Scrum', level: 80 },
    { name: 'Tableau', level: 75 },
    { name: 'Power BI', level: 72 },
    { name: 'Java', level: 70 },
  ],
}

export const experience = [
  {
    role: 'Software Developer',
    company: 'Jayeesha Software Pvt. Ltd. (DoSystems)',
    period: 'Dec 2024 — May 2026',
    location: 'Hyderabad',
    points: [
      'Developed and maintained scalable, high-performance front-end applications using React.js, ensuring responsive design and seamless UX across devices and browsers.',
      'Built reusable UI components using React Hooks, Context API, and Redux for efficient state management and optimized rendering on large-scale applications.',
      'Integrated RESTful APIs to enable dynamic data-driven interfaces and smooth communication between frontend and backend systems.',
      'Collaborated with cross-functional Agile teams to gather requirements, design solutions, and deliver features within strict timelines.',
      'Applied clean code principles, code reviews, and Git version control to maintain high-quality, maintainable codebases.',
    ],
  },
  {
    role: 'Software Trainee — Internship',
    company: 'Cloud Technologies',
    period: 'Jun 2023 — Jun 2023',
    location: 'Hyderabad',
    points: [
      'Completed an industry internship in Data Science as part of the Cloud Technologies Internship Program (Intern ID: CTIN0623-29).',
      'Gained hands-on exposure to data science workflows, tools, and professional software development practices during the B.Tech program.',
    ],
  },
]

export const projects = [
  {
    title: 'Practice Management',
    subtitle: 'Hospital Management System',
    year: '2025',
    description:
      'A responsive hospital management web application with a reusable component-based architecture, covering patient records, appointment scheduling, and medical data management.',
    stack: ['React.js', 'JavaScript', 'REST APIs', 'Context API'],
    demo: '',
    github: '',
  },
  {
    title: 'TRACK Portal',
    subtitle: 'Employee Management System',
    year: '2025',
    description:
      'A web-based employee management system for timesheet tracking, leave management, task monitoring, and project management, with role-based dashboards for employees and managers.',
    stack: ['React.js', 'TypeScript', 'REST APIs', 'RBAC'],
    demo: '',
    github: '',
  },
  {
    title: 'AI-Powered RAG Chatbot',
    subtitle: 'Document Question Answering',
    year: '2026',
    description:
      'A Retrieval-Augmented Generation chatbot for intelligent document Q&A — document ingestion, chunking, embeddings, and semantic search, with Ollama + Llama 3 for context-aware responses.',
    stack: ['Python', 'LangChain', 'FAISS', 'Ollama', 'Llama 3'],
    demo: '',
    github: '',
  },
]

export const publications = [
  {
    title:
      'A Hybrid RAG Framework for AI-Powered Personalized Document Summarization and Contextual Querying',
    venue: '3rd International Conference on Data Science and Business Systems (ICDSBS 2026)',
    organizer: 'SRM Institute of Science and Technology, Kattankulathur, Tamil Nadu, India',
    date: '05–06 May 2026',
    type: 'Conference Paper',
    doi: '',
    pdf: '',
  },
]

export const achievements = [
  {
    title: 'NSS Volunteer — Certificate of Appreciation',
    issuer: 'JNTUGV — National Service Scheme',
    period: '2021 — 2023',
    description:
      'Completed two years as an NSS Volunteer and attended the NSS Special Camp (24–30 Apr 2023) under the theme "Youth for Rural Development" at K. Kotturu Village, Srikakulam Dist., Andhra Pradesh.',
    icon: 'nss',
  },
  {
    title: 'NSS Regular Activities — Certificate',
    issuer: 'Aditya Institute of Technology and Management',
    period: '2021 — 2022',
    description:
      'Participated in NSS activities during 2021–2022 and completed 30 of 32 hours under regular NSS activities.',
    icon: 'nss',
  },
  {
    title: 'Faculty Development Program — Innovation Through AI',
    issuer: 'GMR Institute of Technology & Andhra University College of Engineering',
    period: 'Mar 2025',
    description:
      'Participated in a one-week Online Faculty Development Program on "Innovation Through AI: Edge and Fog Computing for Smarter Systems" (Certificate ID: GMRIT-ITEFCSS-2025-005).',
    icon: 'fdp',
  },
]

export const certificates = [
  {
    title: 'Java Full Stack — Digital Skills Readiness Program',
    provider: 'Wipro TalentNext',
    date: 'Oct 2023',
    url: '',
  },
  {
    title: 'Excel Skills Job Simulation',
    provider: 'JPMorgan Chase & Co. via Forage',
    date: 'Feb 2024',
    url: '',
  },
  {
    title: 'Data Visualization in Tableau & Python',
    provider: 'Udemy',
    date: 'Mar 2024',
    url: '',
  },
  {
    title: 'Python for Data Analysis',
    provider: 'Great Learning Academy',
    date: 'Jan 2024',
    url: '',
  },
  {
    title: 'Database Management System',
    provider: 'Infosys Springboard',
    date: 'Jan 2024',
    url: '',
  },
  {
    title: 'Introduction to Machine Learning',
    provider: 'Infosys Springboard',
    date: 'Dec 2023',
    url: '',
  },
  {
    title: 'AWS Academy Graduate',
    provider: 'AWS Academy',
    date: 'Jul 2023',
    url: '',
  },
  {
    title: 'Programming in Java',
    provider: 'NPTEL',
    date: 'Apr 2022',
    url: '',
  },
  {
    title: 'AI Agents Fundamentals',
    provider: 'Certification',
    date: '',
    url: '',
  },
  {
    title: 'Prompt Engineering',
    provider: 'Certification',
    date: '',
    url: '',
  },
]

export const education = [
  {
    degree: 'M.Tech, Computer Science and Engineering',
    school: 'Aditya Institute of Technology and Management',
    period: 'Jun 2024 — Jun 2026',
    detail: 'CGPA: 8.4',
  },
  {
    degree: 'B.Tech, Computer Science and Engineering',
    school: 'Aditya Institute of Technology and Management',
    period: '2020 — 2024',
    detail: 'CGPA: 8.9',
  },
  {
    degree: 'Intermediate — High School Diploma (MPC)',
    school: 'Narayana Junior College',
    period: 'Jun 2018 — Jun 2020',
    detail: 'Grade: 8.3',
  },
  {
    degree: 'SSC — High School Diploma',
    school: 'Board of Secondary Education, Andhra Pradesh (BSEAP)',
    period: 'Jun 2017 — Apr 2018',
    detail: 'Grade: 9.8',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]
