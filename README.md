@prudent/text-import
====================

Server for Prudent text import add-ons.

This is useful for Prudent add-on developers.

Installing
==========

```
$ npm install --save @prudent/text-import
```

Usage
=====

```
require('text-import').start(function(content) {
    //Place parsing functionality here
    //When parsed, output transactions to stdout
});
```