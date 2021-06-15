let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let mahasiswa = JSON.parse(xhr.responseText);
        let mahasiswaa = JSON.stringify(xhr.responseText);
        console.log(mahasiswa);
        //document.getElementById("content").innerHTML = mahasiswaa;
        xhr.open('GET', 'update.json', true);
        xhr.send();
    }
};