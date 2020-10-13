const lightbox = document.querySelector(".lightbox");

//close lightbox

const closeLightboxBtn = document.querySelector(".window__btn");
closeLightboxBtn.addEventListener("click", ()=> {
    lightbox.classList.remove("lightbox--is-visible");
})

//open lightbox
const openLightboxBtn = document.querySelector(".join-us__btn");
openLightboxBtn.addEventListener("click", () => {
    lightbox.classList.add("lightbox--is-visible");
})

//make the last job offer clickable
const listOfJobsWindow = document.querySelector(".window");
const listOfJobs = document.querySelector(".window__list");
listOfJobs.addEventListener("scroll", () => {
    if((listOfJobs.scrollHeight - listOfJobs.scrollTop - listOfJobs.clientHeight <= 10) && !listOfJobsWindow.classList.contains("window--hide-bottom-filter")) {
        listOfJobsWindow.classList.add("window--hide-bottom-filter");
    } else if((listOfJobs.scrollHeight - listOfJobs.scrollTop - listOfJobs.clientHeight > 10) &&listOfJobsWindow.classList.contains("window--hide-bottom-filter")) {
        listOfJobsWindow.classList.remove("window--hide-bottom-filter");
    }
})