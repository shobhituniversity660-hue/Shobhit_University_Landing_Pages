import { TickerItem, SpecificationItem, FAQItem, CurriculumSemester } from "./types";

export const NAVIGATION_LINKS = [
  { label: "ACCREDITATIONS", href: "#interactive-hero-cards" },
  { label: "PROGRAMMES", href: "#programs-directory" },
  { label: "PLACEMENTS", href: "#placements" },
  { label: "NOTABLE ALUMNI", href: "#notable-alumni" },
  { label: "ADMISSIONS", href: "#admission-procedure-and-routes" },
  { label: "CONNECTIVITY", href: "#connectivity-and-access" },
];

export const TICKER_ITEMS: TickerItem[] = [
  { id: "1", text: "Among the Top 30 Universities in India", highlight: "Ranked", iconType: "accredited" },
  { id: "2", text: "Among India's Top Distinguished Law Schools", highlight: "Ranked #1", iconType: "accredited" },
  { id: "3", text: "Among India's Top Multidisciplinary Deemed-to-be Universities", highlight: "Ranked #12", iconType: "accredited" },
  { id: "4", text: "Among the Top 23 Engineering Institutions in India in the Overall Category", highlight: "Ranked", iconType: "accredited" },
  { id: "5", text: "Among the Top 27 B-Schools in India in the Overall Category", highlight: "Ranked", iconType: "accredited" },
  { id: "6", text: "Among India's Top Multidisciplinary Deemed-to-be Universities", highlight: "Ranked #17", iconType: "accredited" },
];

export const SPECIFICATIONS: SpecificationItem[] = [
  {
    id: "spec-law",
    category: "Ranked #1 In India",
    title: "Top Distinguished Law School of India",
    description: "An apex tier law school recognized for superior legal scholarship, state-of-the-art moot courts, and prominent national placements.",
    outcome: "Outcome: Prestigious Credentials",
    colorTheme: "red",
  },
  {
    id: "spec-engineering",
    category: "Ranked #2 In India",
    title: "Top Engineering College of Eminence",
    description: "Fostering groundbreaking technological innovation through elite research labs, expert faculty guidance, and next-gen tech partnerships.",
    outcome: "Outcome: Industrial Readiness",
    colorTheme: "pink",
  },
  {
    id: "spec-bschool",
    category: "Ranked #10 In North Zone",
    title: "Top B School",
    description: "Empowering visionary managers with hands-on global MBA paths, real-world case simulations, and outstanding global industry connect.",
    outcome: "Outcome: Elite Leadership",
    colorTheme: "blue",
  },
  {
    id: "spec-university",
    category: "Ranked #17 In India",
    title: "Multi-Disciplinary Deemed to be Universities",
    description: "A premier multi-disciplinary academic ecosystem offering advanced pathways across diverse fields with stellar accreditations.",
    outcome: "Outcome: Global Opportunities",
    colorTheme: "red",
  },
];

export const SPECIALIZATIONS = [
  {
    id: "analytics",
    name: "Business Analytics & AI",
    overview: "Formulated with IBM to prepare students for data-driven leadership roles. Learn modern analytics tools, machine learning, and business modeling.",
    skills: ["Python for BI", "Predictive Modeling", "IBM Watson Suite", "Tableau Creator"],
    partners: ["IBM", "Intel", "Amazon Web Services"],
  },
  {
    id: "fintech",
    name: "FinTech & Financial Markets",
    overview: "Covers digital banking, blockchain technology, algorithmic trading, and tech-driven risk management in collaboration with global financial players.",
    skills: ["Blockchain Architectures", "Algorithmic Trading", "Risk Analytics", "Digital Ledger Tech"],
    partners: ["Razorpay", "KPMG", "HDFC Bank"],
  },
  {
    id: "operations",
    name: "Cloud Operations & Supply Chain",
    overview: "Integrates modern cloud infrastructures with global supply chains. Prepares students for operations manager roles in high-scale tech firms.",
    skills: ["Cloud Systems (AWS/Azure)", "Agile Operations", "ERP Solutions (SAP)", "Logistics Big Data"],
    partners: ["Microsoft", "IBM", "DHL Logistics"],
  }
];

