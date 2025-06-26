export interface ServiceCard {
    id: number;
    title: string;
    subtitle: string;
    description: string[];
    icon: string; // You'll add the icon path here
    readMoreIcon: string; // You'll add the REAR MORE icon path here
    backgroundColor: string;
    readMoreText: string;
    backText: string;
}

export const servicesCardsContent: ServiceCard[] = [
    {
        id: 1,
        title: "Consultation",
        subtitle: "",
        description: [
            "You have a manuscript, but you aren’t sure what comes next",
            "Book a complimentary 30-minute video consultation call to discuss your editing needs.",
            "Book your free 30-minute video consultation."
        ],
        icon: "/Consultaion.jpg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#e0e0f2", // Example color 1
        readMoreText: "READ MORE",
        backText: "Back"
    },
    {
        id: 2,
        title: "Manuscript Evaluation",
        subtitle: "Is your manuscript feeling incomplete? ",
        description: [
            "Our manuscript evaluation provides a roadmap to transform your draft from promising to powerful.",
            "Our Manuscript Evaluation Service includes annotations in manuscript and a basic editorial letter.",
            "Rates are determined by the health of the manuscript, your budget, and the word count"
        ],
        icon: "/Manuscript Evaluation.webp", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#f2e0e0", // Example color 2
        readMoreText: "READ MORE",
        backText: "Back"
    },
    {
        id: 3,
        title: "Developmental Edit",
        subtitle: "Plot inconsistencies? Flawed character development? Weak story arcs?",
        description: [
            "Our developmental editing will dig deep, offering targeted feedback and strategic improvements to elevate your story’s structure, character development, and narrative impact.",
            "Our Developmental Editing Service includes annotations in the manuscript, a detailed editorial letter and one (1) post-revision review.",
            "Rates are determined by the health of the manuscript, your budget, and the word count."
        ],
        icon: "/Developmental Editing.webp", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#e0f2e0", // Example color 3
        readMoreText: "READ MORE",
        backText: "Back"
    },
    {
        id: 4,
        title: "Line and Copy Editing Combo",
        subtitle: "50-word sentences? Sticky phrasing? Manuscript mysteries got you stuck?",
        description: [
            "Our line and copy editing combo cuts through the clutter of wordy drafts, transforming it into polished prose.",
            "Our Line and Copy Editing Combo Service includes annotations, edits with Tracked Changes. One (1) post-revision review may be included at half-price only if new material is introduced to the edited manuscript.",
            "Rates are determined by the health of the manuscript, your budget, and the word count"
        ],
        icon: "/LineCopyeditngCombo.webp", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#f2f2e0", // Example color 4
        readMoreText: "READ MORE",
        backText: "Back"
    },
    {
        id: 5,
        title: "Proofreading",
        subtitle: "Typos hiding in plain sight? Punctuation playing tricks",
        description: [
            "Our proofreading ensures your manuscript is as error-free as is humanly possible. Only the Creator is perfect!",
            "Our Proofreading Service includes annotations and edits with Tracked Changes.",
            "Rates are determined by your budget and the word count."
        ],
        icon: "/Proofreading.jpg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#e0e0f2", // Example color 1
        readMoreText: "READ MORE",
        backText: "Back"
    },
    {
        id: 6,
        title: "Reader Services",
        subtitle: "",
        description: [
            "Does your manuscript need a Beta Reader? Maybe you require a Sensitivity or Authenticity Reader?",
            "Our team of readers can help you.",
            "Rates are determined by the health of the manuscript, your  budget, and the word count."
        ],
        icon: "/Reading Services.jpg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#f2e0e0", // Example color 2
        readMoreText: "READ MORE",
        backText: "Back"
    },
    {
        id: 7,
        title: "Other Services",
        subtitle: "",
        description: [
            "Need an Urdu to English translation? Transcribing or subtitles?",
            "Drop us a line and ask us what else we do. We got you!",
            ""
        ],
        icon: "/Other Services (1).jpg", // Add icon path
        readMoreIcon: "/src/assets/home/readmore.svg", // Add REAR MORE icon path
        backgroundColor: "#e0f2e0", // Example color 3
        readMoreText: "READ MORE",
        backText: "Back"
    }
]; 