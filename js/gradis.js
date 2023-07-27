// script.js
const courseData = [
    {
        title: "Graphic-Designing",
        description: "Our graphic design course is designed to provide students with the skills and knowledge they need to become proficient in this field. Our graphic design covers a lot of topics such as typography, color theory, layout design, digital illustration and many more..",
        image: "img/2_1.jpg",
        image1: "https://eidm.in/wp-content/uploads/2022/10/cropped-eidm-logo-small-01-e1665134014386-1.png",
        institute: "Eidm institute",
        link: "gradis_eidm.html"
    },
];

// Add code to generate course cards here
document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector(".cards");

    // Generate course cards dynamically
    courseData.forEach(course => {
        const card = document.createElement("div");
        card.className = "card";

        const card_info = document.createElement("div");
        card_info.className = "card__info";

        const institute = document.createElement("h2");
        institute.className = "card__institute";

        institute.addEventListener("click", function () {
            window.location.href = link;
        });      

        const icon = document.createElement("i");
        icon.className = "fa fa-arrow-right";
        icon.setAttribute("data-link", course.link);
        icon.addEventListener("click", redirectToLink);

        function redirectToLink(event) {
            const icon = event.target;
            const link = icon.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        }
        const img = document.createElement("img");
        img.className = "mini_image";
        img.src = course.image1;
        
        const image = document.createElement("img");
        image.className = "card__image";
        image.src = course.image;

        const content = document.createElement("div");
        content.className = "card__content";

        const title = document.createElement("h1");
        title.className = "card__title";
        title.innerText = course.title;

        const description = document.createElement("p");
        description.className = "card__description";
        description.innerText = course.description;

        const link = document.createElement("a");
        link.className = "card__link";
        link.href = course.link;
        link.innerText = "Learn More";
        
        institute.appendChild(img);
        content.appendChild(card_info);
        institute.appendChild(document.createTextNode(course.institute));
        institute.appendChild(icon);
        
        card_info.appendChild(institute);
        content.appendChild(title);
        content.appendChild(description);
        
        content.appendChild(link);

        card.appendChild(image);
        card.appendChild(content);
        

        cardsContainer.appendChild(card);
    });
});