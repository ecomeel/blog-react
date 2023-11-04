const BASE_URL = "https://jsonplaceholder.typicode.com";
const API_ERROR_MESSAGE = 'Api response fail!';

export function getPostsFromApi() {
    return fetch(`${BASE_URL}/posts`).then((response) => {
        if (!response.ok) {
            throw new Error(API_ERROR_MESSAGE);
        }

        return response.json();
    });
}

export function deletePostOnApi(id) {
    fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
    });
}

export function addPostOnApi(newPost) {
    return fetch(`${BASE_URL}/posts`, {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
}
