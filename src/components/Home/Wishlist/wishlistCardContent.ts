import { WishlistCardContent } from './types';

interface IconConfig {
    type: 'svg';
    path: string;
}

interface CategorySection {
    icon: IconConfig;
    items: string[];
}

export const wishlistCardContent: WishlistCardContent = {
    wishingFor: {
        fiction: {
            icon: {
                type: "svg" as const,
                path: "/src/assets/home/green-open.svg"
            },
            items: [
                "Contemporary Literary Fiction",
                "Historical Fiction",
                "Science Fiction",
                "Fantasy",
                "Mystery & Thriller",
                "Romance",
                "Young Adult",
                "Graphic Novels",
                "Short Story Collections",
                "Literary Classics",
                "World Literature",
                "Speculative Fiction",
                "Magical Realism",
                "Dystopian Fiction",
                "Adventure Fiction",
                "Horror"
            ]
        },
        nonfiction: {
            icon: {
                type: "svg" as const,
                path: "/src/assets/home/greenClosed.svg"
            },
            items: [
                "Biographies & Memoirs",
                "History",
                "Science & Technology",
                "Philosophy",
                "Psychology",
                "Self-Help"
            ]
        }
    },
    notWishingFor: {
        "All genres": {
            icon: {
                type: "svg" as const,
                path: "/icons/close.svg"
            },
            items: [
                "Erotica",
                "Fan Fiction",
                "Religious Fiction",
                "Political Fiction",
                "Military Fiction",
            ]
        }
    }
}; 