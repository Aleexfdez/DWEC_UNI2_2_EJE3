class Padre extends Miembro {
    constructor(nombre, apellidos,coche) {
        super(nombre, apellidos);
        this._coche = coche;
    }
    get coche() {
        return this._coche;
    }
    set nombre(name) {
        this._coche = coche;
    }

    comer() {
        super.comer();
        console.log("Estoy comiendo huevos");
    }
    cenar() {
        super.cenar();
        console.log("Estoy cenando huevos");
    }
}