import {
  House,
  User,
  Briefcase,
  Code2,
  Mail,
} from "lucide-react";

const navItems = [
//   { id: "home", label: "Home", icon: House },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar(){
    return(
        <div>
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-900/90 backdrop-blur-md">
                <ul className="flex justify-around py-2">
                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                    <li key={item.id}>
                        <a
                        href={`#${item.id}`}
                        className="flex flex-col items-center gap-1 text-xs text-gray-400 transition hover:text-cyan-400"
                        >
                        <Icon size={22} />
                        <span>{item.label}</span>
                        </a>
                    </li>
                    );
                })}
                </ul>
            </nav>


                <nav className="hidden md:block bg-amber-500 h-15 w-7xl mx-auto fixed left-1/2 -translate-x-1/2"> 
                    <ul className="bg-amber-600 h-full flex flex-col space-y-2 sm:flex-row items-center justify-center sm:space-x-20">
                        {/* <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#resume">Resume</a></li> */}
                        {
                            navItems.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`}>{item.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
        </div>
    
    )
};