import profile from '../assets/profile.png';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

export default function About(){
    return (
        <section id='about' className="bg-blue-300 h-screen md:pt-15 pb-20 md:pb-0 flex flex-row items-center justify-center">
            <div className='bg-amber-300 flex flex-col items-center justify-center md:flex md:flex-row-reverse gap-10'>
                <div className='mt-5'>
                    {/* <img src = {profile}/> */}
                    <div className="w-60 h-60 rounded-full border-4 border-blue-600 p-1">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                    />
                    </div>
                </div>
                {/* use text-center in flex both to center text only */}
                <div className='bg-amber-800 relative p-2 flex flex-col justify-center items-center text-center gap-2'>
                    <h1 className="text-blue-900 text-xl md:text-lg">Hi, I am Vaibhav,</h1>
                    <h1 className="text-blue-950 font-extrabold text-5xl leading-tight">Aspiring<br/> Full stack developer</h1>
                    <p className="text-blue-900 mt-4 text-lg">
                    Automation Test Engineer with 3 years of experience in software testing, seeking to transition into a Full Stack Developer role by leveraging skills in React, Node.js, Express.js, and SQL.
                    </p>

                    <button className="mt-8 border border-yellow-500 bg-yellow-100 px-8 py-2 text-sm text-blue-900 hover:bg-yellow-200 transition">
                    Resume
                    </button>
                </div>

            </div>
        </section>
    )
};