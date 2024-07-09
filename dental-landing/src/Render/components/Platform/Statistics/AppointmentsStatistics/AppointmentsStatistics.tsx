import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner";
import { AppointmentsByMonthChart } from "./AppointmentsByMonthChart/AppointmentsByMonthChart";

export const AppointmentsStatistics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/appointments`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="flex flex-wrap justify-around items-center gap-7">
      <div className="w-full lg:w-[90%] rounded-[35px] p-3 bg-lightgray text-center">
        <h1 className="text-2xl font-medium poppins-bold">
          Registro de turnos
        </h1>
        <p>Reporte de turnos registrados por mes</p>
        <AppointmentsByMonthChart dataAppointmentsForChart={data}/>
      </div>
    </div>
  );
};
