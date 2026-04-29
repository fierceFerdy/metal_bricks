document.addEventListener("DOMContentLoaded", function(){
    loadClients();
})

// / start vn Neutralino


var clients = [];

//  laden bij opstart
async function loadClients() {
  try {
    const data = await Neutralino.storage.getData("clients"); https://neutralino.js.org/docs/api/storage/
    clients = data ? JSON.parse(data) : [];
  } catch (e) {
    clients = [];
  }

  renderClients();
}

//  ppslaan
async function saveClients() {
  await Neutralino.storage.setData("clients", JSON.stringify(clients));
}

//  tabel renderen
function renderClients() {
  const tbody = document.getElementById("clientTableBody");
  tbody.innerHTML = "";

  clients.forEach(client => {
    const tr = document.createElement("tr"); // table row

    tr.innerHTML = `
      <td>${client.clientid}</td>
      <td>${client.name}</td>
      <td>${client.registerd}</td>
      <td>${client.lead}</td>
      <td>${client.postal}</td>
      <td>${client.city}</td>
      <td>${client.street}</td>


    `;

    
  });
}

//  Form submite
document.getElementById("clientForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const newClient = {
    clientid:   document.getElementById("clientid").value.trim(),
    name:       document.getElementById("name").value.trim(),
    registerd:  document.getElementById("registerd").value.trim(),
    lead:       document.getElementById("lead").value.trim(),
    postal:     document.getElementById("postal").value.trim(),
    city:       document.getElementById("city").value.trim(),
    street:     document.getElementById("street").value.trim()
  
  
  };


  clients.push(newClient);

  await saveClients();
  renderClients();

  
});




