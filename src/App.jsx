import "./App.css";
import NewPost from "./components/NewPost/NewPost";
import PostsFeed from "./components/PostsFeed/PostsFeed";
import { useState, useEffect } from "react";
import { getPosts } from "./api/api.js";

function App() {
    const [posts, setPosts] = useState(null);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoadingPosts(true);
        getPosts()
            .then((posts) => {
                setIsError(false);
                setIsLoadingPosts(false);
                setPosts(posts);
            })
            .catch((error) => {
                setIsError(true);
                setIsLoadingPosts(false);
            });
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
    );
}

export default App;
