import react from "react"
import  ReactDOM  from "react-dom"
import Header from "./navbar"
import Hero from "./hero"
import Card from "./Card"
import "./style.css"
import hero2data from "./hero2data"
export default function App (){
const [mode,setmode]=react.useState(false)
    function change(){
        setmode(prev => !prev)
    }
    const styles={
        backgroundColor: mode === true ? "#282D35" : "white"
    }
const cardnew = hero2data.map(function(prop){
    return (
        <Card key={prop.id}
            
            //   imag={prop.imag}
            //   rating={prop.rating}
            //   gray={prop.gray}
            //   description={prop.description}
            //   price={prop.price}
            //   openspots={prop.openspots}
            //   location={prop.location}
            //==>u can replace all of this lines by {...prop} do the same job and pass only argument props without {}
            props={prop}
            darkmode={mode}
            //when u use this methode of object u shoulf pass the argument {props} in the Card function
            //in this methode we use a  props that contain the entire object 
            />
    )
})

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// <div>
//      <Header />
//      <Hero/>
//      <div className="hero2">
//     {cardnew}
//     </div>
//      </div>
// )
    return(
    <div>
     <Header darkmode={mode}
     change={change}/>
     <Hero darkmode={mode}/>
     <div className="hero2" style={styles}>
    {cardnew} 
    </div>
     </div>
)
}
{/* 
!!!!!!!!!!! another method using the props for each one seperatly
<Card 
imag={img1}
rating="5.0"
gray="(6).USA"
description="Life lessons with Katie Zaferes"
price="From $136 /"
/>
<Card 
imag={img2}
rating="5.0"
gray="(30).USA"
description="Learn wedding photography"
price="From $125 /"
/>
<Card 
imag={img3}
rating="4.8"
gray="(2).USA"
description="Group Mountain Biking"
price="From $50 /" 

/>
*/}