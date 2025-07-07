// Resume data
const resumeData = {
    skills: [
        "JavaScript", "TypeScript", "React.js", "React Native", "Redux.js", 
        "React Hooks", "Next.js", "Node.js", "Express.js", "NestJS", 
        "PHP", "MySQL", "MongoDB", "PostgreSQL", "Redis", "AWS", 
        "AWS Lambda", "Docker", "REST APIs", "Microservices", "Socket.io", 
        "Unit Testing", "Git", "Webpack", "JSON", "CSS/SCSS", "HTML",
        "AI Tools", "Vibe Coding"
    ],
    experience: [
        {
            id: "1",
            company: "NetoMedia",
            hiddenCompany: "",
            industry: "Online Gambling",
            position: "Full Stack Developer",
            startDate: "2023-07",
            endDate: "present",
            duration: "2 years",
            description: [
                "Acquired experience in ReactJS (Redux), Node.js (express) and Angular",
                "Developed Google Cloud Functions",
                "Worked with CSS/SCSS and Styled Components",
                "Acquired experience using MySQL (sequelize, migrations, design, stored procedures), Redis and Big Query",
                "Implemented socket connection",
                "Designed features",
                "Developed unit-tests (avg coverage 95%)",
                "Delivered knowledge-sharing sessions, enhancing team skills and code standards",
                "Completed a cybersecurity training course from KnowBe4",
                "Utilized AI technologies to enhance development efficiency and code quality"
            ]
        },
        {
            id: "2",
            company: "Sidelines",
            hiddenCompany: "",
            industry: "Advertising Platform",
            position: "Back End Developer",
            startDate: "2022-05",
            endDate: "2023-04",
            duration: "1 year",
            description: [
                "Acquired experience in Node.js, MongoDB/MySQL, Redis/Memory Cache, AWS",
                "Developed applications based on microservice architecture",
                "Covered project with unit tests up to 70%",
                "Designed new features",
                "Optimized display/search advertising expenses and performance by sending conversion requests back to Google Ads Manager and Facebook advertising platform",
                "Familiarity with Firebase, AppsFlyer and Logz.io services",
                "Contributed to the development of an automated system for A/B testing",
                "Participated in hackathon developing AI-powered ad automation system for Facebook"
            ]
        },
        {
            id: "3",
            company: "Tanndu",
            hiddenCompany: "",
            industry: "E-Commerce",
            position: "Full Stack Developer",
            startDate: "2021-05",
            endDate: "2022-04",
            duration: "1 year",
            description: [
                "Acquired experience in ReactJS (Redux, MobX), ReactNative, PHP, MySQL",
                "Experience with external APIs",
                "Integrated PayPal and authorization with Apple/Google/Facebook",
                "Deployed projects on AWS",
                "Managed small team of full-stack developers",
                "Was involved in the hiring process for developer positions and interviewed candidates"
            ]
        },
        {
            id: "4",
            company: "BOOKIE iGaming",
            hiddenCompany: "",
            industry: "Online Gambling",
            position: "Full Stack Developer",
            startDate: "2017-04",
            endDate: "2021-04",
            duration: "4 years",
            description: [
                "Developed strong skills in React JS, Backbone.js, Node.js (TypeScript) and PHP",
                "Migrated the project from gulp + RequireJS to Webpack (ES6)",
                "Gained extensive experience with MySQL (optimizing queries, indexes, big query)",
                "Integrated payment plugins such as PayPal, Skrill, ecoPayz, Neteller, Paysafe Card, Payeer, Jeton, Astro Pay",
                "Integrated games from providers such as Netent, Playtech, Play'n Go, Quick Spin, Playson, Yggdrasil"
            ]
        }
    ]
};

let companiesRevealed = false;

// Populate skills
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    resumeData.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsGrid.appendChild(skillItem);
    });
}

// Populate experience
function populateExperience() {
    const experienceContainer = document.getElementById('experienceContainer');
    resumeData.experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';
        // Format dates
        const startDate = formatDate(exp.startDate);
        const endDate = exp.endDate === 'present' ? 'Present' : formatDate(exp.endDate);
        expItem.innerHTML = `
            <div class="experience-header">
                <div>
                    <div class="position">${exp.position}</div>
                    <div class="industry">${exp.industry}</div>
                    <div class="period">${startDate} - ${endDate} (${exp.duration})</div>
                </div>
                <div>
                </div>
            </div>
            <div class="description">
                <ul>
                    ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
        `;
        experienceContainer.appendChild(expItem);
    });
}

// Format date from YYYY-MM to Month YYYY
function formatDate(dateString) {
    if (!dateString) return '';
    const [year, month] = dateString.split('-');
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    populateSkills();
    populateExperience();
    // Add animation delay to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add some interactive hover effects
document.addEventListener('mousemove', function(e) {
    const header = document.querySelector('.header');
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const moveX = (x / rect.width - 0.5) * 20;
        const moveY = (y / rect.height - 0.5) * 20;
        header.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
        header.style.transform = 'translate(0, 0)';
    }
}); 