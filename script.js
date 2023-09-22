const btnGet = document.getElementById("btn-get");
const btnRemove = document.getElementById("btn-remove");
const usersContainer = document.getElementById("users");

let createCard = (user) => {
    const newUser = document.createElement("div");
    newUser.classList.add("card");
    newUser.classList.add("border-primary");
    newUser.innerHTML = `<img  src=${user.results[0].picture.large}>
        <div class="card-body list-group list-group-flush">
            <span class="list-group-item">Name: ${user.results[0].name.first} ${user.results[0].name.last}</span>
            <span class="list-group-item">City: ${user.results[0].location.city}</span>
            <span class="list-group-item">Country: ${user.results[0].location.country}</span>
            <span class="list-group-item">Postcode: ${user.results[0].location.postcode}</span>
        </div>`;
    return newUser;
};

btnGet.addEventListener("click", () => {
    fetch("https://randomuser.me/api")
        .then(d => d.json())
        .then(user => {
            usersContainer.appendChild(createCard(user));
        });
});

btnRemove.addEventListener("click", () => {
    usersContainer.innerHTML = '';
});