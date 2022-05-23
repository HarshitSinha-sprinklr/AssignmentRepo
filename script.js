let jsonFile = [
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2022.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-may-2022.key"
    }
];

/*
var jsonFile = [];
var n;


fetch('./items.json')
    .then(res => res.json())
    .then(data => {
        var n=data.length;
        for(let i = 0;i < n; ++i){
            let newObject = {
                previewImage: ' ',
                title: ' '
            };
            jsonFile.push(newObject);
        }
        console.log(jsonFile.length);
        for(let each in data){
            jsonFile.push(data[each]);
        }
    }
    );

console.log(jsonFile.length);
*/


let printText = document.querySelector(".tiles");
var x = 0;
let tilesTitleArray = [];

// to make the title fit in the given space 
shortenTile = (someString) => {
    if(someString.length > 35){
        someString = someString.substring(0,16) + "..." + someString.substring(someString.length -16);

    }
    return someString;
}


for(let each in jsonFile){
    let eachTileId = "tileId" + x;
    let eachTileTitleId = "tileTitleId" + x;
    let tileTitle = jsonFile[x].title;
    tilesTitleArray.push(tileTitle);

    tileTitle = shortenTile(tilesTitleArray[x]);
    printText.innerHTML = printText.innerHTML + `<div id="${eachTileId}" class="tileClass"><image src="${jsonFile[each].previewImage}" class="tileImage"> <p class="tileText" id="${eachTileTitleId}">${tileTitle}</p></div>`;
    
    x++;
}
x = 0;

//selecting the first tile initially
let initialSelectedElement = document.getElementById("tileId0");
initialSelectedElement.style.backgroundColor = "blue";
initialSelectedElement.style.color = "white"; 

let initialSelectedElementImage = document.querySelector("#selectedTileImage");
initialSelectedElementImage.innerHTML = `<img id="selectedTileImageEach" src="${jsonFile[0].previewImage}">`;

let initialSelectedElementTitle = document.querySelector("#selectedTileTitle");
initialSelectedElementTitle.innerText = tilesTitleArray[0];

let previousSelectedElementId = "tileId0";


//making click work on each tile
for(let each in jsonFile){
    let eachTileId = "tileId" + x;
    let currentTile = document.getElementById(eachTileId);
    currentTile.addEventListener(
        "click", 
        () => {
            let previousSelectedTile = document.getElementById(previousSelectedElementId);
            previousSelectedTile.style.backgroundColor = "white";
            previousSelectedTile.style.color = "black";

            previousSelectedElementId = currentTile.id;

            currentTile.style.backgroundColor = "blue";
            currentTile.style.color = "white";

            let selectedTileImage = document.querySelector("#selectedTileImage");
            selectedTileImage.innerHTML = `<img id="selectedTileImageEach" src="${jsonFile[each].previewImage}">`;
            
            let selectedTileTitle = document.querySelector("#selectedTileTitle");
            let currentTileTitleNumber = parseInt(previousSelectedElementId.substring(6),10);
            selectedTileTitle.innerText = tilesTitleArray[currentTileTitleNumber];
        },
        true
    );
    x++;
}

//can navigate using arrow keys
window.addEventListener(
    "keydown",
    (event) => {
        let previousSelectedTile = document.getElementById(previousSelectedElementId);
        previousSelectedTile.style.backgroundColor = "white";
        previousSelectedTile.style.color = "black";
        
        let previousSelectedTileNumber = previousSelectedElementId.substring(6);
        previousSelectedTileNumber = parseInt(previousSelectedTileNumber, 10);
        let selectedTileNumber , selectedTileId , selectedTile , selectedTileImage , selectedTileTitle, currentTileTitleId;
        switch(event.keyCode){
            case 38:    //for up arrow key
                selectedTileNumber = previousSelectedTileNumber === 0 ? jsonFile.length -1 : previousSelectedTileNumber - 1;
                selectedTileId = "tileId" + selectedTileNumber;
                selectedTile = document.getElementById(selectedTileId);
                selectedTile.style.backgroundColor = "blue";
                selectedTile.style.color = "white";

                selectedTileImage = document.querySelector("#selectedTileImage");
                selectedTileImage.innerHTML = `<img id="selectedTileImageEach" src="${jsonFile[selectedTileNumber].previewImage}">`;
                
                selectedTileTitle = document.querySelector("#selectedTileTitle");
                currentTileTitleId = "tileTitleId" + selectedTileNumber;
                selectedTileTitle.innerText = tilesTitleArray[selectedTileNumber];

                previousSelectedElementId = selectedTileId;
                break;
            case 40:    //for down arrow key
                selectedTileNumber = previousSelectedTileNumber === jsonFile.length - 1 ? 0 : previousSelectedTileNumber + 1;
                selectedTileId = "tileId" + selectedTileNumber;
                selectedTile = document.getElementById(selectedTileId);
                selectedTile.style.backgroundColor = "blue";
                selectedTile.style.color = "white";

                selectedTileImage = document.querySelector("#selectedTileImage");
                selectedTileImage.innerHTML = `<img id="selectedTileImageEach" src="${jsonFile[selectedTileNumber].previewImage}">`;
                
                selectedTileTitle = document.querySelector("#selectedTileTitle");
                currentTileTitleId = "tileTitleId" + selectedTileNumber;
                selectedTileTitle.innerText = tilesTitleArray[selectedTileNumber];

                previousSelectedElementId = selectedTileId;
                break;
        }
    },
    true
);


//title is ediotable
let selectedTileTitle = document.getElementById("selectedTileTitle");
selectedTileTitle.addEventListener(
    'input',
    () => {
        let currentSelectedTileId = "tileTitleId" + previousSelectedElementId.substring(6);
        let currentSelectedTileNumber = parseInt(previousSelectedElementId.substring(6));
        tilesTitleArray[currentSelectedTileNumber] = selectedTileTitle.innerText;
        let currentSelectedTile = document.getElementById(currentSelectedTileId);
        currentSelectedTile.innerText = shortenTile(tilesTitleArray[currentSelectedTileNumber]);
    }
);
