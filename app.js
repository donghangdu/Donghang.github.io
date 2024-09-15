document.addEventListener("DOMContentLoaded",()=>{

    const img = document.querySelectorAll("img");
    for(const image of img){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data =>{
            image.src=data.message
            image.width=100;
            image.heigh=100;
            
        }
            
           )
    }
})