![Cookie](https://raw.github.com/kud/cookie/dev/logo.png)

Nom nom nom! The easy way to cook and eat (yummy!) cookies in #JavaScript.

## Usage

### Cookie.set

```javascript
Cookie.set("my-own-cookie", "nom nom nom", {
  domain: ".wonderland.com",
  path: "/foo",
  expires: +new Date() + (Cookie.DAY * 4)
});

var expires = new Date();
expires.setTime(expires.getTime() + 8 * Cookie.DAY);
Cookie.set("my-own-cookie", "nom nom nom", expires);
Cookie.set("my-own-cookie", "nom nom nom");
```

### Cookie.get

```javascript
Cookie.get("my-own-cookie"); // 'nom nom nom'
```

### Cookie.remove

```javascript
// bye-bye!
Cookie.remove("my-own-cookie");
Cookie.remove("my-own-cookie", {
  domain: ".wonderland.com",
  path: "/foo"
});
```

## Installation via Bower

```shell
$ bower install kud-cookie (--save-dev)
```

## Build and test

In order to download and install dependencies, create a minified version and run the tests :

```shell
$ make
```

## Sugar!

Cookie fits well with the excellent lib [moment.js](http://momentjs.com/). First of all, install moment (```$ bower install moment```). Now, you can use something like this:

```
// Cookie should be eaten before the end of the day
Cookie.set("gingerbread", "excellent", {
  expires: moment().endOf('day')
});
```

## Attribution

<a href="http://thenounproject.com/noun/cookie/#icon-No17125" target="_blank">Cookie</a> designed by <a href="http://thenounproject.com/car.lancaster" target="_blank">Caroline Lancaster</a> from The Noun Project

## The krew!

This project is alive thanks to my bro' @putaindecode. Cheers mate!
