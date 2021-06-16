import PropTypes from "prop-types";

export const Resumen = (props) => {
  const { retrocedePaso, datosRegistro, datosPersonales, datosAcceso } = props;

  const printarObjeto = (objeto) =>
    Object.keys(objeto).map((variable) => (
      <div key={variable}>{`${variable} : ${objeto[variable]}`}</div>
    ));

  return (
    <>
      <h2>Resumen</h2>
      <h3>Datos personales</h3>
      {printarObjeto(datosPersonales)}
      <h3>Datos registro</h3>
      {printarObjeto(datosRegistro)}
      <h3>Datos acceso</h3>
      {printarObjeto(datosAcceso)}
      <button className="btn btn-info" onClick={retrocedePaso}>
        Anterior
      </button>
    </>
  );
};

Resumen.propTypes = {
  datosPersonales: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    fechaNacimiento: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  datosRegistro: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    repitePassword: PropTypes.string.isRequired,
  }).isRequired,
  datosAcceso: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    recordarPassword: PropTypes.bool.isRequired,
  }).isRequired,
  retrocedePaso: PropTypes.func.isRequired,
};
