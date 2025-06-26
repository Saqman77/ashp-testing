import { WishListContent } from './types';

export const wishListContent: WishListContent = {
    headingMain: "Ash P Reads",
    headingSub: "Manuscript",
    highlight: "Wishlist",
    description1: "Safe-for-work Fiction and Nonfiction manuscripts for all ages. Children's Literature is on top of the list.",
    description2: "Picture/Illustrated Books, Chapter Books, Novels, Novellas, Short stories, Anthologies, Comic Books, Graphic Novels, Graphic Memoirs, Biographies, Poetry.",
    sectionTitles: {
        wishingFor: "Wishing for",
        notWishingFor: "Not wishing for"
    },
    fictionTitle: "Fiction",
    nonfictionTitle: "Nonfiction",
    categories: {
        wishingFor: {
            title: "Wishing For",
            icon: {
                type: "svg" as const,
                path: "/icons/check-circle.svg"
            },
            label: "Compatible",
            labelIcon: {
                type: "svg" as const,
                path: "/src/assets/home/greenTick.svg"
            },
            labelColor: "green"
        },
        notWishingFor: {
            title: "Not Wishing For",
            icon: {
                type: "svg" as const,
                path: "/icons/stop-circle.svg"
            },
            label: "Incompatible",
            labelIcon: {
                type: "svg" as const,
                path: "/src/assets/home/redCross.svg"
            },
            labelColor: "red"
        }
    },
    notWishingForDescription: "Manuscripts with Excessive Profanity, Racism, Religious Prejudice, or depiction of Toxic Relationships as healthy.",
    allGenresLabel: "All genres"
}; 