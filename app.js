const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const target = document.querySelector("footer");

function scrollToTop() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop);



function callback(entries, observer) {
    // The callback will return an array of entries, even if you are only observing a single item
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Show button
            scrollToTopBtn.classList.add('showBtn')
        } else {
            // Hide button
            scrollToTopBtn.classList.remove('showBtn')
        }
    });
}

let observer = new IntersectionObserver(callback);
observer.observe(target);

// function handleScroll() {
//     const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight
//     if ((document.documentElement.scrollTop / scrollTotal ) > 0.80 ) {
//         scrollToTopBtn.classList.add("showBtn")
//     } else {
//         scrollToTopBtn.classList.remove("showBtn")
//     }
// }
//
// document.addEventListener("scroll", handleScroll)

let departments = document.querySelectorAll('.department');
departments.forEach(dep => {
    dep.addEventListener('mouseenter', () => {
        const arrow = dep.querySelector('.helper').querySelector('p');
        arrow.classList.add('active');
    });

    dep.addEventListener('mouseleave', () => {
        const arrow = dep.querySelector('.helper').querySelector('p');
        arrow.classList.remove('active');
    })
})