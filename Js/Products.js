// Fetch data from the API
fetch("https://dribble-web-deployment.onrender.com/dribble")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(display_Data); 
    });

function display_Data(el) {
    const container = document.getElementById("cardsContainer");

    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = el.img;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const title = document.createElement("p");
    title.textContent = el.title;

    const iconContainer = document.createElement("div");
    iconContainer.style.display = "flex";
    iconContainer.style.gap = "1rem";

    const shareIcon = createIcon('<i class="fa-regular fa-bookmark"></i>'); 
    shareIcon.style.color = "black"
    const loveIcon = createIcon('<i class="fa-regular fa-heart"></i>'); 
    loveIcon.style.color = "black"

    iconContainer.append(shareIcon, loveIcon);

    const cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details");
    cardDetails.style.display = "flex";
    cardDetails.style.justifyContent = "space-between";

    const name = document.createElement("p");
    name.textContent = el.name;
    name.style.position= "relative";
    // name.style.top = "0.2rem";
   
    const likesContainer = createIconWithText('<i class="fas fa-heart"></i>', `${el.watch}`); 

    const watchContainer = createIconWithText('<i class="fas fa-eye"></i>', `${el.likes}`); 
    const avatar = document.createElement("img");
    avatar.src = "https://cdn.dribbble.com/users/1044993/avatars/normal/ddcd16f3b4ae5853f8d144068d72576d.jpg?1452435136";
    avatar.style.width = "20px";
    avatar.style.height = "20px";
    avatar.style.borderRadius = "50%";
    title.style.color  = "white"
    cardContent.append(title, iconContainer);
    cardContent.style.fontFamily = `"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`
    cardContent.style.fontSize = "14px"
    let div_flex = document.createElement("div")
    let seond_div_flex = document.createElement("div");

    let team_pro = document.createElement("p");
    team_pro.textContent = el.level?"PRO":"TEAM";
    team_pro.style.fontStyle = "10px";
    team_pro.style.fontWeight = "bold";
    team_pro.style.lineHeight = "1";
    team_pro.style.backgroundColor = "#ccc";
    team_pro.style.color = "#fff";
    team_pro.style.textAlign = "center";
    team_pro.className = "teampro"
    team_pro.style.padding = "0.2rem"

    div_flex.append(avatar,name,team_pro);
    seond_div_flex.append(likesContainer,watchContainer);
    div_flex.style.display = "flex"
    div_flex.style.justifyContent = "space-between";
    div_flex.style.gap = "0.4rem"
    seond_div_flex.style.display = "flex"
    seond_div_flex.style.justifyContent = "space-between";
    seond_div_flex.style.alignItems = "center";
    seond_div_flex.style.gap= "1rem"
    cardDetails.append(div_flex,seond_div_flex);
    cardDetails.style.display = "flex"
    cardDetails.style.justifyContent = "space-between";


    card.append(image, cardContent, cardDetails);
    container.append(card);
}

function createIcon(iconHTML) {
    const iconWrapper = document.createElement("div");
    iconWrapper.style.padding = "1rem";
    iconWrapper.style.borderRadius = "25px";
    iconWrapper.style.backgroundColor = "white";
    iconWrapper.style.display = "flex";
    iconWrapper.style.alignItems = "center";
    iconWrapper.style.justifyContent = "center";
    iconWrapper.innerHTML = iconHTML;
    return iconWrapper;
}

function createIconWithText(iconHTML, text) {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";

    const iconElement = document.createElement("span");
    iconElement.innerHTML = iconHTML;
    iconElement.style.position = "relative";
    // iconElement.style.top = "0.4rem";
    iconElement.style.color = "#9e9ca7"
    const textElement = document.createElement("p");
    textElement.textContent = text;
    textElement.style.marginLeft = "0.5rem";

    container.append(iconElement, textElement);
    return container;
}
