import { useCallback, useState } from "react";

export const useFormulario = (datosIniciales, seteadorInicial) => {
  const [datos, setDatos] = useState(datosIniciales);
  const seteador = useCallback(seteadorInicial, [seteadorInicial]);
  const setDato = (e) => {
    setDatos({
      ...datos,
      [e.target.id]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const volcarDatos = () => {
    seteador({ ...datos });
  };

  return {
    datos,
    setDato,
    volcarDatos,
  };
};
