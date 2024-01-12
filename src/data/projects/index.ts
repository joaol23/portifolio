import { OtherProjectsProps, projectProps } from "../@types/project";

export const projects: projectProps[] = [
  {
    name: "Cotemig Projects Front",
    description:
      "Projeto Utilizando React e Next para mostrar os conteúdos de projetos feitos durante o curso Técnico no cotemig",
    image: "../../../assets/projects/project-front.png",
    badges: [
      {
        text: "React",
        colorScheme: "blue",
      },
      {
        text: "Next",
        colorScheme: "white",
      },
      {
        text: "Typescript",
        colorScheme: "blue",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/cotemig-project-front",
      },
      {
        text: "Site",
        href: "https://cotemig-project-front.vercel.app",
      },
    ],
  },
  {
    name: "Cotemig Projects API",
    description:
      "Uma api feita para trabalhar com os projetos feitos durante o curso técnico do Cotemig",
    image: "../../../assets/projects/project-api.png",
    badges: [
      {
        text: "Node",
        colorScheme: "green",
      },
      {
        text: "Express",
        colorScheme: "blue",
      },
      {
        text: "Typescript",
        colorScheme: "blue",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/api_projects_cotemig",
      },
      {
        text: "Docs",
        href: "https://api-projetos.onrender.com/doc",
      },
    ],
  },
];

export const others: OtherProjectsProps[] = [
  {
    name: "Projeto Pokemon Laravel",
    description:
      "Projeto em desenvolvimento que estou usando para praticar conhecimentos e arquiteturas com Laravel",
    tags: ["php"],
    badges: [
      {
        text: "PHP",
        colorScheme: "purple",
      },
      {
        text: "Laravel",
        colorScheme: "red",
      },
      {
        text: "Docker",
        colorScheme: "blue",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/laravel-project",
      },
    ],
  },
  {
    name: "Alura Series",
    description: "Pequeno projeto para explorar as utilidades do laravel.",
    tags: ["php"],
    badges: [
      {
        text: "PHP",
        colorScheme: "purple",
      },
      {
        text: "Blade",
        colorScheme: "red",
      },
      {
        text: "Js",
        colorScheme: "orange",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/laravel-alura-series",
      },
    ],
  },
  {
    name: "RPG",
    description: "Código em terminal de criação de personagem para Rpg",
    tags: [".net"],
    badges: [
      {
        text: "C#",
        colorScheme: "purple",
      },
      {
        text: ".Net",
        colorScheme: "purple",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/rpg",
      },
    ],
  },
  {
    name: "Nasa-Project",
    description:
      "Utilizando Express com MongoDb para ter um registro de viagens ao espaço.",
    tags: ["js"],
    badges: [
      {
        text: "NodeJs",
        colorScheme: "orange",
      },
      {
        text: "MongoDB",
        colorScheme: "green",
      },
      {
        text: "Jest",
        colorScheme: "orange",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/nasa-project",
      },
      {
        text: "Site",
        href: "https://nasa-project-2by6.onrender.com/",
      },
    ],
  },
  {
    name: "Nest Api",
    description:
      "Criando uma api com funcionalidades basicas de login e autenticação com Nest",
    tags: ["js"],
    badges: [
      {
        text: "NodeJs",
        colorScheme: "orange",
      },
      {
        text: "Nest",
        colorScheme: "red",
      },
      {
        text: "Jest",
        colorScheme: "orange",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/api-nest",
      },
    ],
  },
  {
    name: "Multiplayer Pong",
    description: "Usando Socket.io para criar um mini jogo multiplayer.",
    tags: ["js"],
    badges: [
      {
        text: "NodeJs",
        colorScheme: "orange",
      },
      {
        text: "Socket.io",
        colorScheme: "blue",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/multiplayer-pong-game",
      },
      {
        text: "Site",
        href: "https://multiplayer-ping-pong.onrender.com/",
      },
    ],
  },
  {
    name: "Game-Helicopter",
    description: "Jogo simples feito no qual você controla um helicóptero",
    tags: ["js"],
    badges: [
      {
        text: "Js",
        colorScheme: "orange",
      },
      {
        text: "Html",
        colorScheme: "red",
      },
      {
        text: "Css",
        colorScheme: "blue",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/Game-helicopter",
      },
      {
        text: "Site",
        href: "https://joaol23.github.io/Game-helicopter",
      },
    ],
  },
  {
    name: "Netflix",
    description: "Replicação da página da netflix para animes",
    tags: ["front"],
    badges: [
      {
        text: "Js",
        colorScheme: "orange",
      },
      {
        text: "Html",
        colorScheme: "red",
      },
      {
        text: "Css",
        colorScheme: "blue",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/netflix",
      },
      {
        text: "Site",
        href: "https://joaol23.github.io/netflix/",
      },
    ],
  },
  {
    name: "Instagram",
    description: "Replicação da página de login do Instagram",
    tags: ["front"],
    badges: [
      {
        text: "Html",
        colorScheme: "red",
      },
      {
        text: "Css",
        colorScheme: "blue",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/Instagram",
      },
      {
        text: "Site",
        href: "https://joaol23.github.io/Instagram/",
      },
    ],
  },
  {
    name: "Genesis",
    description: "Jogo Genesis",
    tags: ["js", "front"],
    badges: [
      {
        text: "Js",
        colorScheme: "orange",
      },
      {
        text: "Html",
        colorScheme: "red",
      },
      {
        text: "Css",
        colorScheme: "blue",
      },
    ],
    buttons: [
      {
        text: "Github",
        href: "https://github.com/joaol23/genesis-game",
      },
      {
        text: "Site",
        href: "https://joaol23.github.io/genesis-game/",
      },
    ],
  },
];
