// script.js
const courseData = [
    {
        title: "CMA (IND)",
        description: "The specialised knowledge and skill of the professional members of the institute are being given due recognition for different Audit or Certification work under different statutes like maintenance of Cost Accounting Records and Cost Audit under section 148 of The Companies Act 2013 and Valuation Audit.",
        image: "https://www.pranjurixllp.com/images/pexels-kindel-media-7688460.jpg",
        image1: "../img/catalyst.jpg",
        institute: "Catalyst Hub",
        link: "../courses/cma(ind)_catalyst.html"
    },
    {
        title: "CMA (USA)",
        description: "The Certified Management Accountant (CMA) designation is a highly respected credential awarded by the Institute of Management Accountants (IMA) which is a US-based worldwide association for accountants and financial professionals working in business.",
        image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?cs=srgb&dl=pexels-kindel-media-7688336.jpg&fm=jpg",
        image1: "../img/catalyst.jpg",
        institute: "Catalyst Hub",
        link: "../courses/cma(ind)_catalyst.html"
    },
    {
        title: "CMA/Accounting (USA)",
        description: "The CMA ®️ (Certified Management Accountant) certification is a globally recognized advanced accounting credential offered by IMA®️ (Institute of Management Accountants). The CMA has been the global benchmark for management accountants and financial professionals for the past five decades.",
        image: "https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image1: "https://www.keystoneacademia.com/assets/images/logo.png",
        institute: "Keystone Academia",
        link: "../courses/cma(usa)_keystoneacademia.html"
    },
    {
        title: "CIMA",
        description: "The CMA ®️ (Certified Management Accountant) certification is a globally recognized advanced accounting credential offered by IMA®️ (Institute of Management Accountants). The CMA has been the global benchmark for management accountants and financial professionals for the past five decades.",
        image: "https://images.pexels.com/photos/5466814/pexels-photo-5466814.jpeg?cs=srgb&dl=pexels-olia-danilevich-5466814.jpg&fm=jpg",
        image1: "https://www.keystoneacademia.com/assets/images/logo.png",
        institute: "Keystone Academia",
        link: "../courses/cima_keystoneacademia.html"
    },
    {
        title: "Certificate in International Financial Reporting (Cert IFR)",
        description: "IFRS ACCA’s Certificate in International Financial Reporting Standards (CertIFR) offers a broad introduction to the field, and aims to help you understand how they are used globally. The course and assessment are separate so if you are already applying IFRS at work and want formal recognition of your skills, you can apply to take the online assessment only.",
        image: "https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image1: "https://www.keystoneacademia.com/assets/images/logo.png",
        institute: "Keystone Academia",
        link: "../courses/certIFR_keystoneacademia.html"
    },
    {
        title: "ACCA",
        description: "The Association of Chartered Certified Accountants (ACCA) is the global body for professional accountants. It was established in 1904. With more than 210,000 members and 510,000 registered students, it is one of the largest and fastest growing professional accountancy body today. ACCA qualifications are recognized in 181 countries around the globe.",
        image: "https://images.pexels.com/photos/209224/pexels-photo-209224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        image1: "https://www.keystoneacademia.com/assets/images/logo.png",
        institute: "Keystone Academia",
        link: "../courses/acca_keystoneacademia.html"
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
        img.style.marginRight = course.institute.length < 8 ? "-120px" : "-37px";
        
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