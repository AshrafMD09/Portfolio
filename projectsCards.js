// const projectsCards = [
//     {
//         id:1,
//         name:"Calculator",
//         description:"calculator with javaScript",
//         languages:["HTML","CSS","JavaScript"],
//         linkOnGithub:"https://elzero.org/tutorials-create-image-slider/",
//     },
//     {
//         id:2,
//         name:"World Cup",
//         description:"The first project with php, the world cup groups",
//         languages:["HTML","CSS","PHP"],
//         linkOnGithub:"https://elzero.org/tutorials-create-image-slider/",
//     },
// ];

// let my_projects_section = document.querySelector("my-projects-section");

// showProjects();


// function showProjects(){
//     for(let i = 0; i < projectsCards.length; i++){
//     let item = projectsCards[i];

//         document.write(`<div class="my-projects-cards px-4 py-2 mb-5 col-md-3">`);
//         document.write(`<div class="project-icon">`);
//         document.write(`<div class="folder-icon"><i class="fa-regular fa-folder style="color: #63E6BE;""></i></div>`);
//         document.write(`<div class="share-icon"><a href="#"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #ccd6f6;"></i></a></div>`);
//         document.write(`</div>`);
        
//         document.write(`<div class="card-body">`);
//         document.write(`<h5 class="card-title py-3">${item.name}</h5>`);
//         document.write(`<p class="card-text">${item.description}</p>`);
//         document.write(`</div>`);
        
//         document.write(`<div class="prg-languages-div">`);
//         for(let j = 0; j < item.languages.length; j++){
//         document.write(`<p class="prg-language">${item.languages[j]}</p>`);
//         }
//         document.write(`</div>`);
        
//         document.write(`</div>`);
        

//     }

// }

const projectsCards = [
    {
        id: 1,
        name: "Calculator",
        description: "calculator with JavaScript",
        languages: ["HTML", "CSS", "JavaScript"],
        linkOnGithub: "https://github.com/AshrafMD09/Portfolio/blob/master/Portfolio.css",
    },
    {
        id: 2,
        name: "World Cup",
        description: "The first project with PHP, the world cup groups",
        languages: ["HTML", "CSS", "PHP"],
        linkOnGithub: "https://elzero.org/tutorials-create-image-slider/",
    },
    {
        id: 3,
        name: "ReadWell",
        description: "The first project with PHP, the world cup groups",
        languages: ["HTML", "CSS", "sql"],
        linkOnGithub: "https://elzero.org/tutorials-create-image-slider/",
    },
    
];

// Select the container where projects will be displayed
document.addEventListener("DOMContentLoaded", function() {
    showProjects();
});

function showProjects() {
    let my_projects_section = document.querySelector(".my-projects-section");
    // Loop through each project in the projectsCards array
    for (let i = 0; i < projectsCards.length; i++) {
        let item = projectsCards[i];

        // Create elements for project card, icons, title, description, and programming languages
        let projectCard = document.createElement("div");
        projectCard.classList.add("my-projects-cards", "px-4", "py-2", "mb-5");

        let projectIcon = document.createElement("div");
        projectIcon.classList.add("project-icon");

        let folderIcon = document.createElement("div");
        folderIcon.classList.add("folder-icon");
        let folderIconContent = document.createElement("i");
        folderIconContent.classList.add("fa-regular", "fa-folder");
        folderIconContent.style.color = "#63E6BE";
        folderIcon.appendChild(folderIconContent);

        let shareIcon = document.createElement("div");
        shareIcon.classList.add("share-icon");
        let shareLink = document.createElement("a");
        shareLink.href = item.linkOnGithub;
        let shareIconContent = document.createElement("i");
        shareIconContent.classList.add("fa-solid", "fa-arrow-up-right-from-square");
        shareIconContent.style.color = "#ccd6f6";
        shareLink.appendChild(shareIconContent);
        shareIcon.appendChild(shareLink);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title", "py-3");
        cardTitle.textContent = item.name;
        let cardDescription = document.createElement("p");
        cardDescription.classList.add("card-text");
        cardDescription.textContent = item.description;
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDescription);

        let prgLanguagesDiv = document.createElement("div");
        prgLanguagesDiv.classList.add("prg-languages-div");
        for (let j = 0; j < item.languages.length; j++) {
            let prgLanguage = document.createElement("p");
            prgLanguage.classList.add("prg-language");
            prgLanguage.textContent = item.languages[j];
            prgLanguagesDiv.appendChild(prgLanguage);
        }

        // Append created elements to the project card
        projectIcon.appendChild(folderIcon);
        projectIcon.appendChild(shareIcon);
        projectCard.appendChild(projectIcon);
        projectCard.appendChild(cardBody);
        projectCard.appendChild(prgLanguagesDiv);

        // Append the project card to the container
        my_projects_section.appendChild(projectCard);
    }
}


