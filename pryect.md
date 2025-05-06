/veterinaria-app
│
├── public/
├── src/
│   ├── components/
│   │   ├── PatientForm.jsx
│   │   ├── PatientList.jsx
│   │   └── AppointmentCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Patients.jsx
│   │   └── Appointments.jsx
│   ├── context/
│   │   └── AppContext.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
└── package.json
<Route path="/" element={<Home />} />
<Route path="/pacientes" element={<Patients />} />
<Route path="/citas" element={<Appointments />} />
unction PatientForm({ onSubmit }) {
  const [form, setForm] = useState({ nombre: '', especie: '', raza: '', edad: '', dueño: '', telefono: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(form); }}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="especie" value={form.especie} onChange={handleChange} placeholder="Especie" />
      {/* otros campos */}
      <button type="submit">Guardar</button>
    </form>
  );
}