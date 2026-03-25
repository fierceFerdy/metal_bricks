const userData = {
    name: "Frank Boterman",
    age: 5
  }
  
async function saveToStorage() {
    await Neutralino.storage.setData('userData', JSON.stringify({userData}));
};

saveToStorage();

async function loadFromSTorage(){
    let userString = await Neutralino.storage.getData('userData');
    console.log(userString);
}

loadFromSTorage();