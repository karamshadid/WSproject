document.querySelector("#gridcontainer").addEventListener('dblclick', () => {
    // console.log('clicked')
    let boxes = document.querySelectorAll('.grid-items');
    for (box in boxes) {
        // console.log(box)
        boxes[box].style.display = 'block';
    }

})

document.querySelector(".item-one").addEventListener('dblclick', () => {
    // console.log("clicked one")
    let route1 = document.createElement('div')
    route1.className = "route1";

})

document.querySelector(".item-two").addEventListener('dblclick', () => {
    console.log("clicked two")
})

document.querySelector(".item-three").addEventListener('dblclick', () => {
    console.log("clicked three ")
})

document.querySelector(".item-four").addEventListener('dblclick', () => {
    console.log("clicked four")
})