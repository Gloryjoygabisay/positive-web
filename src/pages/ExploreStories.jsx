import React from 'react';

// 1. Array of story ideas
const storyIdeas = [
  {
    title: 'The Lantern Keeper',
    description: 'Every night at 3:33 AM, a flickering lantern appears in the woods near town. Those who follow it never return—but their whispers do.'
  },
  {
    title: 'Room 217 Never Sleeps',
    description: 'In an abandoned hotel, one room glows faintly at night. Visitors report hearing sobbing, but there’s never anyone inside. Only the guestbook changes.'
  },
  {
    title: 'Static in the Fog',
    description: 'A radio DJ receives song requests from voices claiming to be from the dead. Each song reveals secrets no one should know.'
  },
  {
    title: 'Beneath the Birch Tree',
    description: 'A child disappears during a midnight game of hide and seek. In their place, a note is found—written in their handwriting, saying “Don’t look for me. It’s listening.”'
  },
  {
    title: 'The Girl Who Walks Backwards',
    description: 'A town fears a ghostly girl seen walking backward down roads at night. Her face is never visible—until you dream of her.'
  },
  {
    title: 'The Clockmaker’s Curse',
    description: 'A man buys an antique clock that ticks backward. Time unravels, and with it, so does reality—one whisper at a time.'
  },
  {
    title: 'They Knocked Twice',
    description: 'A couple hears knocks on their door every night—always twice, always at 1:11 AM. When they finally answer… something joins them inside.'
  },
  {
    title: 'Voices in the Cornfield',
    description: 'During harvest, a farmer hears voices whispering his name from the stalks. He finds notes buried in the soil—each one dated tomorrow.'
  },
  {
    title: 'The Mirror Hall Pact',
    description: 'Teenagers break into a carnival’s mirror maze after dark. One by one, their reflections stop copying them—and begin doing something else.'
  },
  {
    title: 'The Last Broadcast',
    description: 'A YouTuber livestreams from a haunted asylum—but the video shows two of him. He doesn’t see the second version… but his viewers do.'
  }
];

function ExploreStories() {
  return (
    <div className="exploreStories">
      <div className="scrollable-section">
        <h1>Explore Stories</h1>
        <p>Discover a variety of stories curated just for you.</p>
        {/* 2. Tile layout for stories */}
        <div className="story-tiles">
          {storyIdeas.map((story, idx) => (
            <div className="story-tile" key={idx}>
              <h2>{story.title}</h2>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreStories;