export default function Navbar(){
    return(
        <nav className="bg-amber-500 h-15 w-full mx-0 fixed">
            <ul className="bg-amber-600 h-full flex flex-row items-center justify-center space-x-20">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#resume">Resume</a></li>
            </ul>
        </nav>
    )
};