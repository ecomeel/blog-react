import Header from "../Header/Header";
import "./NewPost.css";
import { useState } from "react";
import { addPostOnApi } from "../../api/api";
import { getDate, setLeadingZero, validation } from "../../utils/utils";
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

    const [isErrorValid, setIsErrorvalid] = useState({
        isError: false,
        error: "",
    });

    function handleAddNewPost() {
        setIsErrorvalid({ ...isErrorValid, isError: false });

        const {statusOk, errorType} = validation(newPost.title, newPost.body);
        if (!statusOk) {
            setIsErrorvalid({ isError: true, error: errorType })
            return;
        }

        const newDate = getDate();
        const correctDate = setLeadingZero(newDate);

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

        setNewPost({ title: '', body: '' })
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
                value={newPost.body}
                name="body"
                onChange={handleInput}
            ></textarea>
            <button
                onClick={handleAddNewPost}
                className="new-post__post-button"
            >
                Опубликовать
            </button>
            {isErrorValid.isError && <p className="error">{isErrorValid.error}</p>}
        </div>
    );
}
