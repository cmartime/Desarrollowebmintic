function traerDatos(){
    $.ajax({
        url: "https://g2a0a4bd9b70d8d-dvkxvm686nlzjhrc.adb.mx-queretaro-1.oraclecloudapps.com/ords/admin/gym/gym"
        type: "GET"
        dataType: "json"
        success: function(respuesta){
            mostrarDatos(respuesta.items)
        }
    })
}
function mostrarDatos(items){
    let tabla = "<table>";
    for(let i=0; i<items.length; i++){
        tabla += "<tr>";
        tabla += "<td>" + items[i].id; + "</td>";
        tabla += "<td>" + items[i].brand; + "</td>";
        tabla += "<td>" + items[i].model; + "</td>";
        tabla += "<td>" + items[i].category_id; + "</td>";
        tabla += "<td>" + items[i].name; + "</td>";
        tabla += "</tr>";

    }
    tabla += "</table>";
    $("#resultado").append(tabla);
}

    

