const userData = {
    name: "Frank Boterman",
    age: 5
  }
  
async function saveToStorage() {
    await Neutralino.storage.setData('userData', JSON.stringify({userData}));
};

async function loadFromSTorage(){
    let userString = await Neutralino.storage.getData('userData');
    console.log(userString);
}



// Test Falco
const items = [
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
]
async function saveItemsToStorage(items) {
    await Neutralino.storage.setData('items', JSON.stringify({items}));
};
saveItemsToStorage(items);
async function loadItemsFromStorage(){
    let returnedItems = await Neutralino.storage.getData('items');
    return returnedItems
}

loadedItmes = loadItemsFromStorage();
console.log(loadedItmes);