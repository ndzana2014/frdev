
   const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      
      const prenom = document.getElementById("prenom").value;
      const nom = document.getElementById("nom").value;
      const message = document.getElementById("message").value;

    
      alert("Merci " + prenom + " " + nom + " !\nVotre message : " + message);

    
      form.reset();
    });
