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
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  // State for chapter titles
  const [chapterTitles, setChapterTitles] = useState([]);

  // 3. Function to handle clicking a story tile
  const handleStoryClick = async (story) => {
    setSelectedStory(story);
    try {
      if (story.filename === "the-lantern-keeper.md") {
        // Fetch the markdown from public folder
        const response = await fetch(`/stories/${story.filename}`);
        if (!response.ok) throw new Error('Story not found');
        let text = await response.text();

        // Split into pages: Title+Description, Prologue, Chapters, Epilogue
        const pages = [];
        // 1. Title + Description (merged)
        const titleMatch = text.match(/^# (.+)$/m);
        const descMatch = text.match(/^# .+\n+([^\n]+)$/m);
        if (titleMatch && descMatch) {
          pages.push(`# ${titleMatch[1]}\n\n${descMatch[1]}`);
        } else if (titleMatch) {
          pages.push(`# ${titleMatch[1]}`);
        }
        // 2. Split by --- (section breaks)
        const sections = text.split(/---+/g).map(s => s.trim()).filter(Boolean);
        // Remove title/desc from first section if present
        if (sections[0].startsWith('#')) sections.shift();
        // Each section starts with * Prologue or * Chapter
        for (const section of sections) {
          if (section.startsWith('*')) {
            // Remove the leading * and split title from body
            const [firstLine, ...rest] = section.split('\n');
            const title = firstLine.replace(/^\*\s*/, '').trim();
            const body = rest.join('\n').trim();
            pages.push(`**${title}**\n\n${body}`);
          }
        }
        setStoryPages(pages);
        setCurrentPage(0);
        setShowModal(true);
        setChapterTitles(pages.map(p => {
          const match = p.match(/^\*\*([^*]+)\*\*/);
          return match ? match[1] : null;
        }));
        return;
      }

      const response = await fetch(`/src/assets/stories/${story.filename}`);
      if (!response.ok) throw new Error('Story not found');
      let text = await response.text();

      // Split the story into pages by detecting '**Prologue**' or '**Chapter X**' markers
      const pages = text.split(/(?=\*\*.*?\*\*)/g).map(p => p.trim()).filter(Boolean);

      // Extract chapter titles for each page
      const chapters = pages.map(page => {
        const match = page.match(/\*\*([^*]+)\*\*/); // Look for '**Title**'
        return match ? match[1] : null;
      });

      setStoryPages(pages);
      setCurrentPage(0);
      setShowModal(true);
      setChapterTitles(chapters); // Save chapter titles in state
    } catch (error) {
      setStoryPages(['Sorry, this story could not be loaded.']);
      setCurrentPage(0);
      setShowModal(true);
    }
  };

  // Function to close the modal
  const closeModal = () => setShowModal(false);

  // Filter stories based on search query
  const filteredStories = storyIdeas.filter(story =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
            {filteredStories.length > 0 ? (
              filteredStories.map((story, idx) => (
                <li key={idx} style={{ marginBottom: '0.5rem', display: 'inline-block', width: '100%', textAlign: 'center' }}>{story.title}</li>
              ))
            ) : (
              <li style={{ color: 'gray', fontStyle: 'italic' }}>No stories found</li>
            )}
          </ul>
        )}
        {/* 2. Tile layout for stories */}
        <div className="story-tiles">
          {filteredStories.map((story, idx) => (
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
              {/* Only show the styled title for 'The Lantern Keeper' on the first page if the markdown does NOT already include a heading */}
              {selectedStory?.filename === "the-lantern-keeper.md" && currentPage === 0 && !storyPages[0]?.startsWith('#') && (
                <h2 style={{
                  color: '#ffcc00',
                  fontSize: '3rem',
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontFamily: 'Cinzel Decorative, serif',
                  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)',
                  letterSpacing: '0.15rem',
                }}>
                  The Lantern Keeper
                </h2>
              )}
              {/* Only show chapter title for non-first pages */}
              {chapterTitles[currentPage] && currentPage === 0 && (
                <h2 style={{
                  marginTop: '1rem',
                  marginBottom: '1.2rem',
                  fontSize: '100%',
                  textAlign: 'center',
                  color: '#ffd580',
                  fontWeight: 700,
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                }}>
                  {chapterTitles[currentPage]}
                </h2>
              )}
              <div style={{width: '100%', maxWidth: 600}}>
                {/* Show the current page of the story */}
                <ReactMarkdown
                  components={{
                    h2: ({ node, ...props }) => (
                      <h2
                        {...props}
                        style={{
                          color: '#ffd580', // Bright color for visibility
                          fontFamily: 'Cinzel Decorative, serif',
                          fontSize: '100%', // Adjusted font size to 100%
                          fontWeight: 400, // Lowered font weight
                          marginTop: '1em',
                          marginBottom: '0.5em',
                          textShadow: '1px 1px 4px rgba(0,0,0,0.5)', // Subtle shadow for contrast
                          textAlign: 'center',
                        }}
                      />
                    ),
                    strong: ({node, ...props}) => <strong {...props} />,
                    p: ({node, ...props}) => <p {...props} />,
                    li: ({node, ...props}) => <li {...props} />,
                  }}
                >{storyPages[currentPage]}</ReactMarkdown>
                {/* Pagination controls */}
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem'}}>
                  <button
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                    disabled={currentPage <= 0} // Ensure 'Previous' is disabled only on the first page
                    style={{
                      padding: '0.5rem 1.2rem',
                      fontSize: '1rem',
                      borderRadius: '6px',
                      border: 'none',
                      background: currentPage <= 0 ? '#e3e8ee' : '#333',
                      color: currentPage <= 0 ? '#aaa' : '#fff',
                      fontWeight: 'bold',
                      cursor: currentPage <= 0 ? 'not-allowed' : 'pointer',
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
                    disabled={currentPage >= storyPages.length - 1} // Ensure 'Next' is disabled only on the last page
                    style={{
                      padding: '0.5rem 1.2rem',
                      fontSize: '1rem',
                      borderRadius: '6px',
                      border: 'none',
                      background: currentPage >= storyPages.length - 1 ? '#e3e8ee' : '#333',
                      color: currentPage >= storyPages.length - 1 ? '#aaa' : '#fff',
                      fontWeight: 'bold',
                      cursor: currentPage >= storyPages.length - 1 ? 'not-allowed' : 'pointer',
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