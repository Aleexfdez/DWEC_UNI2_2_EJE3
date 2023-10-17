class Miembro {
    constructor(nombre="Sin nombre",apellidos="Sin apellido") {
        this._nombre = nombre;
        this._apellidos = apellidos;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    set nombre(name) {
        this._nombre = nombre;
    }
    set apellidos(name) {
        this._apellidos = apellidos;
    }
    comer() {
        console.log("Estoy comiendo");
    }
    cenar() {
        console.log("Estoy cenando");
    }

}
// let persona = new Miembro("Alex", "Fernandez Lopez");
// console.log(persona._nombre);
// console.log(persona._apellidos);
// console.log(persona.comer);