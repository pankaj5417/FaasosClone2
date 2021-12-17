

//footer
import { foot } from "./footer.js";
document.getElementById("big5").innerHTML = foot;

//Nav_bar


import { nav, sid } from "./navbar.js";
document.getElementById("navbar2").innerHTML = sid;
document.getElementById("navbar").innerHTML = nav;


//ham
document.getElementById("ham").onclick = () => {
    document.getElementById("navbar2").style.width = "370px";
}
document.getElementById("closeBtn").onclick = () => {
    document.getElementById("navbar2").style.width = "0px";
}
document.getElementById("about").onclick = () => {
    window.location.href = "../html/aboutus.html";
}
document.getElementById("help").onclick = () => {
    window.location.href = "../html/help_n_support.html";
}
document.getElementById("profile").onclick = () => {
    window.location.href = "../html/profile/profile.html";
}
document.getElementById("orders").onclick = () => {
    window.location.href = "../html/profile/orders.html";
}
document.getElementById("addr").onclick = () => {
    window.location.href = "../html/profile/adress.html";
}
document.getElementById("pay").onclick = () => {
    window.location.href = "../html/profile/payments.html";
}