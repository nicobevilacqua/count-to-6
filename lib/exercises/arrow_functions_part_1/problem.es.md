Las funciones flecha son una de las cosas mas divertidas entre las nuevas características de ES6.

En este ejercicio, nos centraremos en uno de los usos mas comunes de las funciones flecha: recortar funciones muy simples. En ES6, puedes escribir una funcion flecha así:

```js
x => x + 1
```

y eso sería lo mismo que escribir el siguiente código ES5:

```js
function (x) { return x + 1; }
```

Muy bonito, ¿verdad? Puedes poner cualquier expresión del lado derecho de `=>`, y esta será convertida en un valor de retorno. Esto es especialmente útil para realizar operaciones como `map` o `filter` en arrays.

Nota que si necesitas múltiples argumentos, deberás englobar estos entre paréntesis de la siguiente forma:

```js
(x, y) => x + y
```

## Reto

Recibirás un número variable de argumentos (`process.argv[2]` en adelante) en tu programa, los cuales serán strings. Usa funciones flecha para ejecutar una operación map-reduce sobre ellos, antes de mostrarlos por consola. Es decir, tu solución deberá empezar con algo similar a esto:

```js
var inputs = process.argv.slice(2);
var result = inputs.map(/* que sucede aqui? */)
                    .reduce(/* que sucede aqui? */);
```

En particular, tienes que:

- Mapear todos los strings obteniendo su primer carácter
- Reducir el resultado concatenándolos

Entonces, si recibes `["Hola", "arrow", "functions"]` deberás transformarlo en `"Haf"`

Para ver tu trabajo, debes mostrar la transformación por la consola. El ejemplo de arriba sería:

```
[Hola,arrow,functions] se convierte en "Haf"
```
