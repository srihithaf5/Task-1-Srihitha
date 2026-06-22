const menuBtn =
document.getElementById("menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(item => {

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.classList.add("active");
        }

    });

});

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const update = () => {

        const target =
        +counter.dataset.target;

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            Math.ceil(current + increment);

            setTimeout(update,20);

        }else{
            counter.innerText = target;
        }
    };

    update();

});

const testimonials =
document.querySelectorAll(".testimonial");

let current = 0;

setInterval(() => {

    testimonials[current]
    .classList.remove("active");

    current =
    (current + 1) % testimonials.length;

    testimonials[current]
    .classList.add("active");

},3000);