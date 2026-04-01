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
            <h1>This is the other page</h1>
        `;


    }else if(newPage == 'clientsHTML'){
        
        document.getElementById('content').innerHTML = `
			<div class="row">
				<div class="contentWrapper">
					<div class="content">
            			<h1>Client Database</h1>

						


						<table>
							<tr>
								<th>Client ID</th>
								<th>Name</th>
								<th>Registered on</th>
								<th>Lead origin</th>
								<th>Postal code</th>
								<th>City</th>
								<th>Street + nr</th>
								<th></th>
								<th></th>
							</tr>
							<tr>
								<td>0</td>
								<td><a>Samba</a></td>
								<td>27/03/26</td>
								<td>Google</td>
								<td>9200</td>
								<td>Dendermonde</td>
								<td>Zandstraat 101</td>
								<td>edit</td>
								<td>x</td>
							</tr>
						</table>

						<a href='' class='btn'>Add client</a>
					</div>
				</div>
			</div>
        `;


    }else if(newPage == 'timetableHTML'){
        
        document.getElementById('content').innerHTML = `
			<div class="row">
				<div class="contentWrapper">
					<div class="content">
            			<h1>Timetable</h1>
					</div>
				</div>
			</div>
        `;


    }else if(newPage == 'HRHTML'){
        
        document.getElementById('content').innerHTML = `
			<div class="row">
				<div class="contentWrapper">
					<div class="content">
            			<h1>Human Resources</h1>
					</div>
				</div>
			</div>
        `;


    }else if(newPage == 'appointmentsHTML'){
        
        document.getElementById('content').innerHTML = `
            
			<div class="row">
				<div class="contentWrapper">
					<div class="content">
            			<h1>ToDo's</h1>
					</div>
				</div>
			</div>
            
			<div class="row">
				<div class="contentWrapper">
					<div class="content">
            			<h1>Appointments</h1>
					</div>
				</div>
			</div>
        `;


    }else if(newPage == 'stockManagementPageHTML'){

        document.getElementById('content').innerHTML = `
        <h1>Stock management</h1>
	
			<table id ='stockTable'>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Amount</th>
					<th>Buy price</th>
					<th>Sell price</th>
				</tr>
			</table>

        <div class="itemsContainer" id="itemsContainer">

			</div>
        `;

		var retrievedStockItems = '';

		getStockItems().then(function(response) {
			retrievedStockItems = JSON.parse(response);
			console.log("Success!", retrievedStockItems);

			
			console.log('testing testing')
			console.log('retrievedStockItems', retrievedStockItems)
			
			retrievedStockItems.forEach(element => {
				document.getElementById('stockTable').innerHTML += `
					<tr class="item">
						<td>`+ element.productId +`</td>
						<td>`+ element.productName +`</td>
						<td>`+ element.inStockAmount +`</td>
						<td>`+ element.buyPrice +`</td>
						<td>`+ element.sellPrice +`</td>
					</tr>`
			});

		}, function(error) {
			console.log("Failed!", error); // hier moet nog een error op de pagina kunnen geven.

		})

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
						
						<div class="w-full highlight"><p>full</p></div>

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

						<div class="w-1/2 bg"><p>1/2 with bg</p></div>
						<div class="w-1/2 bg"><p>1/2 with bg</p></div>
					</div>
				</div>
			</div>



			<!-- Forms -->
			<div class="row">
				<div class="contentWrapper">
					<div class="content gridCorrector">

						<form action="">

							<h2 class="w-full">A section title</h2>

							<div class="formField">
								<label class="w-1/4" for="input1">Inputveld</label>
								<input class="w-3/4" type="text" name="input1" id="input1">
							</div>

							<div class="formField">
								<label class="w-1/4" for="input2">Inputveld</label>
								<input class="w-3/4" type="text" name="input2" id="input2">
							</div>

							<div class="formField">
								<label class="w-1/4" for="input4">Dropdown</label>
								<select class="w-3/4" name="input4" id="input4">
									<option value="vb">dropdown optie</option>
									<option value="vb">dropdown optie2</option>
									<option value="vb">dropdown optie3</option>
								</select>
							</div>

							<h2 class="w-full">A section title</h2>

							<div class="formField">
								<label class="w-1/4" for="input3">Textarea</label>
								<textarea class="w-3/4" name="input3" id="input3"></textarea>
							</div>

							<div class="formField">
								<label class="w-1/4">checkboxes</label>
								<div class="w-3/4">
									<div class="checkbox">
										<input type="checkbox" name="check" for="check1" id="check1">
										<label for="check1">checkbox 1</label>
									</div>

									<div class="checkbox">
										<input type="checkbox" name="check" for="check2" id="check2">
										<label for="check2">checkbox 2</label>
									</div>
								</div>
							</div>

							<div class="formField">
								<label class="w-1/4">radios</label>
								<div class="w-3/4">
									<div class="checkbox">
										<input type="radio" name="radio" for="radio1" id="radio1">
										<label for="radio1">checkbox 1</label>
									</div>

									<div class="checkbox">
										<input type="radio" name="radio" for="radio2" id="radio2">
										<label for="radio2">checkbox 2</label>
									</div>
								</div>
							</div>

							<div class="formField">
								<div class="w-1/4">&nbsp;</div>
								<div class="w-3/4">
									<input class="black" type="submit" value="opslaan">
								</div>
							</div>

						</form>

					</div>
				</div>
			</div>


			
			<!-- Tables -->
			<div class="row">
				<div class="contentWrapper">
					<div class="content">


						<table>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Date</th>
								<th>Amount</th>
							</tr>
							<tr>
								<td>0</td>
								<td>Samba</td>
								<td>27/03/26</td>
								<td>100</td>
							</tr>
							<tr>
								<td>0</td>
								<td>Samba</td>
								<td>27/03/26</td>
								<td>100</td>
							</tr>
							<tr>
								<td>0</td>
								<td>Samba</td>
								<td>27/03/26</td>
								<td>100</td>
							</tr>
						</table>

					</div>
				</div>
			</div>
        `;
    }else if(newPage == 'CreateInvoiceHTML'){
		document.getElementById('content').innerHTML = `
			<h1 class="title">Maak factuur</h1>
			<form action="changePage('homepage')" method="post">

				<button type="submit">HEEEEEEE</button>
			</form>
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


// functions

async function getStockItems(){
	let data = await Neutralino.storage.getData('stockItems');
	return data
}