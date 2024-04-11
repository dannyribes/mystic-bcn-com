import { useState } from "preact/hooks";
import Galeria from "./Galeria";
import Numeros from "./Numeros";
import Palmares from "./Palmares";
import editions from "@/data/editions-info.json"
import styles from "@/components/styles/Editions.module.css"

export default function Editions({i18n}:{i18n:any}) {
    const [edicion, setEdicion] = useState("1")

    return (
      <>
        <Galeria i18n={i18n} edicion={edicion} />
        <Numeros i18n={i18n} edicion={edicion} />
      </>
    );
}