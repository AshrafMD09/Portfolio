const projectsCards = [
    {
        id: 1,
        name: "E-Commerce Web Site",
        description: "E-Commerce Web Site With WordPress",
        languages: ["WordPress"],
        linkOnGithub: "https://dev-braceletsworld.pantheonsite.io/",
    },
    {
        id: 2,
        name: "ReadWell",
        description: "An Online Library Project",
        languages: ["HTML", "CSS", "PHP", "SQL"],
        linkOnGithub: "https://github.com/AshrafMD09/Readwell",
    },
    {
        id: 3,
        name: "JavaScript Workshop",
        description: "My first mini projects with JavaScript",
        languages: ["HTML", "CSS", "JavaScript"],
        linkOnGithub: "https://github.com/AshrafMD09/JavaScript-Workshop",
    },
    {
        id: 4,
        name: "Validation Form",
        description: "Validation Form with JavaScript & Regex",
        languages: ["HTML", "CSS", "JavaScript"],
        linkOnGithub: "https://github.com/AshrafMD09/Validation-Form",
    },
    {
        id: 5,
        name: "World Cup",
        description: "The first project with PHP. The World Cup groups",
        languages: ["HTML", "CSS", "PHP"],
        linkOnGithub: "https://github.com/AshrafMD09/World-Cup",
    },
    {
        id: 6,
        name: "Receipts App",
        description: "Using API for Receipts Web Site",
        languages: ["HTML", "CSS", "JavaScript"],
        linkOnGithub: "https://github.com/AshrafMD09/Receipt-App",
    },
    {
        id: 7,
        name: "Solicode Projects",
        description: "All the projects I did in my school",
        languages: ["HTML", "CSS", "PHP","SQL","JavaScript... "],
        linkOnGithub: "https://github.com/AshrafMD09/Solicode-s-Projects",
    },

    
];


    let my_projects_section = document.querySelector(".my-projects-section");

// Keep track of whether all cards are shown
let allCardsShown = false;

const postMethods = () => {
    const cardsToShow = allCardsShown ? projectsCards.length : 6;

    // Loop through the first 'cardsToShow' items of the projectsCards array
    projectsCards.slice(0, cardsToShow).forEach((item) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add("my-projects-cards", "px-4", "pt-3", "mb-4");
        projectCard.setAttribute("data-aos","fade", "data-aos-duration","1000");

        projectCard.innerHTML = `          
            <div class="project-icon" >
                <div class="folder-icon"><i class="fa-regular fa-folder" style="color: #63E6BE;"></i></div>
                <div class="share-icon"><a href="${item.linkOnGithub}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #ccd6f6;"></i></a></div>
            </div>
            <div class="card-body">
                <a href ="${item.linkOnGithub}"><h5 class="card-title py-3">${item.name}</h5></a>
                <p class="card-text">${item.description}</p>
            </div>
            <div class="prg-languages-div">
                <p class="prg-language">${item.languages.join("  ")}</p>
            </div>`;
        
        my_projects_section.appendChild(projectCard);
    });

    // Show the "Show More" button if there are more than 6 cards
    if (projectsCards.length > 6) {
        const showMoreButton = document.getElementById('show-more');
        showMoreButton.textContent = allCardsShown ? 'Show Less' : 'Show More';
        showMoreButton.addEventListener('click', toggleShowMore);
    }
};

const toggleShowMore = () => {
    allCardsShown = !allCardsShown;
    my_projects_section.innerHTML = '';
    postMethods();
};

postMethods();


