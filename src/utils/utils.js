const ERROR_EMPTY_TITLE = 'Пустой заголовок поста';
const ERROR_EMPTY_BODY = 'Пустое содержание поста';
const ERROR_MAX_LENGTH_TITLE = 'Длина заголовка больше 100 символов';
const ERROR_MAX_LENGTH_BODY = 'Длина текста больше 200 символов';
const MAX_LENGTH_BODY = 200;
const MAX_LENGTH_TITLE = 100;



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
        return {statusOk: false, errorType: ERROR_EMPTY_TITLE}
    }
    if (body == '') {
        return {statusOk: false, errorType: ERROR_EMPTY_BODY}
    }
    if (title.length >= MAX_LENGTH_TITLE) {
        return {statusOk: false, errorType: ERROR_MAX_LENGTH_TITLE}
    }
    if (body.length >= MAX_LENGTH_BODY) {
        return {statusOk: false, errorType: ERROR_MAX_LENGTH_BODY}
    }
    return {statusOk: true, errorType: ''}
}
