import React from 'react'

function Projects() {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'This is project 1',
            image: 'https://ik.imagekit.io/jabedzaman/Portfolio/image1_odMSY8_eF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667779615526'
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is project 2',
            image: 'https://ik.imagekit.io/jabedzaman/Portfolio/image1_odMSY8_eF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667779615526'
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'This is project 3',
            image: 'https://ik.imagekit.io/jabedzaman/Portfolio/image1_odMSY8_eF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667779615526'
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'This is project 4',
            image: 'https://ik.imagekit.io/jabedzaman/Portfolio/image1_odMSY8_eF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667779615526'
        },
    ]
    return (
        <section className='mx-auto max-w-3xl lg:px-0 px-5'>
            <h1
                className='lg:text-4xl md:text-3xl text-2xl font-bold text-center lg:text-left my-2'
            >Projects</h1>
            <p
                className='text-gray-500 text-center lg:text-left my-2'
            >Here are some of my projects</p>
            <div
                className='grid grid-cols-1 md:grid-cols-2 gap-4 my-2'
            >
                {projects.map(project => (
                    <div key={project.id}
                    className='transition duration-300 ease-in-out transform lg:hover:-translate-y-1 lg:hover:scale-105 p-1'
                    >
                        <img src={project.image} 
                        className='w-full lg:h-52 h-48 max-w-sm mx-auto object-cover border-2 border-gray-200 p-1'
                        alt={project.title} />
                        <h2
                        className='md:text-xl font-bold my-2 text-lg text-center lg:text-left'
                        >{project.title}</h2>
                        <p
                        className='text-gray-500 text-center text-xs md:text-sm lg:text-left'
                        >{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects