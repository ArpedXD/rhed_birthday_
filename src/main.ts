import './style.css'

var button = document.getElementById("start") as HTMLButtonElement
button.addEventListener("click", bro)

function bro(): void {
    var parent = document.getElementById("parent") as HTMLDivElement;
    var kid = document.getElementById("main") as HTMLDivElement;
    var img = document.getElementById("cool_img") as HTMLDivElement;
    var cert = document.getElementById("certificate") as HTMLDivElement

    if (parent){
        parent.classList.add("hidden")
        kid.classList.remove("hidden")
        kid.classList.add("flex")
        img.classList.add("animate-big")

        img.addEventListener("animationend", (): void=>{
            kid.classList.add("animate-big2")
            kid.addEventListener("animationend", (): void=>{
                cert.classList.remove("opacity-0");
            })
        })
    }
}
