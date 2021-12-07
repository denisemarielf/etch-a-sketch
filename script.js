const sketchContainer = document.getElementById("container");
const cleanButton = document.getElementById("clean");
const button16 = document.getElementById("b16");
const button32 = document.getElementById("b32");
const button64 = document.getElementById("b64");
const controls = document.getElementById("controls");
const colorPicker = document.getElementById("colorPicker")

 
function makeRows(rows, columns) {
    sketchContainer.style.setProperty('--grid-rows', rows);
    sketchContainer.style.setProperty('--grid-cols', columns);
    for (let c = 0; c < (rows * columns); c++) {
        let cell = document.createElement('div');
        sketchContainer.appendChild(cell).className ="grid-item"; 
        
        cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = "black";
        })

        colorPicker.addEventListener("input", e => {
            cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = e.target.value;
        })
        
        
    });
    }
}

function reset () {
    const boxs = sketchContainer.querySelectorAll(".grid-item");
    boxs.forEach(box => box.remove())

}



function sketch () {

    let buttonPressed;
    
    button16.addEventListener("click", function(){
        reset()
        makeRows(16, 16);
        return buttonPressed = 16;
    })
    
    button32.addEventListener("click", function(){
        reset()
        makeRows(32, 32);
        return buttonPressed = 32;
    })
    
    button64.addEventListener("click", function(){
        reset();
        makeRows(64, 64);
        return buttonPressed = 64;
    })

cleanButton.addEventListener("click", function () {
    reset();
    if (buttonPressed ===  16) {
        makeRows(16, 16)
    }
    else if (buttonPressed === 32) {
        makeRows(32,32)
    } else if (buttonPressed === 64) {
        makeRows(64, 64)
    } else {
        makeRows(16, 16)
    }

})
}

    

makeRows(16, 16)
sketch ();