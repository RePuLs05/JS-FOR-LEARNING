document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');
    const techSection = document.getElementById('techSection');
    const addTechBtn = document.getElementById('addTechBtn');
    let techCounter = 0;
    const formDataArray = [];

    document.getElementById('phone').addEventListener('input', function(e) {
        const pattern = /^\d{8,20}$/;
        e.target.setCustomValidity(pattern.test(e.target.value) ? '' : 'Please enter a valid phone number (8-20 digits)');
    });

    addTechBtn.addEventListener('click', function() {
        techCounter++;
        const techDiv = document.createElement('div');
        techDiv.classList.add('tech-input');
        techDiv.innerHTML = `
            <input type="text" name="technology${techCounter}" placeholder="Technology *" required>
            <input type="text" name="experience${techCounter}" placeholder="Experience (years) *" required>
            <button type="button" class="remove-tech">Remove</button>
        `;
        techSection.appendChild(techDiv);
        
        techDiv.querySelector('.remove-tech').addEventListener('click', function() {
            techSection.removeChild(techDiv);
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        let studentData = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            country: formData.get('country'),
            phone: formData.get('phone'),
            universityYears: formData.get('universityYears'),
            technologies: [],
            nextYearPlans: formData.get('nextYearPlans'),
            links: {
                github: formData.get('githubProfile'),
                linkedin: formData.get('linkedinProfile'),
                website: formData.get('publicWebsite'),
                cv: formData.get('cvLink')
            }
        };
        
        for (let i = 0; i <= techCounter; i++) {
            let tech = formData.get(`technology${i}`);
            let exp = formData.get(`experience${i}`);
            if (tech && exp) {
                studentData.technologies.push({ technology: tech, experience: exp });
            }
        }
        
        formDataArray.push(studentData);
        console.log(formDataArray);
        alert(`FULNAME : ${studentData.fullName}\nEMAIL : ${studentData.email}\nCOUNTRY : ${studentData.country}\nPHONE : ${studentData.phone}\nUNIVERSITY YEARS : ${studentData.universityYears}\nTECHNOLOGIES : ${JSON.stringify(studentData.technologies)}\nNEXT YEAR PLANS : ${studentData.nextYearPlans}\nLINKS : ${JSON.stringify(studentData.links)}`);
        form.reset();
    });
});
