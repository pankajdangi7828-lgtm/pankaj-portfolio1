// Tab Switching Logic
const tabLinks = document.querySelectorAll('.tab-link, .tab-link-btn');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(targetId) {
    // Remove active class from all links and contents
    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active class to corresponding tab link (in navbar)
    const activeNavLink = document.querySelector(`.tab-link[data-target="${targetId}"]`);
    if(activeNavLink) activeNavLink.classList.add('active');

    // Show the target content
    const targetContent = document.getElementById(targetId);
    if(targetContent) {
        targetContent.classList.add('active');
        window.scrollTo(0, 0); // Scroll to top when switching tabs
    }
}

tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        
        // close mobile menu if open
        if(window.innerWidth <= 768) {
            document.querySelector(".nav-links").style.display = "none";
        }

        switchTab(targetId);
    });
});


// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "rgba(15, 23, 42, 0.95)";
        navLinks.style.padding = "2rem";
        navLinks.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
        navLinks.style.zIndex = "1000";
    }
});
