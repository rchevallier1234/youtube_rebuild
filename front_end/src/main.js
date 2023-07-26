const article = document.querySelectorAll("article");

console.log(article);
for(var i = 0; article[i] != null; i++) {
    article[i].addEventListener("click", () => {
        console.log("test");
        window.location.replace(`http://${window.location.host}/watch`);
    });
}

const home = document.getElementById("home_button");
home.addEventListener("click", () => {
    window.location.replace(`http://${window.location.host}/`);
});

const create_video = document.getElementById("create_video");
create_video.addEventListener("click", () => {
    window.location.replace(`http://${window.location.host}/studio`);
})