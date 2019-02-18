function pdfdownload() {
    var doc = new jsPDF();
    var biz2 = $('#qrcode img').attr('src');
    doc.addImage(imgData, 'JPEG', 0, 0, 210, 297);
    doc.addImage(biz2, 'PNG', 153.695, 259.395, 17.159, 17.159);
    var name = $('#name').val();
    var title = name + " 従業員様限定";
    var surl = $('#surl').val();
    

    doc.addFileToVFS("Koharuiro.ttf", Koharuiro);
    doc.addFont('Koharuiro.ttf', 'Koharuiro', 'Regular');
    doc.setFont('Koharuiro', 'Regular');
    doc.setTextColor(255, 255, 255);
    var titlelength = charcount(name);
    if( titlelength <= 26){
        doc.setFontSize(29);
        doc.text(title, 105, 12.789, null, null, 'center');
    }
    else if( titlelength > 26){
        doc.setFontSize(22);
        doc.text(title, 105, 11.789, null, null, 'center');
    }
    

    doc.setFontSize(21);
    doc.setTextColor(0, 0, 0);
    doc.text(name, 105, 254.014, null, null, 'center');
    doc.addFileToVFS("AndaleMono.ttf", AndaleMono);
    doc.addFont('AndaleMono.ttf', 'AndaleMono', 'Regular');
    doc.setFont('AndaleMono', 'Regular'); 
    doc.setFontSize(16);
    doc.text(surl, 77.66, 273.802, null, null, 'center');
    doc.save(name);
}