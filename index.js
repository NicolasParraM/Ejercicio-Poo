class Estudiante {
    nombre = "Nikolai"

    asignaturas = ["Javascript", ".Net", "Python"];

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const estudiante = new Estudiante()

console.log(estudiante.obtenDatos());