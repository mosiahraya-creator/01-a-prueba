
import Navbar from "./componentes/Navbar";
function App() {
  return (
    <>
      <Navbar
        onCatalogClick={() => console.log("Catálogo")}
        onContactsClick={() => console.log("Contactos")}
        onCartClick={() => console.log("Carrito")}
        onProfileClick={() => console.log("Perfil")}
      />

      <main style={{ padding: "2rem" }}>
        <h1>Bienvenido</h1>
      </main>
    </>
  );
}

export default App;