import React from 'react';
import Image from 'next/image';

const Especialidades = () => {
  const especialidadesDestacadas = [
    {
      titulo: "Tratamientos Faciales",
      descripcion: "Rejuvenecimiento facial con las técnicas más avanzadas",
      imagen: "/images/facial-treatment.jpg",
    },
    {
      titulo: "Tratamientos Corporales",
      descripcion: "Modelado corporal y reducción de grasa localizada",
      imagen: "/images/body-treatment.jpg",
    },
    {
      titulo: "Medicina Antiaging",
      descripcion: "Tratamientos preventivos contra el envejecimiento",
      imagen: "/images/antiaging.jpg",
    },
  ];

  const todasEspecialidades = [
    "Botox",
    "Ácido hialurónico",
    "Mesoterapia",
    "Hilos tensores",
    "Peeling químico",
    "Radiofrecuencia",
    "Ultrasonido focalizado",
    "Carboxiterapia",
    "Plasma rico en plaquetas",
    "Vitaminas inyectables",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Especialidades</h2>
          <p className="text-lg text-gray-600">Descubre nuestros tratamientos de medicina estética</p>
        </div>
        
        {/* Cards destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {especialidadesDestacadas.map((especialidad, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={especialidad.imagen}
                  alt={especialidad.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{especialidad.titulo}</h3>
                <p className="text-gray-600">{especialidad.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Listado de especialidades */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900">
            Todos Nuestros Tratamientos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todasEspecialidades.map((especialidad, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {especialidad}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Especialidades; 