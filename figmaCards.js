const figmaCards_List = [
    {
        id: 1,
        img_src:"img/Library-figma.jpg",
        description: "A Design of my Online Library Project :)",
        figmaLink: "https://www.figma.com/file/3i4Keoy5dg0WtjGt7sF1mw/ReadWell?type=design&node-id=0%3A1&mode=design&t=D1uOnNyq6nrk1E1i-1",
    },
    {
        id: 2,
        img_src:"img/Movies-list-figma.jpg",
        description: "A Design of a Movies Table List",
        figmaLink: "https://www.figma.com/file/ZenFRuTKoTeOCv3SsXOac2/Movies?type=design&node-id=0%3A1&mode=design&t=kd7vnMjErwoDzm5Y-1",
    },

];

let figma_projects_section = document.querySelector(".figma-projects-section");

const showFigmaCards = () => {

    // Loop through the first 'cardsToShow' items of the projectsCards array
    figmaCards_List.slice(0, 2).forEach((item) => {
        const figmaCard = document.createElement('div');
        figmaCard.classList.add("figma-projects-cards", "px-4", "pt-3", "mb-4");
        figmaCard.setAttribute("data-aos","fade", "data-aos-duration","1000");

        figmaCard.innerHTML = `          
    <div class="figma-img-div">
        <img src="${item.img_src}" class="" alt="...">
    </div>

    <div class="mb-1 py-4">
        <p class="figma-card-text pb-3">${item.description}</p>
            
            <a href="${item.figmaLink}" target="_blank" id="see-on-figma" class="see-on-figma px-4 py-2 ">
                <i class="fa-brands fa-figma"></i> 
                See on Figma
            </a>
        
    </div>
`;
        
            figma_projects_section.appendChild(figmaCard);
    });

};

showFigmaCards();