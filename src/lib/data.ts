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
    title: "Fourth Student Graphic Book of the Year Awards",
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
    slug: "crmii-marketing-strategy",
  },
  {
    number: 2,
    title: "Driving Impact Through Innovation & Nonprofit Collaboration",
    subtitle: "DeisHacks 2026: Brandeis University | Fall 2025 – Spring 2026",
    description:
      "Co-developed a real-world challenge with a nonprofit (CRMII) to address visibility and visitor experience gaps; led a student team in a 48-hour innovation challenge, earning Best Non-Technical Solution.",
    buttonLabel: "View Project",
    slug: "DeisHacks-2026",
  },
  {
    number: 3,
    title: "Driving Growth Through Data and Strategy",
    subtitle: "Rivian: Market Analysis & Strategy | Spring Semester 2025",
    description:
      "Analyzed Rivian's market position and operational challenges to identify data-driven strategies for growth and efficiency.",
    buttonLabel: "View Case Study",
    slug: "rivian-market-analysis",
  },
  {
    number: 4,
    title: "Automotive Brand Strategy Simulation",
    subtitle: "Firm E – Stakeholders Meeting | Spring Semester 2025",
    description:
      "A competitive marketing and branding simulation where teams shape brand positioning and compete for market leadership.",
    buttonLabel: "View Project",
    slug: "brand-strategy",
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
    school: "Brandeis School of Business & Economics",
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
    company: "WCVB Channel 5 | Hearst Television",
    location: "Needham, MA",
    role: "Creative Services Intern",
    period: "09/2026 – Present",
    bullets: [
      "Write promotional copy and topical content for NewsCenter 5 and Chronicle, applying Associated Press (AP) style and broadcast writing principles while supporting audience engagement and station brand messaging",
      "Support promotional and commercial productions, including in-house and on-location shoots, contributing to content development and creative execution from planning through production",
      "Contribute to public service announcement (PSA) production and community-focused content, collaborating with the Creative Services team on broadcast and digital materials",
      "Develop knowledge of broadcast marketing, promotional writing, brand voice, and audience-focused storytelling in a professional television environment",
    ],
  },
  {
    company: "Boston Event Guide",
    location: "Needham, MA",
    role: "Digital Content & Marketing Specialist Intern",
    period: "07/2026 – Present",
    bullets: [
      "Increased average Weekend Roundup views by 350%+ through audience-focused content creation, SEO optimization, strategic event curation, internal linking, and promotional copy",
      "Improved content discoverability by conducting SEO keyword research and applying AEO/GEO practices across blog posts, event listings, and website content",
      "Analyzed website traffic, audience engagement, conversions, and content KPIs to identify performance trends and inform content optimization decisions",
      "Managed content publishing and website updates through Joomla CMS, optimizing metadata, internal links, content structure, and on-page elements for search visibility and user experience",
    ],
  },
  {
    company: "Charles River Museum of Industry & Innovation",
    location: "Waltham, MA",
    role: "Volunteer Marketing Consultant",
    period: "09/2025 – 05/2026",
    bullets: [
      "Developed a digital marketing strategy to strengthen brand visibility, positioning, and audience engagement",
      "Built audience segmentation frameworks to support targeted outreach based on visitor needs, interests, and engagement opportunities",
      "Redesigned CRMII’s brand guidelines to improve consistency across digital and print touchpoints and strengthen credibility with visitors, partners, and funders",
      "Restructured website content and navigation to improve brand storytelling and user experience while supporting engagement with visitors and potential funders",
    ],
  },
  {
    company: "DeisHacks 2026 | Brandeis University",
    location: "Waltham, MA",
    role: "Board Fellow",
    period: "09/2025 – 02/2026",
    bullets: [
      "Partnered with a nonprofit organization to identify a real-world business challenge, translate stakeholder needs into project requirements, and define a clear challenge for student teams",
      "Mentored student teams through a 48-hour innovation challenge, providing strategic feedback and evaluating solutions based on stakeholder needs, feasibility, and project objectives",
      "Coordinated an on-site museum visit to help student teams better understand the organization’s mission, audiences, and business challenges",
    ],
  },
  {
    company: "Comprint Inc.",
    location: "Waltham, MA",
    role: "Graphic Artist",
    period: "10/2021 – 08/2024",
    bullets: [
      "Prepared and optimized customer artwork for screen-printing production, ensuring technical accuracy and production readiness",
      "Improved production efficiency by increasing artwork readiness from approximately 5 days to 3 weeks ahead of production schedules, reducing workflow bottlenecks and supporting on-time delivery",
      "Maintained color accuracy and brand consistency across 300+ print projects, ensuring high-quality execution of client-branded materials",
      "Collaborated with sales, account management, and production teams to coordinate approvals, resolve production issues, and streamline workflows",
    ],
  },
  {
    company: "BBC Printing and Products Inc.",
    location: "Waltham, MA",
    role: "Graphic Designer & Customer Experience Specialist",
    period: "02/2017 – 11/2020",
    bullets: [
      "Assisted showroom and phone customers in selecting design and print products that matched their needs, while promoting relevant services and supporting a positive customer experience",
      "Designed multicultural menus and promotional materials tailored to diverse audiences, strengthening visual communication and audience appeal",
      "Prepared production-ready artwork and coordinated with print teams to ensure technical accuracy, quality standards, and on-time delivery",
    ],
  },
  {
    company: "Dunkin’ Donuts LLC",
    location: "Waltham, MA",
    role: "Assistant Manager",
    period: "02/2018 – 09/2021",
    bullets: [
      "Supported daily store operations, staff scheduling, training, inventory, and cash management while maintaining service and quality standards",
      "Coordinated shifts, delegated responsibilities, and resolved customer concerns while supporting the store manager with day-to-day operations",
    ],
  },
  {
    company: "Dunkin’ Donuts LLC",
    location: "Waltham, MA",
    role: "Shift Lead",
    period: "02/2017 – 01/2018",
    bullets: [
      "Led team members during daily shifts, prioritizing workflows to maintain efficiency, product quality, and timely service",
      "Trained and supported team members while coordinating front-end operations and maintaining a positive customer experience",
    ],
  },
  {
    company: "Dunkin’ Donuts LLC",
    location: "Waltham, MA",
    role: "Crew Member",
    period: "02/2014 – 01/2017",
    bullets: [
      "Provided fast, accurate service in a high-volume environment while maintaining product and service standards",
      "Assisted customers at the point of sale, handled transactions, and addressed customer needs to support a positive in-store experience",
    ],
  },
  {
    company: "Tolue Advertising Group (TAG Agency)",
    location: "Tehran, Iran",
    role: "Art Director",
    period: "04/2013 – 09/2014",
    bullets: [
      "Led creative development of visual concepts and marketing materials, providing design direction and ensuring alignment with client brand standards",
      "Translated brand strategies into cohesive visual identities and creative concepts across digital and print channels",
      "Collaborated with marketing and creative teams to develop integrated advertising materials supporting client brand and promotional objectives",
    ],
  },
  {
    company: "Tolue Advertising Group (TAG Agency)",
    location: "Tehran, Iran",
    role: "Creative Designer",
    period: "03/2012 – 03/2013",
    bullets: [
      "Designed digital and print marketing assets for multiple clients, translating creative briefs and brand requirements into audience-focused visual communications",
      "Designed a website interface for a professional networking platform, applying visual hierarchy and user-centered design principles while collaborating with a web developer to translate designs into a functional digital experience",
      "Created a branded planner for Qatar Airways, maintaining consistency with established brand guidelines and visual identity",
    ],
  },
];

