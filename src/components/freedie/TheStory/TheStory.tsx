import React from 'react';
import './TheStory.scss';
import { theStoryContent } from './TheStoryContent';

const TheStory = () => {
  return (
    <div className="the-story-wrapper">
      <div className='the-story-container'>
        <div className="the-story-image-container">
           <img src={theStoryContent.image} alt="The Story" />
        </div>
        <div className="the-story-content">
          <h2 className="the-story-heading">{theStoryContent.heading}</h2>
          <p className="the-story-description">{theStoryContent.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TheStory; 