import Header from "../Header/Header";
import "./NewPost.css";
import { useState } from "react";

export default function NewPost() {
    const [newPost, setNewPost] = useState({
        date: "",
        title: "",
        text: "",
    });

    function handleNewPost() {
        setNewPost({
            ...newPost,
            date: createDate(),
        });

        console.log(newPost);
    }

    function createDate() {
        return "1.2.23";
    }

    function handleInput(event) {
        const input = event.target;
        setNewPost({
            ...newPost,
            [input.name]: input.value,
        });
    }

    return (
        <div className="new-post">
            <Header text="Новый пост" />
            <input
                className="new-post__title"
                type="text"
                name="title"
                placeholder="Заголовок"
                value={newPost.title}
                onChange={handleInput}
            />
            <textarea
                className="new-post__text"
                placeholder="Напишите техт"
                value={newPost.text}
                name="text"
                onChange={handleInput}
            ></textarea>
            <button onClick={handleNewPost} className="new-post__post-button">
                Опубликовать
            </button>
        </div>
    );
}
