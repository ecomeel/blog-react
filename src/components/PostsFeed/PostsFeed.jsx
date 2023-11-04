import Header from "../Header/Header";
import "./PostsFeed.css";
import Post from "../Post/Post";

export default function PostsFeed({ posts, isLoading, isError }) {
    return (
        <div className="posts-feed">
            <Header text="Лента" />
            <ul className="posts-feed__list">
                {isLoading && <p className="posts-feed__loading-posts">Загрузка постов ...</p>}

                {isError && <p className="posts-feed__error-loading">Ошибка загрузки постов!</p>}

                {!isLoading && !posts && !isError && (
                    <p className="posts-feed__empty-list">Тут пока пусто ...</p>
                )}

                {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
        </div>
    );
}
