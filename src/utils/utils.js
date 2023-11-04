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

    const correctedTime = setLeadingZero([hours, minutes, day, month]);
    const fullTime = `${correctedTime[0]}:${correctedTime[1]} ${correctedTime[2]}.${correctedTime[3]}.${year}`;
    return fullTime;
}

export function setLeadingZero(date) {
    for (let key in date) {
        typeof date[key] == "number" &&
            date[key] < 10 &&
            (date[key] = `0${date[key]}`);
    }
    return date;
}
