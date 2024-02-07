let texto = document.getElementById("texto-usuario");
let nuevoTexto = "";
document.getElementById("resultado").style.display = "none";

function encriptar() {

    let txt = texto.value

    //Recorrer el texto
    for (let index = 0; index < txt.length; index++) {

        //Guarda lo que contiene el texto en el indice en que se encuentre
        let letra = txt.charAt(index);

        //De acuerdo a la letra que sea se cambia
        switch (letra) {
            case "a":
                nuevoTexto += "ai";
                break;
            case "e":
                nuevoTexto += "enter";
                break;
            case "i":
                nuevoTexto += "imes";
                break;
            case "o":
                nuevoTexto += "ober";
                break;
            case "u":
                nuevoTexto += "ufat";
                break;

            default:
                nuevoTexto += letra;
                break;
        }
    }

    //Deja de mostrar la imagen de busqueda
    document.getElementById("busqueda").style.display = "none";

    //Muestro el texto encriptado en donde estaba la imagen inicialmente
    document.getElementById("resultado").style.display = "inline-block";
    document.getElementById("texto-resultado").value = nuevoTexto;

    //Reinicio la variable nuevoTexto para que no se guarden los anteriores
    nuevoTexto = "";

}

function desencriptar() {

    let txt = texto.value

    //Recorrer el texto
    for (let index = 0; index < txt.length; index++) {

        //Guarda lo que contiene el texto en el indice en que se encuentre
        let letra = txt.charAt(index);
        
        //De acuerdo a la letra que sea se suma el indice para que salte las letras que siguen y estan de sobra
        switch (letra) {
            case "a":
                index++;
                break;
            case "e":
                index += 4;
                break;
            case "i":
                index += 3;
                break;
            case "o":
                index += 3;
                break;
            case "u":
                index += 3;
                break;

            default:                
                break;
        }
        nuevoTexto += letra;
    }

    //Deja de mostrar la imagen de busqueda
    document.getElementById("busqueda").style.display = "none";

    //Muestro el texto encriptado en donde estaba la imagen inicialmente
    document.getElementById("resultado").style.display = "inline-block";
    document.getElementById("texto-resultado").value = nuevoTexto;

    //Reinicio la variable nuevoTexto para que no se guarden los anteriores
    nuevoTexto = "";

}

function copiar() {

       

}