import Header from "../Header/Header";
import "./NewPost.css";

export default function NewPost() {
    return (
        <div className="new-post">
            <Header text="Новый пост" />
            <input
                className="new-post__title"
                type="text"
                placeholder="Заголовок"
            />
            <textarea
                className="new-post__text"
                placeholder="Напишите техт"
            ></textarea>
            <button className="new-post__post-button">Опубликовать</button>
        </div>
    );
}
