
const dataArr = [];


function insertData() {
    let vrol = document.getElementById("roll").value;
    let vname = document.getElementById("name").value;
    let vcity = document.getElementById("city").value;

    if (vrol === "") {
        document.getElementById('rolerror').innerHTML = "**Please Enter Roll No."
        document.getElementById('roll').focus();     
    } else if (vname === "") {
        document.getElementById('nameerror').innerHTML = "**Please Enter Name"
        document.getElementById('name').focus();
    } else if (vcity === "") {
        document.getElementById('cityerror').innerHTML = "**Please Enter City"
        document.getElementById('city').focus();   
    }
    else {
        const dataObj = { id: 0, stdRoll: "", stdName: "", stdCity: "" };
        dataObj.id = dataArr.length + 1;
        dataObj.stdRoll = document.getElementById("roll").value;
        dataObj.stdName = document.getElementById("name").value;
        dataObj.stdCity = document.getElementById("city").value;

        dataArr.push(dataObj);

        displayData();
        clearField();
    }
}

function clearField() {
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("city").value = "";

    document.getElementById("rolerror").innerHTML = "";
    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("cityerror").innerHTML = "";
}


function displayData() {
    let table = "";
    for (var i = 0; i < dataArr.length; i++) {
        table += "<tr>";
        table += "<td>" + dataArr[i].stdRoll + "</td>";
        table += "<td>" + dataArr[i].stdName + "</td>";
        table += "<td>" + dataArr[i].stdCity + "</td>";
        table += "<td>" + `<button class="btn btn-primary" onclick="editData(${dataArr[i].id})">Edit</button>` + "</td>";
        table += "<td>" + `<button class="btn btn-danger" onclick="deleteData(${dataArr[i].id})">Delete</button>` + "</td>";
        table += "</tr>";
    }
    document.getElementById("tableData").innerHTML = table;
}

function editData(id) {
    for (let tableRecord of dataArr) {
        if (tableRecord.id === id) {
            document.getElementById("roll").value = tableRecord.stdRoll;
            document.getElementById("name").value = tableRecord.stdName;
            document.getElementById("city").value = tableRecord.stdCity;

            document.getElementById('btnEdit').removeAttribute('style');
            document.getElementById('btnEdit').setAttribute('value', tableRecord.id);
            document.getElementById('btnInsert').setAttribute('style', 'display:none');
        }
    }
}


function updateData() {
    const dataObj = {};
    dataObj.id = parseInt(document.getElementById('btnEdit').getAttribute('value'));
    dataObj.stdRoll = document.getElementById("roll").value;
    dataObj.stdName = document.getElementById("name").value;
    dataObj.stdCity = document.getElementById("city").value;

    for (let p of dataArr) {
        if (p.id === dataObj.id) {
            let index = dataArr.indexOf(p);
            dataArr[index] = dataObj;
            break;
        }
    }

    displayData();
    document.getElementById('btnEdit').setAttribute('style', 'display:none');
    document.getElementById('btnInsert').removeAttribute('style');
    clearField();
}


function deleteData(id) {
    for (let p of dataArr) {
        if (p.id == id) {
            let index = dataArr.indexOf(p);
            dataArr.splice(index, 1);
            break;
        }
    }
    displayData();
}

function validation() {
    let vrol = document.getElementById("roll").value;
    let vname = document.getElementById("name").value;
    let vcity = document.getElementById("city").value;

    if (vrol === "" || vname === "" || vcity === "") {
        alert("Please Fill All Field");
    }
}

