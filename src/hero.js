import react from "react"
import image from "./airbnbimages/Group 77.png"
export default function Hero(props){
    const styles={
        backgroundColor: props.darkmode === true ? "#282D35" : "white"
    }
    const thisstyle= {
        color : props.darkmode === true ? "white" : "black"
    }
    return(
        <main style={styles}>
            <img className="hero-image" src={image}/>
            <h1 style={thisstyle}>Online Experiences</h1>
            <p>Join Unique interactive activities led by
                one-of-a-kind hosts all without leaving home</p>
        </main>
    )
}
