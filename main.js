let selectedRow = null


function onFormSubmit(e) {
   event.preventDefault();
   let formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
        
    }
    else  {
        updateRecord(formData);
        
    }
    resetForm();
}

//Retrieve the data
/*
function readFormData() {
    let formData = {};
    formData["actividad"] = document.getElementById("actividad").value;
    formData["descripcion"] = document.getElementById("descripcion").value;
    formData["time"] = document.getElementById("time").value;
    return formData;
}
*/

function readFormData () {
    let formData ={
        actividad : document.getElementById("actividad").value,
        descripcion : document.getElementById("descripcion").value,
        time : document.getElementById("time").value,
    }
    
    return formData;
    
}


 

//Insert the data
function insertNewRecord(data) {
    let table = document.getElementById('tbody');
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerText = data.actividad;
    cell2 = newRow.insertCell(1);
    cell2.innerText = data.descripcion;
    cell3 = newRow.insertCell(2);
    cell3.innerText = data.time;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<button onClick="onEdit(this)">Editar</button> <button onClick="onDelete(this)">Borrar</button>`;
    localStorage.setItem("savedLocal", JSON.stringify(data));

}

// retrieve from localStorage --- esto funciona en console log, aplicarla al documento. 

function retrieveLocal () {
    if (localStorage.getItem("savedLocal")){
        let data = JSON.parse(localStorage.getItem("savedLocal"))
        return data;
    }
   
} 
retrieveLocal ()

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("actividad").value = selectedRow.cells[0].innerHTML;
    document.getElementById("descripcion").value = selectedRow.cells[1].innerHTML;
    document.getElementById("time").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.actividad;
    selectedRow.cells[1].innerHTML = formData.descripcion;
    selectedRow.cells[2].innerHTML = formData.time;
    
}



//Delete the data
function onDelete(td) {
    if (confirm('¿Borrar esta actividad?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("actividad").value = '';
    document.getElementById("descripcion").value = '';
    document.getElementById("time").value = '';
    selectedRow = null;
}



//Print the data here...