export const certifications = [
  {
    org: "HubSpot Academy",
    location: "Online",
    description:
      "HubSpot Academy is an online learning platform that delivers globally recognized certifications and builds practical skills in digital marketing, sales, CRM, and business growth.",
    items: [
      {
        name: "Email Marketing Certified",
        period: "Issued 09/2026",
        bullets: [
          "Covered email strategy, segmentation, personalization, automation, deliverability, and performance measurement to create effective email marketing campaigns",
        ],
      },
      {
        name: "HubSpot Reporting Certified",
        period: "Issued 07/2026",
        bullets: [
          "Developed skills in building reports, analyzing marketing and sales data, tracking performance, and using data insights to support decision-making",
        ],
      },
      {
        name: "Social Media Certified",
        period: "Issued 07/2026",
        bullets: [
          "Covered social media strategy, content planning, audience engagement, social listening, advertising, and performance measurement across digital platforms",
        ],
      },
      {
        name: "SEO Certified",
        period: "Issued 05/2026",
        bullets: [
          "Covered website optimization, keyword research, on-page SEO, technical SEO, and content strategy to improve organic search visibility",
        ],
      },
      {
        name: "Content Marketing Certified",
        period: "Issued 04/2026",
        bullets: [
          "Focused on developing audience-centered content strategies, creating valuable digital content, storytelling, content promotion, and measuring performance",
        ],
      },
      {
        name: "Inbound Certified",
        period: "Issued 04/2026",
        bullets: [
          "Covered inbound methodology, buyer personas, customer journey mapping, and strategies for attracting, engaging, and supporting audiences throughout the customer experience",
        ],
      },
    ],
  },
  {
    org: "University of Massachusetts Lowell",
    location: "Lowell, MA",
    description: "Web Design & Development",
    period: "Issued 12/2022",
    items: [],
  },
];

export const skills = [
  {
    category: "Marketing & Branding",
    detail:
      "Brand Campaign Support, Go-to-Market Execution, Audience Segmentation, Social Media & Community Engagement, Content Coordination",
  },
  {
    category: "Digital & Analytics",
    detail: "Google Analytics, SEO, Data Visualization, Excel",
  },
  {
    category: "Design, Video & Web",
    detail:
      "Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere Pro, After Effects), Canva, Figma, CMS (Joomla, WordPress), HTML/CSS, Print & Digital Production",
  },
  {
    category: "Data Tools",
    detail: "Python (Basic), R, SQL",
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