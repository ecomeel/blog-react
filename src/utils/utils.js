export function getNormalizedPosts(posts) {
    const ids = [];
    const byId = {};

    posts.forEach((post) => {
        ids.push(post.id);
        byId[post.id] = post;
    });

    return [ids, byId];
}