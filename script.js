document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("loader").className = "loaderhidden";
    }, 2000);
});

// resume button that go to local document
document.getElementById("resume").addEventListener("click", function () {
    window.open("/Resume/Ahmed Mustafa-CV.pdf")
});

