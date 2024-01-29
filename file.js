var allInp = document.querySelectorAll("input");
console.log(allInp);
function storeData(){
    var uName = allInp[0].value;
    var uPhno = allInp[1].value;
    var uEmail = allInp[2].value;
    var add = document.querySelector("textarea").value;
    localStorage.setItem("name",uName);
    localStorage.setItem("Phno",uPhno);
    localStorage.setItem("Email",uEmail);
    localStorage.setItem("Address",add);
    open("file2.html")
}

function output(){
    var name = localStorage.getItem("name");
    var phno = localStorage.getItem("Phno");
    var email = localStorage.getItem("Email");
    var add = localStorage.getItem("Address");
    document.getElementById("name").value = name;
    document.getElementById("phno").value = phno;
    document.getElementById("email").value = email;
    document.getElementById("add").value = add;

}
function updateData(tagid){
    document.getElementById(tagid).removeAttribute("readonly");
}

function updateDataToStorage(){
    var uName = allInp[0].value;
    var uPhno = allInp[3].value;
    var uEmail = allInp[6].value;
    var uadd = document.querySelector("textarea").value;
    localStorage.setItem("name",uName);
    localStorage.setItem("Phno",uPhno);
    localStorage.setItem("Email",uEmail);
    localStorage.setItem("Address",uadd);
    location.reload();
}


function deleteData(keyOfItem){
    localStorage.removeItem(keyOfItem);
    location.reload();
}

function clearData(){
    localStorage.clear();
    location.reload();
}