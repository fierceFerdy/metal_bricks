document.addEventListener('DOMContentLoaded', function(){
    changePage('homepage');
})

// Ik had deze aangemaakt omdat ik liever wou dat het dynamisch gebeurde, en er geen gigantische if else statements moesten zijn.
// Ik laat deze dus hier staan in de hoop dat het me later lukt om dit op te lossen.


// this could be an async function because it could contain the needs to fetch data
function changePage(page){

    activePage = document.getElementById('activePage').textContent; // dit is voor het geval dat dit iets veranderd aan de rest van de pagina (handige info peut être)
    newPage = String(page) + 'HTML'
    document.getElementById('activePage').innerHTML = newPage;

    console.log(newPage);

    if(newPage == 'homepageHTML'){    
        
        document.getElementById('content').innerHTML = `
            <h1> This is the homepage </h1>
            <button onclick="changePage('otherPage')">Go to otherPage</button>
            <button onclick="changePage('stockManagementPage')">Go to otherPage</button>
            <a href='stockbeheerTestPage.html'>Stock Beheer test pagina</a>
        `;


    }else if(newPage == 'otherPageHTML'){
        
        document.getElementById('content').innerHTML = `
            <h1> This is the other page </h1>
            <button onclick="changePage('homepage')">Go to homepage</button>
        `;


    }else if(newPage == 'stockManagementPageHTML'){

        document.getElementById('content').innerHTML = `
        <h1>stockbeheer</h1>
        <div class="itemsContainer" id="itemsContainer">

        </div>
        `;

        document.getElementById('itemsContainer')
        console.log(items); 
        items.forEach(element => {
            document.getElementById('itemsContainer').innerHTML += `
                <div class="item">
                    <img src="`+ element.productImage +`" alt="Expected image of an item">
                    <h2>`+ element.productName +`</h2>
                    <h2>Amount in stock: `+ element.inStockAmount +`</h2>
                    <h3>Buy price: `+ element.buyPrice +`</h3>
                    <h3>Sell price: `+ element.sellPrice +`</h3>
                </div>`
        });

    }
}

// exampleData for stockbeheer:
items = [
    {
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 1',
        inStockAmount: 5,
        buyPrice: 100, //in euros
        sellPrice: 170, //also in euros
    },
    {
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 2',
        inStockAmount: 9,
        buyPrice: 300,
        sellPrice: 400,
    },
    {
        productImage: 'placeholderProductImage.jpg',
        productName: 'Product 3',
        inStockAmount: 2,
        buyPrice: 325,
        sellPrice: 450,
    }
]