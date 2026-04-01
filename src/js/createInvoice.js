document.addEventListener("DOMContentLoaded", function(){
    // document.getElementById("addItemButton").addEventListener("click", function(){
    //     console.log("test");
    //     addItem();
    // });
})

var itemCount = 0;

// activates when a + is clicked to add an item
function addItem(){
    //change the button from + to - and changes functionallity from add to deleye
    document.getElementById("addItemButtonContainer").innerHTML = `
        <button type="button" id="` + itemCount + `" onclick="deleteItem(this.id)">-</button>
    `;

    // delete the id of the button so it works for the next button
    document.getElementById("addItemButtonContainer").id = "";

    itemCount ++; // add 1 to the count

    var container = document.createElement("div");
    container.innerHTML = `
        <div id="itemDiv` + itemCount + `">
            <label for="itemDiscription` + itemCount + `">discription:</label>
            <input type="text" id="itemDiscription` + itemCount + `" name="itemDiscription` + itemCount + `">
            <label for="itemAmount` + itemCount + `">amount:</label>
            <input type="number" id="itemAmount` + itemCount + `" name="itemAmount` + itemCount + `">
            <div id="addItemButtonContainer">
            <button type="button" id="addItemButton" onclick="addItem()">+</button>
            </div>
        </div>`;
    document.getElementById("addItemDiv").appendChild(container);

    // former try
    // // finally create the new item
    // document.getElementById("addItemDiv").innerHTML += `
    //     <div id="itemDiv` + itemCount + `">
    //         <label for="itemDiscription` + itemCount + `">discription:</label>
    //         <input type="text" id="itemDiscription` + itemCount + `" name="itemDiscription` + itemCount + `">
    //         <label for="itemAmount` + itemCount + `">amount:</label>
    //         <input type="number" id="itemAmount` + itemCount + `" name="itemAmount` + itemCount + `">
    //         <div id="addItemButtonContainer">
    //         <button type="button" id="addItemButton" onclick="addItem()">+</button>
    //         </div>
    //     </div>`;
}

// function triggers when when the - button is pressed to remove an item
function deleteItem(id){
    itemDivId = "itemDiv" + id; // makes sure it triggers the correct div 
    document.getElementById(itemDivId).innerHTML = ""; // then remove that div
}