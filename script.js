const gridEl = document.getElementById('grid');
const selectlev = document.getElementById('grid');
const playbutton = document.querySelector("button")

const createmyelement = () => {
    const node = document.createElement("div");
    node.className = "square";
    return node;
}

const myNewArrRandom = createUNiqueRandomNUm (64, 1, 64);
console.log(myNewArrRandom);

for (let i = 0; i < myNewArrRandom.length; i++) {
    const divEL = createmyelement();
    

    divEL.addEventListener("click",
        function(){
            this.classList.add("clicked");
        }
    )
    gridEl.append(divEL);
    divEL.innerHTML = myNewArrRandom[i];
}

function createUNiqueRandomNUm(numItems, min, max) {
    const ArrInt = [];
    while ( ArrInt.length < numItems){
        let randomnumint = getrandomnumminmax(min,max);
        if (!ArrInt.includes(randomnumint)){
            ArrInt.push(randomnumint);
        }
    }

    return ArrInt
}

function getrandomnumminmax (Rangemin, Rangemax) {
    let result = Math.floor(Math.random() * (Rangemax- Rangemin+1)) + Rangemin ;

    return result;
}

playbutton.addEventListener("click",
    () => {
        let nCells, classCells;
        gridEl.innerHTML= "";

        const chooselevel = parseInt(selectlev.value)
        console.log(chooselevel);
    }



)


switch (chooselevel) {
    case 0:
        default: 
            nCells = 100;
            classCells = "square10"
    break

    case 1:
        nCells = 81;
        classCells = "square9"
    break;

    case 2:
        nCells = 49;
        classCells = "square7"
    break;
}