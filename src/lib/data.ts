import { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  { title: "About Me", url: "/about-me" },
  { title: "Resume/CV", url: "/resume-cv" },
  { title: "Gallery", url: "/gallery" },
  { title: "Projects", url: "/projects" },
  { title: "Contact Me", url: "/contact-me" },
];

export const beliefs = [
  { id: 1, text: "Creativity with purpose" },
  { id: 2, text: "Collaboration across cultures" },
  { id: 3, text: "Resilience & adaptability" },
  { id: 4, text: "Data-driven storytelling" },
  { id: 5, text: "Innovation for impact" },
  { id: 6, text: "Empathy in communication" },
];

export const honors = [
  {
    id: 1,
    title: "Fifth Student Graphic Book of the Year Awards",
    subtitle: "Selected Work: Published Posters and Book Cover Designs",
    location: "Tehran, Iran",
    date: "01/2012",
  },
  {
    id: 2,
    title: "First International Festival of Student Visual Arts",
    subtitle: "Juried Exhibition Selection | Saba Cultural Center",
    location: "Tehran, Iran",
    date: "01/2010",
  },
  {
    id: 3,
    title: "Forth Student Graphic Book of the Year Awards",
    subtitle: "Selected Work: Published Posters",
    location: "Tehran, Iran",
    date: "01/2010",
  },
  {
    id: 4,
    title: "First Festival of City Visual Arts",
    subtitle: "Juried Exhibition Selection | Imam Ali-Religious Arts Museum",
    location: "Tehran, Iran",
    date: "01/2008",
  },
];

export const projects = [
  {
    number: 1,
    title: "From Audience Insight to Engagement",
    subtitle: "Charles River Museum of Industry & Innovation | September 2025 - May 2026",
    description:
      "Developed a marketing strategy focused on audience segmentation, content structure, and user journey design to improve engagement and support long-term growth.",
    buttonLabel: "View Project",
    slug: "project-1",
  },
  {
    number: 2,
    title: "Driving Impact Through Innovation & Nonprofit Collaboration",
    subtitle: "DeisHacks 2026: Brandeis University | Fall 2025 – Spring 2026",
    description:
      "Co-developed a real-world challenge with a nonprofit (CRMII) to address visibility and visitor experience gaps; led a student team in a 48-hour innovation challenge, earning Best Non-Technical Solution.",
    buttonLabel: "View Project",
    slug: "project-2",
  },
  {
    number: 3,
    title: "Driving Growth Through Data and Strategy",
    subtitle: "Rivian: Market Analysis & Strategy | Spring Semester 2025",
    description:
      "Analyzed Rivian's market position and operational challenges to identify data-driven strategies for growth and efficiency.",
    buttonLabel: "View Case Study",
    slug: "project-3",
  },
  {
    number: 4,
    title: "Automotive Brand Strategy Simulation",
    subtitle: "Firm E – Stakeholders Meeting | Spring Semester 2025",
    description:
      "A competitive marketing and branding simulation where teams shape brand positioning and compete for market leadership.",
    buttonLabel: "View Project",
    slug: "project-4",
  },
];

export const audiences = [
  {
    label: "Youth & Students",
    description: "seeking educational and interactive experiences",
    icon: "/svg/Youth&Students.svg",
  },
  {
    label: "Families",
    description: "looking for engaging and accessible activities",
    icon: "/svg/Families.svg",
  },
  {
    label: "Tourists & Day Visitors",
    description: "interested in local culture and exploration",
    icon: "/svg/Visitors.svg",
  },
  {
    label: "Donors & Sponsors",
    description: "motivated by impact, transparency, and community contribution",
    icon: "/svg/Donors.svg",
  },
  {
    label: "Technology Companies",
    description: "interested in partnerships, innovation, and visibility",
    icon: "/svg/Tech.svg",
  },
];

export const education = [
  {
    school: "Brandeis International Business School",
    location: "Waltham, MA",
    degree: "Candidate for Master of Business Administration | Concentration in Marketing",
    period: "08/2024 – 12/2026",
  },
  {
    school: "Kamalolmolk Higher Education Institute",
    location: "Mazandaran Providence, Iran",
    degree: "Bachelor of Arts in Graphic Design | Concentration in Visual Communication",
    period: "09/2008 – 12/2011",
  },
  {
    school: "Maziar Higher Education Institute",
    location: "Mazandaran Providence, Iran",
    degree: "Associate of Arts in Graphic Design | Concentration in Visual Art",
    period: "09/2006 – 12/2008",
  },
];

