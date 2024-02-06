let dark_mode = true;

function toggleFormat(){
    dark_mode = !dark_mode;
    button = document.querySelector('.mode button a');
    console.log("Dark mode:", dark_mode);
    console.log(document.querySelector("#about").classList)
    if (dark_mode) {
        button.innerHTML = 'Light Mode';
        console.log("Dark mode");
        document.querySelector("#about").classList.replace("about", "about-light");
        document.querySelector(".about-text").classList.replace("about-text", "about-text-light");
        document.querySelector("#education").classList.replace("edu", "edu-light");
        document.querySelector(".edu-text").classList.replace("edu-text", "edu-text-light");
        document.querySelector("#skills").classList.replace("skills", "skills-light");
        document.querySelector(".skills-text").classList.replace("skills-text", "skills-text-light");
        document.querySelector("#contact").classList.replace("contact", "contact-light");
        document.querySelector(".contact-text").classList.replace("contact-text", "contact-text-light");
    } 
    else {
        button.innerHTML = 'Dark Mode';
        console.log("Light mode");
        document.querySelector("#about").classList.replace("about-light", "about");
        document.querySelector(".about-text-light").classList.replace("about-text-light", "about-text");
        document.querySelector("#education").classList.replace("edu-light", "edu");
        document.querySelector(".edu-text-light").classList.replace("edu-text-light", "edu-text");
        document.querySelector("#skills").classList.replace("skills-light", "skills");
        document.querySelector(".skills-text-light").classList.replace("skills-text-light", "skills-text");
        document.querySelector("#contact").classList.replace("contact-light", "contact");
        document.querySelector(".contact-text-light").classList.replace("contact-text-light", "contact-text");
    }
}

toggleFormat();
