export interface Project {
    name: string;
    desc: string;   // description
    url: string;
  }
  
  const projects: Project[] = [
    { name: "Portfolio Website", url: "/",
        desc: "A website to serve as a pseudo-CV/resume."},
    { name: "Github page", url: "https://github.com/floweeb",
        desc: "In progression, check my github page for unfinished projects." },
    // Add more projects as needed
  ];
  
  export default projects;