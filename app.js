var selectedRow = null;
function onFormSubmit(e) {
    event.preventDefault(); //para evitar que el formulario se envie por default al entrar
    var formData = readFormData();
    if(selectedRow === null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["pCode"] = document.getElementById("pCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["price"] = document.getElementById("price").value;
    // localStorage.setItem('formData', 'pCode')
    return formData;
}

//Insert the data de cada elemento con su respectivo boton de borrar y editar
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0]; //to call new data
    var newRow = table.insertRow(table.length); //to insert new rows
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.pCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.price;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//para editar datos
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('pCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('price').value = selectedRow.cells[3].innerHTML;
}
//establecer el valor en la tabla
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.pCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.price;
}

//Borrar informacion
function onDelete(td) {
    if(confirm('Deseas borrar este registro!?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset de informacion
function resetForm() {
    document.getElementById('pCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}