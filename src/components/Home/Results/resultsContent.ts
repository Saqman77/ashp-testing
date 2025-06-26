interface IconConfig {
    type: 'svg';
    path: string;
}

export interface ResultCard {
    title: string;
    description: string;
    icon: IconConfig;
}

export const resultsContent = {
    heading: "The Results",
    cards: [
        {
            title: "200+",
            description: "EDITED PROJECTS",
            icon: {
                type: "svg" as const,
                path: "/src/assets/home/ep.svg"
            }
        },
        {
            title: "20+",
            description: "YEARS OF EXPERIENCE",
            icon: {
                type: "svg" as const,
                path: "/src/assets/home/yoe.svg"
            }
        },
        {
            title: "300+",
            description: "HAPPY CLIENTS",
            icon: {
                type: "svg" as const,
                path: "/src/assets/home/happy.svg"
            }
        }
    ]
}; 