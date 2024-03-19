/** @format */

const texto_encriptar = document.querySelector(".texto-encriptar");
const mensaje = document.querySelector(".mensaje");
const matrizCodigo = [
	["e", "enter"],
	["i", "imes"],
	["a", "ai"],
	["o", "ober"],
	["u", "ufat"],
];

function btnEncriptar() {
	const texto_encriptado = transformar(texto_encriptar.value, 0, 1);
	mensaje.value = texto_encriptado;
}
function btnDesencriptar() {
	const texto_desencriptado = transformar(texto_encriptar.value, 1, 0);
	mensaje.value = texto_desencriptado;
	texto_encriptar.value = "";
}

function transformar(texto, a, b) {
	texto = texto.toLowerCase();
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (texto.includes(matrizCodigo[i][a])) {
			texto = texto.replaceAll(matrizCodigo[i][a], matrizCodigo[i][b]);
		}
	}
	return texto;
}

function encriptar(texto_a_encriptar) {
	texto_a_encriptar = texto_a_encriptar.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (texto_a_encriptar.includes(matrizCodigo[i][0])) {
			texto_a_encriptar = texto_a_encriptar.replaceAll(
				matrizCodigo[i][0],
				matrizCodigo[i][1]
			);
		}
	}
	return texto_a_encriptar;
}

function desencriptar(texto_encriptado) {
	texto_encriptado = texto_encriptado.toLowerCase();
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (texto_encriptado.includes(matrizCodigo[i][1])) {
			texto_encriptado = texto_encriptado.replaceAll(
				matrizCodigo[i][1],
				matrizCodigo[i][0]
			);
		}
	}
	return texto_encriptado;
}

function copiar() {
	navigator.clipboard.writeText(mensaje.value);
}
