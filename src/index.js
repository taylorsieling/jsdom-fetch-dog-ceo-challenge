console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetchImage();
});

// Challenge 1

function fetchImage() {
    console.log("I'm gonna fetch the image!")
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then((resp) => resp.json()) // arrow will return
        .then(result => { 
        result.message.forEach((image) => addImage(image));
    });
}

function addImage(dogImage) {
    console.log("Inside addImage")
    let imageContainer = document.querySelector("#dog-image-container");
    imageContainer.insertAdjacentHTML(
        "beforeend",
        ` <img style="height:200px" src="${dogImage}"></img>`
    );
}

// Challenge 2

// Challenge 3

// Challenge 4