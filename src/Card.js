import react from "react"
import star from "./airbnbimages/Star 1.png"
export default function Card({props,key,darkmode}){
    const styles={
        backgroundColor: darkmode === true ? "#282D35" : "white"
    }
    const thisstyle= {
        color : darkmode === true ? "white" : "black"
    }
    let badgetext
    if(props.openspots===0){
        badgetext="SOLD OUT"
    }
    else if(props.location ==="online"){
        badgetext="ONLINE"
    }
    return (
            
            <div className="card" style={styles}>
                {/* if the first statement is true then display this div !!!!!!!!*/}
            {badgetext && <div className="card-badge">{badgetext}</div>}
            <img className="card-img" src= {props.imag} />
            <div className="star-section">
                <img className="star" src={star}/>
                <h4 style={thisstyle}>{props.rating}<span className="usa"> {props.gray}</span></h4>
            </div>
            <p style={thisstyle}>{props.description}</p>
            <p style={thisstyle}><span style={thisstyle} className="price">{props.price}</span> person</p>

        </div>
    )
}
//props makes the component more reusable!!!!!!!!!
//u can pass as ana argument props or Card({img,rating,gray,description,notbold})==> called destructering the props
//but then we will not use src={props.img} but just src={img}