import reactImg from "../assets/react.svg";
import expressImg from "../assets/express.png";
import sqlImg from "../assets/sql.png";
import tailwindImg from "../assets/tailwind.png";
import githubImg from "../assets/github.png";
import dockerImg from "../assets/docker.png";
import cppImg from "../assets/c++.png";

const skills = [
  { name: "React.js", image: reactImg },
  { name: "Express.js", image: expressImg },
  { name: "SQL", image: sqlImg },
  { name: "Tailwind CSS", image: tailwindImg },
  { name: "GitHub", image: githubImg },
  { name: "Docker", image: dockerImg },
  { name: "C++", image: cppImg },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-yellow-300 px-6 pt-8 md:pt-16 pb-10 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 text-center">
          Always Improving
        </h2>

        {/* Description */}
        <p className="hidden md:block mt-4 md:mt-6 max-w-4xl mx-auto text-center text-blue-900 text-sm md:text-base leading-7">
          I'm a self-taught Full Stack Developer passionate about building
          modern web applications. I learned these technologies through
          consistent self-study, hands-on practice, and by developing
          real-world projects. I'm continuously improving my skills,
          exploring new technologies, and currently looking for an opportunity
          where I can contribute, learn, and grow as a software developer.
        </p>

        {/* Skills Grid */}
        <div className="bg-amber-700 grid grid-cols-2 md:grid-cols-4 gap-15 sm:gap-6 mt-8 md:mt-12">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                bg-white
                rounded-2xl
                p-4
                sm:p-5
                md:p-6
                flex
                flex-col
                items-center
                justify-center
                shadow-md
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-2
              "
            >

              {/* Circular Image Container */}
              <div
                className="
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  md:w-30
                  md:h-30
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                  shadow-inner
                "
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="
                    w-20
                    h-20
                    sm:w-12
                    sm:h-12
                    md:w-24
                    md:h-24
                    object-contain
                  "
                />
              </div>

              {/* Skill Name */}
              <h3
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  font-semibold
                  text-blue-950
                  text-center
                "
              >
                {skill.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}