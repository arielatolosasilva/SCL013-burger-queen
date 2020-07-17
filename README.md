![logo](/src/assets/images/logo.png)

## Índice

* [1. ¿Qué es Japan Queen](#1-introducción)
* [2. Experiencia Japan Queen](#2-experiencia)
* [3. Solucionando Problemas](#3-solución)
* [4. Diseño e interfaz](#4-diseño)

***

## 1. ¿Qué es Japan Queen? 

Somos un restaurante Japonés, que por medio de la tradición e innovación en la comida, buscamos brindar a nuestros clientes y a nuestros empleados una experiencia confortable y diferente. Es por lo anterior que proponemos a Japan Queen como app web diseñada para restaurantes, que se origina como solución a la gestión de pedidos por medio de una  interfaz simple y amigable, evitando el antiguo uso de comandas y toma de ordenes a mano.

## 2. Experiencia Japan Queen

Como toda innovación, la app web Japan Queen se gesta en la búsqueda de mejorar la experiencia de usuario y como solución a un problema que debe ser acorde a las necesidades de nuestra época, esto es haciendo uso de las múltiples opciones que nos ofrece la tecnología. Desde aquí comenzamos una investigación enfocada en nuestro clientes y nuestros empleados para saber de qué manera podríamos modernizar nuestra atención. 

Por medio de diversas entrevistas e indagaciones, definimos tres tipos de usuarios, los que precisamos de la siguiente forma: 

* **Cliente (Usuario indirecto)** : Accederá a esta plataforma por medio de otro usuario que es el mesero.
* **Mesero**: Accederá a la plataforma para generar el pedido del cliente
* **Chef**: Recibirá el pedido 

El primer problema que detectamos, es que la variedad de nuestra comida es tan interesante y llamativa, que a nuestros clientes les resulta difícil decidir, por lo que cambian su pedido varias veces antes de finalizarlo. Como nosotros buscamos ante todo la satisfacción de dichos clientes, nos tomaremos el tiempo necesario hasta que estén lo suficientemente seguros de su elección. En este caso, quien se enfrenta a esta situación directamente es el mesero, quien hasta ese momento utilizaría lápiz y papel para anotar la información del pedido. Esto supone una gran dificultad. Si nuestro cliente tiende a cambiar de decisión, no es posible que nuestro mesero anote y tache reiteradamente, produciendo confusión en el resumen del pedido y generando otro problema, el tiempo en que este llegaría a cocina y si sería legible para el chef, al momento de preparar la comida. Como nuestro objetivo también es que nuestros empleados tengan una buena experiencia al momento de la atención y que a la vez pueda facilitar su trabajo, indagamos en diferentes soluciones que pudieran dar efectividad a este proceso. 

## 3.Solución al problema

Según nuestra investigación y diferentes iteraciones, decidimos que la mejor solución sería diseñar una interfaz que funcione por medio de Tablet y computador, en la que como principal objetivo, se podrá tomar pedidos, eliminar y cambiar según la decisión del cliente.

¿Cómo funciona?

Nuestro objetivo es facilitar la usabilidad para nuestros meseros y chef, pero también pretendemos que esta aplicación pueda ser utilizada por cualquier persona, sin necesidad de tener grandes conocimientos en tecnología. 

La funcionalidad es simple, nuestro mesero y chef acceden a la página principal donde se encuentra el logo de nuestro restaurante y nuestra app, bajo este logo se encuentra un botón el que deberán presionar para que se despliegue un formulario donde podrán ingresar con un correo y contraseña según su rol "Mesero/Chef". 

Vistas inicio

![paginainicio](/src/assets/images/pantallainicio.png)

![entrar](/src/assets/images/entrar.png)

Al ingresar a la vista, nuestro mesero tendrá la opción de elegir entre un menú sencillo y tradicional Japonés al  **Desayuno**  y uno un poco más elaborado a la hora de **Almuerzo y cena**. En este último podrá elegir diferentes productos en alternativas vegetarianas y no vegetarianas, así como también algunos extras para generar una experiencia personalizada.

Vista Mesero

![vista](/src/assets/images/vistamesero.png)

Vista Desayuno

![vistados](/src/assets/images/menudesayuno.png)

Vista Almuerzo y cena

![vistatres](/src/assets/images/menualmuerzo.png)

En cada vista nuestro mesero podrá, acceder a un botón volver en caso de que se equivocara en la elección de menú. Podrá elegir productos por cantidad, editar la selección, borrar, seleccionar un número de mesa que servirá para identificar el pedido de cada cliente. Cuando el pedido se encuentre listo, se genera un resumen, el que se desplegará presionando el botón "Ver resumen". 

Vista de Resumen de Pedidos/Enviar a cocina

![vistaresumen](/src/assets/images/verresumen.png)

Cuando nuestro mesero se asegure de que nuestro cliente ha quedado satisfecho con su elección, deberá presionar el botón "enviar a cocina" que se encuentra dentro de la lista de resumen del pedido. El pedido será enviado al chef, quien ingresará directamente a la vista de pedidos entrantes en donde tomará el tiempo de preparación seleccionando el botón **_"Preparando"_** y podrá presionar el botón **_"Terminado"_**, esto generará una alerta que aparecerá como un icono check en la vista de ingreso del mesero. Así, este último podrá retirar el pedido y entregarlo en poco tiempo a la mesa correspondiente.

![pedidosentrantes](/src/assets/images/pedidosentrantes.png)

## 4. Diseño e Interfaz

Para el diseño de la aplicación, establecimos una planificación basada en historias de usuario entregadas en los requerimientos, las que cumplimos en cada sprint.

[Acá puedes ver nuestras historias de usuario](https://miro.com/welcomeonboard/GHZKk4i7qmws1BdWWaO6LWIPo78g6iELIRGWvQOgDeJuNOrHROk3SWt51fwvsNBs)

A medida que fuimos cumpliendo metas en cada sprint, comenzamos a desarrollar nuestra idea en Figma. Comenzamos con un diseño sobrio y muy oscuro que contenía información necesaria para poder desplegar nuestra app. Luego de iteraciones y feedback que recibimos de nuestros usuarios y clientes, ellos plantearon que si bien la aplicación cumplía con los requerimientos y solucionaba problemas, necesitaba algo que la hiciera más interesante para que tuviera un gran efecto al momento de verla. En consecuencia, decidimos cambiar nuestro diseño agregando elementos que hacen referencia a la cultura popular japonesa. Utilizamos ilustraciones digitales y una paleta de colores que representativa.

Teniendo en cuenta lo anterior, creamos nuestro prototipo de alta fidelidad. Hicimos una nueva iteración en la que nuestros usuarios y clientes acreditaron que efectivamente el nuevo diseño representa y proporciona una identidad única a nuestra app. 
En cuanto a la interfaz, nuestros usuarios declararon que es importante que existan la menor cantidad de "clicks" para llegar a la información importante y que debe ser touch ya que si bien, será adaptado a la pantalla de computador, su uso principal está enfocado a tablet. De este modo, finalizamos el diseño de nuestro prototipo y lo puedes ver [Acá](https://www.figma.com/proto/rv6kNzclwAkIjKlEznJ5Lh/Untitled?node-id=1%3A11&scaling=scale-down)

En base a toda la información que recopilamos según nuestra investigación e iteraciones, creamos nuestra aplicación. Te invitamos a conocer [Japan Queen](https://burger-queen2020.web.app/)