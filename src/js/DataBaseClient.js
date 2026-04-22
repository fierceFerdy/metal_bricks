document.addEventListener("DOMContentLoaded", function(){
    
})

<>
    // Function to show a specific form and hide others
    function showForm(formId) {
      // Get all forms
      var forms = document.querySelectorAll('.form-container');
      // Loop through forms and hide them
      forms.forEach(function(form) {
        form.style.display = 'none';
      });
      // Show the selected form
      var selectedForm = document.getElementById(formId);
      if (selectedForm) {
        selectedForm.style.display = 'block';
      }
    }
 