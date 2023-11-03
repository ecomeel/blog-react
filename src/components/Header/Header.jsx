import './Header.css'

export default function Header({ text }) {
    return (
        <header className="header">
            <h2 className="header__title">{text}</h2>
        </header>
    )
}