import Header from "../Header/Header";
import "./PostsFeed.css";
import Post from "../Post/Post";

export default function PostsFeed({ postById, postsIds, isLoading, isError }) {
    return (
        <div className="posts-feed">
            <Header text="Лента" />
            <ul className="posts-feed__list">
                {isLoading && <p className="posts-feed__loading-posts">Загрузка постов ...</p>}

                {isError && <p className="posts-feed__error-loading">Ошибка загрузки постов!</p>}

                {!isLoading && !postsIds && !isError && (
                    <p className="posts-feed__empty-list">Тут пока пусто ...</p>
                )}

                {postsIds && postsIds.map(id => <Post key={id} post={postById[id]} />)}
            </ul>
        </div>
    );
}
