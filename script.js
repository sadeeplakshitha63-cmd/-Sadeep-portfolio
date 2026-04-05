// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('ph-list', 'ph-x');
    } else {
        icon.classList.replace('ph-x', 'ph-list');
    }
});

document.querySelectorAll('.nav-link, .btn-primary').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.replace('ph-x', 'ph-list');
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on load

// Generate Fake Yet Highly Realistic Feedbacks
const countries = ["USA", "UK", "Sri Lanka", "Australia", "Canada", "Germany", "UAE", "Singapore", "New Zealand"];
const adjectives = ["Incredible", "Outstanding", "Phenomenal", "Exceptional", "Brilliant", "Highly professional", "Top-tier", "Flawless", "Superb"];
const nouns = ["developer", "engineer", "UI/UX designer", "partner", "professional", "creator", "visionary", "expert"];
const names = [
    "James T.", "Sarah L.", "Michael C.", "Emma W.", "David H.", "Kasun P.", "Tharindu M.", 
    "Nuwan S.", "Jessica R.", "Daniel K.", "Amal Y.", "Emily G.", "Oliver B.", "Sophia M.", 
    "William D.", "Chamika R.", "Lahiru T.", "Alex F.", "Mia H.", "Ethan J.", "Matthew B.", 
    "Chloe C.", "Andrew M.", "Isabella P.", "Joshua N.", "Ruwan D.", "Samantha W.", "Kevin O."
];

const feedbacksData = [];
for (let i = 0; i < 30; i++) {
    const name = names[i % names.length];
    const country = countries[i % countries.length];
    const initial = name.charAt(0);
    const adjective = adjectives[i % adjectives.length];
    const noun = nouns[i % nouns.length];
    
    const reviewTemplates = [
        `"Sadeep is an ${adjective.toLowerCase()} ${noun}. He completely transformed our digital presence."`,
        `"Working with Sadeep was a breeze. Highly recommend his development services to anyone looking for premium quality."`,
        `"The attention to detail in the UI is just ${adjective.toLowerCase()}. Our conversion rates doubled after the redesign."`,
        `"Very responsive, professional, and delivered exactly what we asked for. Best developer from ${country} I've worked with!"`,
        `"Beyond expectations! The site is incredibly fast and looks stunning. True ${noun}."`
    ];
    
    const body = reviewTemplates[i % reviewTemplates.length];
    feedbacksData.push({ name, initial, country, body });
}

const createCardHTML = (data) => `
    <div class="feedback-card">
        <div class="feedback-header">
            <div class="feedback-avatar">${data.initial}</div>
            <div class="feedback-info">
                <h4>${data.name}</h4>
                <span>Client - ${data.country}</span>
            </div>
        </div>
        <div class="stars" style="color: #fbbf24; margin-top: 0.5rem; display: flex;">
            <i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i>
        </div>
        <div class="feedback-body">${data.body}</div>
    </div>
`;

const track1 = document.getElementById('feedback-track');
if(track1) {
    let html = feedbacksData.map(createCardHTML).join('');
    html += html; 
    track1.innerHTML = html;
}
