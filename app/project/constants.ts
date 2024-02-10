interface framework {
  assets: string;
  name: string;
}

interface Projects {
  id: number;
  description: string;
  name: string;
  tools: framework[];
  links?: string;
  github?: string;
}

export const projects: Projects[] = [
  {
    id: 1,
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS, my portfolio is a dynamic showcase of my skills and experiences. Fusing elegant UX designs crafted with Figma, the site features a seamless navigation through my home, about me, projects, and contact pages. Explore my journey, discover the projects I've worked on, and connect with me easily. It's not just a portfolio; it's a digital representation of my passion for web development and design excellence.",
    name: "Haree Prasad",
    tools: [
      {
        assets: "/assets/Nextjs.svg",
        name: "Nextjs",
      },
      {
        assets: "/assets/Typescript.svg",
        name: "Typescript",
      },
      {
        assets: "/assets/Tailwind.svg",
        name: "Tailwind",
      },
      {
        assets: "/assets/Figma.svg",
        name: "Figma",
      },
    ],
    github: "https://github.com/Haree123/Personal-Website-v2",
    links: "https://dropbox-clone-nextjs-six.vercel.app/",
  },
  {
    id: 2,
    description:
      "Experience the power of modern web development with my Dropbox Clone, crafted using Next.js, TypeScript, Tailwind CSS, and Shadnci for a sleek user interface. Leveraging the robust capabilities of Redux Toolkit, the application seamlessly connects to Firebase Storage and Cloud Firestore, offering efficient file upload, download, and management functionalities. Explore a responsive and intuitive platform with real-time updates for file listings, renaming, and deletion. Elevate your file-sharing experience with this cutting-edge Dropbox Clone.",
    name: "Dropbox Clone",
    tools: [
      {
        assets: "/assets/Nextjs.svg",
        name: "Nextjs",
      },
      {
        assets: "/assets/Typescript.svg",
        name: "Typescript",
      },
      {
        assets: "/assets/Shadcn.svg",
        name: "Shadcn UI",
      },
      {
        assets: "/assets/Tailwind.svg",
        name: "Tailwind",
      },
      {
        assets: "/assets/Redux.svg",
        name: "Redux Toolkit",
      },
      {
        assets: "/assets/Firebase.svg",
        name: "Firebase",
      },
    ],
    github: "https://github.com/Haree123/Dropbox-Clone-nextjs",
    links: "https://dropbox-clone-nextjs-six.vercel.app/",
  },
  {
    id: 3,
    description:
      "Dive into the cinematic universe with Film Box, a dynamic Next.js web app powered by TypeScript, Tailwind CSS, and Zustand state management. Explore trending movies, TV shows, and detailed pages for each with paginated listings. Uncover in-depth insights with filter options for release dates and first air dates. Utilizing TMDB API, Film Box delivers an immersive experience, seamlessly blending cutting-edge technologies for a comprehensive and interactive exploration of the world of entertainment.",
    name: "Film Box",
    tools: [
      {
        assets: "/assets/Nextjs.svg",
        name: "Nextjs",
      },
      {
        assets: "/assets/Typescript.svg",
        name: "Typescript",
      },
      {
        assets: "/assets/Tailwind.svg",
        name: "Tailwind",
      },
      {
        assets: "/assets/zustand.svg",
        name: "Zustand",
      },
      {
        assets: "/assets/Firebase.svg",
        name: "TMDB API",
      },
    ],
    github: "https://github.com/Haree123/nextjs-movie-database",
    links: "https://nextts-movie-database.vercel.app/",
  },
  {
    id: 4,
    description:
      "Empower your warehouse operations with precision using my Warehouse Management System. This robust application, built with React, JavaScript, Material-UI, SCSS, Redux Toolkit, and React Query, seamlessly manages inbound processes such as Purchase Orders, item receiving, and quality checks. Enhancing efficiency, it employs a smart container system, facilitating the seamless movement of items between mobile and fixed containers. On the outbound front, the system effortlessly generates orders, assigns tasks to users, allowing for streamlined item picking, packing, and loading onto trucks. With APIs developed in Java, this comprehensive solution ensures a smooth, end-to-end warehouse workflow.",
    name: "Warehouse Management System",
    tools: [
      {
        assets: "/assets/React.svg",
        name: "React",
      },
      {
        assets: "/assets/Javascript.svg",
        name: "Javascript",
      },
      {
        assets: "/assets/MUI.svg",
        name: "Material UI (MUI)",
      },
      {
        assets: "/assets/SASS.svg",
        name: "SASS",
      },
      {
        assets: "/assets/Redux.svg",
        name: "Redux Toolkit",
      },
      {
        assets: "/assets/react-query.svg",
        name: "React Query",
      },
    ],
  },
  {
    id: 5,
    description:
      "Revolutionize your logistics with my Transport Management System. Crafted using React, JavaScript, Material-UI, Redux, Formik, and Sass, this comprehensive solution orchestrates seamless item deliveries. From user-initiated pickups at retailers to intricate trip planning with line-haul methods, the system ensures end-to-end visibility. Java-powered APIs drive critical functions, including inventory management, bagging/de-bagging, and manifest creation. Real-time tracking via waybills and customer signature confirmation upon delivery guarantee a streamlined and transparent logistics experience. Elevate your transportation operations with this robust and user-friendly system.",
    name: "Transport Management System",
    tools: [
      {
        assets: "/assets/React.svg",
        name: "React",
      },
      {
        assets: "/assets/Javascript.svg",
        name: "Javascript",
      },
      {
        assets: "/assets/MUI.svg",
        name: "Material UI (MUI)",
      },
      {
        assets: "/assets/SASS.svg",
        name: "SASS",
      },
      {
        assets: "/assets/Redux.svg",
        name: "Redux",
      },
    ],
  },
];
