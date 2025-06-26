import React from 'react';
import './Communities.scss';
import { communityContent, Community } from './communityContent';

const Communities: React.FC = () => {
  const handleCommunityClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="communities">
      <div className="communities-header">
        <div className="header-content">
          <img 
            src={communityContent.header.icon} 
            alt="Communities Icon" 
            className="header-icon"
          />
          <h2 className="header-heading">{communityContent.header.title}</h2>
        </div>
      </div>
      
      <div className="communities-list">
        {communityContent.communities.map((community: Community, index: number) => (
          <div 
            key={index}
            className="community-item"
            onClick={() => handleCommunityClick(community.link)}
          >
            {community.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communities;
