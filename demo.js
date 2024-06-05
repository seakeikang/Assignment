var id = 1;
var selectName  = "";
var selectPhone = "";
var selectEmail = "";
function save_btn(){
    if(document.getElementById("save_btn").textContent === "Update"){
        var update_name  = document.querySelector(`td[data-name="${selectName}"`);
        update_name.textContent = document.getElementById("name").value;
        var update_phone = document.querySelector(`td[data-phone="${selectPhone}"`);
        update_phone.textContent = document.getElementById("phone-number").value;
        var update_email = document.querySelector(`td[data-email="${selectEmail}"`);
        update_email.textContent = document.getElementById("email").value;
        document.getElementById("save_btn").textContent = "Save";
        document.getElementById("name").value = "";
        document.getElementById("phone-number").value = "";
        document.getElementById("email").value = "";
    }else{
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone-number").value;
        var email = document.getElementById("email").value;
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        if(name === "" || phone === "" || email === ""){
            alert("You're not Input the Fill");
        }else{
            var tr = document.createElement('tr');
            var th = document.createElement('th');
            tr.appendChild(th);
            th.textContent = id;
            var td_name = document.createElement('td');
            tr.appendChild(td_name);
            td_name.textContent = name;
            td_name.dataset.name = name;
            var td_phone = document.createElement('td');
            tr.appendChild(td_phone);
            td_phone.textContent = phone;
            td_phone.dataset.phone = phone;
            var td_email = document.createElement('td');
            tr.appendChild(td_email);
            td_email.textContent = email;
            td_email.dataset.email = email;
            var td_date = document.createElement('td');
            tr.appendChild(td_date);
            td_date.textContent = day+"/"+month+"/"+year+" "+hour+":"+minutes;
            var td_button = document.createElement('td');
            tr.appendChild(td_button);
            var td_update = document.createElement('td');
            td_button.appendChild(td_update);
            td_update.innerHTML = '<Button class="btn-update" onclick="update(this)">Update</Button>';
            var td_delete = document.createElement('td');
            td_button.appendChild(td_delete);
            td_delete.innerHTML = '<Button class="btn-delete" onclick="deletes(this)">Delete</Button>';
            document.getElementById("tbody").appendChild(tr);
            document.getElementById("name").value = "";
            document.getElementById("phone-number").value = "";
            document.getElementById("email").value = "";
            id++;
        }
    }
}

function deletes(object){
    object.parentElement.parentElement.parentElement.remove();
    if(document.getElementById("save_btn").textContent === "Update"){
        document.getElementById("save_btn").textContent = "Save";
    }
    document.getElementById("name").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("email").value = "";
}

function update(object){
    var update_btn = document.getElementById("save_btn"); 
    update_btn.textContent = "Update";

    var td_name  = object.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    var name  = td_name.getAttribute("data-name");
    selectName = name;
    var setName  = document.querySelector(`td[data-name="${selectName}"`).textContent;
    document.getElementById("name").value = setName;
    var td_phone = object.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
    var phone = td_phone.getAttribute("data-phone");
    selectPhone = phone;
    var setPhone = document.querySelector(`td[data-phone="${selectPhone}"`).textContent;
    document.getElementById("phone-number").value = setPhone;
    var td_email = object.parentElement.parentElement.previousElementSibling.previousElementSibling;
    var email = td_email.getAttribute("data-email");
    selectEmail = email;
    var setEmail = document.querySelector(`td[data-email="${selectEmail}"`).textContent;
    document.getElementById("email").value = setEmail;
}