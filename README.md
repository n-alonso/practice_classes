# Build a Library

Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named `Media` with three subclasses: `Book`, `Movie`, and `CD`. These three subclasses have the following properties and methods:

Book
* __Properties__: `author` (string), `title` (string), `pages` (number), `isCheckedOut` (boolean, initially false), and `ratings` (array, initially empty).
* __Getters__: all properties have a getter
* __Methods__: `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

Movie
* __Properties__: `director` (string), `title` (string), `runTime` (number), `isCheckedOut` (boolean, initially false), and `ratings` (array, initially empty)
* __Getters__: all properties have a getter
* __Methods__: `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

CD
* __Properties__: `artist` (string), `title` (string), `isCheckedOut` (boolean, initially false), and `ratings` (array, initially empty), `songs` (array of strings)
* __Getters__: all properties have a getter
* __Methods__: `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`
