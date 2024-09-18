let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const totalImages = images.length;

// Clone the first image and append it at the end for seamless looping
const carousel = document.querySelector('.carousel');
const firstImageClone = images[0].cloneNode(true);
carousel.appendChild(firstImageClone);

function showNextImage() {
    currentIndex++;

    // If we reach the clone of the first image (after the last original image)
    if (currentIndex === totalImages) {
        // Move smoothly to the clone
        document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;

        // After the transition ends, reset position back to the real first image
        setTimeout(() => {
            document.querySelector('.carousel').style.transition = 'none'; // Disable transition for the reset
            document.querySelector('.carousel').style.transform = `translateX(0)`; // Go back to the real first image
            currentIndex = 0; // Reset index
            setTimeout(() => {
                document.querySelector('.carousel').style.transition = 'transform 1s ease-in-out'; // Re-enable the transition
            }, 50); // Small timeout to re-enable transition smoothly
        }, 1000); // Wait for the slide to complete before resetting
    } else {
        // Otherwise, just move to the next image
        document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Change image every 1 second
setInterval(showNextImage, 3000);


// Function to create a card
function createCard(img, title, description) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
            <img src="${img}" alt="${title}">
            <h3>${title}</h3>
            
        `;

    // Append the card to the card container
    const cardContainer = document.getElementById('touristCards');
    cardContainer.appendChild(card);
}

// Example usage of the function
createCard('bappanad.jpg', 'Bappanad Temple');
createCard('Kapu_1.jpg', 'Kapu light house');
createCard('MAHALAKSHMI.jpg', 'Mahalakshmi Temple');
createCard('murdeshwara.jpg', 'Murudeshwar');
createCard('udupimata.jpg', 'Udupi Krishna mata');
createCard('chikmagaluru.jpg', 'Chik mangalore');
createCard('mysore.webp', 'Mysore');
createCard('kudremuk.jpg', 'Kudremuk');
createCard('bandipur.jpg', 'Bandipur National park');
createCard('Dharmasthala.jpg', 'Dharmasthala Temple');
createCard('wonderla.jpg', 'Wonderla Bangalore');
createCard('thousandpillar.jpg', 'Thousand pillar');

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
});

let flag = false;
const menu = document.querySelector('.menu');
menu.addEventListener("click", () => {
    flag = !flag; // Toggle the flag between true and false
    const navLink = document.querySelector('.nav-links');
    if (flag) {
        navLink.classList.add("show");
        console.log("Menu opened");
    } else {
        navLink.classList.remove("show");
        console.log("Menu closed");
    }
});

const dynamicContainer = document.getElementById("dynamicContainer");

// Function to generate a dynamic card with an image
function addVehicleCard(imgSrc, imgAlt) {
    const vehicleCard = document.createElement("div");
    vehicleCard.classList.add("card", "card1");

    const imageElement = document.createElement("img");
    imageElement.src = imgSrc;
    imageElement.alt = imgAlt;

    vehicleCard.appendChild(imageElement);
    dynamicContainer.appendChild(vehicleCard);
}

// Array of vehicle image information
const vehicleData = [
    { imgSrc: "resources/vehicles/WhatsApp Image 2024-09-18 at 8.17.30 PM.jpeg", imgAlt: "Car" },
    { imgSrc: "resources/vehicles/WhatsApp Image 2024-09-18 at 8.17.31 PM.jpeg", imgAlt: "SUV" },
    { imgSrc: "resources/vehicles/WhatsApp Image 2024-09-18 at 8.17.38 PM (1).jpeg", imgAlt: "Van" },
    { imgSrc: "resources/vehicles/WhatsApp Image 2024-09-18 at 8.17.38 PM.jpeg", imgAlt: "Van" },
    { imgSrc: "resources/vehicles/WhatsApp Image 2024-09-18 at 8.17.38 PM.jpeg", imgAlt: "Van" },
    { imgSrc: "resources/vehicles/WhatsApp Image 2024-09-18 at 8.17.29 PM.jpeg", imgAlt: "Van" },
    { imgSrc: "resources/vehicles/WhatsApp Image 2024-09-18 at 8.17.37 PM.jpeg", imgAlt: "Van" },
    { imgSrc: "resources/vehicles/WhatsApp Image 2024-09-18 at 8.16.21 PM.jpeg", imgAlt: "Van" }
];

// Dynamically create vehicle cards
vehicleData.forEach(vehicle => {
    addVehicleCard(vehicle.imgSrc, vehicle.imgAlt);
});
