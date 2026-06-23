
import { useState } from "react";
import Navbar from "./componentes/Navbar";
import ModalPerfil from "./componentes/ModalPerfil";

function App() {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  const usuario = {
    nombre: "Juan Pérez",
    email: "juan@gmail.com",
    telefono: "555-1234",
    direccion: "Av. Principal 123",
  };

  return (
    <>
      <Navbar
        onCatalogClick={() => console.log("Catálogo")}
        onContactsClick={() => console.log("Contactos")}
        onCartClick={() => console.log("Carrito")}
        onProfileClick={() => setMostrarPerfil(true)}
      />

      <main style={{ padding: "2rem" }}>
        <h1>Bienvenido</h1>
      </main>

      <ModalPerfil
        isOpen={mostrarPerfil}
        onClose={() => setMostrarPerfil(false)}
        usuario={usuario}
      />
    </>
  );
}

export default App;