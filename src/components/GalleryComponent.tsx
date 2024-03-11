import { useState } from "preact/hooks";
import Galeria from "./Galeria";

const GalleryComponent = ({ i18n }: { i18n: any }) => {
  const [edicion, setEdicion] = useState("1");
  return <Galeria i18n={i18n} edicion={edicion} />;
};

export default GalleryComponent;
