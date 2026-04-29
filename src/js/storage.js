// Nick
Neutralino.init();// heel belangrijk

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
        productId: 1,
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 1',
        inStockAmount: 5,
        buyPrice: 100, //in euros
        sellPrice: 170, //also in euros
        btwPercentage: 21,
    },
    {
        productId: 2,
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 2',
        inStockAmount: 9,
        buyPrice: 300,
        sellPrice: 400,
        btwPercentage: 21,
    },
    {
        productId: 3,
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 3',
        inStockAmount: 2,
        buyPrice: 325,
        sellPrice: 450,
        btwPercentage: 21,
    },
    {
        productId: 4,
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 4',
        inStockAmount: 25,
        buyPrice: 80,
        sellPrice: 140,
        btwPercentage: 21,
    },
    {
        productId: 5,
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 5',
        inStockAmount: 6,
        buyPrice: 180,
        sellPrice: 270,
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
setStockItems()
// setStockItems();

// this function should be put in the paging system.
async function getStockItems(){
    let data = await Neutralino.storage.getData('stockItems');
    return data
}
console.log(getStockItems());

// fetchedItems = getStockItems();
// console.log(fetchedItems);

async function getKeysFromStorage(){
    let keys = await Neutralino.storage.getKeys();
    console.log('Keys: ', keys);
}
// getKeysFromStorage();

async function clearStorage(){
    await Neutralino.storage.clear();
}

// async function getData(){
//     let data = await Neutralino.storage.getData('userDetails');
//     console.log(`Data: ${data}`);
// }
// getData();









// agenda storage
// What needs to be saved from the agenda/ appointment page 
// everyone is currently the same user
// The appoinment title, the user for which the appointment is, the day / time of the appointment,

// Is an object really a good idea?? --> Security issues? How else should things be stored? [QUESTION]

const Todos = [
    {
        TodoID: 1,
        title: 'Very good title for a todo',
        user: 0,
        deadlineDate: '30/4/2026',
        deadlineTime: '17:30',
    },
];

async function setTodos(){
    await Neutralino.storage.setData('Todos',
    JSON.stringify(Todos)
    );
}
setTodos();


async function getTodos(){
    let data = await Neutralino.storage.getData('Todos');
    return data
}