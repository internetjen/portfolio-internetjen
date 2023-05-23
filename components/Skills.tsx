import Image from "next/image";

const skills = [
  {
    name: "JavaScript",
    icon: "/proficiencies/javascript.svg",
    href: "#",
  },
  {
    name: "React",
    icon: "/proficiencies/react-js.svg",
    href: "#",
  },
  {
    name: "SQL",
    icon: "/proficiencies/database.svg",
    href: "#",
  },
  {
    name: "Node.js",
    icon: "/proficiencies/node-js.svg",
    href: "#",
  },
  {
    name: "HTML",
    icon: "/proficiencies/html5.svg",
    href: "#",
  },
  {
    name: "CSS",
    icon: "/proficiencies/css3.svg",
    href: "#",
  },
  {
    name: "TypeScript",
    icon: "/proficiencies/typescript.svg",
    href: "#",
  },
  {
    name: "Git",
    icon: "/proficiencies/git-alt.svg",
    href: "#",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Skills = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <h2 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl text-center mb-10 font-medium">
              Proficiencies
            </h2>

            <ul
              role="list"
              className="mt-3 grid grid-cols-2 gap-1 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 justify-center"
            >
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="border border-slate-300 rounded-md p-4 flex flex-col items-center text-center"
                >
                  <div
                    className={classNames(
                      "relative flex w-16 flex-shrink-0 items-center justify-center text-sm font-medium"
                    )}
                  >
                    <Image
                      className="logo"
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}

                    />
                  </div>
                  <div className="flex-1 text-sm mt-2">
                    {skill.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
