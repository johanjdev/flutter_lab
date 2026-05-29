
document.getElementById("infoBtn").addEventListener("click", function() {

  const infoBox = document.getElementById("infoBox");

  infoBox.innerHTML = `
    <h2>Conceptos importantes de Flutter</h2>

    <ul>
      <li><strong>SDK:</strong> Kit de desarrollo de software que incluye herramientas para crear apps.</li>

      <li><strong>Dart:</strong> Lenguaje de programación utilizado por Flutter.</li>

      <li><strong>Widgets:</strong> Elementos visuales que construyen la interfaz de usuario.</li>

      <li><strong>StatefulWidget:</strong> Widget que puede cambiar su estado dinámicamente.</li>

      <li><strong>StatelessWidget:</strong> Widget estático que no cambia después de construirse.</li>

      <li><strong>Hot Reload:</strong> Función que actualiza cambios en tiempo real sin reiniciar la app.</li>

      <li><strong>Material Design:</strong> Sistema de diseño creado por Google para interfaces modernas.</li>

      <li><strong>Cupertino Widgets:</strong> Widgets con estilo visual de iOS.</li>

      <li><strong>Pub.dev:</strong> Plataforma oficial de paquetes y librerías para Flutter y Dart.</li>

      <li><strong>Navigator:</strong> Sistema para manejar pantallas y navegación entre vistas.</li>

      <li><strong>BuildContext:</strong> Información sobre la ubicación de un widget en el árbol.</li>

      <li><strong>setState():</strong> Método usado para actualizar la interfaz en StatefulWidget.</li>

      <li><strong>Firebase:</strong> Plataforma de Google muy utilizada con Flutter para backend.</li>

      <li><strong>Responsive Design:</strong> Adaptación de la interfaz a diferentes tamaños de pantalla.</li>

      <li><strong>API REST:</strong> Servicio que permite comunicación entre aplicaciones.</li>
    </ul>
  `;
});