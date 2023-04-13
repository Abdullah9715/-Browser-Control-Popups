function result(ab) {
    return document.getElementById("output").innerHTML = ab
}


const whereWeAt = () => {
    result(window.location.href);
    console.log(window.location.href)
}

const goToGoogle = () => {
    window.location.href = "https://www.google.com/"
}

const replace = () => {
    window.location.replace("https://www.google.com/")
}
const openPopup = () => {
    popupWindow = window.open("", 'myWindow', 'width=100%', 'height=500px')
}
const fillPopup = () => {
    popupWindow = window.open("", 'myWindow', 'width=100%', 'height=500px')
    popupWindow.document.write("<h1 style='text-align:center;padding-top:40px;'>Mufti Sb is Here</h1>")
}

const assignURL = () => {
    popupWindow = window.open("", 'myWindow', 'width=100%', 'height=500px')
    popupWindow.location.assign("https://quran.com/en")

}

const closePopup = () => {
    popupWindow.close()
        // popupWindow.document.write("<hh1>Mufti Sb is Here</h1>")
}

const alert = () => {
        try {
            alert("this is an error")
        } catch (error) {
            present("this is wrong")
            console.log(error)
        }
    }
    // tostify function
function present(msg) {
    Toastify({
        text: msg,
        duration: 2000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to left, white,black)",
        },
        onClick: function() {} // Callback after click
    }).showToast();
}





//Clear Output Field 
document.getElementById("clearoutput").onclick = function() {
    document.getElementById("output").innerHTML = "";

}