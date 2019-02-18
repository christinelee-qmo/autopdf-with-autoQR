var qrcode = new QRCode("qrcode", {
    width: 120,
    height: 120,
});

function makeCode() {
    var elText = document.getElementById("surl");
    qrcode.makeCode(elText.value);
}

makeCode();