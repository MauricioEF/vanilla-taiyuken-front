let nameH1 = document.getElementById("name");
let platformH3 = document.getElementById("platform");
let descriptionH4 = document.getElementById("description");
let favoriteGameH3 = document.getElementById("favoriteGame");
let favoriteBoardGame = document.getElementById("favoriteBoardGame");


//Fetch de miembros.
async function fetchUsers() {
    const url = window.env.API_BASE_URL + "/members?populated=true"
    const response = await fetch(url, {
        method: "GET"
    })
    const body = await response.json();
    const members = body.payload;

    console.log(members);
    const columnOfButtons = document.getElementById("columnOfButtons");
    const fragment = document.createDocumentFragment();

    members.forEach((currentMember, index) => {
        //objetivo crear un boton por cada miembro, con sus listener y pegarlo al fragmento.
        const button = document.createElement("button");
        button.id = currentMember.nickname;
        button.innerHTML = currentMember.nickname;
        button.setAttribute("class", "button");

        button.addEventListener('click', (event) => {
            const buttons = document.querySelectorAll(".button")
            const currentButton = event.target;
            buttons.forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('clicked');
            });

            currentButton.disabled = true;
            currentButton.classList.add('clicked');



            nameH1.innerHTML = currentMember.nickname;
            platformH3.innerHTML = currentMember.platform;
            descriptionH4.innerHTML = currentMember.description;
            favoriteGameH3.innerHTML = currentMember.favoriteVideoGame.title;
            favoriteBoardGame.innerHTML = currentMember.favoriteBoardGame.title;
        })
        fragment.appendChild(button);
    })
    columnOfButtons.appendChild(fragment);
}
fetchUsers()


