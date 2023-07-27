// script.js
const courseData = [
    {
        title: "Full Stack Developer",
        description: "A Full-Stack Developer can produce end-to-end solutions, which is a highly marketable and agile skillset that isin-demand worldwide. Remote job type & competency with this designation assures eternal job security.",
        image: "img/1_1.jpg",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHWc_Rp_6ir_NvZzVTLOornH-D2O3__Axew&usqp=CAU",
        institute: "Acodemy",
        link: "fullstack.html"
    },
    {
        title: "Software-Testing",
        description: "Our Software Testing course is a comprehensive program that takes you from the classroom to the workplace.Once you complete your training, internship, and assessments successfully, you’ll get into the placement pool.",
        image: "https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHWc_Rp_6ir_NvZzVTLOornH-D2O3__Axew&usqp=CAU",
        institute: "Acodemy",
        link: "software-testing.html"
    },
    {
        title: "Software Testing",
        description: "It is a program that guides a graduate in shaping a career as a software test engineer or a Quality Analyst(QA). The integrated training program delivered by Qsteps includes a detailed training in software testing life cycle management in terms of understanding the software application requirements, designing and executing the test cases for the same and defect management.",
        image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg",
        image1: "img/Qsteps.png",
        institute: "Qsteps Technologies",
        link: "digimar-catalyst.html"
    },
    {
        title: "IT SECURITY MANAGEMENT TRAINING",
        description: "14 High Quality e-Learning Chapters Topics on Network Security, Cryptography Covers Compliance and Operational Security, Data and host Security Exam Tips and Techniques High Pass rate Course Completion Certificate Exam Fee Included (Only in US) CERTIFIED ETHICAL HACKING",
        image: "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image1: "img/Qsteps.png",
        institute: "Qsteps Technologies",
        link: "digimar-catalyst.html"
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