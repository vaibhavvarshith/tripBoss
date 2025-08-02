// Change navbar style on scroll
const navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});

// Navbar toggle buttons
const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

// Show navbar (sidebar)
if (navbarShowBtn && navbarCollapseDiv) {
    navbarShowBtn.addEventListener('click', () => {
        navbarCollapseDiv.classList.add('navbar-collapse-rmw');
    });
}

// Hide navbar
if (navbarCloseBtn && navbarCollapseDiv) {
    navbarCloseBtn.addEventListener('click', () => {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    });
}

// Hide navbar when clicking outside
document.addEventListener('click', (e) => {
    if (
        !navbarCollapseDiv.contains(e.target) &&
        !navbarShowBtn.contains(e.target)
    ) {
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// Stop animation during window resize for smoother UI
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
