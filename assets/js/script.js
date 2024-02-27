function Paciente(nombre, edad, rut, diagnostico) {
  this._nombre = nombre;
  this._edad = edad;
  this._rut = rut;
  this._diagnostico = diagnostico;

  // Getters
  Object.defineProperty(this, "nombre", {
    get: function () {
      return this._nombre;
    },
  });

  Object.defineProperty(this, "edad", {
    get: function () {
      return this._edad;
    },
  });

  Object.defineProperty(this, "rut", {
    get: function () {
      return this._rut;
    },
  });

  Object.defineProperty(this, "diagnostico", {
    get: function () {
      return this._diagnostico;
    },
  });

  // Setters
  Object.defineProperty(this, "setPaciente", {
    set: function (DatosPaciente = []) {
      this._nombre = DatosPaciente[0];
      this._edad = DatosPaciente[1];
      this._rut = DatosPaciente[2];
      this._diagnostico = DatosPaciente[3];
    },
  });
}

function Consultorio(nombre, pacientes = []) {
  this._nombre = nombre;
  this._pacientes = pacientes;

  // Getters
  Object.defineProperty(this, "nombre", {
    get: function () {
      return this._nombre;
    },
  });

  Object.defineProperty(this, "pacientes", {
    get: function () {
      return this._pacientes;
    },
  });

  // Setters
  Object.defineProperty(this, "setPaciente", {
    set: function (nuevoPaciente) {
      this._pacientes.push(nuevoPaciente);
    },
  });
}

// Métodos del prototipo para buscar y mostrar pacientes
Consultorio.prototype.buscarPacientePorNombre = function (nombre) {
  return this._pacientes.filter((paciente) => paciente.nombre === nombre);
};

Consultorio.prototype.mostrarTodosLosPacientes = function () {
  this._pacientes.forEach((paciente) => {
    console.log(
      `Nombre: ${paciente.nombre}, Edad: ${paciente.edad}, Rut: ${paciente.rut}, Diagnóstico: ${paciente.diagnostico}`
    );
  });
};

let P1 = new Paciente("Julian", 25, 12345678, "Covid");
let P2 = new Paciente("Ana", 30, 87654321, "Gripe");

let C1 = new Consultorio("C1", [P1, P2]);

// Mostrar todos los pacientes
C1.mostrarTodosLosPacientes();

// Buscar paciente por nombre
let resultadoBusqueda = C1.buscarPacientePorNombre("Julian");
console.log(resultadoBusqueda);
