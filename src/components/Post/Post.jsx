import "./Post.css";

export default function Post({ post, onDelete }) {
    return (
        <li className="post">
            {post.date && (
                <p className="post__time">
                    {post.date.day}.{post.date.month}.{post.date.year}{" "}
                    {post.date.hours}:{post.date.minutes}
                </p>
            )}
            <h3 className="post__title">{post.title}</h3>
            <p className="post__text">{post.body}</p>
            <button onClick={onDelete} className="post__delete-post-button">
                Удалить пост
            </button>
        </li>
    );
}
