import travel from "../images/Untitled.png"
export default function Header(){
    return (
        <header>
            <img src={travel} alt="world"/>
            <span>My travel journal</span>
        </header>
    )
}