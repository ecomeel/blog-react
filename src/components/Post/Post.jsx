import "./Post.css";
export default function Post({ post, onDelete }) {
    return (
        <li className="post">
            {post.time && <p className="post__time">{post.time}</p>}
            <h3 className="post__title">{post.title}</h3>
            <p className="post__text">{post.body}</p>
            <button onClick={onDelete} className="post__delete-post-button">
                Удалить пост
            </button>
        </li>
    );
}
