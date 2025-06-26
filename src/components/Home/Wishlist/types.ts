export interface IconConfig {
    type: 'svg';
    path: string;
}

export interface CategorySection {
    icon: IconConfig;
    items: string[];
}

export interface CategoryConfig {
    title: string;
    icon: IconConfig;
    label: string;
    labelIcon: IconConfig;
    labelColor: string;
}

export interface WishlistCardContent {
    wishingFor: {
        fiction: CategorySection;
        nonfiction: CategorySection;
    };
    notWishingFor: {
        "All genres": CategorySection;
    };
}

export interface WishListContent {
    headingMain: string;
    headingSub: string;
    highlight: string;
    description1: string;
    description2: string;
    sectionTitles: {
        wishingFor: string;
        notWishingFor: string;
    };
    fictionTitle: string;
    nonfictionTitle: string;
    categories: {
        wishingFor: CategoryConfig;
        notWishingFor: CategoryConfig;
    };
    notWishingForDescription: string;
    allGenresLabel: string;
} 