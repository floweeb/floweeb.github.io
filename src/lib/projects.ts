export interface Project {
    name: string;
    desc: string;   // description
    url: string;
  }
  
  const projects: Project[] = [
    { name: "Portfolio Website", url: "/",
        desc: `A website, specifically this one, to serve as a pseudo-resume
         for show casing my work.`},
    { name: "Github page", url: "https://github.com/floweeb",
        desc: `Here you can check my github page for the code of, finished
         and unfished works.` },
    // Add more projects as needed
  ];
  
  export default projects;