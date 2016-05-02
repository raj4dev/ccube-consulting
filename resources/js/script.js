var time = new Date();
var datestring = new Date().toLocaleDateString('en-GB', {  
    day : 'numeric',
    month : 'short',
    year : 'numeric'
}).split(' ').join('/');
document.getElementById('clock').innerHTML = datestring;
