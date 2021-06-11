/* FORMS */


function processEmail() {
    var temp = location.search.substring(1).split("=");
      email = unescape(temp[1]);
      document.getElementById(temp[0]).value = email;
}

function processName() {
    var temp = location.search.substring(1).split("=");
    customername = unescape(temp[1]).replace("+", " ");
    document.getElementById(temp[0]).value = customername;
}

function buttonReady() {
    document.getElementById('colour-button').style.display='block';
    document.getElementById('grey-button').style.display='none';
}

function buttonDisactivate() {
    document.getElementById('grey-button').style.display='block';
    document.getElementById('colour-button').style.display='none';
}

/* PRODUCT PAGE */

function revealdetails() {
    document.getElementById('product-details').style.display='block';
    document.getElementById('blurb').style.display='none';

    document.getElementById('hiddendescription').style.display='block';
    document.getElementById('description').style.display='none';
    document.getElementById('hiddendetails').style.display='block';
    document.getElementById('details').style.display='none';
}

function revealdescription() {
    document.getElementById('blurb').style.display='block';
    document.getElementById('product-details').style.display='none';

    document.getElementById('details').style.display='block';
    document.getElementById('hiddendetails').style.display='none';
    document.getElementById('description').style.display='block';
    document.getElementById('hiddendescription').style.display='none';
}

function productpopup() {
    document.getElementById('productpopup').style.display='block';
}


/* SHIPPING */

function revealShipping() {
    document.getElementById('delivery-ship').style.display='block';
    document.getElementById('delivery-pickup').style.display='none';
}

function revealPickup() {
    document.getElementById('delivery-pickup').style.display='block';
    document.getElementById('delivery-ship').style.display='none';
}