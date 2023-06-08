const imgbox = document.querySelector('.imgbox')
const boxes = document.getElementsByClassName('box')

// event listeners for draggable element box

imgbox.addEventListener('dragstart', (e) => {
    // what happen when we grab the image
    console.log("dragstart has been triggered");
    e.target.className += ' hold'
    setTimeout(() => {
        e.target.className += ' hide'
    })

})
imgbox.addEventListener('dragend', (e) => {
    // what happen when we leave the image
    console.log("dragend has been triggered");
    e.target.className = 'imgbox'
})

for (box of boxes) {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('dragOver has been triggered')
    })
    box.addEventListener('dragenter', () => {
        console.log('dragenter has been triggered')
    })
    box.addEventListener('dragleave', () => {
        console.log('dragleave has been triggered')
    })
    box.addEventListener('drop', (e) => {
        console.log('drop has been triggered')
        e.target.append(imgbox);
    })
}