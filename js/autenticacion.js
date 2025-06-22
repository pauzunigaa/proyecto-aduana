const navbarInvitado = document.getElementById('navbar-invitado');
const navbarUsuario = document.getElementById('navbar-usuario');
const navbarAdmin = document.getElementById('navbar-admin');

const usuarioGuardado = localStorage.getItem('usuario');
const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

// Mostrar el navbar según el rol
const mostrarNavbar = () => {
  if (!usuario) {
    navbarInvitado?.classList.remove('d-none');
  } else if (usuario.rol === 'admin') {
    navbarAdmin?.classList.remove('d-none');
  } else if (usuario.rol === 'usuario') {
    navbarUsuario?.classList.remove('d-none');
  }
};


const cerrarSesion = () => {
    console.log("estoy ejecutando")
  localStorage.removeItem('usuario');
  window.location.href = 'index.html';
};

// Ejecutar
mostrarNavbar();

// Hacer la función global para el botón logout
window.cerrarSesion = cerrarSesion;