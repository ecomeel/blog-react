import './App.css'
import NewPost from './components/NewPost/NewPost'
import PostsFeed from './components/PostsFeed/PostsFeed'
import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState(null);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoadingPosts(true)
    fetch('https://jsonplaceholder.typicode.com/postss')
    .then(response => {
      if (!response.ok) {
        throw new Error;
      }

      return response.json()
    })
    .then(posts => {
      setIsError(false)
      setIsLoadingPosts(false)
      setPosts(posts)
    })
    .catch(error => {
      setIsError(true)
      setIsLoadingPosts(false)
    })
  }, []);

  return (
    <div className="app">
      <NewPost />
      <PostsFeed 
        posts={posts}
        isLoading={isLoadingPosts}
        isError={isError}
      />
    </div>
  )
}

export default App
