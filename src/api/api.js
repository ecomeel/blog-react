const BASE_URL = "https://jsonplaceholder.typicode.com";

export function getPostsFromApi() {
    return fetch(`${BASE_URL}/posts`).then((response) => {
        if (!response.ok) {
            throw new Error();
        }

        return response.json();
    });
}

export function deletePostOnApi(id) {
    fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
    });
}
