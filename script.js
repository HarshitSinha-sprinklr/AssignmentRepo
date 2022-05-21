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
let printText = document.querySelector(".tiles");
var x = 0;

for(let each in jsonFile){
    let eachTileId = "tileId" + x;
    printText.innerHTML = printText.innerHTML + `<div id="${eachTileId}" class="tileClass"><image src="${jsonFile[each].previewImage}" class="tileImage"> <p class="tileText">${jsonFile[each].title}</p></div>`;
    //let tileSelector = "#" + ${eachTileId};
    x++;
}
x = 0;


let initialSelectedElement = document.getElementById("tileId0");
initialSelectedElement.style.backgroundColor = "blue";
initialSelectedElement.style.color = "white";
let initialSelectedElementImage = document.querySelector("#selectedTileImage");
initialSelectedElementImage.innerHTML = `<img id="selectedTileImageEach" src="${jsonFile[0].previewImage}">`;
let initialSelectedElementTitle = document.querySelector("#selectedTileTitle");
initialSelectedElementTitle.innerHTML = `<p id="selectedTileTitleEach">${jsonFile[0].title}</p>`;
let previousSelectedElementId = "tileId0";


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
            selectedTileTitle.innerHTML = `<p id="selectedTileTitleEach">${jsonFile[each].title}</p>`;
        },
        true
    );
    x++;
}

window.addEventListener(
    "keydown",
    (event) => {
        let previousSelectedTile = document.getElementById(previousSelectedElementId);
        previousSelectedTile.style.backgroundColor = "white";
        previousSelectedTile.style.color = "black";
        
        let previousSelectedTileNumber = previousSelectedElementId.substring(6);
        previousSelectedTileNumber = parseInt(previousSelectedTileNumber, 10);
        let selectedTileNumber , selectedTileId , selectedTile , selectedTileImage , selectedTileTitle;
        switch(event.keyCode){
            case 38:
                selectedTileNumber = previousSelectedTileNumber === 0 ? jsonFile.length -1 : previousSelectedTileNumber - 1;
                selectedTileId = "tileId" + selectedTileNumber;
                selectedTile = document.getElementById(selectedTileId);
                selectedTile.style.backgroundColor = "blue";
                selectedTile.style.color = "white";
                selectedTileImage = document.querySelector("#selectedTileImage");
                selectedTileImage.innerHTML = `<img id="selectedTileImageEach" src="${jsonFile[selectedTileNumber].previewImage}">`;
                
                selectedTileTitle = document.querySelector("#selectedTileTitle");
                selectedTileTitle.innerHTML = `<p id="selectedTileTitleEach">${jsonFile[selectedTileNumber].title}</p>`;
                previousSelectedElementId = selectedTileId;
                break;
            case 40:
                selectedTileNumber = previousSelectedTileNumber === jsonFile.length - 1 ? 0 : previousSelectedTileNumber + 1;
                selectedTileId = "tileId" + selectedTileNumber;
                selectedTile = document.getElementById(selectedTileId);
                selectedTile.style.backgroundColor = "blue";
                selectedTile.style.color = "white";
                selectedTileImage = document.querySelector("#selectedTileImage");
                selectedTileImage.innerHTML = `<img id="selectedTileImageEach" src="${jsonFile[selectedTileNumber].previewImage}">`;
                
                selectedTileTitle = document.querySelector("#selectedTileTitle");
                selectedTileTitle.innerHTML = `<p id="selectedTileTitleEach">${jsonFile[selectedTileNumber].title}</p>`;
                previousSelectedElementId = selectedTileId;
                break;
        }

    },
    true
);

let currentTitle = document.getElementById("selectedTileTitle");
currentTitle.addEventListener(
    "click",
    () => {

    }
);