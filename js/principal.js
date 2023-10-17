import ("./padre.js");
import ("./hijo.js");
import ("./miembro.js");

let hijo1 = new Hijo("Alex", "Fernandez Lopez","Si");
let padre1 = new Padre("Pablo", "Fernandez Dominguez","Si");
console.log(hijo1._nombre);
console.log(hijo1._apellidos);
console.log(hijo1._moto);
console.log(padre1._nombre);
console.log(padre1._apellidos);
console.log(padre1._coche);

padre1.comer();
padre1.cenar();