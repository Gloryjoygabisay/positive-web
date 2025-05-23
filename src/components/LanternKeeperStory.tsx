import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './LanternKeeperStory.css';

const LanternKeeperStory: React.FC = () => {
  const [storyContent, setStoryContent] = useState('');

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch('/public/stories/the-lantern-keeper.md');
        if (!response.ok) {
          throw new Error('Failed to fetch the story content');
        }
        const text = await response.text();
        console.log('Fetched story content:', text);
        setStoryContent(text);
      } catch (error) {
        console.error('Error fetching story:', error);
        setStoryContent('Sorry, the story could not be loaded.');
      }
    };

    fetchStory();
  }, []);

  return (
    <div className="story-content">
      <h1 className="title">Prologue: Whispers in the Dark</h1>
      <ReactMarkdown>{storyContent}</ReactMarkdown>
    </div>
  );
};

export default LanternKeeperStory;