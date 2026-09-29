import {
  ProfileData,
  TechnicalSkill,
  AccomplishmentMetric,
  ProjectItem,
  ExperienceItem,
} from '../types/portfolio';

import avatarImg from '../assets/images/grad_pic.JPG';
import projectNutriorityImg from '../assets/images/nutriority_showcase_v2_1790691562399.jpg';
import projectFloodAlertImg from '../assets/images/briane_flood_alert_showcase_1790692098215.jpg';

export const profileData: ProfileData = {
  name: 'Nexon Jr. Y. Sabañao',
  fullNameFormal: 'Nexon Jr. Y. Sabañao',
  degree: 'Bachelor of Science in Information Technology',
  executiveHeadline:
    'Detail-oriented Information Technology graduate with hands-on experience in Python, Android development, embedded IoT systems, and operational data management. Adaptable, quick to learn, and eager to contribute to technical and operational roles.',
  email: 'nexonjrsabanao@gmail.com',
  phone: '+639167306105',
  location: 'Trece Martires, Cavite, Philippines 4109',
  githubUrl: 'https://github.com/nexonsabanao',
  githubUsername: 'nexonsabanao',
  facebookUrl: 'https://www.facebook.com/Niccosy1',
  instagramUrl: 'https://www.instagram.com/akroma_22/',
  avatarImage: avatarImg,
  education: {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Cavite State University',
    graduationDate: 'Graduated July 2026',
    location: 'Cavite, Philippines',
    highlights: [
      'Focus in Software Development, Python Scripting, and Embedded IoT Systems',
      'Developed native Android fitness app (Nutriority) with Firebase Firestore',
      'Engineered Barangay Weather & Flood Alert IoT system with LilyGO TTGO T-SIM',
    ],
  },
  targetRoles: [
    'Junior / Associate Software Developer',
    'Python & Backend Developer',
    'Android / Mobile Developer',
    'IoT & Embedded Systems Engineer',
    'IT Operations & Data Specialist',
  ],
  corePillars: [
    {
      title: 'Python & Software Logic',
      description:
        'Core proficiency in Python programming for automation, scripting, API data handling, and backend algorithmic tasks.',
      metrics: 'Python · C++ · Java · Algorithms',
    },
    {
      title: 'Android & Firebase Development',
      description:
        'Built full-featured Android application using Kotlin, XML layouts, and real-time Firestore database synchronization.',
      metrics: 'Kotlin · Android Studio · Firestore',
    },
    {
      title: 'IoT Telemetry & Operations',
      description:
        'Designed early-warning flood telemetry using ESP32 & Arduino C++, combined with MDRRMO operational experience.',
      metrics: 'LilyGO T-SIM · ESP32 · MS Excel',
    },
  ],
};

