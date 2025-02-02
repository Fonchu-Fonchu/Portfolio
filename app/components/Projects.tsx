export default function Projects() {
    const projects = [
      {
        title: 'Project 1',
        description: 'A full-stack e-commerce platform.',
        image: '/images/project1.jpg',
        link: '#',
      },
      {
        title: 'Project 2',
        description: 'A task management app with real-time updates.',
        image: '/images/project2.jpg',
        link: '#',
      },
      {
        title: 'Project 3',
        description: 'A blogging platform with user authentication.',
        image: '/images/project3.jpg',
        link: '#',
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                {/* <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" /> */}
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }