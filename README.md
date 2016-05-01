# template-assert-parent
A simple package that help enforces template's parent template.

## Installation
```bash
meteor add meteoric124:template-assert-parent
```

## To use:
Suppose you have two templates: `foo` and `bar`. And suppose you want
`bar` to be parent of `foo`, then in `foo`'s `onRendered` callback:

```javascript
Template.foo.onRendered(function() {
  this.assertParent(Template.bar);
});
```

If `foo` is not under `bar`, then in your console screen:

> Template.foo template must be under Template.bar

## Caveats

This is all the use-case **I** need for the moment. That is, I don't care if
it is an immediate child or grand* child. If you need to be able to specify
levels, ask me, and I'll push something.