export const technicalSkills: TechnicalSkill[] = [
  // Programming Languages
  {
    name: 'Python',
    category: 'programming',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Primary language for automation, backend scripting, algorithmic logic, and data handling',
    tags: ['Scripting', 'Automation', 'Data Processing', 'APIs'],
  },
  {
    name: 'C++',
    category: 'programming',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Embedded microcontroller logic, Arduino firmware, and memory-efficient algorithms',
    tags: ['Embedded Systems', 'Algorithms', 'Firmware'],
  },
  {
    name: 'Java',
    category: 'programming',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Object-oriented programming principles, data structures, and application development',
    tags: ['OOP', 'Software Dev', 'Application Logic'],
  },
  {
    name: 'Kotlin',
    category: 'programming',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Native Android mobile architecture, view models, and responsive layout handlers',
    tags: ['Mobile', 'Android Studio', 'Coroutines'],
  },

  // Mobile & Cloud
  {
    name: 'Android Studio & XML',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Native Android UI layout design, Material standards, and APK publishing',
    tags: ['Android', 'XML Layouts', 'Mobile UI'],
  },
  {
    name: 'Firebase Firestore',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Real-time cloud database, authentication, and document synchronization',
    tags: ['Cloud NoSQL', 'Authentication', 'Sync'],
  },
  {
    name: 'HTML & CSS',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: false,
    highlightText: 'Web UI layout structure, responsive styling, and web interfaces',
    tags: ['Web Frontend', 'Responsive Markup'],
  },

  // Hardware & IoT
  {
    name: 'ESP32 & Arduino (LilyGO TTGO T-SIM)',
    category: 'hardware_iot',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Sensor data processing, GSM/cellular emergency telemetry, and board wiring',
    tags: ['IoT', 'Microcontrollers', 'GSM Alerts'],
  },
  {
    name: 'STM32',
    category: 'hardware_iot',
    level: 'Familiar',
    featured: false,
    highlightText: 'ARM Cortex embedded firmware development and GPIO peripherals',
    tags: ['Embedded', 'ARM Cortex', 'Hardware'],
  },

  // Design & Media Tools
  {
    name: 'Adobe Creative Suite (Photoshop, Illustrator, Animate) & Canva',
    category: 'design_tools',
    level: 'Intermediate',
    featured: false,
    highlightText: 'Graphic asset design, UI mockups, vector artwork, and visual presentation',
    tags: ['UI Mockups', 'Vector Graphics', 'Visual Assets'],
  },

  // Office & Operational Tools
  {
    name: 'Microsoft Excel (Data Management)',
    category: 'office_data',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Spreadsheet organization, record structuring, operational reporting, and data analysis',
    tags: ['Data Management', 'Record Keeping', 'Reporting'],
  },
  {
    name: 'Microsoft Word & PowerPoint',
    category: 'office_data',
    level: 'Intermediate',
    featured: false,
    highlightText: 'Technical documentation, incident logging, and official report presentations',
    tags: ['Documentation', 'Presentations'],
  },
];

export const accomplishmentMetrics: AccomplishmentMetric[] = [
  {
    id: 'python-core',
    metric: 'Python Focus',
    label: 'Primary Programming Discipline',
    context: 'Scripting & Application Logic',
    description:
      'Skilled in writing clean, structured Python code for algorithmic tasks, automated workflows, and data processing.',
    category: 'software',
  },
  {
    id: 'mobile-app',
    metric: 'Full-Stack Mobile',
    label: 'Nutriority Android App',
    context: 'Kotlin & Firebase Firestore',
    description:
      'Developed and deployed native Android application featuring real-time Firestore sync and exercise API integration.',
    category: 'software',
  },
  {
    id: 'iot-alert',
    metric: 'Hardware Telemetry',
    label: 'Barangay Flood Alert System',
    context: 'LilyGO TTGO T-SIM & C++',
    description:
      'Engineered early warning telemetry system reading environmental sensors and dispatching automated emergency alerts.',
    category: 'iot',
  },
  {
    id: 'mdrrmo-ops',
    metric: 'Operational Support',
    label: 'MDRRMO Indang Support',
    context: 'Emergency Operations & Excel',
    description:
      'Assisted disaster operations, coordinated team drills, and organized operational incident records in Microsoft Excel.',
    category: 'operations',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'nutriority-app',
    title: 'Workout & Nutrition Planner Android App',
    subtitle: 'Native Mobile Health & Fitness Tracker (Nutriority)',
    category: 'Android & Mobile',
    summary:
      'Native Android fitness planner app built with Kotlin, featuring real-time Firebase Firestore data synchronization, custom XML UI layouts, and API-based exercise data.',
    fullDescription:
      'Nutriority is a native Android application built to assist users with daily workout and nutrition planning. Developed in Android Studio using Kotlin, it connects with Firebase Firestore for real-time document synchronization and user authentication. UI layouts were designed natively in XML for fast, responsive rendering.',
    image: projectNutriorityImg,
    tags: ['Kotlin', 'Android Studio', 'Firebase Firestore', 'XML Layouts', 'REST APIs'],
    keyHighlights: [
      { label: 'Platform', value: 'Android (Native)' },
      { label: 'Backend', value: 'Firebase Firestore' },
      { label: 'Language', value: 'Kotlin / Java' },
    ],
    technicalFeatures: [
      'Structured Kotlin architecture with view model bindings',
      'Integrated Firebase Firestore for user and planner data',
      'Custom XML layouts following clean mobile design guidelines',
      'API-based exercise data ingestion and planner logic',
    ],
    liveUrl: 'https://nutriority.github.io/Installer',
    githubUrl: 'https://github.com/nexonsabanao',
    installerUrl: 'https://nutriority.github.io/Installer',
    featured: true,
  },
  {
    id: 'weather-flood-alert',
    title: 'Weather-based Flood Alert System for Barangay',
    subtitle: 'IoT Telemetry & Emergency Notification System',
    category: 'IoT & Embedded Systems',
    summary:
      'Disaster risk reduction early-warning platform combining embedded C++ firmware on a LilyGO TTGO T-SIM board with a lightweight HTML/CSS web monitoring interface.',
    fullDescription:
      'Engineered an IoT weather and flood monitoring station for local community disaster risk mitigation. Uses an Arduino-compatible LilyGO TTGO T-SIM board with embedded C++ logic to track precipitation and water level thresholds, triggering automated alerts alongside a web dashboard UI.',
    image: projectFloodAlertImg,
    tags: ['C++', 'Arduino', 'LilyGO TTGO T-SIM', 'ESP32', 'HTML / CSS', 'GSM Telemetry'],
    keyHighlights: [
      { label: 'Microcontroller', value: 'LilyGO T-SIM / ESP32' },
      { label: 'Firmware', value: 'Embedded C++' },
      { label: 'Web UI', value: 'HTML & CSS' },
    ],
    technicalFeatures: [
      'Embedded C++ firmware for continuous sensor monitoring and threshold triggers',
      'Cellular GSM connectivity for emergency notification broadcasts',
      'Clean web interface built with HTML and CSS for real-time telemetry viewing',
      'Automated weather forecast and alert evaluation logic',
    ],
    liveUrl: 'https://weather-project-a5fb5.web.app/',
    githubUrl: 'https://github.com/nexonsabanao',
    featured: true,
  },
];

