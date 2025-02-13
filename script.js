    function copyText() {
      // Get the text to be copied
      const text = "roaringdata289@gmail.com";
      
      // Create a temporary text area element to copy the text
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      
      // Select and copy the text
      textArea.select();
      document.execCommand('copy');
      
      // Remove the temporary text area
      document.body.removeChild(textArea);
      
      // Alert user that text is copied
      alert("Text copied to clipboard!");
    }
    let expanded = false; // Track whether text is expanded

    
    function toggleText() {
        let textElement = document.getElementById("text");
        let button = document.querySelector("button");
    
        if (!expanded) {
            textElement.innerHTML = "Hi my name is Abdulqodir Ibrohimov. I'm 15 years old (2010). I am from Uzbekistan. Currently I am studying in turkey, in Qudus Internationalschool. I am studying to become a programmer , I know HTML,CSS,JavaScript and Python Programming lengauages.Currently I am learning Kotlin Programming lengauage. I started learning Programming at age 13 , and I am learning it for 2 years . I am learning Programming from YouTube videos. I am going to become a programmer!";
            button.innerHTML = "Show Less";
        } else {
            textElement.innerHTML = "Hi my name is Abdulqodir Ibrohimov. I'm 15 years old (2010). I am from Uzbekistan. Currently I am studying in turkey, in Qudus Internationalschool. I am studying to become a programmer , I know HTML,CSS,JavaScript and Python Programming lengauages.Currently I am learning Kotlin Programming lengauage. I started learning Programming at age 13 , and I am learning it for 2 years . I am learning Programming from YouTube videos.";
            button.innerHTML = "Show More";
        }
        expanded = !expanded; // Toggle state
    }