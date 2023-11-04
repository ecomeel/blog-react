import Header from "../Header/Header";
import "./PostsFeed.css";
import Post from "../Post/Post";

export default function PostsFeed({ posts, isLoading }) {
    return (
        <div className="posts-feed">
            <Header text="Лента" />
            <ul className="posts-feed__list">
                {isLoading && <p>Загрузка постов</p>}

                {posts ? (
                    posts.map((post) => <Post key={post.id} post={post} />)
                ) : (
                    <p className="posts-feed__empty-list">Тут пока пусто ...</p>
                )}
            </ul>
        </div>
    );
}
