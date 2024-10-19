type ProjectType = {
    title: string;
    image: string;
    description: string;
    tools: string[];
};

export const projects: ProjectType[] = [
    {
        title: 'GreenEarth',
        image: '/greenEarth.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro harum atque a cum nesciunt aut in eveniet quas natus facilis sint nemo deleniti necessitatibus quasi assumenda explicabo, rem illo?',
        tools: ['Java', 'React', 'Next.js', 'Tailwind CSS', 'Node.js']
    }
];