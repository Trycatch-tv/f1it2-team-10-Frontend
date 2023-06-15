# f1it2-team-10-Frontend

PROYECTO:
💡 Agenda de citas: 
Creación y edición de citas (nombre, fecha, hora, duración, ubicación, detalles, etc.). 
Listado y búsqueda de citas. 
Visualización de detalles de citas. Eliminación de citas.
Eliminación de citas
Integración con calendarios externos (opcional). (Se decidió por recomendación del sr George, que este requerimiento no se va a tomar en consideración en esta etapa pòr falta de tiempo).
## CitaSync
# Team: TECHNOMANCERS 
(Los Tecnomantes)
También conocidos como Tecnólogos, Tecnologenios o Ingeniadores, es uno de los grupos nómadas que habitan Norteamérica durante los acontecimientos de Cyberpunk 2020.
Cyberpunk 2020 es la segunda edición del título Cyberpunk, publicado en 1988, un juego de rol ambientado en un universo de ficción del subgénero de ciencia ficción orientado a la acción y el combate.
Los Tecnomantes son un grupo de nómadas de los más misteriosos de todo el país y son expertos en un campo: son técnicos a sueldo y verdaderos magos de la tecnología, con una gran inclinación a permanecer neutrales ante las disputas y viajan por Norteamérica buscando problemas extremadamente complejos de resolver.

💡 Stack Tecnológico. 
Los lenguajes de programación utilizados:
Java: versión 17 y Spring Boot: La versión 3 son buenas opciones para el desarrollo del backend ya que son estables y ampliamente utilizadas.
JavaScript: la versión más reciente y React 16.x para el desarrollo del frontend.
MySQL: la versión más reciente para la base de datos.
Justificación
Los lenguajes y framework, anteriormente mencionados, son los que conocen los integrantes del team, por consiguiente; es crucial no sólo el conocimiento de los mismos, sino que la ejecución del proyecto permite un ahorro de tiempo y recursos, el fomentar y propiciar el trabajo en equipo, el favorecer la seguridad en el desarrollo del proyecto y por ser de los más populares en la actualidad, nos permiten implementar una comunidad de soporte ideal para la funcionalidad del mismo.

💡 Dependencias del proyecto
Para el frontend, se necesitan las siguientes:
React: la biblioteca principal de React.
React-DOM: para manipular el DOM con React.
React Router: para manejar la navegación en la aplicación.
Axios: para realizar solicitudes HTTP al backend.

💡 Documentación y Arquitectura del Proyecto
Para el frontend, utilizar Create React App para configurar la estructura del proyecto y las dependencias requeridas. Ejecutar el siguiente comando en el directorio del repositorio frontend clonado:

npx create-react-app .

Configuración
Instalar Node.js y npm para poder utilizar JavaScript y React en el frontend.
Configurar el proyecto para utilizar React y asegurarse de que esté conectado correctamente con el backend.
Al completar las tareas de configuración y desarrollo, realizar un commit inicial en cada repositorio con los cambios realizados:
cd agenda-citas-frontend
git add .
git commit -m "Commit inicial del proyecto frontend"
git push origin main

Diseño:
Describe el diseño de la interfaz de usuario, incluyendo las pantallas principales y cómo se navega entre ellas. También, incluir mockups o bocetos para ilustrar el diseño de la aplicación.
Identificar las pantallas principales de la aplicación, como la pantalla de inicio de sesión, la pantalla de programación de citas y la pantalla de visualización de citas.
Describir cómo se navega entre estas pantallas y qué acciones puede realizar el usuario en cada una de ellas.
Crear mockups o bocetos para ilustrar el diseño visual de cada pantalla y cómo se organizarán los diferentes elementos en la interfaz de usuario.
Incluir detalles sobre el uso del color, la tipografía y otros elementos visuales para guiar el desarrollo de la interfaz de usuario.

Para el frontend, deberás crear formularios y acciones que interactúen con estos endpoints. Para el registro se crea un formulario que solicite la dirección de correo electrónico y la contraseña. Al enviar el formulario, realiza una petición POST al endpoint /api/users/register con los parámetros email y password. Si la respuesta es exitosa (201 Created), el usuario se registra correctamente. En caso contrario, muestra un mensaje de error adecuado.

<form id="register-form">
  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required>
  <label for="password">Contraseña:</label>
  <input type="password" id="password" name="password" required>
  <button type="submit">Registrarse</button>
</form>
document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 201) {
      // Registro exitoso
      const data = await response.json();
      console.log("Usuario registrado con ID:", data.user_id);
    } else {
      // Error en el registro
      const error = await response.json();
      console.error("Error en el registro:", error.message);
    }
  } catch (err) {
    console.error("Error en la petición:", err);
  }
});

![login](https://github.com/Trycatch-tv/f1it2-team-10-Frontend/assets/122529721/904e6572-d14c-4ec8-a0f0-699935ec3570)

De manera similar, se implementa el inicio de sesión y la gestión de citas en el frontend utilizando los endpoints y parámetros proporcionados en la documentación.
Configurar el proyecto React y sus dependencias. Asegurandonos de tener una estructura de directorios adecuada y archivos de configuración como webpack.config.js y babel.config.js .
Crear componentes React para cada una de las funcionalidades requeridas: creación y edición de citas, listado y búsqueda de citas, visualización de detalles de citas y eliminación de citas. Utiliza useState y useEffect para manejar el estado y las interacciones con el backend mediante fetch o alguna librería como Axios.

![menu](https://github.com/Trycatch-tv/f1it2-team-10-Frontend/assets/122529721/98af5376-d713-444e-8748-ace80e7397fd)

Configurar el enrutamiento de la aplicación utilizando React Router. Esto incluye la creación de un componente de navegación y la configuración de las rutas para cada uno de los componentes de la aplicación.
Estilizar la aplicación utilizando CSS o algún framework de diseño como Bootstrap o Material-UI. Puedes crear archivos CSS específicos para cada componente y utilizarlos para dar estilo a los elementos de la interfaz de usuario.
Implementar la lógica para la comunicación con el backend. Esto incluye realizar solicitudes HTTP a las rutas del backend para llevar a cabo las operaciones CRUD. Puedes utilizar fetch o alguna librería como Axios para facilitar esta tarea.
Manejar los errores y las validaciones en la interfaz de usuario. Esto incluye mostrar mensajes de error y éxito al usuario después de realizar cada operación, así como validar los datos ingresados por el usuario antes de enviarlos al backend.

![crear cita](https://github.com/Trycatch-tv/f1it2-team-10-Frontend/assets/122529721/4a7f637c-9462-4448-ba73-0d5ba731db6e)
