const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

setInterval(function(){
    var time = new Date()

    hours.textContent = time.getHours();
    minutes.textContent = time.getMinutes();
    seconds.textContent = time.getSeconds();
});

