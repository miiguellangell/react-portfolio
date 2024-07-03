import imgProfile from './assets/images/profile.webp';
import altra from './assets/images/portfolio/altra.webp';
import contestpizz from './assets/images/portfolio/contestpizz.webp';
import destinations from './assets/images/portfolio/destinations.webp';
import ekologica from './assets/images/portfolio/ekologica.webp';
import generatorlaravel from './assets/images/portfolio/generatorlaravel.webp';
import havip from './assets/images/portfolio/havip.webp';
import hilanderia from './assets/images/portfolio/hilanderia.webp';
import innova from './assets/images/portfolio/innova.webp';
import napco from './assets/images/portfolio/napco.webp';
import shopify from './assets/images/portfolio/shopify.webp';
import vehillanos from './assets/images/portfolio/vehillanos.webp';
import wow from './assets/images/portfolio/wow.webp';

const logotext = "MIGUEL ANGEL";
const meta = {
    title: "Miguel Angel Portfolio",
    description: "I’m Miguel Carrera, a Systems Engineer, Web Developer, and Web Designer currently based in Bogotá, Colombia.",
};

const introdata = {
    title: "I’m Miguel Carrera",
    animated: {
        first: "Software Engineer | Web developer | Web Designer | Student",
        second: "I design innovative solutions",
        third: "I develop scalable web applications",
    },
    description: "I am a passionate Web Developer with over 5 years of experience in designing and developing innovative and scalable web solutions. I work from defining needs, designing prototypes, and solutions to applications focusing on companies, always prioritizing user experience (UX/UI), performance, and accessibility.",
    your_img_url: imgProfile, 
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a passionate Web Developer with over 5 years of experience in designing and developing innovative and scalable web solutions. I work from defining needs, designing prototypes, and solutions to applications focusing on companies, always prioritizing user experience (UX/UI), performance, and accessibility. My background includes multiple eCommerce and web development projects. Additionally, I have experience in developing online stores using Shopify and WordPress, as well as programming in PHP and SQL.",
};

const worktimeline = [
    {
        jobtitle: "Web Master",
        where: "Gerscol",
        date: "Jul. 2024 - Present",
        url: 'https://aula.gerscol.com/',
    },
    {
        jobtitle: "Web Master",
        where: "Centro de Rehabilitación para Adultos Ciegos-CRAC",
        date: "Feb. 2024 - Present",
        url:'https://cracolombia.org/',
    },
    {
        jobtitle: "Development Team Leader",
        where: "PacoWEB S.A.S",
        date: "Sep. 2020 - Sep. 2022",
        url:'https://pacoweb.com.co/',
    },
    {
        jobtitle: "Web Developer",
        where: "Nap Colombia",
        date: "Freelancer",
        url:'https://www.nap.co/',
    },
    {
        jobtitle: "Web Developer",
        where: "Toyota Vehillanos S.A.S",
        date: "Freelancer",
        url:'https://vehillanos.com.co/',
    },
    {
        jobtitle: "Web Developer",
        where: "4k Group Latam",
        date: "Jul. 2023 - abr. 2024",
        url:'https://4kgrouplatam.com/',
    },
    {
        jobtitle: "Web Developer",
        where: "Statum Digital",
        date: "FreeLancer",
        url:'https://statumdigital.com/',
    },
    {
        jobtitle: "Web Page Designer",
        where: "Render Publicidad",
        date: "Ago. 2018 - Mar. 2019",
        url:'https://www.renderpublicidad.com.co/',
    },
    {
        jobtitle: "Graphic Designer",
        where: "TeshMark",
        date: "Abr. 2018 - Ago. 2018",
        url:'https://teshmark.com/',
    },
];

const skills = [
    {
        name: "Elementor",
        value: 80,
    },
    {
        name: "WordPress",
        value: 70,
    },
    {
        name: "PHP/Laravel",
        value: 60,
    },
    {
        name: "Linux",
        value: 65,
    },
    {
        name: "Illustrator",
        value: 75,
    },
    {
        name: "JavaScript",
        value: "60",
    },
    {
        name: "shopify",
        value: "40",
    },
];

const services = [
    {
        title: "UI & UX Design",
        description: "Design of user interfaces and user experiences (UX/UI), focused on usability and accessibility.",
    },
    {
        title: "E-commerce Development",
        description: "Development of e-commerce solutions using Shopify and WordPress.",
    },
    {
        title: "Web Development",
        description: "Development of scalable and customized web applications to improve performance and accessibility.",
    },
];


const dataportfolio = [{
        img: altra,
        description: "Wordpress + Elementor + Wireframe ",
        link:'https://altradx.com/',
    },
    {
        img: contestpizz,
        description: "Laravel + front-end + Back-end",
        link: 'https://app.cheerspizzeria.com/',
    },
    {
        img: destinations,
        description: "Wordpress + Elementor + Wireframe",
        link: 'https://destinationscolombia.com/',
    },
    {
        img: ekologica,
        description: "Laravel + front-end + Back-end",
        link: 'https://paekologica.com/public/login',
    },
    {
        img: generatorlaravel,
        description: "Laravel +DomPdf + front-end + Back-end",
        link: 'https://certificados.gerscol.com/busqueda',
    },
    {
        img: havip,
        description: "Real state + Wordpress + Elementor + Wireframe",
        link: "https://havip.com.co/",
    },

    {
        img: hilanderia,
        description: "Wordpress + Elementor + Wireframe",
        link: 'https://www.hilanderiafontibon.com/',
    },
    {
        img: innova,
        description: "Wordpress + Elementor + Wireframe",
        link: 'https://innova-atl.com/',
    },
    {
        img: napco,
        description: "Wordpress + Elementor + Wireframe",
        link: 'https://www.nap.co/',
    },
    {
        img: shopify,
        description: "Shopify + Liquid + Wireframe",
        link: 'https://www.colorgy.co/',
    },
    {
        img: vehillanos,
        description: "Wordpress + Elementor + Wireframe + SalesForce Integration",
        link: 'https://vehillanos.com.co/',
    },
    {
        img: wow,
        description: "Wordpress + Elementor + Wireframe",
        link: 'https://wowstudios.com.co/',
    },
];

const contactConfig = {
    YOUR_EMAIL: "miiguellangellmc@gmail.com",
    YOUR_FONE: "+57 302 4228 433",
    description: "Software Engineer | Web developer | Web Designer | Student",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ck4x48p",
    YOUR_TEMPLATE_ID: "template_8e1mbdl",
    YOUR_USER_ID: "_O8T83IqOdGl9DQJO",
};

const socialprofils = {
    github: "https://github.com/miiguellangell",
    gitlab:"https://gitlab.com/miiguellangell/certificados-gerscol",
    facebook: "https://web.facebook.com/miiguellangel/",
    linkedin: "https://www.linkedin.com/in/miguel-carrera-02726b1ab/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};