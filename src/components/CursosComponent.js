import React, { useState, useEffect } from 'react';

function CursosComponent() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch('https://miguelangel.icu/wordpress/wp-json/api/cursos')
      .then(response => response.json())
      .then(data => setCursos(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {cursos.length > 0 ? (
        cursos.map((curso) => (
          <div className="academycontainer" key={curso.id}>
            <img 
              src={curso.custom_fields.logo} 
              alt={curso.title.rendered} 
              width="78" 
              height="78" 
            />
            <div className="service_ py-4">
              <h5 className="service__title">{curso.title.rendered}</h5>
              <div className=""> 
                <p className="service_desc">{curso.custom_fields.academia || 'Academia no especificada'}</p>
                <a 
                  href={curso.custom_fields.certificado} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button id="button_p" className="ac_btn btn ">
                    Show Certificate
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Cargando cursos...</p>
      )}
    </div>
  );
}

export default CursosComponent;
