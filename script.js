// Odd Drop Pixels - Interactive Elements

document.addEventListener("DOMContentLoaded", () => {

    console.log("Odd Drop Pixels website loaded 🚀");


    // Animación suave de aparición de secciones

    const sections = document.querySelectorAll("section");


    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    });


    sections.forEach(section => {

        observer.observe(section);

    });


});
