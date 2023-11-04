import './App.css'
import NewPost from './components/NewPost/NewPost'
import PostsFeed from './components/PostsFeed/PostsFeed'
import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState(null);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      setIsLoadingPosts(true)
      setPosts(posts)
      setIsLoadingPosts(false)
    })
  }, []);

  return (
    <div className="app">
      <NewPost />
      <PostsFeed 
        posts={posts}
        isLoading={isLoadingPosts}
      />
    </div>
  )
}

export default App
