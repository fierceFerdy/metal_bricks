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
        `;


    }else if(newPage == 'otherPageHTML'){
        
        document.getElementById('content').innerHTML = `
            <h1> This is the other page </h1>
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

    }else if (newPage == 'examplesPageHTML'){

        document.getElementById('content').innerHTML = `

            <div class="row">
                <div class="contentWrapper">
                    <div class="content">
                        <h1>Typographic styling options</h1>
                        <h2>Subtitle</h2>
                        <h3>Third title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, facere laborum voluptatem eveniet at quas. Iusto, neque. Quae error magnam <a href="">officia vero fugit</a> tempora perspiciatis quaerat distinctio asperiores? Nesciunt, atque.</p>
                        <a href="" class="link">a link to another place</a>

                        <a href="" class="btn">A button</a>
                        <a href="" class="btn black">A button</a>
                        <a href="" class="btn gray">A button</a>
                    </div>
                </div>
            </div>


            <!-- Main grid -->
            <div class="row">
                <h1>Main grid system</h1>
            </div>

            <div class="row highlight">
                <p>This represents a row of content</p>

                <div class="contentWrapper highlight">
                    <p>This wraps the content</p>

                    <div class="content highlight">
                        <p>Here you place the content itself (usually)</p>
                    </div>
                </div>
            </div>


            <!-- Grid block -->
            <div class="row">
                <div class="contentWrapper">
                    <div class="content">
                        <h1>Grid block system</h1>
                        <p>Check out assets/2-main/_grid.scss for the <strong>many</strong> more options</p>
                        <div class="w-1/2 highlight"><p>1/2</p></div>
                        <div class="w-1/2 highlight"><p>1/2</p></div>

                        <div class="w-1/3 highlight"><p>1/3</p></div>
                        <div class="w-1/3 highlight"><p>1/3</p></div>
                        <div class="w-1/3 highlight"><p>1/3</p></div>

                        <div class="w-1/4 highlight"><p>1/4</p></div>
                        <div class="w-1/4 highlight"><p>1/4</p></div>
                        <div class="w-1/4 highlight"><p>1/4</p></div>
                        <div class="w-1/4 highlight"><p>1/4</p></div>

                        <div class="gridCorrector">
                            <div class="w-1/3 highlight"><p>1/3 in a gridCorrector</p></div>
                            <div class="w-1/3 highlight"><p>1/3 in a gridCorrector</p></div>
                            <div class="w-1/3 highlight"><p>1/3 in a gridCorrector</p></div>
                        </div>
                    </div>
                </div>
            </div>
                `;
    }else{
        document.getElementById('content').innerHTML = `
        <h1> 404 PAGE NOT FOUND 404</h1>
        `
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