import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a la Veterinaria</h1>
      <p>Usa el menú para gestionar pacientes y citas.</p>
    </div>
  );
}

function PatientForm({ onSubmit }) {
  const [form, setForm] = useState({ nombre: "", especie: "", raza: "", edad: "", duenio: "", telefono: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-2"
    >
      <input className="border p-1 w-full" name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input className="border p-1 w-full" name="especie" placeholder="Especie" onChange={handleChange} />
      <input className="border p-1 w-full" name="raza" placeholder="Raza" onChange={handleChange} />
      <input className="border p-1 w-full" name="edad" placeholder="Edad" onChange={handleChange} />
      <input className="border p-1 w-full" name="duenio" placeholder="Dueño" onChange={handleChange} />
      <input className="border p-1 w-full" name="telefono" placeholder="Teléfono" onChange={handleChange} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Guardar</button>
    </form>
  );
}

function Patients() {
  const [patients, setPatients] = useState([]);

  const addPatient = (patient) => setPatients([...patients, patient]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Registrar Paciente</h2>
      <PatientForm onSubmit={addPatient} />
      <div className="mt-4">
        <h3 className="font-semibold">Lista de Pacientes</h3>
        <ul className="list-disc ml-5">
          {patients.map((p, i) => (
            <li key={i}>{p.nombre} - {p.especie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-gray-200 p-4 flex gap-4">
        <Link to="/">Inicio</Link>
        <Link to="/pacientes">Pacientes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Patients />} />
      </Routes>
    </Router>
  );
}

export default App;