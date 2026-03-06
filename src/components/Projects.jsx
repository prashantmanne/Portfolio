import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Projects() {

const projects = [
{
id: 1,
title: "Puneri Paltan Website",
description: "Kabaddi team website with player information and team details.",
tech: ["React", "Node.js", "MongoDB"],
github: "https://github.com/prashantmanne/Puneri-Paltan",
live: "#",
},

{
id: 2,
title: "AI Resume Builder",
description: "Generate professional resumes using AI with a modern UI.",
tech: ["React", "Next.js", "OpenAI"],
github: "https://github.com/prashantmanne/AI-RESUME-BUILDER",
live: "#",
},

{
id: 3,
title: "Form Builder",
description: "Create customizable forms dynamically with different input fields.",
tech: ["React", "Node.js", "MongoDB"],
github: "https://github.com/prashantmanne/Form-Builder",
live: "#",
},

{
id: 4,
title: "Quiz Web App",
description: "Interactive quiz application with scoring and result display.",
tech: ["HTML", "CSS", "JavaScript"],
github: "https://github.com/prashantmanne/Quiz-web-app",
live: "#",
},

{
id: 5,
title: "Todo List",
description: "Task manager to add, complete and delete daily tasks.",
tech: ["React", "LocalStorage"],
github: "https://github.com/prashantmanne/TODO-LIST",
live: "#",
},

{
id: 6,
title: "Grocery Store Management",
description: "Java based console system to manage grocery inventory.",
tech: ["Java", "MySQL"],
github: "https://github.com/prashantmanne/GROCERY_STORE_MANAGEMENT_SYSTEM",
live: "#",
},

{
id: 7,
title: "",
description: "Collection of UI layouts and components built with HTML and CSS.",
tech: ["HTML", "CSS","js"],
github: "https://github.com/prashantmanne/HTML-CSS-Practice",
live: "#",
}

];

return (
<div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">

{/* Grain overlay */}
<div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

<div className="relative z-10 px-6 md:px-20 py-16">

{/* Back button */}
<div className="mb-16">
  <Link to={'/'}>
<button className="border border-gray-500 rounded-full p-3 hover:border-[#00d1c7] transition">
<GoArrowLeft size={20}/>
</button>
</Link>
</div>

{/* Title */}
<div className="mb-20">
<span className="bg-[#00d1c7] text-black px-8 py-2 text-4xl md:text-6xl italic font-bold">
PROJECTS
</span>
</div>

{/* Project Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{projects.map((project) => (

<div
key={project.id}
className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-[#00d1c7] transition-all duration-300 hover:-translate-y-2"
>

<h2 className="text-2xl font-bold mb-3">
{project.title}
</h2>

<p className="text-gray-400 mb-4">
{project.description}
</p>

{/* Tech stack */}
<div className="flex flex-wrap gap-2 mb-6">
{project.tech.map((tech, index) => (
<span
key={index}
className="text-sm bg-neutral-800 px-3 py-1 rounded-full"
>
{tech}
</span>
))}
</div>

{/* Links */}
<div className="flex gap-6">

<a
href={project.github}
target="_blank"
className="flex items-center gap-2 text-gray-300 hover:text-white transition"
>
<FaGithub/>
GitHub
</a>

<a
href={project.live}
target="_blank"
className="flex items-center gap-2 text-[#00d1c7] hover:text-white transition"
>
<FiExternalLink/>
Live
</a>

</div>

</div>

))}

</div>

</div>
</div>
);
}