import Header from "../Header/Header";
import "./PostsFeed.css";
import Post from "../Post/Post";
import { deletePostOnApi } from "../../api/api";



export default function PostsFeed({
    postById,
    postsIds,
    setPostById,
    setPostsIds,
    isLoading,
    isError,
}) {
    function handleDeletePost(id) {
        setPostsIds(postsIds.filter(postId => postId != id));
        deletePostOnApi(id)
    }

    return (
        <div className="posts-feed">
            <Header text="Лента" />
            <ul className="posts-feed__list">
                {isLoading && (
                    <p className="posts-feed__loading-posts">
                        Загрузка постов ...
                    </p>
                )}

                {isError && (
                    <p className="posts-feed__error-loading">
                        Ошибка загрузки постов!
                    </p>
                )}

                {!isLoading && !postsIds && !isError && (
                    <p className="posts-feed__empty-list">Тут пока пусто ...</p>
                )}

                {postsIds &&
                    postsIds.map((id) => (
                        <Post
                            key={id}
                            post={postById[id]}
                            onDelete={() => handleDeletePost(id)}
                        />
                    ))}
            </ul>
        </div>
    );
}
