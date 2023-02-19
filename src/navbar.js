import react from "react"
import logo from "./airbnbimages/airbnb-removebg-preview.png"
export default function Header(props){
    const styles={
        backgroundColor: props.darkmode === true ? "#21222A" : "white"
    }
    return (
        <nav className="navbar"
            style={styles}
        >
            <img className="logo" src={logo}/>
            <h2 className="title">airbnb</h2>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.change}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
} 