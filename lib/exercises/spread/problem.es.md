ES6 provee dos conceptos muy cercanos, **rest** y **spread** (descomposición), para funciones con un número variable de argumentos. En este ejercicio exploraremos el lado **spread** de las cosas.

Un ejemplo de una función variable podria ser `Math.max`, al cual puedes llamar con cualquier número de argumentos: `Math.max(1, 2)` o `Math.max(1, 2, 3)` o ...

En ES6 puedes usar la sintaxis `..args` para "spread" un array cuando se llama a una función. Por ejemplo:

```js
var numbers = [1, 1, 2, 3, 5, 8];
var max = Math.max(...numbers);
```

Esto reemplaza la necesidad de usar a nuestro viejo amigo, `.apply`. Que alivio!

## Reto

Tu programa recibirá un número variable de argumentos (`process.argv[2]` en adelante), los cuales serán todos números. Usa el operador ES6 spread para encontrar el mínimo valor entre estos argumentos e imprimirlo por la consola.

Y vamos a imprimir la lista de números también, para hacer esto mas claro. Entonces el output debería ser, por ejemplo:

```
El valor mínimo en [18,5,7,24] es 5
```
