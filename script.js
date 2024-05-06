    function w3_open() {
        var sidebar = document.getElementById("mySidebar");
        if (sidebar.classList.contains("d-none")) {
            sidebar.classList.remove("d-none");
            if (window.innerWidth <= 768) {
            sidebar.classList.add("w-100");
        }else{
            sidebar.classList.remove("w-100"); 
        }
        } else {
            sidebar.classList.add("d-none");
        }
    }
const tabsContainer = document.getElementById("tabs-container");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const tabs = document.querySelectorAll(".tab");

let currentTab = 0;

// Set initial state of arrows
updateArrowVisibility();

leftArrow.addEventListener("click", goToPreviousTab);
rightArrow.addEventListener("click", goToNextTab);

    // Function to navigate to the previous tab
    function goToPreviousTab() {
        if (currentTab > 0) {
            tabs[currentTab].classList.remove("active-tab");
            currentTab--;
            tabs[currentTab].classList.add("active-tab");
            scrollToCurrentTab();
        }
        updateArrowVisibility();
    }


    // Function to navigate to the next tab
    function goToNextTab() {
        if (currentTab < tabs.length - 1) {
            tabs[currentTab].classList.remove("active-tab");
            currentTab++;
            tabs[currentTab].classList.add("active-tab");
            scrollToCurrentTab();
        }
        updateArrowVisibility();
    }

    // Function to scroll to the current tab
    function scrollToCurrentTab() {
    tabs[currentTab].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
    });
    }

    // Function to update visibility of arrows based on current tab
    function updateArrowVisibility() {
    leftArrow.style.display = currentTab === 0 ? "none" : "block";
    rightArrow.style.display =
        currentTab === tabs.length - 1 ? "none" : "block";
    }
