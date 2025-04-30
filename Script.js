const text = "Syed Nasir";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById('typing-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}
window.onload = function() {
    typeEffect();
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 1500); 
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});


const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
