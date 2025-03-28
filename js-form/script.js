document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('studentForm');
  const techSection = document.getElementById('techSection');
  const addTechBtn = document.getElementById('addTechBtn');
  let techCounter = 0;

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
      alert('Form submitted successfully!');
  });
});
