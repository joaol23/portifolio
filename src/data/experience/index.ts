import { experienceProps } from '../@types/experience';

export const experiences: experienceProps[] = [
    {
        role: "FullStack Web Developer",
        image: "../../../assets/jobs/construsite.png",
        tags: ["construsite_brasil"],
        period: {
            begin: "Junho 2022"
        },
        badges: [
            {
                text: "PHP",
                colorScheme: "purple"
            },
            {
                text: "Laravel",
                colorScheme: "purple"
            },
            {
                text: "React.Js",
                colorScheme: "blue"
            },
            {
                text: "Next.Js",
                colorScheme: "white"
            },
            {
                text: "TypeScript",
                colorScheme: "blue"
            },
            {
                text: "Sql",
                colorScheme: "pink"
            },
            {
                text: "Docker",
                colorScheme: "blue"
            },
            {
                text: "Git",
                colorScheme: "orange"
            }
        ],
        items: [
            {
                id: "fullstack_1",
                text: "Tecnologias",
                description: "PHP, Sql, React.js, Next.js, JavaScript, TypeScript, Docker, Git, Gitlab Runner, Laravel, entre outros"
            },
            {
                id: "fullstack_2",
                text: "Descrição",
                description:
                    "Trabalhei em diversos projetos com foco em PHP/Laravel, com o front em React. "
                    + "Além de manutenção e organização de ambientes com Docker, também fazendo criação de Runners com Gitlab."
            }
        ]
    },
    {
        role: "Estágio desenvolvedor",
        tags: ["construsite_brasil"],
        image: "../../../assets/jobs/construsite.png",
        period: {
            begin: "Outubro 2021",
            end: "Junho 2022"
        },
        badges: [
            {
                text: "PHP",
                colorScheme: "purple"
            },
            {
                text: "Sql",
                colorScheme: "pink"
            },
            {
                text: "Git",
                colorScheme: "orange"
            },
        ],
        items: [
            {
                id: "intern_1",
                text: "Tecnologias",
                description: "PHP, Sql, JavaScript, Git, Laravel, Html, Css, entre outros"
            },
            {
                id: "intern_2",
                text: "Descrição",
                description:
                    "Tive meu primeiro contato com um mundo profissional utilizando linguagens de programação. Um período no qual eu tive muita evolução e aprendizado."
            }
        ]
    },
    {
        role: "Desenvolvimento Web PHP",
        tags: ["certificates"],
        image: "../../../assets/jobs/construsite.png",
        period: {
            begin: "Setembro 2021",
            end: "Outubro 2021"
        },
        badges: [
            {
                text: "PHP",
                colorScheme: "purple"
            },
            {
                text: "Jquery",
                colorScheme: "orange"
            },
            {
                text: "Sql",
                colorScheme: "pink"
            }
        ],
        items: [
            {
                id: "certificate_1",
                text: "Tecnologias",
                description: "PHP, JQUERY, SQL, Desenvolvimento WEB"
            },
            {
                id: "certificate_2",
                text: "Descrição",
                description: "Curso preparatório para uma criação de projetos relacionados à web com PHP."
            }
        ]
    },
    {
        role: "Ciência da Computação - FUMEC",
        tags: ["education"],
        image: "../../../assets/education/fumec.png",
        period: {
            begin: "Janeiro 2023",
            end: "Dezembro 2026"
        },
        badges: [
            {
                text: "Java",
                colorScheme: "orange"
            },
            {
                text: "Algoritmo",
                colorScheme: "blue"
            }
        ],
        items: [
            {
                id: "certificate_1",
                text: "Descrição",
                description: "Graduação em Ciência da Computação na Universidade FUMEC. Onde estou cursando atualmente para aprimorar meus conhecimentos em áreas diversas do mundo de programação."
            }
        ]
    },
    {
        role: "Técnico em Ti - Cotemig",
        tags: ["education"],
        image: "../../../assets/education/cotemig.png",
        period: {
            begin: "Janeiro 2021",
            end: "Dezembro 2022"
        },
        badges: [
            {
                text: "Node.js",
                colorScheme: "green"
            },
            {
                text: "React.js",
                colorScheme: "blue"
            },
            {
                text: "C#",
                colorScheme: "purple"
            },
            {
                text: "PHP",
                colorScheme: "purple"
            },
            {
                text: "SQl",
                colorScheme: "pink"
            }
        ],
        items: [
            {
                id: "certificate_1",
                text: "Descrição",
                description: "Curso técnico em Ti no colégio Cotemig. Onde tive meu primeiro contato estudando programação com profissionais para me auxiliarem."
            }
        ]
    }
]

