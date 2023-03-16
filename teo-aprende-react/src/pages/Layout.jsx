import { Outlet } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Header from "../components/Header";

export default function Layout() {

  const { panel } = useParams();
  const parameter = panel ? panel : 'Inicio';

  return (
    <>
      <Header title={parameter} />
      <Outlet />
    </>
  )
};
