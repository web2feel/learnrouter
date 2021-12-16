import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function StoryList() {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6">
      {stories &&
        stories.map((story) => {
          return (
            <div key={story.id} className="p-6 border rounded bg-white ">
              <h2 className="text-2xl mb-6">{story.title}</h2>
              <button
                onClick={() => navigate(`${story.id}`)}
                className="px-2 py-1 bg-purple-500 rounded text-white"
              >
                Read Story
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default StoryList;
