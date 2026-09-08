export type TimelineLink = { label: string; href: string };

export type TimelineItem = {
  id: string;
  date: string;
  title: string;
  org?: string;
  icon: string;
  description: string;
  tags: string[];
  links?: TimelineLink[];
};

const companyLinks = {
  aleido: [{ label: "Visit Aleido", href: "https://aleido.com/hu" }],
  mondi: [{ label: "Visit Mondi.tech", href: "https://mondi.tech/" }],
  morgan: [{ label: "Visit Morgan", href: "https://www.morganadvancedmaterials.com/en-gb/careers-at-morgan/life-at-our-sites/life-at-our-sites-budapest/life-at-our-sites-budapest-hu/" }],
};

export const trunk: TimelineItem[] = [
  { id: "born", date: "Nov 22, 1990", title: "Born", icon: "Sparkles", description: "The beginning of the journey.", tags: [] },
  { id: "primary", date: "Jun 2005", title: "Primary School Graduation", org: "Széchenyi István Általános Iskola, Mohács", icon: "GraduationCap", description: "Completed primary school in Mohács.", tags: [], links: [{ label: "Visit School", href: "https://szechenyi-mohacs.edu.hu/" }] },
  { id: "highschool", date: "Jun 2010", title: "High School Graduation", org: "Kisfaludy Károly Gimnázium, Mohács", icon: "Award", description: "Completed secondary education in Mohács.", tags: [], links: [{ label: "Visit School", href: "https://mohacsikisfaludy.hu/" }] },
  { id: "university", date: "2010 – 2013", title: "Communication and Multimedia Studies", org: "Pécsi Tudományegyetem – Műszaki és Informatikai Kar", icon: "School", description: "Studied communication, multimedia, design, photography and video production.", tags: ["#multimedia", "#graphicsdesign", "#photography", "#videoproduction"] },
];

export const professional: TimelineItem[] = [
  { id: "cnc-course", date: "Jan 2012 – Aug 2014", title: "CNC Mechanic Course", org: "OKTÁV Technikum és Szakképző Iskola", icon: "Cog", description: "Completed professional training in CNC machining.", tags: ["#manufacturing"] },
  { id: "ohb-project", date: "Jan 2016", title: "Project Manager (OHB Project)", org: "Semcon, Warwick, UK", icon: "Rocket", description: "Managed the OHB project while coordinating technical documentation and delivery.", tags: ["#projectmanagement", "#technialwriter"], links: companyLinks.aleido },
  { id: "morgan-cnc", date: "Jan 2015 – Feb 2015", title: "CNC Mechanic", org: "Morgan Advanced Materials, Budapest", icon: "Cog", description: "Worked with precision machining of advanced material components.", tags: ["#manufacturing"], links: companyLinks.morgan },
  { id: "morgan-rainbow", date: "Feb 2015 – Jun 2015", title: "Technologist & Project Manager (Rainbow Project)", org: "Morgan Advanced Materials, Swansea UK", icon: "ClipboardList", description: "Managed the Rainbow Project while coordinating technical and manufacturing work.", tags: ["#projectmanagement", "#manufacturing"], links: companyLinks.morgan },
  { id: "morgan-shift", date: "Jun 2015 – Oct 2015", title: "Shift Lead", org: "Morgan Advanced Materials, Budapest", icon: "Users", description: "Led a production shift while balancing output, quality and team coordination.", tags: ["#teamlead", "#manufacturing"], links: companyLinks.morgan },
  { id: "aleido-tw", date: "Oct 2015 – Jan 2016", title: "Technical Writer", org: "Aleido", icon: "PenLine", description: "Created structured technical documentation for industrial and automotive clients.", tags: ["#technicalwriting", "#projectmanagement"], links: companyLinks.aleido },
  { id: "aleido-coord", date: "Jan 2016 – Apr 2017", title: "Project Coordinator", org: "Aleido", icon: "ClipboardList", description: "Coordinated writer teams, schedules and client deliverables across projects.", tags: ["#projectmanagement", "#technicalwriting", "#teamlead"], links: companyLinks.aleido },
  { id: "aleido-return", date: "Nov 2017 – Feb 2020", title: "Rejoined Aleido as a Project Coordinator", org: "Aleido, Budapest", icon: "Undo2", description: "Returned to Aleido to continue project coordination and technical writing.", tags: ["#projectmanagement", "#technicalwriting", "#teamlead"], links: companyLinks.aleido },
  { id: "mondi-tw", date: "Feb 2020 – May 2020", title: "Lead Technical Writer", org: "Mondi.tech", icon: "PenLine", description: "Led documentation strategy, tooling and standards for software products.", tags: ["#technicalwriting"], links: companyLinks.mondi },
  { id: "mondi-lead", date: "May 2020 – Apr 2026", title: "Team Lead & Project Manager", org: "Mondi.tech", icon: "Users", description: "Led a documentation team and managed client projects, budgets and delivery timelines.", tags: ["#projectmanagement", "#agile", "#teamlead", "#technicalwriting", "#it"], links: companyLinks.mondi },
  { id: "mondi-presales", date: "May 2023 – Aug 2025", title: "Pre-Sales, Business & Brand Development Associate", org: "Mondi.tech", icon: "TrendingUp", description: "Supported pre-sales, business development, brand work and growth initiatives.", tags: ["#onlinemarketing", "#presales", "#webdesign", "#brandmanagement", "#graphicsdesign", "#photography", "#videography"], links: companyLinks.mondi },
  { id: "sigma", date: "Apr 2026 – Jul 2026", title: "AI Project Manager", org: "Sigma Technology Hungary", icon: "BrainCircuit", description: "Managed AI-driven projects from discovery and scoping through delivery.", tags: ["#projectmanagement", "#agile", "#teamlead", "#technicalwriting", "#it"], links: [{ label: "Visit Sigma Technology", href: "https://sigmatechnology.com/companies/sigma-technology-hungary/" }] },
];