export const workExperience: ExperienceItem[] = [
  {
    id: 'mdrrmo-assistant',
    role: 'Office Assistant',
    company: 'Municipal Disaster Risk Reduction and Management Office (MDRRMO)',
    location: 'Indang, Cavite, Philippines',
    employmentType: 'On-the-Job Training',
    startDate: 'February 2026',
    endDate: 'May 2026',
    current: false,
    summary:
      'Provided administrative support, operational data management, and emergency response coordination for the municipal disaster risk reduction agency.',
    responsibilities: [
      'Assisted in disaster preparedness and response operations',
      'Coordinated with team members during emergency drills and activities',
      'Maintained records and reports of incidents and operations',
      'Supported staff in organizing files and preparing documents',
      'Managed data using Microsoft Excel',
    ],
    toolsUsed: [
      'Microsoft Excel',
      'Microsoft Word & PowerPoint',
      'Incident Reports & Records',
    ],
  },
];

export const accessibilityReportData = {
  wcagLevel: 'WCAG 2.1 AA / AAA',
  overallScore: '100 / 100',
  contrastRatio: '8.4:1 (Pass AAA)',
  checks: [
    {
      rule: '1.4.3 Contrast (Minimum)',
      requirement: 'Text contrast exceeds 4.5:1 for normal text and 3:1 for large text',
      status: 'Passed (8.4:1)',
      score: '100%',
    },
    {
      rule: '2.1.1 Keyboard Accessible',
      requirement: 'All functionality operable through keyboard with visible focus styles',
      status: 'Passed',
      score: '100%',
    },
    {
      rule: '2.4.1 Bypass Blocks',
      requirement: 'Skip to main content mechanism provided at top of page',
      status: 'Passed',
      score: '100%',
    },
    {
      rule: '4.1.2 Name, Role, Value',
      requirement: 'Semantic HTML5 structure and correct ARIA landmarks',
      status: 'Passed',
      score: '100%',
    },
  ],
};

