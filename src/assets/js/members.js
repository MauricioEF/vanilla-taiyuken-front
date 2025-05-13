const members = {
    momo: {
        name: "Momo",
        platforms: "pc",
        age: 26,
        description: "momo es una jugadora casual que disfruta de los juegos de granja, no le gustan los juegos violentos y constantemente intenta que Taiyuken juegue Stardew Valley con ella",
        favoriteGame: "Stardew Valley",
    },
    dau: {
        name: "Dau",
        platforms: "pc",
        age: 28,
        description: "Dau es un apasionado por los juegos de dificultad, es un cazador de logros, Es un programador, Cuidado si dice que es malo en algo(Es un tryhard >:3)",
        favoriteGame: "Paper Mario: The thousand year Door",
    },
    jefeUri: {
        name: "jefeUri",
        platforms: "pc",
        age: 19,
        description: "Es hermano de Axol y Momo, es de los mas sociables de taiyuken, es un amante de los lentes y las fiestas y le gusta bailar",
        favoriteGame: " Fortnite",
    },
    axol: {
        name: "AxolGames",
        platforms: "pc",
        age: 18,
        description: "Es hermano de jefeUri y Momo, Es un tryhard en juegos campaña, le gustan las cosas referentes a la musica metal y toca la guitarra",
        favoriteGame: "Resident Evil",
    },
    yoking: {
        name: "YokingDust",
        platforms: "Xbox y pc",
        age: 17,
        description: "Simplemente es Yoking, (No tomar nada enserio con el), le gusta el humor negro, hace chistes malos, solo quiere divertirse :p ",
        favoriteGame: "Doom",
    },
    chino: {
        name: "Chino",
        platforms: "pc",
        age: 23,
        description:  "ChinoLee, mejor conocido como Chino, es un jugador  de la primera generacion de Taiyuken. Tiene un especial interés por los juegos de automatización y es considerado el miembro más temperamental del team",
        favoriteGame: "Rocket League ",
    },
    yisus: {
        name: "Yisus",
        platforms: "Nintendo",
        age: 26,
        description: "YisusFrank, Mejor conocido como Yisus, es el jugador más Nintendero de Taiyuken. Cuenta con su proyecto personal de contenido de Nintendo. Es un jugador bastante chill",
        favoriteGame: " Mario 64",
    },
    teacher: {
        name: "Teacher",
        platforms: "pc, Xbox, Nintendo",
        age: 32,
        description: "teacher es un jugador de TCG y juegos de pelea, cuidado si dice que va a recostarse (se quedara dormido)",
        favoriteGame: "Hollow Knight",
    }

};

let nameH1 = document.getElementById("name");
let platformH3 = document.getElementById("platform");
let ageH3 = document.getElementById("age");
let descriptionH4 = document.getElementById("description");
let favoriteGameH3 = document.getElementById("favoriteGame");



const buttons = document.querySelectorAll('.button');
buttons.forEach(currentButton => {
  currentButton.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('clicked');
    });

    currentButton.disabled = true;
    currentButton.classList.add('clicked');

    const memberId = currentButton.id;
    const memberData = members[memberId];

    if (memberData) {
      nameH1.innerHTML = memberData.name;
      platformH3.innerHTML = memberData.platforms;
      ageH3.innerHTML = memberData.age;
      descriptionH4.innerHTML = memberData.description;
      favoriteGameH3.innerHTML = memberData.favoriteGame;
    }
  });
});

