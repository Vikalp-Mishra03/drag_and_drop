const imgbox = document.querySelector('.imgbox')
const boxes = document.getElementsByClassName('box')

// event listeners for draggable element box

imgbox.addEventListener('dragstart', ()=> {
    // what happen when we grab the image
    console.log("dragstart has been triggered");
})
imgbox.addEventListener('dragend', ()=> {
    // what happen when we leave the image
    console.log("dragend has been triggered");
})