export const creative: TimelineItem[] = [
  { id: "drawing", date: "1998", title: "Early Passion for Drawing & Art", icon: "Palette", description: "The first enduring creative instinct, expressed through drawing and visual art.", tags: ["#art", "#graphicsdesign"] },
  { id: "poetry", date: "2004", title: "Writing Poetry", icon: "Feather", description: "Began writing poetry, laying the foundation for later lyrics and songwriting.", tags: ["#writing", "#poetry"] },
  { id: "guitar", date: "2007", title: "Buying the first guitar and joining a band", icon: "Guitar", description: "Bought a first guitar and joined a band.", tags: ["#music", "#audioengineering"] },
  { id: "piano", date: "2008", title: "Learning piano and writing songs", icon: "Piano", description: "Learned piano and began writing songs.", tags: ["#music", "#audioengineering"] },
  { id: "web-design", date: "2008", title: "Building my first website", icon: "PanelsTopLeft", description: "Built a first website to publish creative work.", tags: ["#ux", "#graphicsdesign", "#webdesign"] },
  { id: "photo", date: "2009", title: "Deep dive into photography and videography", icon: "Camera", description: "Went deeper into photography, editing and video production.", tags: ["#photography", "#videoproduction"] },
  { id: "hnd-guitar", date: "2012", title: "Vocals", org: "Heroes Never Die", icon: "Mic", description: "Performed vocals with Heroes Never Die.", tags: ["#music", "#audioengineering", "#socialmediamanagement"] },
  { id: "infinity", date: "Jan 2013", title: "Hybrid Reality — \"Infinity\" Solo EP Release", icon: "Disc3", description: "Wrote, recorded and released the Infinity solo EP.", tags: ["#music", "#audioengineering", "#socialmediamanagement", "#onlinemarketing", "#videoproduction"], links: [{ label: "Listen", href: "https://hybridreality.bandcamp.com/album/infinity-ep-2" }] },
  { id: "hnd-album", date: "Jun 2013", title: "Heroes Never Die — \"Rémálom\" EP Release", icon: "Disc3", description: "Released the Rémálom EP with Heroes Never Die.", tags: ["#music", "#audioengineering", "#socialmediamanagement", "#onlinemarketing"] },
  { id: "nexus", date: "Nov 2013", title: "Hybrid Reality — \"Nexus of Eden\" Solo EP Release", icon: "Disc3", description: "Released the Nexus of Eden solo EP.", tags: ["#music", "#audioengineering", "#socialmediamanagement", "#onlinemarketing", "#videoproduction"], links: [{ label: "Listen", href: "https://hybridreality.bandcamp.com/album/nexus-of-eden-ep" }] },
  { id: "silent-homes", date: "Aug 2015 – Jun 2016", title: "Vocals", org: "Silent Homes", icon: "Mic", description: "Performed vocals with Silent Homes.", tags: ["#music", "#socialmediamanagement", "#onlinemarketing"] },
  { id: "silent-ep", date: "Nov 2015", title: "Silent Homes — \"Soul Harbour\" EP Release", icon: "Disc3", description: "Released the Soul Harbour EP with Silent Homes.", tags: ["#music", "#socialmediamanagement", "#onlinemarketing"], links: [{ label: "Listen", href: "https://silenthomes.bandcamp.com/album/soul-harbour" }] },
  { id: "thy-keeper", date: "Apr 2017", title: "Andrew Lenhard — \"Thy Keeper\" Solo Album Release", icon: "Disc3", description: "Released a self-produced solo album under the Andrew Lenhard name.", tags: ["#music", "#audioengineering", "#socialmediamanagement", "#onlinemarketing", "#videoproduction"], links: [{ label: "Listen", href: "https://andrewlenhard.bandcamp.com/album/thy-keeper" }] },
  { id: "soulharbour", date: "Oct 2022", title: "Vocals", org: "Soulharbour", icon: "Mic", description: "Performed vocals with Soulharbour.", tags: ["#music", "#graphicsdesign", "#videoproduction", "#photography", "#socialmediamanagement", "#onlinemarketing", "#webdesign"], links: [{ label: "Visit Soulharbour", href: "https://soulharbour.net/" }] },
  { id: "ak11", date: "2022", title: "AK11 on social media", icon: "Palette", description: "Developed the AK11 visual presence on social media.", tags: ["#graphicsdesign", "#art"], links: [{ label: "View AK11 Arts", href: "https://www.instagram.com/ak11_arts/" }] },
  { id: "youtube", date: "2020", title: "Andrew Kltcz YouTube Channel", icon: "Youtube", description: "Created photo and video tutorials for other creators.", tags: ["#videoproduction", "#photography", "#socialmediamanagement", "#onlinemarketing"], links: [{ label: "Watch Playlists", href: "https://www.youtube.com/@andewkltcz/playlists" }] },
  { id: "midnight", date: "Jan 2018 – Oct 2022", title: "Vocals", org: "Midnight in November", icon: "Mic", description: "Performed vocals with Midnight in November.", tags: ["#music", "#graphicsdesign", "#videoproduction", "#photography", "#socialmediamanagement", "#onlinemarketing"] },
  { id: "odyssey", date: "Nov 2023", title: "Soulharbour — \"Odyssey\" Album Release", icon: "Disc3", description: "Released the Odyssey album with Soulharbour.", tags: ["#music", "#graphicsdesign", "#videoproduction", "#photography", "#socialmediamanagement", "#onlinemarketing"], links: [{ label: "Listen", href: "https://open.spotify.com/album/3JZ1rWfbylDSbSur6To4ir?si=UILYRm5UQAOPl0SMecAgqQ" }] },
  { id: "primal", date: "Apr 2026", title: "Soulharbour — \"Primal\" EP Release", icon: "Disc3", description: "Released the Primal EP with Soulharbour.", tags: ["#music", "#graphicsdesign", "#videoproduction", "#photography", "#socialmediamanagement", "#onlinemarketing"], links: [{ label: "Listen", href: "https://open.spotify.com/album/522NSqwPB6Mq6PZiTmqAow?si=g3sSLsKrSa-Vr-mVfYAKYg" }] },
];

export const convergence: TimelineItem = {
  id: "wales",
  date: "Apr 2017 – Nov 2017",
  title: "Adventures in Swansea, UK",
  org: "Relocation",
  icon: "Plane",
  description: "",
  tags: [],
};
