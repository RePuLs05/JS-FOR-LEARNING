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
      techDiv.classList.add('flex', 'space-x-2', 'mb-2');
      techDiv.innerHTML = `
          <input type="text" name="technology${techCounter}" placeholder="Technology *" class="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400" required>
          <input type="text" name="experience${techCounter}" placeholder="Experience (years) *" class="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400" required>
          <button type="button" class="remove-tech bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">Remove</button>
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