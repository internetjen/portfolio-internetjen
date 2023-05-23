const projects = [
    {
      id: 1,
      name: 'Queerently Watching',
      href: 'https://www.queerentlywatching.com/',
      description: 'Queerently Watching is a community-driven platform for LGBTQ+ individuals and allies to share and discover media that tells authentic queer stories. Our mission is to create a safe and inclusive space for users to connect, discuss, and celebrate queer representation in film and television.',
      imageSrc: '/projects/QW.png',
      imageAlt: 'Logo for Queerently Watching website.',
      technologies: 'TypeScript, Next.js, Tailwind CSS, Supabase, Vercel.'
    },
    {
      id: 2,
      name: 'Employee Tracking App',
      href: 'https://github.com/internetjen/employee-tracker-slay',
      description: 'A command-line application that allows a user to manage employee information in a company database. The user can view the departments, roles, employees and their details such as the salary, department and manager they report to. They can also add to and edit the database by adding new departments, roles, employees and update the role of an employee.',
      imageSrc: '/projects/employee-tracker.png',
      imageAlt: 'Screenshot of terminal window displaying employee update options.',
      technologies: 'Node.js, Inquirer, and MySQL2, Chalk, and Console.Table',
    },
    {
      id: 3,
      name: 'Ecommerce App (backend)',
      href: 'https://github.com/internetjen/e-commerce-back-end-slay',
      description: 'The application allows its user to manage an e-commerce database. The user will be able to view, edit, and delete any categories, products, or tags.',
      imageSrc: '/projects/ecommerce-backend.png',
      imageAlt: 'Shopping cart and bag.',
      technologies: 'Node.js, Express.js, MySQL, Sequelize, and Insomnia.'
    },
    {
      id: 4,
      name: 'Simple Timed JavaScript Quiz',
      href: 'https://simplejs-quiz.netlify.app/',
      description: 'A timed JavaScript quiz with 8 multiple-choice questions will test some basic coding knowledge.',
      imageSrc: '/projects/javascript-quiz.png',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      technologies: 'HTML, CSS, JavaScript'
    }
  ]

const Projects = () => {
  return (

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {projects.map((project) => (
              <a key={project.id} href={project.href} className="group border border-gray-300 rounded-lg p-4">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold">{project.name}</h3>
                <p className="mt-1 text-sm">{project.description}</p>
                {/* <p className="mt-2 text-sm font-medium text-gray-900">{project.technologies}</p> */}
                <div className="mt-8">
              <p className="inline-block px-2 py-1 text-sm font-medium bg-orange-100 text-gray-900 rounded-md">
                Technologies:
              </p>
              <p className="mt-2 text-sm font-medium">{project.technologies}</p>
            </div>
              </a>
            ))}
          </div>
        </div>
  
    )
}

export default Projects