// src/data/projects.js
// status: false -> ongoing / true -> finished
// webStatus : false -> web unavailable / true -> web available
export const projectS = {
  enjoyreads: {
    id: "enjoyreads",
    name: "enjoyreads",
    logo: "../",
    desc: "A web application to read PDFs and ePUBs as books",
    longDesc: "A comprehensive web application that allows users to read PDF and ePUB files in a book-like interface. Features include bookmarking, note-taking, and progress tracking.",
    techStack: "Vue.js, Node.js, PDF.js",
    img1: "your-img-1-path",
    img2: "your-img-2-path", 
    img3: "your-img-3-path",
    status: false,
    webStatus: false,
    url: "#/",
  },
  revmycv: {
    id: "reviewmycv",
    name: "reviewmycv", 
    logo: "../",
    desc: "Quick CV reviewer built with AI to analyze and fix your resume.",
    longDesc: "An AI-powered tool that analyzes resumes and provides detailed feedback on formatting, content, and optimization for ATS systems.",
    techStack: "React, Python, OpenAI API",
    img1: "your-img-1-path",
    img2: "your-img-2-path",
    img3: "your-img-3-path", 
    status: false,
    webStatus: false,
    url: "#/",
  },
  shiftGen: {
    id: "shiftGen",
    name: "Shift Generator",
    logo: "../", 
    desc: "Tool for generating shift schedules, creates excel as output",
    longDesc: "A scheduling tool that automatically generates optimized shift schedules for teams and exports them to Excel format for easy distribution.",
    techStack: "Vue.js, JavaScript, Tailwindcss, Excel.js",
    img1: "your-img-1-path",
    img2: "your-img-2-path",
    img3: "your-img-3-path",
    status: true,
    webStatus: true,
    url: "https://manageservice-smg.vercel.app/",
  },
  btps: {
    id: "btpsm", 
    name: "Bandung TPS Monitor",
    logo: "../",
    desc: "Web to monitor trash capacity in Bandung, connects with IoT developement", 
    longDesc: "IoT-connected web application for monitoring trash bin capacity across Bandung city, providing real-time data and analytics for waste management optimization.",
    techStack: "Vue.js, IoT Sensors, Firebase",
    img1: "your-img-1-path",
    img2: "your-img-2-path", 
    img3: "your-img-3-path",
    status: true,
    webStatus: true,
    url: "#/",
  },
  hypestore: {
    id: "hypestore", 
    name: "HYPESTORE E-Commerce",
    logo: "../",
    desc: "Web to monitor trash capacity in Bandung, connects with IoT developement", 
    longDesc: "IoT-connected web application for monitoring trash bin capacity across Bandung city, providing real-time data and analytics for waste management optimization.",
    techStack: "Vue.js, IoT Sensors, Firebase",
    img1: "your-img-1-path",
    img2: "your-img-2-path", 
    img3: "your-img-3-path",
    status: true,
    webStatus: false,
    url: "#/",
  },
  ebike: {
    id: "ebike", 
    name: "E-Bike Landing Page",
    logo: "../",
    desc: "Web to monitor trash capacity in Bandung, connects with IoT developement", 
    longDesc: "IoT-connected web application for monitoring trash bin capacity across Bandung city, providing real-time data and analytics for waste management optimization.",
    techStack: "Vue.js, IoT Sensors, Firebase",
    img1: "your-img-1-path",
    img2: "your-img-2-path", 
    img3: "your-img-3-path",
    status: true,
    webStatus: true,
    url: "#/",
  }
}

// Export as array for easier iteration
export const projects = Object.values(projectS)

// Helper functions
export const getProjectById = (id) => {
  return Object.values(projectS).find(project => project.id === id)
}

export const getActiveProjects = () => {
  return Object.values(projectS).filter(project => project.status === true)
}

export const getInactiveProjects = () => {
  return Object.values(projectS).filter(project => project.status === false)
}