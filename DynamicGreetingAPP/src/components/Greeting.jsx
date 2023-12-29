import { useState, useEffect } from "react"
function Greeting(){
    const [todaysTime,setTodaysTime]=useState("")
    const [todaysDate,setTodaysDate]=useState("")

    const today= new Date()
    const h= today.getHours()
    let greet=""
    let greetColor={   fontSize: "60px", }
    const bg={
        backgroundImage:"url('https://picsum.photos/536/354')",
        height: "100%",
        width:"100%",
        position:"fixed",
        top:"0px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    const clockDiv={
        color:"white",
         fontFamily : 'CrimsonPro',
         fontSize: "60px",
         textAlign: "center"
      }
      
   
    if ((h>=1)&&(h<=11) ){
greetColor.color="Green"
        greet="Good Morning"
        console.log(greet)
    }
    else if ((h>=12)&&(h<19) ){
        greetColor.color="yellow"
        greet="Good Afternoon"
        console.log(greet)
    }
    else{
        greet="Good Night"
        greetColor.color="Blue"
        console.log()
    }

    function getDate() {
        const todayDate = new Date().toDateString()
        const todayTime = new Date().toLocaleTimeString()
        setTodaysTime(todayTime)
        setTodaysDate(todayDate)
       }
       useEffect(() => {
        const interval = setInterval(() => {
        getDate()
        
      }, 1000);
      return () => clearInterval(interval);
        }, []);

    return(
        <><div style={bg}>
            <h1 style={{textAlign:"center"}}>Hello Nazia <span style={greetColor}>{greet} </span></h1>
            <div style={clockDiv}><p id='para1'>{todaysDate}</p>
           <p id='para2'>{todaysTime}</p>
           </div>
            </div>
        </>
    )    
}
export default Greeting;
