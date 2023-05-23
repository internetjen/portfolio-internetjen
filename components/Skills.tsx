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
      <div>
        <h2 className="text-sm text-center mb-10 font-medium">Proficiencies</h2>
        <ul
          role="list"
          className="mt-3 grid grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <li
              key={skill.name}
              // className="col-span-1 flex rounded-md shadow-sm"
              className="col-span-1 flex rounded-md shadow-sm relative"
            >
              <div
                className={classNames(
                  "relative flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium -mt-2 -ml-2"
                  // "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium"
                )}
              >
                <Image 
                className="logo"
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                />
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                  <a
                    href={skill.href}
                    className="font-medium hover:text-orange-200"
                  >
                    {skill.name}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

  
  );
};

export default Skills;
