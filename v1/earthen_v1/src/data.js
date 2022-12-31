import { SiOpenaigym } from 'react-icons/si'


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Solutions",
        path: '/solutions'
    },
    {
        name: "Media",
        path: '/media'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]


export const faqs = [
    {
        id: 1,
        question: "WHAT PROBLEM EARTHEN IS SOLVING?",
        answer: 'Solar and Wind energy are non-dispatchable sources of energy. For solar and wind to contribute more towards US electricity generation, we need a sustainable energy storage solution, like now!'
    },
    {
        id: 2,
        question: "HOW DOES EARTHEN SOLVE THIS PROBLEM?",
        answer: "Our Carbon negative, Climate positive energy storage solution provides dispatchable electricity. Anytime & anywhere you need. At the lowest price."
    }
]





export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "EarthEn Pods",
        info: "EarthEn's Pods are flexible & future-proof in using CO2 in a closed loop to store 4-100+ hours of energy at a low cost, highly scalable & safe manner for a 30 year shelf-life.",
        path: "/programs/earthen-pods",
        image: require('./images/earthenImages/im5.webp')
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "EarthEn Edge",
        info: "EarthEn's Edge will help mitigate the negative consequences of the current grid being under constant attack, and with increasing changes in the climate, resiliency in the grid will only decrease.",
        path: "/programs/edge",
        image: require('./images/earthenImages/im7.webp')
    }
    // {
    //     id: 3,
    //     icon: <SiOpenaigym/>,
    //     title: "Program Three",
    //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur in repudiandae iste quod ducimus impedit delectus sapiente placeat earum corrupti.",
    //     path: "/programs/333"
    // },
    // {
    //     id: 4,
    //     icon: <SiOpenaigym/>,
    //     title: "Program Four",
    //     info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur in repudiandae iste quod ducimus impedit delectus sapiente placeat earum corrupti.",
    //     path: "/programs/444"
    // }
]




export const abouts = [
    {
        order: 1,
        title: 'About Earthen',
        content: "We have a vision of carbon negative renewable energy 24/7 for the planet. We are a team of hungry, resilient & passionate leaders working to bring our innovative technology to the world. Our technology kills two birds with one stones. We're the best energy storage solution to enable net zero heat & power 24/7, while sequestering carbon dioxide.",
        className: 'about__box-content',
    },
    {
        order: 2,
        title: 'About Earthen',
        content: "We have a vision of carbon negative renewable energy 24/7 for the planet. We are a team of hungry, resilient & passionate leaders working to bring our innovative technology to the world. Our technology kills two birds with one stones. We're the best energy storage solution to enable net zero heat & power 24/7, while sequestering carbon dioxide.",
        className: 'about__box-content',
    },
    {
        order: 3,
        title: 'About Earthen',
        content: "We have a vision of carbon negative renewable energy 24/7 for the planet. We are a team of hungry, resilient & passionate leaders working to bring our innovative technology to the world. Our technology kills two birds with one stones. We're the best energy storage solution to enable net zero heat & power 24/7, while sequestering carbon dioxide.",
        className: 'about__box-content',
    }
] 

