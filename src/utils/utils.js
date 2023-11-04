export function getNormalizedPosts(posts) {
    const ids = [];
    const byId = {};

    posts.forEach((post) => {
        ids.push(post.id);
        byId[post.id] = post;
    });

    return [ids, byId];
}

export function getDate() {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    return {
        day,
        month,
        year,
        hours,
        minutes,
    };
}

export function setLeadingZero(date) {
    for (let key in date) {
        typeof date[key] == "number" &&
            date[key] < 10 &&
            (date[key] = `0${date[key]}`);
    }
    return date;
}

export function validation(title, body) {
    if (title == '') {
        return {ok: false, error: 'Пустой заголовок поста'}
    }
    if (body == '') {
        return {ok: false, error: 'Пустое содержание поста'}
    }
    if (title.length >= 100) {
        return {ok: false, error: 'Длина заголовка больше 100 символов'}
    }
    if (body.length >= 200) {
        return {ok: false, error: 'Длина текста больше 200 символов'}
    }
    return {ok: true}
}
