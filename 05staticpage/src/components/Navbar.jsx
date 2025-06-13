import reactLogo from "../assets/react.svg"
function Navbar(){
    return (
        <header>
            <img  className="image" src={reactLogo}  alt="ReactLogo"/>
            <span>ReactFacts</span>
        </header>
    )
}
export default Navbar