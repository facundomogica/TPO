function FechaAnterior() {
    document.getElementById("Numero_Fecha").innerHTML="Fecha 15";
    var table_15=document.getElementById("Fecha_15");
    var table_16=document.getElementById("Fecha_16");
    var table_17=document.getElementById("Fecha_17");
    for (var i = 1, row; row = table_16.rows[i]; i++) {
     for (var j = 1, col; col = row.cells[j]; j++) {
       col.innerHTML = table_15.rows[i].cells[j].innerHTML;   
     }} 
  var titulo=document.getElementById("Numero_Fecha").innerHTML="Fecha 15";
}
function FechaSiguiente() {
    var Numero_Fecha = document.getElementById("Numero_Fecha").innerHTML
    Numero_Fecha= parseFloat(Numero_Fecha.replace(/[^0-9.]/g, ""))
    var table_17=document.getElementById("Fecha_17");
    var table_16=document.getElementById("Fecha_16");
    var table_15=document.getElementById("Fecha_15");
    if (Numero_Fecha==15){
        for (var i = 1, row; row = table_16.rows[i]; i++) {
            for (var j = 1, col; col = row.cells[j]; j++) {
              col.innerHTML = table_16.rows[i].cells[j].innerHTML;   
            }} 
        }
  if (Numero_Fecha==16) {
    for (var i = 1, row; row = table_16.rows[i]; i++) {
     for (var j = 1, col; col = row.cells[j]; j++) {
       col.innerHTML = table_17.rows[i].cells[j].innerHTML;   
     }  
  }
  } else {
    for (var i = 1, row; row = table_17.rows[i]; i++) {
     for (var j = 1, col; col = row.cells[j]; j++) {
       col.innerHTML = "No disponible";   
     }  
  }
  }
  Numero_Fecha=Numero_Fecha+1;
  var titulo=document.getElementById("Numero_Fecha").innerHTML="Fecha "+Numero_Fecha;
}