const BASE_URL = "https://jsonplaceholder.typicode.com";

export function getPosts() {
    return fetch(`${BASE_URL}/posts`).then((response) => {
        if (!response.ok) {
            throw new Error();
        }

        return response.json();
    });
}
