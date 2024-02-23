//Seccion de selectores de elementos estéticos
const headerSelector = document.querySelector('.header')
const userFormSelector = document.querySelector('.user__form')
const bottomMessage = document.querySelector('.mainScreen__Warning')
const userFormSelectorNIP = document.querySelector('.user__form2')
const line = document.querySelector('hr')
const secondaryHeader = document.querySelector('.header2')
const mainMenu = document.querySelector('.secondScreen')
const welcomeMessage = document.querySelector('.secondScreen__message')
const instructionsMessage = document.querySelector('.secondScreen__instr')
const secondScreenItems = document.querySelector('.secondScreen__items')
const footerBtns = document.querySelector('.footer-btns')
const optSaldo = document.querySelector('.saldo')
const optRetirar = document.querySelector('.retirar')
const optDepositar = document.querySelector('.depositar')

//Seccion de inputs
let inputSelector = document.querySelector('#inpUser')
let inputSelectorNIP = document.querySelector('#inpNIP')
let saldoData = document.querySelector('.data')


//Usuarios
let users = [
    {
        nombre: "Marco Antonio",
        correo: "marco@devfbank.com",
        NIP: "4123",
        saldo: 1200
    },
    {
        nombre: "Alexis Fuentes",
        correo: "alexis@devfbank.com",
        NIP: "5423",
        saldo: 1300
    },
    {
        nombre: "Jesús Alejandro",
        correo: "jalejandro@devfbank.com",
        NIP: "6695",
        saldo: 1400
    },
    {
        nombre: "Ana Laura",
        correo: "analaura99@devfbank.com",
        NIP: "6741",
        saldo: 1500
    },
    {
        nombre: "Diana Mendez",
        correo: "dianam22@devfbank.com",
        NIP: "1453",
        saldo: 1600
    },
    {
        nombre: "Carlos Hernandez",
        correo: "carlos.83z@devfbank.com",
        NIP: "1453",
        saldo: 1700
    },
    {
        nombre: "1",
        correo: "1",
        NIP: "1",
        saldo: 1800
    }
]

//Seccion de botones
const btnMenu = document.querySelector('.secondScreen__btnMenu')
const btnLogin = document.querySelector('#btnEntrar')
const btnIntro = document.querySelector('#intro')
const btnSalir = document.querySelector('.secondScreen__btnSalir')

//Definicion de funciones
function validarDatos(){

    const inputValue = inputSelector.value; //Extraemos los datos del input
    const inputValueNIP = inputSelectorNIP.value;

    if(!inputValue){
        alert("Ingrese nombre o correo electrónico")
    } else {
        for(let i = 0; i < users.length ; i++){
            if((users[i].nombre === inputValue) || (users[i].correo === inputValue) && (users[i].NIP === inputValueNIP)){
                userFormSelector.style.display = 'none';
                bottomMessage.style.display = 'none';
                headerSelector.style.display = 'none'
                userFormSelectorNIP.style.display = 'flex';
                secondaryHeader.style.display = 'block';
                userFormSelectorNIP.style.display = 'none'
                line.style.display = 'none';
                muestraMenu(users[i].nombre)
                bottomBtns()
                return
            } 
        }
        alert("Nombre o correo incorrectos")
    }

}
function validarNIP(){
    const inputValueNIP = inputSelectorNIP.value;
    if(!inputValueNIP){
        alert("Digite su NIP")
    } else {
        for (let i = 0; i < users.length ; i++){
            if(users[i].NIP === inputValueNIP){
                userFormSelectorNIP.style.display = 'none'
                line.style.display = 'none';
                muestraMenu(users[i].nombre)
                bottomBtns()
                return
            } 
        }
        alert("NIP inválido")
    }
}

function muestraMenu(username){
    mainMenu.style.display = 'block'
    welcomeMessage.innerHTML = `Bienvenido ${username}`
}

function ocultaMenu(){
    mainMenu.style.display = 'none'
}
function ocultaBottomBtns(){
    footerBtns.style.display = 'none'
}

function bottomBtns(){
    footerBtns.style.display = 'flex'
    footerBtns.style.margin = '200px 30px 0 30px'
}

function f_optSaldo(){
    ocultaMenu();
    for(let i = 0; i < users.length ; i++){
        console.log(`${i,users[i].saldo}`)
    }
}

function f_optDeposito(){
    ocultaMenu();
}
function f_optRetirar(){
    ocultaMenu();
}

//Llamados a funcionalidad
optRetirar.addEventListener("click", f_optRetirar)
optDepositar.addEventListener("click", f_optDeposito)
optSaldo.addEventListener("click",f_optSaldo)
btnLogin.addEventListener("click", validarDatos);
btnIntro.addEventListener("click", validarNIP);