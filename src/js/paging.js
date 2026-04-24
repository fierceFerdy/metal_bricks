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
		<form action="insert.php" method="post">
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

						
					</div>
				</div>
			</div>

			//  <button onclick="showForm class='btn('form1')">Show Form</button>

			// Client form to add new clients//
			<div id="form1" class="form-container">
				<h2>Client form </h2>
				<form>
				<label for="client">Client id:</label>
				<input type="text" id="Client id" name="Client id">
				<br>
				<label for="name">Name:</label>
      			<input type="text" id="Name" name="Name">
      			<br>
				<label for="registerd">Registerd on:</label>
      			<input type="text" id="registerd" name="registerd">
				<br>
				<label for="lead">Lead origin:</label>
      			<input type="text" id="lead" name="lead">
				<br>
				<label for="postal">Postal code:</label>
      			<input type="text" id="postal" name="postal">
				<br>
				<label for="city">City:</label>
      			<input type="text" id="city" name="city">
				<br>
				<label for="street">Name:</label>
      			<input type="text" id="street" name="street">
				
				<br>
				<a href='' class='btn'>Add client</a>
    			</form>
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
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Document</title>
			</head>
			<body>
				<form action="Invoice.html" method="get">
					<h1 class="title">create invoice</h1>
						<div class="ClientInfo">
							<h2>Client info:</h2>

							<label for="clientName">Client Name:</label>
							<input type="text" id="clientName" name="clientName">
							<br>

							<label for="startDate">Date:</label>
							<input type="date" id="startDate" name="startDate">
							<br>

							<label for="Expdate">Expiration date:</label>
							<input type="date" id="Expdate" name="Expdate">
							<br>
						</div>
						<div class="addItem" id="addItemDiv">
							<h2>Add item:</h2>
							<div id="itemDiv0">
								<label for="itemDiscription0">discription:</label>
								<input type="text" id="itemDiscription0" name="itemDiscription0">
								<label for="itemAmount0">amount:</label>
								<input type="number" id="itemAmount0" name="itemAmount0">
								<div id="addItemButtonContainer">
								<button type="button" id="addItemButton" onclick="addItem()">+</button>
								</div>
							</div>
							<br>
						</div>
						<button type="submit">send invoice</button>
				</form>
				<script src="/metal_bricks/src/js/createInvoice.js"></script>
			</body>
			</html>
		`;
	}else if(newPage == 'userPageHTML'){
		document.getElementById('content').innerHTML = `
			<h1 id="variableGreeting">Good evening</h1>
			<!-- Two sections parting page centrally -->
				<!-- 1. Displays current day and month appointment overview with just the day displaying in a different color if something is happening then-->
			<div class="w-1/2">
				<div id="dayStatus" class="w-3/5 bg">
					<p id="currentDay">Wednesday</p>
					<h1 id="monthDayDisplay">December 10</h1>
					<h2>2 Upcoming events</h2>
				</div>
				<div class="calendar">
					<table>
						<thead>
							<th>Sun</th>
							<th>Mon</th>
							<th>Tue</th>
							<th>Wed</th>
							<th>Thu</th>
							<th>Fri</th>
							<th>Sat</th>
						</thead>
						<tbody id="calendarBody">
							<!-- JS function to see what day of the week the month begins, so April 1 -->
							<script>
							</script>
						</tbody>
					</table>
				</div>
			</div>
				<!-- 2. List op upcoming To-do's with an add To-do button -->
			<div class="w-1/2" style="margin: 5px;">
				<div class="createATodo bg" id="createATodo" style="display: none;">
					<h1>Create a To-do</h1>
					<label for="dateInput" class="w-1/3">Date*:</label>
					<input type="text" name="dateInput", id="dateInput" class="w-2/3" required>
					<label for="titleInput" class="w-1/3">Title*:</label>
					<input type="text" name="titleInput", id="titleInput" class="w-2/3" required>
					<label for="hourInput" class="w-1/3">Hour*:</label>
					<input type="text" name="hourInput", id="hourInput" class="w-2/3" required>
					<button class="btn black w-1/1">Add</button>
				</div>
				<h2>Upcoming To-do's <button id="addToDoButton" style="font-size: 21px;">+</button></h2>
				<div id="listOfUpcomingTodos"> <!-- has a fixed height, and is scrollable-->
					<!-- moet gefetched worden uit storage -->
					<!-- moet ook via js worden toegevoegd -->
					<div class="toDo" style="display: none;">
						<p>Today</p> <!-- The day at which it's due, in style of: today, tomorrow, Friday, Dec 12-->
						<div class="toDoInfoContainer, bg">
							<h3 id="todoTitle">Title of the todo</h3>
							<p>time planned</p> <!-- not sure if this part is needed, maybe it could be just a description of the to do task, and you could put this in there if you want -->
						</div>
					</div>
				</div>
			</div>
			<!-- Appointments section: add appointment button next to header -->
			<!-- Then again 2 sections though the seconds one is hidden at first -->
				<!-- 1. Lists the appointments appointments by date  -->

		<script src="storage.js"></script>


		<script>

			variableGreeting

			var today = new Date();
			
			var currentMonthCode = today.getMonth();
			var currentMonth = turnMonthCodeIntoWord(currentMonthCode);
			
			greetings = new Array('Hello', 'Welcome', 'Oi', 'Greetings', 'Good day!', 'Hey', 'Yo!', 'Got plans?', 'Terraria is 2d Minecraft')


			
			//'Wat is rood bubbelt en luid?' 'een baby in de microgolf'.
			
			document.getElementById('variableGreeting').innerHTML = greetings[getRandomInt(greetings.length)];
			document.getElementById('currentDay').innerHTML = turnDayCodeIntoWord(today.getDay());
			document.getElementById('monthDayDisplay').innerHTML = currentMonth + ' ' + today.getDate();

			var currentYear = today.getYear() + 1900
			
			
			var firstDayOfTheMonthString = String(currentYear) + '-' + String(currentMonthCode + 1) + '-1';
			var firstOfTheMonth = new Date(firstDayOfTheMonthString)
			var firstDayOfTheMonth = firstOfTheMonth.getDay();
			
			// document.getElementById('calendarBody').innerHTML += '<tr>';
			amountOfSpacesOnCalendar = 0
			var tr = document.createElement('tr');

				for (let index = 0; index < firstDayOfTheMonth; index++) {
					tr.innerHTML += '<td></td>';
					amountOfSpacesOnCalendar++
				}
			document.getElementById('calendarBody').appendChild(tr);
				
			var daysInMonth = getDaysInMonth(currentYear, currentMonthCode + 1)

				for (let index = 1; index <= daysInMonth; index++) {

					if(amountOfSpacesOnCalendar % 7 != 0){

						if(index < today.getDate()){
							tr.innerHTML += '<td style="opacity: .6;">' + String(index) + '</td>' 
						}else{
							tr.innerHTML += '<td>' + String(index) + '</td>' 
						}

					}else{

						document.getElementById('calendarBody').appendChild(tr);
						tr = document.createElement('tr');
						
						if(index < today.getDate()){
							tr.innerHTML += '<td style="opacity: .6;">' + String(index) + '</td>' 
						}else{
							tr.innerHTML += '<td>' + String(index) + '</td>' 
						}

					}
					document.getElementById('calendarBody').appendChild(tr);
					amountOfSpacesOnCalendar++
				}
				

				//Make it so when the button is pressed, it opens the 'Add To-do page'
				addToDoActive = false;
				document.getElementById('addToDoButton').addEventListener('click', function(){
					if(!addToDoActive){
						document.getElementById('createATodo').style.display = 'block';
						addToDoActive = true;
					}else{
						document.getElementById('createATodo').style.display = 'none';
						addToDoActive = false;
					}
				})
				
				
				// Displaying upcoming todos from storage
			
				// Data: 
				const Todos = [
					{
						TodoID: 1,
						title: 'Very good title for a todo',
						description: 'Lorem Ipsum dolor sit amet,...',
						user: 0,
						deadlineDate: '30/4/2026',
						deadlineTime: '17:30',
					},
					{
						TodoID: 2,
						title: 'Very good title for a todo 2',
						description: 'Lorem Ipsum dolor sit amet,...',
						user: 0,
						deadlineDate: '8/5/2026',
						deadlineTime: '13:30',
					},
					{
						TodoID: 3,
						title: 'Very good title for a todo 3',
						description: 'Lorem Ipsum dolor sit amet,...',
						user: 0,
						deadlineDate: '18/5/2026',
						deadlineTime: '14:30',
					},
					{
						TodoID: 4,
						title: 'Very good title for a todo 4',
						description: 'Lorem Ipsum dolor sit amet,...',
						user: 1,
						deadlineDate: '23/5/2026',
						deadlineTime: '11:00',
					},
					{
						TodoID: 5,
						title: 'Very good title for a todo 5',
						description: 'Lorem Ipsum dolor sit amet,...',
						user: 2,
						deadlineDate: '25/5/2026',
						deadlineTime: '13:00',
					},
					{
						TodoID: 6,
						title: 'Very good title for a todo 6',
						description: 'Lorem Ipsum dolor sit amet,...',
						user: 0,
						deadlineDate: '30/5/2026',
						deadlineTime: '17:00',
					},
				];

				// TODO: Date still needs to work properly, The todos should automatically be ordered by time and todos from the past should dissapear.
				for (let index = 0; index < Todos.length; index++) {
					if(Todos[index].user == 0){
						document.getElementById('listOfUpcomingTodos').innerHTML += '
							<div class="toDo">
								<p>'+ Todos[index].deadlineDate +'</p> <!-- The day at which it's due, in style of: today, tomorrow, Friday, Dec 12-->
								<div class="toDoInfoContainer, bg">
									<h3 id="todoTitle">'+ Todos[index].title +'</h3>
									<p>'+ Todos[index].deadlineTime +'</p> <!-- not sure if this part is needed, maybe it could be just a description of the to do task, and you could put this in there if you want -->
								</div>
							</div>
						'
					}
					
				}

			function turnMonthCodeIntoWord(currentMonthCode){
				if(currentMonthCode == 0){
					return 'January';
				}else if(currentMonthCode == 1){
					return 'February';
				}else if(currentMonthCode == 2){
					return 'March';
				}else if(currentMonthCode == 3){
					return'April';
				}else if(currentMonthCode == 4){
					return 'May';
				}else if(currentMonthCode == 5){
					return 'June';
				}else if(currentMonthCode == 6){
					return 'July';
				}else if(currentMonthCode == 7){
					return 'August';
				}else if(currentMonthCode == 8){
					return 'September';
				}else if(currentMonthCode == 9){
					return 'October';
				}else if(currentMonthCode == 10){
					return 'November';
				}else if(currentMonthCode == 11){
					return 'December';
				}
			}

			function turnDayCodeIntoWord(currentDayCode){
				if(currentDayCode == 0){
					return 'Sunday';
				}else if(currentDayCode == 1){
					return 'Monday';
				}else if(currentDayCode == 2){
					return 'Tuesday';
				}else if(currentDayCode == 3){
					return 'Wednesday';
				}else if(currentDayCode == 4){
					return 'Thursday';
				}else if(currentDayCode == 5){
					return 'Friday';
				}else if(currentDayCode == 6){
					return 'Saturday';
				}
			}

			function getDaysInMonth(year, month) {
				return new Date(year, month, 0).getDate();
			}

			function getRandomInt(max) {
				return Math.floor(Math.random() * max);
			}
			//TODO: dit aanpassen zodat het deze data uit neutralino storage haalt (momenteel is het enkel op deze manier zodat het via liveserver kan getoont worden.)

		</script>`	
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