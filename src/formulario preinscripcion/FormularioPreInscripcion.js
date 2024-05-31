import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose, onSubmit, formData, handleChange, isEditMode, viewMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{viewMode ? 'Detalles' : isEditMode ? 'Modificar' : 'Registrar'}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {Object.keys(formData).map((key) => (
            <input
              key={key}
              type={key === 'fecha_nacimiento_dp' ? 'date' : key === 'correo_electronico_dp' ? 'email' : 'text'}
              name={key}
              placeholder={key.replace(/_/g, ' ')}
              value={formData[key]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled={viewMode}
            />
          ))}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2 hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            {!viewMode && (
              <button
                type="submit"
                className={`bg-${isEditMode ? 'yellow' : 'blue'}-600 text-white px-4 py-2 rounded-md hover:bg-${isEditMode ? 'yellow' : 'blue'}-700 transition`}
              >
                {isEditMode ? 'Modificar' : 'Registrar'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

const Table = ({ data, handleEdit, handleViewDetails, handleDelete }) => (
  <table className="min-w-full bg-white rounded-md shadow-md">
    <thead>
      <tr>
        {['Carnet de Identidad', 'Nombres', 'Primer Apellido', 'Segundo Apellido', 'Acciones'].map((header) => (
          <th key={header} className="py-2 px-4 border-b">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          {['carnet_identidad_dp', 'nombres_dp', 'primer_apellido_dp', 'segundo_apellido_dp'].map((field) => (
            <td key={field} className="py-2 px-4 border-b">{item[field]}</td>
          ))}
          <td className="py-2 px-4 border-b flex space-x-2">
            <button
              onClick={() => handleViewDetails(item)}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              Más Detalles
            </button>
            <button
              onClick={() => handleEdit(item)}
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Modificar
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              Eliminar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const FormularioPreInscripcion = () => {
  const [formData, setFormData] = useState({
    carnet_identidad_dp: '',
    extension_carnet_dp: '',
    nombres_dp: '',
    primer_apellido_dp: '',
    segundo_apellido_dp: '',
    fecha_nacimiento_dp: '',
    correo_electronico_dp: '',
    genero_dp: '',
    telefono_dp: '',
    direccion_domicilio_dp: '',
    contato_dp: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [viewMode, setViewMode] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/datos_preinscripcion');
      setData(result.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`http://localhost:5000/api/datos_preinscripcion/${formData.id}`, formData);
        alert('Modificación exitosa');
      } else {
        await axios.post('http://localhost:5000/api/datos_preinscripcion', formData);
        alert('Registro exitoso');
      }
      fetchData();
      resetForm();
    } catch (error) {
      console.error('Error en el registro/modificación:', error);
      alert('Error en el registro/modificación');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/datos_preinscripcion/${id}`);
      alert('Registro eliminado');
      fetchData();
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
      alert('Error al eliminar el registro');
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = (item) => {
    setFormData({ id: item.id, ...item });
    setEditMode(true);
    setModalOpen(true);
  };

  const handleViewDetails = (item) => {
    setFormData({ id: item.id, ...item });
    setViewMode(true);
    setModalOpen(true);
  };

  const resetForm = () => {
    setFormData({
      carnet_identidad_dp: '',
      extension_carnet_dp: '',
      nombres_dp: '',
      primer_apellido_dp: '',
      segundo_apellido_dp: '',
      fecha_nacimiento_dp: '',
      correo_electronico_dp: '',
      genero_dp: '',
      telefono_dp: '',
      direccion_domicilio_dp: '',
      contato_dp: ''
    });
    setEditMode(false);
    setModalOpen(false);
    setViewMode(false);
  };

  const filteredData = data.filter(item => {
    return (
      item.carnet_identidad_dp.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nombres_dp.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.primer_apellido_dp.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.segundo_apellido_dp.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsToShow;
  const indexOfFirstItem = indexOfLastItem - itemsToShow;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleShowMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + itemsPerPage);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-6xl p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={() => {
              resetForm();
              setModalOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Registrar
          </button>
        </div>
        <Table data={currentItems} handleEdit={handleEdit} handleViewDetails={handleViewDetails} handleDelete={handleDelete} />
        <div className="flex justify-center mt-4">
          {[...Array(Math.ceil(filteredData.length / itemsToShow)).keys()].map((number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={`px-4 py-2 mx-1 rounded-md ${currentPage === number + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
        {itemsToShow < filteredData.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleShowMore}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Mostrar más
            </button>
          </div>
        )}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        isEditMode={editMode}
        viewMode={viewMode}
      />
    </div>
  );
};

export default FormularioPreInscripcion;
