const button=document.querySelector('.button');
button.addEventListener('click',function(){
        const inputElement = document.querySelector('.input');
        let inputValue = inputElement.value.trim();
        const errorMessage = document.getElementsByClassName("errorMessage")[0];
        if (inputValue === ""){
        // if (inputElement && ["Paritosh Mahata", "Rahul Gorain", "Swadesh Pattanaik", "Manas Barik", "Hruada", "Shiv Prasad Parida", "Shubham Drupal", "Sangram Majhi"].includes(inputElement.value)) {
        //     alert(' "A best friend like you is a rare kind of magic-part chaos,part comfort,all heart.Grateful every day for the laughs,the rants,and the ride-or-die loyelty.Thank you for being you!"');
        // }
        
            inputElement.classList.add("shake");
           
            errorMessage.style.visibility = "visible";
            
            setTimeout(function(){
                inputElement.classList.remove("shake");
                
                    errorMessage.style.visibility = "hidden";
            
            },5000);
            
        }
        else{
            alert("valid input")
        }
    });