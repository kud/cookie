# Cookie

Nom nom nom! The easy way to create, read, and erase (oh noes!) cookies in #JavaScript.

## Usage

### Cookie.set

```javascript
Cookie.set("my-own-cookie", "nom nom nom", {
  domain: ".wonderland.com", 
  path: "/foo", 
  days: 4
})

Cookie.set("my-own-cookie", "nom nom nom", 4 /* days */)
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