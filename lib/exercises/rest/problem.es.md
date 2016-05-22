Ahora que conoces como utilizar el operador spread, podemos presentarte a su contraparte, **parámetros rest**.

Los parámetros rest son usados cuando tu escribes una función que acepta un número variable de argumentos, pero agrupándolos dentro de un array. Por ejemplo:

```js
function sum(...args) {
    var result = 0;
    args.forEach(function (value) {
        result += value;
    });

    return result;
}

sum(1, 2, 3); // 6
```

Nota que en el ejemplo anterior, `args` es un array real, con un método `forEach` y todo. Tal como el operador spread nos ayuda a deshacernos de `.apply`, los parámetros rest nos ayudan a deshacernos de `Array.prototype.slice.call(arguments)`. De hecho, nunca más deberás usar el horrible objeto `arguments`. Yayyyy!

## Reto

Este ejercicio usa un formato algo diferente al usual. Esta vez, tu objetivo es escribir un módulo Node el cual exporta por defecto una funcion **promedio**. *No necesitas* imprimir todo por consola. Eso es todo, tu solución deberá ser similar a esto:

```js
module.exports = function promedio(/* Que sucede aquí */) {
    // Que sucede aquí?
};
```

Probaremos tu módulo pasándole diferentes conjuntos de argumentos, por ejemplo `promedio(1, 2, 3)` y `promedio(5, 10)`, y asegurándonos que esta funciona en todos los casos.

Luego, el proceso es el mismo que antes: usa `{appname} verify program.js` para testear tus resultados, y así.  
