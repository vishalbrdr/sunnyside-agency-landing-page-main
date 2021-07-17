const btn = document.querySelector(".navbar-btn")
const nav = document.querySelector(".navbar__links")
btn.addEventListener("click", () => {
    nav.classList.toggle("toggle")
})

const timeline = gsap.timeline({ default: { duration: 1 } })

timeline
    .from("header", { y: "-100vh" })
    .from(".navbar__logo", { opacity: 0, ease: "power3.in" })
    .from(".navbar__links li", { opacity: 0, ease: "power3.in", stagger: -.1 }, "<")
    .from(".header__main h1", { opacity: 0, scale: .7, ease: "power1.in" })
    .from(".header__main img", { opacity: 0, y: "200px" })
const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first",
        start: "top center"
    },
    default: { duration: .5, ease: "power2.inOut" }
})

t1.from(".first img", { opacity: 0, x: "200px" })
    .from(".first .content", { opacity: 0, x: "-200px" })

const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second",
        start: "top center"
    },
    default: { duration: .5, ease: "power2.inOut" }
})

t2.from(".second img", { opacity: 0, x: "-200px" })
    .from(".second .content", { opacity: 0, x: "200px" });

const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third",
        start: "top center"
    },
    default: { duration: .5, ease: "power2.inOut" }
})

t3.from(".third__left", { opacity: 0, x: "-200px" })
    .from(".third__right", { opacity: 0, x: "200px" }, "<")
    .from(".third-content", { opacity: 0, y: "50px" });

const t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top center"
    },
    default: { duration: .5, ease: "power2.inOut" }
})

t4.from(".testimonials h2", { opacity: 0, y: "100px" })
    .from(".testimonial", { opacity: 0, y: "100px", stagger: 0.1 })

    
const t5 = gsap.timeline({
    scrollTrigger: {
        trigger: "footer",
        start: "top center"
    },
    default: { duration: .5, ease: "power2.inOut" }
})

t5.from("footer .images", { opacity: 0, y: "100px" })
    .from(".footer", { opacity: 0, y: "100px", stagger: 0.1 })
    .from(".attribution p.left", {opacity: 0, x:"-100px"})
    .from(".attribution p.right", {opacity: 0, x:"100px"},"<")
