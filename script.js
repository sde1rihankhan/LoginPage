let nextPage = document.querySelector(".contant8")
let inputs = document.querySelectorAll(".contant2")


nextPage.addEventListener("click",()=>{
    let value = []

    inputs.forEach(input =>{
        value.push(input.value)
    })
    localStorage.setItem("userdata", JSON.stringify(value))
    console.log(value);
    
})

function newPage(){
    window.location.href = "http://127.0.0.1:5502/Musicart/home%20page/index.html"
}