// TOGGLE NAVBAR
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    // console.log("hi");
    hideSection();
    toggleNavbar();
    // document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}


// ACTIVE SECTION
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        //activate the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        // console.log(hash);
        if(e.target.classList.contains("nav-item")){
            // console.log("true");
            toggleNavbar();
        }
        else{
            console.log("false");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});

// ABOUT TABS
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        // console.log(target);
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});


//PORTFOLIO ITEM DETAILS POPUP
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-btn")){
        // console.log("hi");
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);


//HIDE POPUP WHEN CLICKING OUTSIDE OF IT
document.addEventListener("click", (e) =>{
    // console.log(e.target);
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});

function portfolioItemDetails(portfolioItem){
    // console.log(portfolioItem);
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-pic img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}


