import React from "react";

interface NavbarProps {
  onProfileClick?: () => void;
  onCartClick?: () => void;
  onCatalogClick?: () => void;
  onContactsClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onProfileClick,
  onCartClick,
  onCatalogClick,
  onContactsClick,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Mi Tienda</h2>
      </div>

      <div className="navbar-links">
        <button onClick={onCatalogClick}>Catálogo</button>
        <button onClick={onContactsClick}>Contactos</button>
        <button onClick={onCartClick}>🛒 Carrito</button>
        <button onClick={onProfileClick}>👤 Perfil</button>
      </div>
    </nav>
  );
};

export default Navbar;