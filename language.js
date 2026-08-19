function setLanguage(language) {

    localStorage.setItem("language", language);

    applyLanguage(language);
}


function applyLanguage(language) {

    const elements =
        document.querySelectorAll("[data-en][data-si]");

    elements.forEach(function(element) {

        if (language === "si") {

            element.innerHTML =
                element.getAttribute("data-si");

        } else {

            element.innerHTML =
                element.getAttribute("data-en");

        }

    });


    const englishBtn =
        document.getElementById("englishBtn");

    const sinhalaBtn =
        document.getElementById("sinhalaBtn");


    if (englishBtn && sinhalaBtn) {

        if (language === "si") {

            sinhalaBtn.classList.add("active");
            englishBtn.classList.remove("active");

        } else {

            englishBtn.classList.add("active");
            sinhalaBtn.classList.remove("active");

        }

    }
}


document.addEventListener("DOMContentLoaded", function() {

    const language =
        localStorage.getItem("language") || "en";

    applyLanguage(language);

});
