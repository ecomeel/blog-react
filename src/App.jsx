import './App.css'
import NewPost from './components/NewPost/NewPost'
import PostsFeed from './components/PostsFeed/PostsFeed'
import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => console.log(posts))
  }, []);

  return (
    <div className="app">
      <NewPost />
      <PostsFeed />
    </div>
  )
}

export default App
