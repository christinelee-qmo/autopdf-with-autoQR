$("#surl").on("blur", function () {
    makeCode();
    var aa = $('#surl').val();
    var bb = $('#name').val();
    if (aa != '' && bb !='' ) {
        $('#button').removeClass('hide')
    }
    else if(aa == '' || bb =='') {
        $('#button').addClass('hide')
    }

}).on("keydown", function (e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});

$("#name").on("blur", function () {
    var aa = $('#surl').val();
    var bb = $('#name').val();
    if (aa != '' && bb !='' ) {
        $('#button').removeClass('hide')
    }
    else if(aa == '' || bb =='') {
        $('#button').addClass('hide')
    }

});



$(function () {
    setTimeout(function () {
        var biz = $('#qrcode img').attr('src');
    }, 2000);
});



var charcount = function (str) {
    len = 0;
    str = escape(str);
    for (i=0;i<str.length;i++,len++) {
        if (str.charAt(i) == "%") {
            if (str.charAt(++i) == "u") {
                i += 3;
                len++;
            }
            i++;
        }
    }
    return len;
}

$("#button").bind("click",pdfdownload);
