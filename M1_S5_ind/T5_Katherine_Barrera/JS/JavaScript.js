/*Agregar Nombre*/
function agregaElemento() {
     let li = document.createElement("li");
     li.setAttribute('onclick', 'eliminaItem(this);')
     let casilla = document.getElementById("nombre");
     let texto = casilla.value;
     console.log(texto);
     li.textContent = texto;
     document.getElementById("lista").appendChild(li);
     casilla.value = "";
    }

/*Eliminar nombres*/
    function eliminaItem(item) {
      item.parentNode.removeChild(item);
    }