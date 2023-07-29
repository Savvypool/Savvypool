// script.js
const courseData = [
    {
        title: "Advanced Seo",
        description: "SEO stands for Search Engine Optimization and it is used to increase a website’s online visibility.SEO techniques are applied to bring more visitors to a website. High website traffic helps to increase brand awareness and has the potential to convert visitors into customers.A website ideally wants to be at the top of the search engine result page.",
        image: "../img/3_1.jpg",
        image1: "https://eidm.in/wp-content/uploads/2022/10/cropped-eidm-logo-small-01-e1665134014386-1.png",
        institute: "Eidm institute",
        link: "../courses/advanced-seo.html"
    },
    {
        title: "Digital-Marketing",
        description: "The Comprehensive Digital Marketing course is a 3 month Offline course provided at the Kannur Office of EIDM Kannur. The course is designed in such a way that it is appropriate for anyone aspiring to learn Digital marketing.",
        image: "../img/3_2.jpg",
        image1: "https://eidm.in/wp-content/uploads/2022/10/cropped-eidm-logo-small-01-e1665134014386-1.png",
        institute: "Eidm institute",
        link: "../courses/comp-digimar.html"
    },
    {
        title: "Social Media Course",
        description: "Social media strategy is basically a plan aimed to maximize engagement and interactions of a company across social media to achieve the company's objective. Social media strategy is applied to generate leads, improve brand awareness or create a viral effect.",
        image: "../img/3_3.jpg",
        image1: "https://eidm.in/wp-content/uploads/2022/10/cropped-eidm-logo-small-01-e1665134014386-1.png",
        institute: "Eidm institute",
        link: "adsocial.html"
    },
    {
        title: "Digital-Marketing",
        description: "Digital Marketing Courses with Placement At OMiT, we offer an integrated Digital Marketing Courses with Placements that covers a range of disciplines, right from SEO course, SEM course, Social Media Marketing and more.",
        image: "../img/3_4.jpg",
        image1: "../img/catalyst.jpg",
        institute: "Catalyst Hub",
        link: "../courses/digimar-catalyst.html"
    },
    {
        title: "Digital Marketing",
        description: "Digital Marketing is any kind of marketing that happens on a digital platform. Whether it’s on your website, your social media, or through email, it’s digital marketing. On the other hand, Inbound Marketing is a business methodology that attracts customers by creating valuable content and experiences tailored to them.",
        image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg",
        image1: "../img/Qsteps.png",
        institute: "Qsteps Technologies",
        link: "../courses/digimar-catalyst.html"
    },
    ,
    {
        title: "Diploma in Architectural Technology",
        description: "Architectural technology is a field focused on applying innovative technological tools and design methods to the construction of buildings. You'll gain a broad base of skills including architectural modelling, presentation drawings, model construction etc. The curriculum includes a hands-on practicals that incorporates projects that reflect real-world architectural problems. This program will prepare you to work closely with licensed architects and produce usable construction drawings for working contractors.",
        image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg",
        image1: "../img/Qsteps.png",
        institute: "xint school of design",
        link: "../courses/digimar-catalyst.html"
    },
];

// Add code to generate course cards here
document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector(".cards");

    // Get the current page URL
    const currentPageUrl = window.location.href;

    // Generate course cards dynamically
    courseData.forEach((course) => {
        // Skip adding the card for the specific course if the current page matches its link
        if (currentPageUrl.includes(course.link)) {
            return;
        }
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