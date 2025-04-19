const button = document.querySelector("#button")
const parent = document.querySelector("#target")
const text = document.querySelector("#placeholder")

const total = document.querySelector("#gross")
const left = document.querySelector("#left")
const done = document.querySelector("#done")

let taskNum = 0
let completed = 0


button.addEventListener("click", (evt)=>{

    console.log("button clicked")
    taskNum++
    total.innerText = taskNum + "    Task(s)"
    

    const childDiv = document.createElement("div")

    childDiv.style.color = "gold"
    childDiv.innerHTML = "&#9632 "+text.value 
    childDiv.style.textAlign = "left"
    childDiv.style.fontWeight = "lighter"
    childDiv.style.fontSize = "medium"

    childDiv.addEventListener("click", (e)=>{
        const txt = e.currentTarget.innerText

        if(txt.includes("■")){
            e.currentTarget.innerText=e.currentTarget.innerText.replace("■"," ✅ ")
            completed++;
            
        }
        else {
            e.currentTarget.innerText=e.currentTarget.innerText.replace("✅","■ ")
            completed--;
            
        }
        done.innerText= completed + "   Done"
        left.innerText = taskNum-completed + "   Left"
       
    })
 
    parent.appendChild(childDiv)
    
    
    
    text.value=null

})










