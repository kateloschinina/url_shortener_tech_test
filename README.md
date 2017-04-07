# URL Shortener Tech Test

What needs to be done
-----

What we need is to: Build URL shortener.

### Specification

Replace links that looks like this:

`https://github.com/makersacademy/jobhunters/blob/master/Finding%20and%20Applying%20for%20Jobs/keeping_it_fun.md`

with a link that looks like this:

`https://spike.ly/P5HrXO`

### Version 1

* Create a web application with form that takes a long URL and generates a short URL, storing the short URL and long URL together in a persistent data store.
* The application should redirect users to the long URL when the short URL is visited
* Users should not be able to submit an invalid URL
* The application should check if the URL has already been stored and not create duplicate entries

### Version 2

* Style the application - use a site like [bit.ly](https://bit.ly) as an
  inspiration, or come up with your own design.

### Version 3

* Track the number of times a shortened URL has been visited
* Track the time and date that a shortened URL has been visited
* Create a statistics page, for example at `https://spike.ly/P5HrXO/stats`,
  that shows the short URL, the long URL, each visit and the total number of
  visits

Use React.

User Stories
-----

```
Application takes a long URL and generates a short URL

Application stores short URL and long URL together in a persistent data store

Application should redirect users to the long URL when the short URL is visited

Application should check wether the URL is valid or not

Application should check if the URL has already been stored not to create duplicate entries

Application should track the number of times a shortened URL has been visited, track the time and date that a shortened URL has been visited, and show these data at statistics page `https://spike.ly/P5HrXO/stats`
```

Structure considerations
-----
Database, stores entry:
 - long URL
 - short URL

 =====> Server:
 - main page: can register new URL (check if already was registered, check if valid)
 - page for each short URL, redirecting to original URL
 - stats page for each URL with relevant information (part of main page)

How to run
-----
To run app:
```
$ git clone https://github.com/kateloschinina/url_shortener_tech_test.git
$ npm install
$ npm start
go to http://localhost:3000/ in your browser
```
Or alternatively you can use the [version](https://k-loschinina-url-shortener.herokuapp.com/) deployed to Heroku.

To run tests:
```
$ npm test
```

You can have a look at coverage by:
```
$ npm test -- --coverage
```
*Although I learned how to TDD React and React Router elements, I failed to find how to test Firebase elements and functions. Therefore final test coverage is not very high. All (or almost all) uncovered items are database related.*

About application
-----
When you open application you land on this page, that suggests you to enter long URL to get the shorter version (and it would be much shorter with real domain name, as Heroku's one is very long! =) ).
![Imgur](http://i.imgur.com/gwmTUtJ.png)

After you enter a new URL you know it was saved to database.
![Imgur](http://i.imgur.com/Ydws2ry.png)

It doesn't allow you to enter not valid URLs.
![Imgur](http://i.imgur.com/u5Oi6WF.png)

If URL has already been entered, it informs you about that, and gives some information about it.
![Imgur](http://i.imgur.com/uAyP30c.png)

Or otherwise you can find this information going to short URL stats page e.g. https://k-loschinina-url-shortener.herokuapp.com/e/stats
![Imgur](http://i.imgur.com/l5l0bvK.png)

Or you can go to original URL entering e.g. https://k-loschinina-url-shortener.herokuapp.com/e

### How URL get shortened.
Whenever you add a new URL, it transfers its number in database it into 62-base numerical system. '62' because I am using 26 lower case letters, 26 upper case and 10 numbers. It is very short indeed (e.g. first 62 entries have only one letter in this URL extension).
Examples:
* 1 => 'a'
* 500 => 'ei'
* 431345962 => 'WMSl3'
* 432423423432 => 'GnCAaCh'


Technologies considerations
-----
As this assignment was about React elements, I researched which technologies are the latest React "trends", and instead of going for more safe and familiar options (such as Express and Mongo), I dived into React-Router and Firebase (ReactFire). And I succeeded!
* **Development:** React, React-Router, (React-Router-Dom), Firebase, React-Bootstrap, Redux
* **Testing:** Chai, Sinon, Enzyme, JSDom
* **Front-End:** Bootstrap theme, CSS / HTML

Reflections / room for improvement
-----
* My main goal, while working on this tech test, was to learn how to (1) use React; (2) TDD react. And although this application could have been improved further, I think I have done a great job on grasping new concepts.
* **Time:** Although I was semi-familiar with React before, I never TDD it, and still had a lot to learn in regards to it. Therefore I focused a lot on reading and going through tutorials (like [these](https://github.com/kateloschinina/tutorial-tdd-react) [ones](https://github.com/kateloschinina/tic-tac-toe-react)). **I started working on app itself less than 48 hours ago.** I realise that much more could have been done if I had more time (some of the things are listed below).
* As this assignment was to test how quickly I can learn React elements, I spent decent amount of time to find out which technologies are the latest React trends. See more in technologies section, but for example instead of going for more familiar options such as Express and MongoDB, I has done this application with **Firebase** and **React-Router**.
* Although I learned how to TDD React and React Router elements, I failed to find how to test Firebase elements and functions. Therefore final test coverage is not very high. All (or almost all) uncovered items are database related.
* In the future Database configuration should have been hidden via ENV. Right now I do not consider this information too sensitive.
* There are still some small inconsistencies in User Flow (can you find any? =) ). I could have fixed them with more time.