export const CURRICULUM_SEMESTERS: CurriculumSemester[] = [
  {
    semester: "Semester 1",
    title: "Foundations of Modern Management",
    coreSubjects: ["Managerial Economics", "Organization Behavior & Leadership", "Corporate Financial Accounting", "Marketing Management in Digital Era"],
    certifications: ["IBM Enterprise Design Thinking", "Professional Communication Excellence"],
  },
  {
    semester: "Semester 2",
    title: "Core Business Analytics & AI Systems",
    coreSubjects: ["Strategic Management", "Applied Business Analytics", "Data-Driven Marketing Analytics", "Corporate Governance & Ethics"],
    certifications: ["IBM Predictive Analytics Certification", "Microsoft Excel Expert Badge"],
  },
  {
    semester: "Semester 3",
    title: "Specialization Track & Applied Practice",
    coreSubjects: ["Advanced Machine Learning for Managers", "Digital Business Transformation", "Elective I: FinTech / Cloud Operations", "Elective II: Intelligent Analytics"],
    certifications: ["IBM Watson Assistant Specialist", "AWS Cloud Practitioner Badge"],
  },
  {
    semester: "Semester 4",
    title: "Global Capstone & Strategic Leadership",
    coreSubjects: ["Global Business Strategy", "Venture Capital & Entrepreneurship", "Capstone Project in Business Analytics", "Strategic Decision Science"],
    certifications: ["Global MBA Capstone Credential", "IBM Watson AI Certification"],
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-univ",
    category: "General",
    question: "What is the affiliation and accreditation of this MBA program?",
    answer: "Our MBA program is fully approved by AICTE (All India Council for Technical Education) and affiliated with Bengaluru North University (BNU), ensuring a top-tier government-recognized state degree accepted globally for higher education and corporate recruitment.",
  },
  {
    id: "faq-ibm",
    category: "Academics",
    question: "How does the IBM dual specialization work?",
    answer: "Every student undergoes the standard BNU affiliated academic coursework alongside dedicated training modules co-developed and taught by IBM Industry Practitioners. Students graduate with an MBA Degree from Bengaluru North University and dual industry-recognized certificates issued directly by IBM.",
  },
  {
    id: "faq-stipend",
    category: "Internships",
    question: "How is the guaranteed stipend structured starting in Semester 3?",
    answer: "Starting in Semester 3, students are placed in formal field internships with our partner corporations. Under this 'Earn While You Learn' framework, students receive a guaranteed stipend ranging from ₹15,000 to ₹25,000 per month, gaining real-world experience before they even graduate.",
  },
  {
    id: "faq-placement",
    category: "Placements",
    question: "What has been the track record of past placements at IZEE?",
    answer: "IZEE has over 16 years of leadership in management placements. We maintain a 100% placement track record with our maximum salary package touching 24 LPA and our average starting salary holding steady at 7.5 to 8.5 LPA. Over 350+ recruiters pull from our cohort annually.",
  },
  {
    id: "faq-eligibility",
    category: "Admissions",
    question: "What are the eligibility criteria and final selection process?",
    answer: "Applicants must hold a Bachelor's degree with a minimum of 50% aggregate marks (45% for reserved categories). Standard management entrance test scores (CAT/MAT/XAT/KMAT/PGCET) are considered, followed by a personal competency interview and micro-presentation.",
  }
];

export const PLACEMENT_STATS = {
  maxPackage: "24.0 LPA",
  averagePackage: "8.2 LPA",
  placementRate: "100%",
  recruiters: "350+",
  topRecruiters: [
    { name: "IBM", logo: "💻" },
    { name: "KPMG", logo: "📊" },
    { name: "Infosys", logo: "🌐" },
    { name: "Capgemini", logo: "🛡️" },
    { name: "Razorpay", logo: "💳" },
    { name: "Wipro", logo: "🖥️" },
    { name: "HDFC Bank", logo: "🏦" },
    { name: "Amazon", logo: "🛒" },
  ],
  salaryDistribution: [
    { tier: "8 LPA - 12 LPA", percentage: 55 },
    { tier: "12 LPA - 18 LPA", percentage: 30 },
    { tier: "18 LPA - 24 LPA", percentage: 15 },
  ]
};
