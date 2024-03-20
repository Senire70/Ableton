let body = document.querySelector("body");
let logo = document.querySelector(".major-image_container");
let videoContainer = document.querySelector(".two-section .two")
let video = document.querySelector(".video");

let addLogo = () => {
    let myH1 = document.createElement("h1");
    myH1.textContent = "Ableton";
    logo.appendChild(myH1);
};

let loadVideo = () => {
    let myVideo = document.createElement("div");
    myVideo.innerHTML = `<iframe width="666" height="375" src="https://www.youtube.com/embed/9SbnhgjeyXA" title="Why Ableton - Juanpe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    videoContainer.replaceChild(myVideo, video)
};

video.addEventListener("click", loadVideo);
document.addEventListener("DOMContentLoaded", addLogo);
