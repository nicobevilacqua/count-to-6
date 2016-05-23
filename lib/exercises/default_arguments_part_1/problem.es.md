Es ES6, las funciones pueden tomar argumentos con valores por defecto.

```js
function diHola(saludo = "Hola", nombre = "CampJS") {
    console.log(`${saludo} ${nombre}!`);
}
```

Cuanto llamas a una función sin argumentos en esa posición, el valor por defecto es aplicado.

```js
diHola();            // "Hola CampJS!"
diHola("Holaaa");  // "Holaaa CampJS!"
```

También puedes usar `undefined` en cualquier posición para activar el valor por defecto.

```js
diHola(undefined, undefined); // "Hola CampJS!"
diHola("Hiya", undefined);    // "Hiya CampJS!"
diHola(undefined, "JSConf");  // "Hola JSConf!"
```

Nota que otros valores *no* activarán el valor por defecto del argumento, incluso valores como `null`, `false`, `""`, 0 `0`:

```js
diHola(null, 0); // "null 0!"
```

## Reto

Como en el ejercicio de parámetros **rest**, tu objetivo es escribir un módulo Node que exporta por defecto una función. Esta tomará dos argumentos: una cota inferior y una cota superior. Tú función debe devolver el punto medio entre estas dos cotas.

Sin embargo, tu función debe poseer valores por defecto. La cota inferior debe tener como valor por defecto a `0`, y como cota superior por defecto a `1`.

Como antes, no necesitas imprimir todo por consola. Tu solución debe ser similar a esto:

```js
module.exports = function puntoMedio(/* que sucede aqui? */) {
    // que sucede aqui?
};
```

Probaremos tu módulo pasándole diferentes conjuntos de argumentos: A veces nada, a veces uno, otras dos. A veces pasaremos un `undefined` explícito, y tú deberás asegurarte de utilizar el valor por defecto.
