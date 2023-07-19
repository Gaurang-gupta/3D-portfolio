import {
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    python,
    samsung,
    uber,
    netlix,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "python",
        icon: python,
    }
];

const experiences = [
    {
        title: "Magpie Intern",
        company_name: "Samsung",
        icon: samsung,
        iconBg: "#383E56",
        date: "June 2022 - August 2022",
        points: [
            "Wrote code for image processing of tetra bayer CFA images.",
            "Learned C++ and shell scripts.",
            "Learned different image processing techniques available for demosaicing.",
            "Learned about guided filter."
        ],
    },
    // iconBg: "#E6DEDD",
];

const testimonials = [
    // {
    //     testimonial:
    //         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //     name: "Sara Lee",
    //     designation: "CFO",
    //     company: "Acme Co",
    //     image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //     testimonial:
    //         "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //     name: "Chris Brown",
    //     designation: "COO",
    //     company: "DEF Corp",
    //     image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //     testimonial:
    //         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //     name: "Lisa Wang",
    //     designation: "CTO",
    //     company: "456 Enterprises",
    //     image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
];

const projects = [
    {
        name: "Uber Clone",
        description:
            "Web-based platform that implements the map tracking of uber and allows users to search locations on the map. It allows users to login using google account",
        tags: [
            {
                name: "NextJS",
                color: "blue-text-gradient",
            },
            {
                name: "Mapbox",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: uber,
        deployed_code_link: "https://uber-clone-lyart-five.vercel.app/",
        source_code_link: "https://github.com/Gaurang-gupta/Uber-clone",
    },
    {
        name: "Netflix Clone",
        description:
            "Web application that enables users to search for movies and shows, add them to favourites, and can get a short description of their respective movie or show",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "pink-text-gradient",
            },
        ],
        image: netlix,
        deployed_code_link: "https://netflix-clone-7a9e5.web.app/",
        source_code_link: "https://github.com/Gaurang-gupta/netflix-clone",
    },
];

export { services, technologies, experiences, testimonials, projects };