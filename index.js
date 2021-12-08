async function getUsers() {
  try {
    let url = "../data/names.json";
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    html += `
    <div class="profile">
    
        <div class ="profile-name"> 
         <p class="name">${user.first_name}</p>
        <p>${user.last_name}</p>
        </div
       
        <p>Email: ${user.email}</p>
        <p>Gender: ${user.gender}</p>
        <p>Ip: ${user.ip_address}</p>
        <h2 class="user">UserId: ${user.id}</h2>
    </div>
 

    `;
  });

  let container = document.getElementById("information-listing");
  container.innerHTML = html;
}

renderUsers();
