import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Blog.css';


const Blog = () => {
  // Example blog posts data
  const blogPosts = [
    {
      id: 1, 
      title: "Why work with me",
      date: "November 22, 2023"
    },
    {
      id: 2, 
      title: "NAR Lawsuit",
      date: "November 27, 2023"
    },
    // ... more blog posts
  ];

  return (
    <div>
      <Header />
      <div className="blog-posts">
      <h1>Knowledge Hub</h1>
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <h2>
              <Link to={`/blog-posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;