export const experiences = [
  {
    company: "Charles River Museum of Industry & Innovation",
    location: "Waltham, MA",
    role: "Volunteer Marketing Consultant",
    period: "09/2025 – 05/2026",
    bullets: [
      "Developed a digital marketing strategy to strengthen brand visibility and audience engagement",
      "Built audience segmentation frameworks to enable more targeted outreach and improve campaign effectiveness",
      "Redesigned CRMII's brand guidelines to ensure consistency across touchpoints and enhance credibility with visitors, partners, and funders",
      "Restructured website content and navigation to improve storytelling and user experience, contributing to increased audience engagement and stronger interest from potential funders",
    ],
  },
  {
    company: "DeisHacks 2026 | Brandeis University",
    location: "Waltham, MA",
    role: "Board Fellow | DeisHacks 2026",
    period: "09/2025 – 02/2026",
    bullets: [
      "Co-developed a high-impact, real-world challenge with a nonprofit partner for student teams to tackle",
      "Guided student teams through a 48-hour challenge, supporting problem-solving, engagement, and collaboration with the nonprofit",
      "Coordinated an on-site museum experience to deepen teams' understanding of the nonprofit's mission, audience, and key challenges",
    ],
  },
  {
    company: "Comprint Inc. | Screen Printing & Production",
    location: "Waltham, MA",
    role: "Graphic Designer",
    period: "10/2021 – 08/2024",
    bullets: [
      "Improved production efficiency by tracking lead times three weeks in advance, accelerating workflow and enhancing client satisfaction",
      "Ensured color accuracy and brand consistency across 300+ printed projects, contributing to higher campaign quality and repeat business",
      "Coordinated closely with sales, account managers, and production teams to streamline approvals and reduce turnaround time",
    ],
  },
  {
    company: "BBC Printing & Products Inc. | Print Production & Design",
    location: "Waltham, MA",
    role: "Graphic Designer",
    period: "02/2017 – 11/2020",
    bullets: [
      "Consulted with clients to define design goals and present company offerings, supporting stronger sales conversions and client retention",
      "Designed multicultural menus that increased customer interest and engagement",
    ],
  },
  {
    company: "Dunkin' Donuts LLC",
    location: "Waltham, MA",
    role: "Crew Member",
    period: "11/2024 – 08/2021",
    bullets: [
      "Improved customer experience by increasing order accuracy and service efficiency, strengthening overall satisfaction and service quality",
      "Resolved up to 12 customer concerns per shift, improving service experience and contributing to customer retention",
    ],
  },
  {
    company: "Tolue Advertising Group (TAG Agency)",
    location: "Tehran, Iran",
    role: "Creative Designer",
    period: "04/2012 – 09/2014",
    bullets: [
      "Translated brand strategies into cohesive visual systems and marketing assets, enhancing brand positioning and visibility",
      "Collaborated with marketing teams to support multi-channel campaigns, contributing to measurable performance improvements and ROI growth",
      "Designed and executed marketing materials across 14 campaigns, increasing audience engagement and campaign effectiveness",
      "Designed a user-focused website interface for a professional networking platform, improving usability and digital interaction",
      "Created a branded planner calendar for Qatar Airways, ensuring alignment with brand standards and consistency across touchpoints",
    ],
  },
];

export const certifications = [
  {
    org: "HubSpot Academy",
    location: "Online",
    description: "HubSpot Academy is an online platform that delivers globally recognized certifications and builds practical skills in marketing, sales, and CRM tools.",
    items: [
      {
        name: "SEO Certification",
        period: "05/2026 – 05/2027",
        bullets: ["Covered website optimization, keyword research, on-page SEO, technical SEO, and content strategy to improve organic visibility"],
      },
      {
        name: "Inbound Marketing",
        period: "04/2026 – 04/2028",
        bullets: ["Focused on attracting customers through helpful content and digital channels instead of traditional advertising"],
      },
      {
        name: "Content Marketing",
        period: "04/2026 – 04/2028",
        bullets: ["Developed skills in creating targeted content, nurturing leads, and using automation to attract, engage, and convert customers"],
      },
    ],
  },
  {
    org: "University of Massachusetts",
    location: "Lowell, MA",
    description: "Web Design & Development",
    period: "09/2021 – 12/2022",
    items: [],
  },
];

export const skills = [
  {
    category: "Marketing & Branding",
    detail: "Brand Campaign Support, Go-to-Market Execution, Audience Segmentation, Social Media & Community Engagement, Content Coordination",
  },
  {
    category: "Digital & Analytics",
    detail: "Google Analytics, SEO, Data Visualization, Excel",
  },
  {
    category: "Design & Web",
    detail: "Adobe Creative Suite (Photoshop, Illustrator, InDesign), Canva, Figma, Print & Digital Production, WordPress, HTML/CSS",
  },
  {
    category: "Data Tools",
    detail: "Python (Basic), R, SQL",
  },
  {
    category: "Professional Strengths",
    detail: "Highly Organized, Detail-Oriented, Cross-Functional Collaboration, Project Coordination, Proactive Ownership, Strong Communication",
  },
];

export const courses = [
  {
    name: "Marketing Management",
    description: "Focused on core marketing frameworks, including segmentation, targeting, positioning, and revenue generation.",
    takeaway: "Learned how marketing drives revenue by aligning customer needs with business goals through structured strategy.",
  },
  {
    name: "Branding Strategy",
    description: "Explored brand positioning, value proposition, and long-term brand equity development.",
    takeaway: "Strong brands are built by delivering a clear and consistent value that creates trust and long-term customer relationships.",
  },
  {
    name: "Social Media & Advertising",
    description: "Covered content strategy, campaign planning, and audience engagement across platforms such as Instagram and other digital channels.",
    takeaway: "Effective campaigns are built by understanding audience behavior on each platform and delivering the right message at the right time.",
  },
  {
    name: "Digital Marketing",
    description: "Focused on content marketing, organic growth, and performance-backing.",
    takeaway: "Learned how consistent content and data insights can drive engagement and support long-term growth.",
  },
  {
    name: "Marketing Research",
    description: "Designed and analyzed surveys using tools like Qualtrics, applying statistical methods such as t-tests and chi-square.",
    takeaway: "Data-driven insights are critical for understanding customer behavior and making informed marketing decisions.",
  },
  {
    name: "Leadership & Social Impact",
    description: "Worked on real-world nonprofit projects, including CRMII, focusing on marketing strategy and implementation.",
    takeaway: "Marketing can be a powerful tool to support mission-driven organizations and create measurable community impact.",
  },
  {
    name: "Data Visualization",
    description: "Learned how to communicate data through clear and structured visuals.",
    takeaway: "Presenting data effectively helps translate insights into actionable decisions.",
  },
];