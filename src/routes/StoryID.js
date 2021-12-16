import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function StoryID() {
  const { id } = useParams();
  const [story, setStory] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setStory(data))
  }, [id]);

  return (
    <div className="bg-white p-6 border rounded">
      <h2 className="text-6xl mb-6">{story?.title}</h2>
      <p className="text-slate-600"> {story?.body} </p>
    </div>
  );
}

export default StoryID;
