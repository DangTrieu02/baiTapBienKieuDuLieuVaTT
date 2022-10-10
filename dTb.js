

    ipvatly = prompt("điểm vật lý");
    iphoahoc = prompt("điểm hóa học");
    ipsinhhoc = prompt("điểm sinh học");

    let vatly = parseInt(ipvatly);
    let hoahoc = parseInt(iphoahoc);
    let sinhhoc = parseInt(ipsinhhoc);
    let diemtb = (vatly + hoahoc + sinhhoc) / 3;
    document.write("điểm trung bình =" + diemtb);


