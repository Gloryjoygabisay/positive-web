import React, { useState } from 'react';
// 1. Import a markdown parser. We'll use react-markdown for easy rendering.
import ReactMarkdown from 'react-markdown';

// 1. Array of story ideas
const storyIdeas = [
  {
    title: "The Lantern Keeper",
    filename: "the-lantern-keeper.md",
    description: "Every night at 3:33 AM, a flickering lantern appears in the woods near town. Those who follow it never return—but their whispers do."
  },
  {
    title: "Room 217 Never Sleeps",
    filename: "room-217-never-sleeps.md",
    description: "In an abandoned hotel, one room glows faintly at night. Visitors report hearing sobbing, but there’s never anyone inside. Only the guestbook changes."
  },
  {
    title: "Static in the Fog",
    filename: "static-in-the-fog.md",
    description: "A radio DJ receives song requests from voices claiming to be from the dead. Each song reveals secrets no one should know."
  },
  {
    title: "Beneath the Birch Tree",
    filename: "beneath-the-birch-tree.md",
    description: "A child disappears during a midnight game of hide and seek. In their place, a note is found—written in their handwriting, saying “Don’t look for me. It’s listening.”"
  },
  {
    title: 'The Girl Who Walks Backwards',
    filename: "the-girl-who-walks-backwards.md",
    description: 'A town fears a ghostly girl seen walking backward down roads at night. Her face is never visible—until you dream of her.'
  },
  {
    title: "The Clockmaker's Curse",
    filename: "the-clockmakers-curse.md",
    description: "A man buys an antique clock that ticks backward. Time unravels, and with it, so does reality—one whisper at a time."
  },
  {
    title: "They Knocked Twice",
    filename: "they-knocked-twice.md",
    description: "A couple hears knocks on their door every night—always twice, always at 1:11 AM. When they finally answer… something joins them inside."
  },
  {
    title: "Voices in the Cornfield",
    filename: "voices-in-the-cornfield.md",
    description: "During harvest, a farmer hears voices whispering his name from the stalks. He finds notes buried in the soil—each one dated tomorrow."
  },
  {
    title: "The Mirror Hall Pact",
    filename: "the-mirror-hall-pact.md",
    description: "Teenagers break into a carnival’s mirror maze after dark. One by one, their reflections stop copying them—and begin doing something else."
  },
  {
    title: "The Last Broadcast",
    filename: "the-last-broadcast.md",
    description: "A YouTuber livestreams from a haunted asylum—but the video shows two of him. He doesn’t see the second version… but his viewers do."
  }
];

function ExploreStories() {
  // 2. State to track selected story and its markdown content
  const [selectedStory, setSelectedStory] = useState(null);
  const [storyContent, setStoryContent] = useState('');

  // 3. Function to handle clicking a story tile
  const handleStoryClick = async (story) => {
    setSelectedStory(story);
    // Fetch the markdown file from the public folder
    try {
      // The path is relative to the public folder in Vite. Adjust if needed.
      const response = await fetch(`/src/assets/stories/${story.filename}`);
      if (!response.ok) throw new Error('Story not found');
      const text = await response.text();
      setStoryContent(text);
    } catch (error) {
      setStoryContent('Sorry, this story could not be loaded.');
    }
  };

  return (
    <div className="exploreStories">
      <div className="scrollable-section">
        {/* Changed heading title */}
        <h1>Voices from the Shadows</h1>
        {/* Search bar below the heading title */}
        <input
          type="text"
          placeholder="Search stories..."
          style={{
            width: '70%', // Make the search bar shorter for mobile
            maxWidth: '350px', // Prevent it from being too wide on desktop
            display: 'block',
            margin: '1rem auto', // Center horizontally
            padding: '0.5rem 1rem', // Less vertical padding, keep horizontal for comfort
            fontSize: '1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
        />
        {/* New description for Voices from the Shadows */}
        <p>Step quietly—these tales weren’t meant to be heard, but now their whispers are reaching you.</p>
        {/* 2. Tile layout for stories */}
        <div className="story-tiles">
          {storyIdeas.map((story, idx) => (
            <div
              className="story-tile"
              key={idx}
              onClick={() => handleStoryClick(story)}
              style={{ cursor: 'pointer', border: selectedStory?.filename === story.filename ? '2px solid #007bff' : '1px solid #ccc' }}
            >
              <h2>{story.title}</h2>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
        {/* 4. Display the markdown content if a story is selected */}
        {selectedStory && (
          <div className="story-content" style={{ marginTop: '2rem', background: '#fff', padding: '1rem', borderRadius: '8px' }}>
            <h2>{selectedStory.title}</h2>
            <ReactMarkdown>{storyContent}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExploreStories;