Como agregado a las características que ya has aprendido, los template strings pueden ser **taggeados**. Esto se logra colocando el nombre de una función, como `fn`, antes del tempate string. Por ejemplo:

```js
fn`Hello ${you}! You're looking ${adjective} today!`
```

La semántica de un template string taggeado es bastante diferente en comparación a uno normal. En escencia, estos son una llamada de una funcion especial: Abajo vemos el resultado:

```js
fn(["Hello ", "! You're looking ", " today!"], you, adjective);
```

Nota que los (n + 1) argumentos 
Note how the (n + 1)th argument corresponds to the substitution that takes place between the nth and (n + 1)th entries in the string array. Thus, there is always one more entry in the string array than there are substitutions; in the above, the counts are 3 vs. 2.

This can be useful for all sorts of things, but one of the most straightforward is automatic escaping of any interpolated variables. For example, you could write an HTML-escaping function, and name it `html`, such that:

```js
html`<p title="${title}">Hello ${you}!</p>`
```

…returns a string with the appropriate variables substituted in, but with all HTML-unsafe characters replaced.

## Challenge

In fact, let's do that right now. You will be given two arguments to your program: a username, and a comment. Both will potentially contain HTML-unsafe characters (namely `'`, `"`, `<`, `>`, and `&`). Your job is to use tagged template strings to log a safely-escaped HTML rendering of the comment.

For example, if the username is `"domenic"` and the comment is `"<dl> is a fun tag"`, you should output:

```html
<b>domenic says</b>: "&lt;dl&gt; is a fun tag"
```

As before, you could start doing this using simple ES5 constructs. But the goal is for you to write a function that you can use as a tag in a tagged template string, that will do any escaping automatically.

## Hints

If you don't remember the corresponding escape sequences, they are:

```
' | &apos;
" | &quot;
< | &lt;
> | &gt;
& | &amp;
```

Remember that the best way to do string replacement in JavaScript is with regular expressions, e.g.

```js
var replacedS = originalS.replace(/a/g, "b");
```

The outline of your program should look something like this:

```js
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(/* what goes here? */) {
    // what goes here?
    // don't forget to return the escaped string!
}
```

If you're not sure where to start, maybe try `console.log`ing the arguments to your `html` function.

Finally, feel free to use **rest** parameters if you think that would make things easier!
