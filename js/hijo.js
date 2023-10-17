class Hijo extends Miembro {
    constructor(nombre, apellidos,moto="Sin moto") {
        super(nombre, apellidos);
        this._moto = moto;
    }
    get moto() {
        return this._moto;
    }
    set moto(name) {
        this._moto = moto;
    }
}