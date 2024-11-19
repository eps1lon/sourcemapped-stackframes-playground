# sourcemapped-stackframes-playground

## cases

Expected behavior is based on the behavior of the original code.

### ✗ class-component

```bash
# expected
$ node src/class-component.js
~/src/class-component.js:3
[...]
    at new ReactComponent (~/src/class-component.js:3:11)
    at new Component (~/src/class-component.js:7:1)

# actual (SWC)
$ node --enable-source-maps swc/src/class-component.js
~/src/class-component.js:3
    throw new Error("Boom");
    ^
[...]
    at constructor (~/src/class-component.js:3:11)
    at r (~/src/class-component.js:7:1)
```

### ✓ function-component-destructuring

```bash
# expected
$ node src/function-component-destructuring.js
~/src/function-component-destructuring.js:1
function Component({ children }) {
                     ^
[...]
    at Component (~/src/function-component-destructuring.js:1:22)

# actual (SWC)
$ node --enable-source-maps swc/src/function-component-destructuring.js
~/src/function-component-destructuring.js:1
function Component({ children }) {
                     ^
[...]
    at Component (~/src/function-component-destructuring.js:1:22)
```

### ✓ function-component-hook

```bash
# expected
$ node src/function-component-hook.js
~/src/function-component-hook.js:2
  throw new Error("Boom");
  ^
[...]
    at useState (~/src/function-component-hook.js:2:9)
    at Component (~/src/function-component-hook.js:6:10)

# actual (SWC)
$ node --enable-source-maps swc/src/function-component-hook.js
~/src/function-component-hook.js:2
  throw new Error("Boom");
  ^
[...]
    at useState (~/src/function-component-hook.js:2:9)
    at Component (~/src/function-component-hook.js:6:10)
```
