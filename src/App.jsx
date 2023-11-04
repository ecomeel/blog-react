import "./App.css";
import NewPost from "./components/NewPost/NewPost";
import PostsFeed from "./components/PostsFeed/PostsFeed";
import { useState, useEffect } from "react";
import { getPosts } from "./api/api.js";
import { getNormalizedPosts } from "./utils/utils.js";

function App() {
    const [postsIds, setPostsIds] = useState(null);
    const [postById, setPostById] = useState({});

    const [isLoadingPosts, setIsLoadingPosts] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoadingPosts(true);
        getPosts()
            .then((posts) => {
                setIsError(false);
                setIsLoadingPosts(false);

                const [ids, byId] = getNormalizedPosts(posts);
                setPostById(byId);
                setPostsIds(ids);
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
                postById={postById}
                postsIds={postsIds}
                isLoading={isLoadingPosts}
                isError={isError}
            />
        </div>
    );
}

export default App;
