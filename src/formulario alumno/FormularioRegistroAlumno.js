import React, { useState } from 'react';
import axios from 'axios';

function AlumnoForm() {
  const [formData, setFormData] = useState({
    Turno: '',
    Imagen_Alumno: '',
    Tipo_sangre: '',
    Lugar_familia: '',
    Cod_rude: '',
    Nro_hermanos: '',
    Nombres: '',
    Apellidos: '',
    DocumentoIdentidad: '',
    FechaNacimiento: '',
    Sexo: '',
    Ciudad: '',
    Direccion: '',
    Nombre_madre: '',
    Documento_madre: '',
    Telefono_madre: '',
    Trabajo_madre: '',
    Nombre_padre: '',
    Documento_padre: '',
    Telefono_padre: '',
    Trabajo_padre: '',
    Activo: false,
    FechaRegistro: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/alumno', formData)
      .then(response => {
        console.log(response.data);
        // handle success (e.g., display a success message or redirect)
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
        // handle error (e.g., display an error message)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Turno:</label>
        <input type="text" name="Turno" value={formData.Turno} onChange={handleChange} />
      </div>
      <div>
        <label>Imagen_Alumno:</label>
        <input type="text" name="Imagen_Alumno" value={formData.Imagen_Alumno} onChange={handleChange} />
      </div>
      <div>
        <label>Tipo_sangre:</label>
        <input type="text" name="Tipo_sangre" value={formData.Tipo_sangre} onChange={handleChange} />
      </div>
      <div>
        <label>Lugar_familia:</label>
        <input type="text" name="Lugar_familia" value={formData.Lugar_familia} onChange={handleChange} />
      </div>
      <div>
        <label>Cod_rude:</label>
        <input type="text" name="Cod_rude" value={formData.Cod_rude} onChange={handleChange} />
      </div>
      <div>
        <label>Nro_hermanos:</label>
        <input type="number" name="Nro_hermanos" value={formData.Nro_hermanos} onChange={handleChange} />
      </div>
      <div>
        <label>Nombres:</label>
        <input type="text" name="Nombres" value={formData.Nombres} onChange={handleChange} />
      </div>
      <div>
        <label>Apellidos:</label>
        <input type="text" name="Apellidos" value={formData.Apellidos} onChange={handleChange} />
      </div>
      <div>
        <label>DocumentoIdentidad:</label>
        <input type="text" name="DocumentoIdentidad" value={formData.DocumentoIdentidad} onChange={handleChange} />
      </div>
      <div>
        <label>FechaNacimiento:</label>
        <input type="date" name="FechaNacimiento" value={formData.FechaNacimiento} onChange={handleChange} />
      </div>
      <div>
        <label>Sexo:</label>
        <select name="Sexo" value={formData.Sexo} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </div>
      <div>
        <label>Ciudad:</label>
        <input type="text" name="Ciudad" value={formData.Ciudad} onChange={handleChange} />
      </div>
      <div>
        <label>Direccion:</label>
        <input type="text" name="Direccion" value={formData.Direccion} onChange={handleChange} />
      </div>
      <div>
        <label>Nombre_madre:</label>
        <input type="text" name="Nombre_madre" value={formData.Nombre_madre} onChange={handleChange} />
      </div>
      <div>
        <label>Documento_madre:</label>
        <input type="text" name="Documento_madre" value={formData.Documento_madre} onChange={handleChange} />
      </div>
      <div>
        <label>Telefono_madre:</label>
        <input type="text" name="Telefono_madre" value={formData.Telefono_madre} onChange={handleChange} />
      </div>
      <div>
        <label>Trabajo_madre:</label>
        <input type="text" name="Trabajo_madre" value={formData.Trabajo_madre} onChange={handleChange} />
      </div>
      <div>
        <label>Nombre_padre:</label>
        <input type="text" name="Nombre_padre" value={formData.Nombre_padre} onChange={handleChange} />
      </div>
      <div>
        <label>Documento_padre:</label>
        <input type="text" name="Documento_padre" value={formData.Documento_padre} onChange={handleChange} />
      </div>
      <div>
        <label>Telefono_padre:</label>
        <input type="text" name="Telefono_padre" value={formData.Telefono_padre} onChange={handleChange} />
      </div>
      <div>
        <label>Trabajo_padre:</label>
        <input type="text" name="Trabajo_padre" value={formData.Trabajo_padre} onChange={handleChange} />
      </div>
      <div>
        <label>Activo:</label>
        <input type="checkbox" name="Activo" checked={formData.Activo} onChange={handleChange} />
      </div>
      <div>
        <label>FechaRegistro:</label>
        <input type="date" name="FechaRegistro" value={formData.FechaRegistro} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AlumnoForm;
