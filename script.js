let nextPag = document.querySelector(".contant8")
let inputs = document.querySelectorAll(".contant2")

nextPag.addEventListener("click",()=>{
    let value = []
    let isEmpty = false

    inputs.forEach(input =>{
        value.push(input.value)
        if(input.value.trim() === ""){
            isEmpty = true
            input.style.border = "2px solid red"
        }
    })
    inputs.forEach(input =>{
        input.addEventListener("click",()=>{
            input.style = "none"
        })
    })

    if(isEmpty){
        alert("Please fill all inputs!")
        return
    }
    localStorage.setItem("userdata", JSON.stringify(value))

    window.location.href = "http://127.0.0.1:5502/Musicart/homePage/index.html"
    
    inputs.forEach(input =>{
        input.value = ""
    })
})