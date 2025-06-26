export interface Community {
  name: string;
  link: string;
}

export interface CommunityHeader {
  icon: string;
  title: string;
}

export interface CommunityContent {
  header: CommunityHeader;
  communities: Community[];
}

export const communityContent: CommunityContent = {
  header: {
    icon: '../../src/assets/contact/com.svg', // You can update this path to your actual icon
    title: 'Communities'
  },
  communities: [
    {
      name: 'Community-1',
      link: 'https://example.com/community1'
    },
    {
      name: 'Community-2', 
      link: 'https://example.com/community2'
    },
    {
      name: 'Community-3',
      link: 'https://example.com/community3'
    }
  ]
};
