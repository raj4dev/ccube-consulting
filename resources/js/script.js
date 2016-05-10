/*Get today's date and display it.*/
var time = new Date();
var datestring = new Date().toLocaleDateString('en-GB', {  
    day : 'numeric',
    month : 'short',
    year : 'numeric'
}).split(' ').join('/');

document.getElementById('clock').innerHTML = datestring;


/*Show Company name when services offered button is clicked. Then, hide it
when the button is clicked again.*/
var servicesOfferedBtn = document.getElementById('services-offered');

servicesOfferedBtn.onclick = function() {
    var companyName = document.querySelector("#company-name");
    companyName.classList.toggle("hidden");
}

