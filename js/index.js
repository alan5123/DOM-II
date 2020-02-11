// Your code goes here
// document.body.style.backgroundColor= "red"
const imgs = document.getElementsByTagName("img");
console.log(imgs)
imgs[1].addEventListener("mouseenter", () =>{
    imgs[1].style.transform='scale(1.2)';
    imgs[1].style.transition = 'transform 1s'

})

imgs[1].addEventListener("mouseleave", () =>{
    imgs[1].style.transform='scale(1)';
    imgs[1].style.transition= 'transform 1s'
})

imgs[2].addEventListener("mouseenter", () =>{
    imgs[2].style.transform='scale(1.2)';
    imgs[2].style.transition = 'transform 1s'

})

imgs[2].addEventListener("mouseleave", () =>{
    imgs[2].style.transform='scale(1)';
    imgs[2].style.transition= 'transform 1s'
})

imgs[3].addEventListener("mouseenter", () =>{
    imgs[3].style.transform='scale(1.2)';
    imgs[3].style.transition = 'transform 1s'

})

imgs[3].addEventListener("mouseleave", () =>{
    imgs[3].style.transform='scale(1)';
    imgs[3].style.transition= 'transform 1s'
})

const text = document.getElementsByTagName("p");
console.log(text)

Array.from(text).forEach((text)=>{
    text.addEventListener("mouseenter", () =>{
        text.style.transform='scale(1.2)';
        text.style.transition = 'transform 1s'
        text.style.color = "blue"
    
    })
})

Array.from(text).forEach((text)=>{
   text.addEventListener("mouseleave", () =>{
       text.style.transform='scale(1)';
       text.style.transition= 'transform 1s'
       text.style.color = "black"
       
    })
}) 

document.querySelectorAll(".nav-link").forEach(stopLink => {
    stopLink.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("stopped the link");
      })
})

const header = document.getElementsByTagName("h2");

Array.from(header).forEach((header) =>{
   header.addEventListener("mouseenter", () =>{
    header.style.transform='scale(1.1)';
    header.style.transition = 'transform 1s'
    header.style.color = "red"
})
})

Array.from(header).forEach((header) =>{
    header.addEventListener("mouseleave", () =>{
     header.style.transform='scale(1.0)';
     header.style.transition = 'transform 1s'
     header.style.color = "black"
 })
 })


 const headerFour = document.getElementsByTagName("h4");


 Array.from(headerFour).forEach((headerFour) =>{
    headerFour.addEventListener("mouseenter", () =>{
        headerFour.style.transform='scale(1.1)';
        headerFour.style.transition = 'transform 1s'
        headerFour.style.color = "FORESTGREEN"
 })
 })


 Array.from(headerFour).forEach((headerFour) =>{
    headerFour.addEventListener("mouseleave", () =>{
        headerFour.style.transform='scale(1.0)';
        headerFour.style.transition = 'transform 1s'
        headerFour.style.color = "black"
 })
 })