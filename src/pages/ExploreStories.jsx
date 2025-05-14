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
  // State to control showing the stories list
  const [showStoriesList, setShowStoriesList] = useState(false);
  // State to control showing the story modal
  const [showModal, setShowModal] = useState(false);
  // Add state for paginated story
  const [storyPages, setStoryPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // 3. Function to handle clicking a story tile
  const handleStoryClick = async (story) => {
    setSelectedStory(story);
    // Fetch the markdown file from the public folder
    try {
      // The path is relative to the public folder in Vite. Adjust if needed.
      const response = await fetch(`/src/assets/stories/${story.filename}`);
      if (!response.ok) throw new Error('Story not found');
      let text = await response.text();
      // Remove the first heading for The Lantern Keeper
      if (story.filename === "the-lantern-keeper.md") {
        // Remove the first line if it starts with '# '
        text = text.replace(/^# .+\n/, '');
      }
      // Split the story into pages using the ---pagebreak--- marker
      const pages = text.split(/---pagebreak---/g).map(p => p.trim()).filter(Boolean);
      setStoryPages(pages);
      setCurrentPage(0);
      setShowModal(true); // Show the modal when a story is clicked
    } catch (error) {
      setStoryPages(['Sorry, this story could not be loaded.']);
      setCurrentPage(0);
      setShowModal(true);
    }
  };

  // Function to close the modal
  const closeModal = () => setShowModal(false);

  return (
    <div className="exploreStories">
      <div className="scrollable-section">
        {/* Changed heading title */}
        <h1>Voices from the Shadows</h1>
        {/* New description for Voices from the Shadows */}
        <p>Step quietly—these tales weren’t meant to be heard, but now their whispers are reaching you.</p>
        {/* Search bar below the description */}
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
        {/* Show the list of story titles when the button is clicked, centered */}
        {showStoriesList && (
          <ul style={{
            listStyle: 'disc inside',
            margin: '0 0 1rem 0',
            padding: 0,
            fontSize: '1.05rem',
            color: '#222',
            textAlign: 'center',
            display: 'block',
          }}>
            {storyIdeas.map((story, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem', display: 'inline-block', width: '100%', textAlign: 'center' }}>{story.title}</li>
            ))}
          </ul>
        )}
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
        {/* Modal for displaying the full story */}
        {showModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'linear-gradient(135deg, #1a1a1a 80%, #23272f 100%)', // darker for contrast
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            zIndex: 1000,
          }}>
            <div className="story-content" style={{
              width: '100vw',
              height: '100vh',
              maxWidth: '100vw',
              maxHeight: '100vh',
              overflowY: 'auto',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '22px',
                  background: 'transparent',
                  border: 'none',
                  fontSize: '2.2rem',
                  cursor: 'pointer',
                  color: '#ffd580',
                  zIndex: 10,
                }}
                aria-label="Close"
              >
                &times;
              </button>
              {/* Only show the image for 'The Lantern Keeper' on the first page */}
              {selectedStory?.filename === "the-lantern-keeper.md" && currentPage === 0 && (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
                  <img
                    src="/ldescrptionimage.png"
                    alt="The Lantern Keeper"
                    style={{ maxWidth: '320px', width: '90vw', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '12px' }}
                  />
                </div>
              )}
              {selectedStory?.filename !== "the-lantern-keeper.md" && (
                <h2 style={{marginTop: 0, marginBottom: '1.2rem', fontSize: '2rem', textAlign: 'center', color: '#ffd580', fontWeight: 700}}>{selectedStory?.title}</h2>
              )}
              <div style={{width: '100%', maxWidth: 600}}>
                {/* Show the current page of the story */}
                <ReactMarkdown
                  components={{
                    strong: ({node, ...props}) => <strong {...props} />,
                    p: ({node, ...props}) => <p {...props} />,
                    li: ({node, ...props}) => <li {...props} />,
                  }}
                >{storyPages[currentPage]}</ReactMarkdown>
                {/* Pagination controls */}
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem'}}>
                  <button
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                    style={{
                      padding: '0.5rem 1.2rem',
                      fontSize: '1rem',
                      borderRadius: '6px',
                      border: 'none',
                      background: currentPage === 0 ? '#e3e8ee' : '#333',
                      color: currentPage === 0 ? '#aaa' : '#fff',
                      fontWeight: 'bold',
                      cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                      marginRight: '1rem',
                    }}
                  >
                    Previous
                  </button>
                  <span style={{fontSize: '1rem', color: '#ffd580'}}>
                    Page {currentPage + 1} of {storyPages.length}
                  </span>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(storyPages.length - 1, p + 1))}
                    disabled={currentPage === storyPages.length - 1}
                    style={{
                      padding: '0.5rem 1.2rem',
                      fontSize: '1rem',
                      borderRadius: '6px',
                      border: 'none',
                      background: currentPage === storyPages.length - 1 ? '#e3e8ee' : '#333',
                      color: currentPage === storyPages.length - 1 ? '#aaa' : '#fff',
                      fontWeight: 'bold',
                      cursor: currentPage === storyPages.length - 1 ? 'not-allowed' : 'pointer',
                      marginLeft: '1rem',
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExploreStories;