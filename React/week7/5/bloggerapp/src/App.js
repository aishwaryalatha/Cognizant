import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState("book");

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Blogger App - Conditional Rendering</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("book")}>Show Book</button>
        <button onClick={() => setView("blog")}>Show Blog</button>
        <button onClick={() => setView("course")}>Show Course</button>
      </div>

      {/* Conditional Rendering using ternary */}
      {view === "book" ? (
        <BookDetails />
      ) : view === "blog" ? (
        <BlogDetails />
      ) : view === "course" ? (
        <CourseDetails />
      ) : (
        <p>Select a view</p>
      )}
    </div>
  );
}

export default App;

