const BASE_URL = "https://jsonplaceholder.typicode.com";

export function getPostsFromApi() {
    return fetch(`${BASE_URL}/posts`).then((response) => {
        if (!response.ok) {
            throw new Error('Api response fail!');
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
