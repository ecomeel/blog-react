import Header from "../Header/Header";
import "./NewPost.css";
import { useState } from "react";
import { addPostOnApi } from "../../api/api";
import { getDate, setLeadingZero } from "../../utils/utils";
import { v4 as uuidv4 } from "uuid";

export default function NewPost({
    postById,
    postsIds,
    setPostById,
    setPostsIds,
}) {
    const [newPost, setNewPost] = useState({
        title: "",
        body: "",
    });

    function handleAddNewPost() {
        const newDate = getDate();
        const correctDate = setLeadingZero(newDate)

        const post = {
            title: newPost.title,
            body: newPost.body,
            date: correctDate,
            id: uuidv4(),
        };

        addPostOnApi(post);

        setPostsIds([post.id, ...postsIds]);
        setPostById({
            ...postById,
            [post.id]: post,
        });
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
                name="body"
                onChange={handleInput}
            ></textarea>
            <button onClick={handleAddNewPost} className="new-post__post-button">
                Опубликовать
            </button>
        </div>
    );
}
