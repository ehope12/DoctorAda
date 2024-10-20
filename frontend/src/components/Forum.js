// Forum.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Forum() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  // Fetch posts from the backend
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/forum/posts')
      .then(response => setPosts(response.data.posts))
      .catch(error => console.error("There was an error fetching the posts!", error));
  }, []);

  // Submit new post
  const submitPost = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/forum/posts', { title, content, username })
      .then(response => {
        setPosts([...posts, response.data.post]);
        setTitle('');
        setContent('');
        setUsername('');
      })
      .catch(error => console.error("There was an error creating the post!", error));
  };

  return (
    <div className="forum-container">
      <h2 className="forum-title">Forum</h2>
      
      {/* Post list */}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Author: {post.author}</small>
            <hr />
          </li>
        ))}
      </ul>

      {/* New post form moved to the bottom */}
      <form className="forum-submit" onSubmit={submitPost}>
        <input className="input-container"
          type="text" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Post Title"
          required
        />
        <textarea className="input-container"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Post Content"
          required
        />
        <input className="input-container"
          type="text" 
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <button className="submit" type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default Forum;
