export default function Post({ post }) {
    return (
        <li className="post">
            { post.time && <p className="post__time">{post.time}</p> }
            <h3 className="post__title">{post.title}</h3>
            <p className="post__text">{post.body}</p>
        </li>
    )
}