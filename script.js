
const field = document.getElementById("field_container");



const easyField = document.getElementById("easy");

const mediumField = document.getElementById("medium");

const hardField = document.getElementById("hard");



easyField.addEventListener("click", 
    function () {

        clearField();
        fieldGen(100, " easy_slot");
    }
)

mediumField.addEventListener("click", 
    function () {

        clearField();
        fieldGen(81, " medium_slot");
    }
)

hardField.addEventListener("click", 
    function () {

        clearField();
        fieldGen(49, " hard_slot");
    }
)


function fieldGen(nSlot, slotClass) {

    let allSlot = [];

    let bombSlot = [];
    
    let score = 0;

    let play = 1;

    while ( allSlot.length < nSlot && play == 1) {

        let tagSlot = Math.floor(Math.random() * nSlot + 1 );
        
        if (!allSlot.includes(tagSlot)) {

            if (tagSlot <= 16 ) {

                allSlot.push(tagSlot);

                bombSlot.push(tagSlot);

                slot = document.createElement("div");

                slot.className = "base_slot" + slotClass ;
                
                field.append(slot);
                
                slot.append(tagSlot);
                

                slot.addEventListener("click",
                    function() {
                        this.classList.add("bombexplode");
                        
                        console.log("Sei morto sulla bomba nr",tagSlot,".Hai totalizzato",score,"punti.");


                    }
                )
                
            }
            else {

                allSlot.push(tagSlot);

                slot = document.createElement("div");

                slot.className = "base_slot" + slotClass ;

                field.append(slot);

                slot.append(tagSlot);    

                slot.addEventListener("click",

                    function() {
                        if (this.classList == "base_slot" + slotClass ) {
                            
                            this.classList.add("checked");

                            score++;

                            console.log(score);

                        }

                        else {
                        
                            console.log(score);
                        
                        }
                        
                    } 
                    ) 
            }
        }
        
    }

    console.log(allSlot);
    console.log(bombSlot);

}

function endgame(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].field.removeChild(elements[0]);
    }
}

function gameOver() {
    let oldSlot = field.lastElementChild;
    while (oldSlot) {
        field.removeChild(oldSlot);
        oldSlot = field.lastElementChild;
    }
}
function clearField() {
    let oldSlot = field.lastElementChild;
    while (oldSlot) {
        field.removeChild(oldSlot);
        oldSlot = field.lastElementChild;
    }
}