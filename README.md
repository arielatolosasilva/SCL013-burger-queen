![logo](logo.png)

## Índice

* [1. ¿Qué es Japan Queen](#1-introducción)
* [2. Experiencia Japan Queen](#2-experiencia)
* [3. Solucionando Problemas](#3-solución)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. ¿Qué es Japan Queen? 

Somos un restaurante Japonés, que por medio de la tradición e innovación en la cómida, buscamos brindar a nuestros clientes y a nuestros empleados una experiencia confortable y diferente. Es por lo anterior que proponemos a Japan Queen como app web diseñada para restaurantes, se origina como solución a la gestión de pedidos por medio de una  interfaz simple y amigable, evitando el antiguo uso de comandas y toma de ordenes a mano.


## 2. Experiencia Japan Queen

Como toda innovación, la app web Japan Queen se gesta en la busqueda de mejorar la experiencia de usuario y como solución a un problema que debe ser acorde a las necesidades de nuestra época, esto es haciendo uso de las multiples opciones que nos ofrece la tecnología. Desde aquí comenzamos una investigación enfocada en nuestro clientes y nuestros empleados para saber de qué manera podríamos modernizar nuestra atención y así mismo facilitar el trabajo a nuestros empleados. Por medio de diversas entrevistas, definimos tres tipos de usuarios, los que definimos de la siguiente forma: 

* **Cliente (Usuario indirecto)** : Accederá a esta plataforma por medio de otro usuario que es el mesero.
* **Mesero**: Accederá a la plataforma para generar el pedido del cliente
* **Chef**: Recibirá el pedido 

El primer problema que detectamos, es que como la variedad de nuestra comida es tan interesante y llamativa, a nuestros clientes les resulta difícil decidir por una opción por lo que cambian su pedido varias veces antes de finalizarlo. Como nosotros buscamos ante todo la satisfacción de dichos clientes, nos tomaremos el tiempo necesario hasta que estén lo suficientemente seguros de su elección. En este caso, quien se enfrenta a esta situacion directamente es el mesero quien hasta ese momento utilizaría lapiz y papel para anotar la información del pedido. Esto supone una gran dificultad, si nuestro cliente tiende a cambiar de decisión, no es posible que nuestro mesero anote y tache reiteradamente, generando una confusión en el resumen del pedido y generando otro problema pensando en el tiempo en que este llegaría a cocina y si sería legible para el chef al momento de preparar la comida. Como nuestro objetivo también es que nuestros empleados tengan una buena experiencia al momento de la atención y que a la vez pueda facilitar su trabajo, indagamos en diferentes soluciones que pudieran dar efectividad a este proceso. 

## 3.Solución al problema

Según nuestra investigación y diferentes iteraciones, decidimos que la mejor solución sería diseñar una interfaz que funcione por medio de Tablet y computador, en la que como principal objetivo, se podrá tomar pedidos, eliminar y cambiar según la decisión del cliente.

¿Cómo funciona?

Nuestro objetivo es facilitar la usabilidad para nuestros meseros y chef, pero también pretendemos que esta aplicación pueda ser utilizada por cualquier persona, sin necesidad de tener grandes conocimientos sobre tecnología. 

La funcionalidad es simple, nuestro mesero y chef acceden a la página principal donde se encuentra el logo de nuestro restaurante y nuestra app, bajo este logo se encuentra un botón el que deberá presionar para que se despliegue un formulario donde prodrá ingresar con un correo institucional y contraseña según su rol "Mesero/Chef". 

Vistas

![paginainicio](pantallainicio.png)

![entrar](entrar.png)

Al ingresar a la vista, nuestro mesero tendrá la opción de elegir entre en menu sencillo y tradiconal Japonés al  **Desayuno**  y uno un poco más elaborado a la hora del **Almuerzo y cena**. En este último podrá elegir diferentes productos en alternativas vegetarianas y no vegetarianas, así como también algunos extras para generar una experiencia personalizada.

Vista Desayuno

[FOTO]


Vista Almuerzo y cena

[FOTO]


En cada vista nuestro mesero podra, acceder a un botón volver por si se quivocara de menú, podrá elegir productos por cantidad, editar la selección, borrar, seleccionar un número de mesa que servirá para identificar el pedido de cada cliente. Cuando el pedido se encuentre listo, se genera un resumen, el que se despliegará presionando el botón "Ver resumen". 

Vista de Resumen de Pedidos

[fotos]


Cuando nuestro mesero se asegure de que nuestro cliente ha quedado satisfecho con su elección, deberá presionar el botón "enviar a cocina" que se encuentra dentro de la lista de resumen del pedido. El pedido será enviado al chef, quien ingresará directamente a la vista de pedidos entrantes en donde tomará el tiempo de preparación seleccionando el botón _"Preparando"_ y podrá presionar el botón _"Terminado"_, esto generará una alerta que aparecerá como un incono check en la vista de ingreso del mesero. De este modo, este último podrá retirar el pedido y entregarlo en poco tiempo a la mesa correspondiente.


















![burger-queen](https://user-images.githubusercontent.com/110297/42118136-996b4a52-7bc6-11e8-8a03-ada078754715.jpg)

Esta es la información que tenemos del cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestros clientes.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural              |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> **Importante:** Los clientes pueden escoger entre hamburguesas de res,
> de pollo, o vegetariana. Además, por $ 1 adicional, pueden agregarle queso
> o huevo.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien
>el su pedido varias veces antes de finalizarlo.

La interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo qué _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el
costo total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es aprender a construir una _interfaz web_
usando el _framework_ elegido (React o Angular). Todos estos frameworks de
Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado sincronizados**.
Así que esta experiencia espera familiarizarte con el concepto de _estado de pantalla_,
y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo,
cada vez que agregamos un _producto_ a un _pedido_, la interfaz debe actualizar
la lista del pedido y el total).

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [ ] [Uso de Media Queries.](https://developer.mozilla.org/es/docs/CSS/Media_queries)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [ ] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [ ] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y Github

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [ ] [Firestore.](https://firebase.google.com/docs/firestore)
* [ ] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [ ] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### Angular

* [ ] [Components & templates.](https://angular.io/guide/architecture-components#introduction-to-components)
* [ ] [Directivas estructurales (ngIf / ngFor)](https://angular.io/guide/template-syntax#built-in-structural-directives)
* [ ] [@Input | @Ouput](https://angular.io/guide/component-interaction#component-interaction)
* [ ] [Creación y uso de servicios.](https://angular.io/guide/architecture-services#providing-services)
* [ ] [Manejos de rutas.](https://angular.io/guide/router)
* [ ] [Creación y uso Observables.](https://angular.io/guide/observables-in-angular)
* [ ] [Uso de HttpClient.](https://angular.io/guide/http)
* [ ] [Estilos de componentes (ngStyle / ngClass)](https://angular.io/guide/template-syntax#built-in-directives)

### React

* [ ] [`JSX`](https://es.reactjs.org/docs/introducing-jsx.html)
* [ ] [Componentes `class` y componentes `function`](https://es.reactjs.org/docs/components-and-props.html#function-and-class-components)
* [ ] `props`
* [ ] [Eventos en React.](https://es.reactjs.org/docs/handling-events.html)
* [ ] [Listas y keys.](https://es.reactjs.org/docs/lists-and-keys.html)
* [ ] [Renderizado condicional.](https://es.reactjs.org/docs/conditional-rendering.html)
* [ ] [Elevación de estados.](https://es.reactjs.org/docs/lifting-state-up.html)
* [ ] [`hooks`](https://es.reactjs.org/docs/hooks-intro.html)
* [ ] [`CSS` modules.](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)
* [ ] [React Router.](https://reacttraining.com/react-router/web)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

Este proyecto se debe "resolver" de forma individual.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto Sí está permitido usar librerías o frameworks
(debes elegir entre [React](https://es.reactjs.org/) o
[Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**.

Necesitamos pensar bien en el aspecto UX de de quienes van a tomar los pedidos,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Este proyecto incluye un _boilerplate_ con el código necesario para arrancar con
la parte de backend ya resuelta. El _boilerplate_ incluye los siguientes
archivos/carpetas con la configuración de Fierbase (hosting, firestore y
functions):

```text
./04-burger-queen/
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── functions
│   ├── index.js
│   ├── package.json
└── README.md
```

Por otro lado, la parte de la interfaz no está incluida, por lo que, deberás
definir la estructura de carpetas y archivos que consideres necesaria. Puedes
guiarte de las convenciones del _framework_ elegido. Por ende, los _tests_ y el
_setup_ necesario para ejecutarlos, serán hechos por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## 5. Criterios de aceptación mínimos del proyecto

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s) nos
presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta
hoy.

***

#### [Historia de usuario 1] Mesero/a debe poder tomar pedido de cliente

Yo como meserx quiero tomar el pedido de un cliente para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 2] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***

#### [Historia de usuario 3] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido _code review_ de al menos una compañera.
* Haces _test_ unitarios y, además, has testeado tu producto manualmente.
* Hiciste _tests_ de usabilidad e incorporaste el _feedback_ del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

***

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

1. El primer paso de este proyecto debe ser convertir el menú descrito por el
   cliente en una estructura que podamos poner en un archivo JSON para después
   _pintar_ en la pantalla

2. Haz un _fork_ de este repo (en GitHub).

3. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
   cd <cohortid>-burger-queen
   ```

4. Crea una rama a partir de `master` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

5. Crear proyecto en [Firebase](https://firebase.google.com/)

6. Habilitar Firestore (_comenzar en modo bloqueado_) en sección de "Bases de
   Datos" de [Firebase console](https://console.firebase.google.com/).

7. Instalar utilidad de línea de comando de Firebase:

   ```sh
   npm i -g firebase-tools
   ```

8. Agregamos entorno de producción para desplegar:

   ```sh
   firebase use --add
   ```

9. Instalar dependencias de cloud functions:

   ```sh
   # usando yarn
   cd functions && yarn && cd ..
   # alternativamente, usando npm
   cd functions && npm install && cd ..
   ```

10. Desplegar: `firebase deploy`

11. Llegado a este punto ya puedes comenzar con el _front-end_ :wink:

***

Nota para estudiantes que elijan React y quieran usar `create-react-app`:

Si tratas de usar `create-react-app` en el directorio del proyecto recibirás un
error diciendo que hay archivos que podrían presentar un conflicto. Para evitar
este problema puedes crear una nueva app usando `create-react-app` y de ahí
_mezclarla_ con la carpeta del proyecto:

```sh
# si estabase en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

create-react-app burger-queen-tmp
cp -r burger-queen/* burger-queen-tmp/
cp -r burger-queen-tmp/.gitignore burger-queen-tmp/* burger-queen/
rm -rf burger-queen-tmp
cd burger-queen
```

### Otros recursos

#### Frameworks / libraries

* [React](https://es.reactjs.org/)
* [Angular](https://angular.io/)

#### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

#### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

#### Serverless

* [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
* [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

#### Cloud functions

* [Cloud functions - Firebase Docs](https://firebase.google.com/docs/functions/?hl=es-419)
