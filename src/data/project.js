// src/data/projects.js
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
    url: "#/",
  },
  shiftGen: {
    id: "shiftGent",
    name: "Shift Generator",
    logo: "../", 
    desc: "Tool for generating shift schedules, creates excel as output",
    longDesc: "A scheduling tool that automatically generates optimized shift schedules for teams and exports them to Excel format for easy distribution.",
    techStack: "JavaScript, Excel.js, Chart.js",
    img1: "your-img-1-path",
    img2: "your-img-2-path",
    img3: "your-img-3-path",
    status: true,
    url: "#/",
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