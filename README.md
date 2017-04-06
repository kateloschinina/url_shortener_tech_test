# URL Shortener Tech Test

What needs to be done
-----

What we need is to: Build URL shortener.

## Specification

Replace links that looks like this:

`https://github.com/makersacademy/jobhunters/blob/master/Finding%20and%20Applying%20for%20Jobs/keeping_it_fun.md`

with a link that looks like this:

`https://spike.ly/P5HrXO`

## Version 1

* Create a web application with form that takes a long URL and generates a short
  URL, storing the short URL and long URL together in a persistent data store.
* The application should redirect users to the long URL when the short URL is visited
* Users should not be able to submit an invalid URL
* The application should check if the URL has already been stored and not
  create duplicate entries

## Version 2

* Style the application - use a site like [bit.ly](https://bit.ly) as an
  inspiration, or come up with your own design.

## Version 3

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
 - Array: visited times / dates

 =====> Server:
 - main page: can register new URL (check if already was registered, check if valid)
 - page for each short URL, redirecting to original URL
 - stats page for each URL with relevant information
