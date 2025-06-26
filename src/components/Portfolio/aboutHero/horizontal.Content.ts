export interface Card {
  id: string;
  endTranslateX: number;
  rotate: number;
  image: string;
  alt: string;
}

export interface HorizontalContent {
  heading: string;
  scrollDown: string;
  cards: Card[];
  image1: string;
  image2: string;
}

export const horizontalContent: HorizontalContent = {
  heading: "Who Are We?",
  scrollDown: "scroll down",
  image1:"/src/assets/about/about-bottom.svg",
  image2:"/src/assets/about/about-bottom-left.svg",
  cards: [
    {
      id: '#h-card1',
      endTranslateX: -2000,
      rotate: 25,
      image: "../2manteam.png",
      alt: "card-img"
    },
    {
      id: '#h-card2',
      endTranslateX: -1000,
      rotate: -30,
      image: "../5manteam.png",
      alt: "card-img"
    },
    {
      id: '#h-card3',
      endTranslateX: -2000,
      rotate: 45,
      image: "../casualreading.png",
      alt: "card-img"
    },
    {
      id: '#h-card4',
      endTranslateX: -2500,
      rotate: -30,
      image: "../3manteam.png",
      alt: "card-img"
    }
  ]
}; 