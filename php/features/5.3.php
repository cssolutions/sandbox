<?php

// Support for namespaces has been added.
//Support for Late Static Bindings has been added.
//Support for jump labels (limited goto) has been added.
//Support for native Closures (Lambda/Anonymous functions) has been added.
//There are two new magic methods, __callStatic() and __invoke().
//Nowdoc syntax is now supported, similar to Heredoc syntax, but with single quotes.
//It is now possible to use Heredocs to initialize static variables and class properties/constants.
//Heredocs may now be declared using double quotes, complementing the Nowdoc syntax.
//Constants can now be declared outside a class using the const keyword.
//The ternary operator now has a shorthand form: ?:.
//The HTTP stream wrapper now considers all status codes from 200 to 399 to be successful.
//Dynamic access to static methods is now possible: 