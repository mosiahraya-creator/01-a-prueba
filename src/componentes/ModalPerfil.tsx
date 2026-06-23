interface Usuario {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
}

interface ModalPerfilProps {
  isOpen: boolean;
  onClose: () => void;
  usuario: Usuario;
}

function ModalPerfil({
  isOpen,
  onClose,
  usuario,
}: ModalPerfilProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Mi Perfil</h2>

        <div className="perfil-info">
          <p>
            <strong>Nombre:</strong> {usuario.nombre}
          </p>

          <p>
            <strong>Email:</strong> {usuario.email}
          </p>

          <p>
            <strong>Teléfono:</strong> {usuario.telefono}
          </p>

          <p>
            <strong>Dirección:</strong> {usuario.direccion}
          </p>
        </div>

        <button onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ModalPerfil;