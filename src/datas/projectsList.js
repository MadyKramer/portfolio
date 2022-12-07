import groupomania from '../assets/groupomania.png'
import hottakes from '../assets/hottakes.png'
import kanap from '../assets/kanap.png'
import lapanthere from '../assets/lapanthere.png'
import ohmyfood from '../assets/ohmyfood.png'
import booki from '../assets/booki.png'

import html from '../assets/technos/html.png'
import css from '../assets/technos/css.png'
import sass from '../assets/technos/sass.png'
import js from '../assets/technos/js.png'
import nodejs from '../assets/technos/nodejs.png'
import mongodb from '../assets/technos/mongodb.png'
import mysql from '../assets/technos/mysql.png'
import reactjs from '../assets/technos/react.png'


export const projectsList = [
    {
        name: 'Groupomania',
        id: 1,
        cover: groupomania,
        description: "Full Stack | Création d'un réseau social d'entreprise dans son intégralité.",
        techno: [html , sass , js , nodejs , mysql , reactjs],
        link: "https://github.com/MadyKramer/groupomania"
    },
    {
        name: 'Hot Takes',
        id: 2,
        cover: hottakes,
        description: "Back-end | Création d'une application web afin que les utilisateurs puissent noter des sauces piquantes",
        techno: [js , nodejs , mongodb ],
        link: "https://github.com/MadyKramer/HotTakes"
    },
    {
        name: 'Kanap',
        id: 3,
        cover: kanap,
        description: "Front-End | Création de la partie font en JavaScript d'un site e-commerce",
        techno: [js],
        link: "https://github.com/MadyKramer/Kanap"
    },
    {
        name: 'La Panthère',
        id: 4,
        cover: lapanthere,
        description: "SEO | Amélioration du référencement et de l'accessibilité",
        techno: [html , css],
        link: "https://github.com/MadyKramer/P4"
    },
    {
        name: 'OhMyFood!',
        id: 5,
        cover: ohmyfood,
        description: "Front-End | Création à partir de maquettes d'un site de réservation de menu en ligne",
        techno: [html , css , sass],
        link:"https://github.com/MadyKramer/P3"
    },
    {
        name: 'Booki',
        id: 6,
        cover: booki,
        description: "Front-End | Création à partir de maquettes d'un site de plannification de vacances",
        techno: [html , css],
        link:"https://github.com/MadyKramer/Projet2"
    }
]