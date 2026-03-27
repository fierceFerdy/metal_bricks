// Nick
Neutralino.init();

// const userData = {
//     name: "Frank Boterman",
//     age: 5
//   }
  
// async function saveToStorage() {
//     await Neutralino.storage.setData('userData', JSON.stringify({userData}));
// };

// saveToStorage();

// async function loadFromStorage(){
//     let userString = await Neutralino.storage.getData('userData');
//     console.log(userString);
// }

// loadFromStorage();



// Test Falco
const stockItems = [
    {
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 1',
        inStockAmount: 5,
        buyPrice: 100, //in euros
        sellPrice: 170, //also in euros
        btwPercentage: 21,
    },
    {
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 2',
        inStockAmount: 9,
        buyPrice: 300,
        sellPrice: 400,
        btwPercentage: 21,
    },
    {
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 3',
        inStockAmount: 2,
        buyPrice: 325,
        sellPrice: 450,
        btwPercentage: 21,
    }
];
// async function saveItemsToStorage(items) {
//     await Neutralino.storage.setData('items', JSON.stringify({items}));
// };
// saveItemsToStorage(items);
// async function loadItemsFromStorage(){
//     let returnedItems = await Neutralino.storage.getData('items');
//     return returnedItems
// }

// loadedItmes = loadItemsFromStorage();
// console.log(loadedItmes);


// iorg
// async function saveToStorage(stockItems) {
//     let dataString = JSON.stringify(stockItems);
//     await Neutralino.storage.setData('stockItems', dataString);
// };
  
// async function loadFromStorage() {
//     let dataString = await Neutralino.storage.getData('stockItems').then(resp => JSON.parse(resp));
//     let items = JSON.parse(dataString);
//     return items;
// };

// console.log('save to storage?');

// saveToStorage(items).then(async () => {
//     let items = await loadFromStorage();
//     console.log(items);
// });

async function setStockItems(){
    await Neutralino.storage.setData('stockItems',
    JSON.stringify(stockItems)
    );
}
setStockItems();

// this function should be put in the paging system.
async function getStockItems(){
    let data = await Neutralino.storage.getData('stockItems');
    return data
}

// fetchedItems = getStockItems();
// console.log(fetchedItems);

async function getKeysFromStorage(){
    let keys = await Neutralino.storage.getKeys();
    console.log('Keys: ', keys);
}
getKeysFromStorage();

async function clearStorage(){
    await Neutralino.storage.clear();
}
clearStorage();

// async function getData(){
//     let data = await Neutralino.storage.getData('userDetails');
//     console.log(`Data: ${data}`);
// }
// getData();