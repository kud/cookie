# Cookie

Nom nom nom! The easy way to create, read, and erase (oh noes!) cookies in #JavaScript.

## Usage

### Cookie.set

```javascript
Cookie.set("my-own-cookie", "nom nom nom", {
  domain: ".wonderland.com", 
  path: "/foo", 
  expires: +new Date() + (Cookie.DAY * 4)
})

var expires = new Date()
expires.setTime(expires.getTime() + 8 * Cookie.DAY)
Cookie.set("my-own-cookie", "nom nom nom", expires)
Cookie.set("my-own-cookie", "nom nom nom")
```

### Cookie.get

```javascript
Cookie.get("my-own-cookie") // 'nom nom nom'
```

### Cookie.remove

```javascript
// bye-bye!
Cookie.remove("my-own-cookie")
Cookie.remove("my-own-cookie", {
  domain: ".wonderland.com", 
  path: "/foo"
})
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
