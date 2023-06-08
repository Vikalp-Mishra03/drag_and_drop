const imgbox = document.querySelector('.imgbox')
const boxes = document.getElementsByClassName('box')

// event listeners for draggable element box

imgbox.addEventListener('dragstart', (e)=> {
    // what happen when we grab the image
    console.log("dragstart has been triggered");
    e.target.className += ' hold'
    setTimeout(() => {
        e.target.className += ' hide'
    })
    
})
imgbox.addEventListener('dragend', ()=> {
    // what happen when we leave the image
    console.log("dragend has been triggered");
})

for (box of boxes) {
    box.addEventListener('dragover', ()=>{
        
    })
    box.addEventListener('dragenter', ()=>{

    })
    box.addEventListener('dragleave', ()=>{

    })
    box.addEventListener('drop', ()=>{

    })
}