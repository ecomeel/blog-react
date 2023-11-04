import Header from "../Header/Header"

export default function PostsFeed() {
    return (
        <div className="posts-feed">
            <Header text='Лента' />
            <ul className="posts-feed__list">
            </ul>
        </div>
    )
}