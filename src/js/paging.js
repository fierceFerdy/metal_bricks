document.addEventListener('DOMContentLoaded', function(){
    changePage('homepage');
})

// Ik had deze aangemaakt omdat ik liever wou dat het dynamisch gebeurde, en er geen gigantische if else statements moesten zijn.
// Ik laat deze dus hier staan in de hoop dat het me later lukt om dit op te lossen.
homepageHTML = `
    <h1> This is the homepage </h1>
      <button onclick="changePage('otherPage')">Go to otherPage</button>
`;

otherPageHTML = `
    <h1> This is the other page </h1>
`;


// this could be an async function because it could contain the needs to fetch data
function changePage(page){

    activePage = document.getElementById('activePage').textContent; // dit is voor het geval dat dit iets veranderd aan de rest van de pagina (handige info peut être)
    newPage = String(page) + 'HTML'

    console.log(newPage);

    if(newPage == 'homepageHTML'){
        document.getElementById('content').innerHTML = `
            <h1> This is the homepage</h1>
            <button onclick="changePage('otherPage')">Go to otherPage</button>
        `
        document.getElementById('activePage').innerHTML = newPage;

    }else if(newPage == 'otherPageHTML'){
        console.log('other page')
        document.getElementById('content').innerHTML = `
            <h1> This is the other page </h1>
            <button onclick="changePage('homepage')">Go to homepage</button>
        `

    }
}