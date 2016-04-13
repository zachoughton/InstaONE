#Filter bubbles - Web Development
---

**Name:** Isaac Houghton

**Course:** BA (Hons) Web Media

**Unit Code:** WEB14203

#InstaONE
----
######Introduction
----
I decided to try and create an APP that could pull the best photos from instagram, and place them in alligment, on a web-platform desktop device. I wanted to find the best photos in all genres and have a refresh-rate short enough to display the latest and greatest. Essentially becomming a go"to" place for the most popular content on instagram at that moment in time.

The idea for this came about when i watched one of my friends frantically refresh the "explore tabe on instagram (mobile App). This triggered my thought process, people -> see great new content -> often. While i thought that it could be possible to create a third-party mobile app for an app, i didnt see it as a affective solution. A web-based APP however, got my attention as i prefer to use instagram on their web-platform anyway.

----
######STEP ONE 
----
My first step was verify the existence and version of the crucical programs that were going to power such idea. GIT and NODE.js. 
To do so i simply opened my terminal and typed
```
Git --version
Node --version 
```
and it appeared i was out of date on both. Therefore i quickly updated both and carried onto my next step. I needed to be able to access libraries powerful enough to give me good javascript functionilty and integration with Instagram's API, and after copious research i discovered the delightful bower. 
```
npm -g install bower
```

Bower essentially is the back-bone to the APP.

----
######Hosting
----
To host my APP i looked at a few options, some local development servers etc.. i.e. Serve, rack, anvil..
But the easy and relatively cheap solution of Amazon Web Services (AWS) seemed to suit.


![Woops](http://www.knd.com.au/wp-content/uploads/aws.png)
----
######STEP TWO - HTML 
----
Once i had layed the ground work down, it was important i documented/filed everything well. I decided to start with the outline for the index.html, trying to establish a connection with my .js file and index.html.

![Woops](http://i68.tinypic.com/6zc009.png)

At this point it looks like some un-formatted HTML, not very interesting. However, the plan is to make it pop.

----
######STEP THREE - Javascript 
----

To start i made a application.js file in my instaone file. This i connected to the index.html
```
<script src="js/application.js"></script>
```
I decided to use Google's Javascript framework Angular JS. (In terminal again.)
```
bower install angular
```
This downloaded all the juicy Angular.js files and put them in a file called "Bower_components".

![Woops](http://i63.tinypic.com/1qpojd.png)

Angular supposably helps pull data from the Instagram API into my/your web app. 

through arduous, contious, and determined research i developed my application.js file to this final product.

![Woops](http://i65.tinypic.com/qo9ceo.png)

######Analysation

**Line's 1 & 28** wrap our code together nicely

**Line 3** is my Instagram client ID, this proved difficult at first to get, until i used a previous account. Why? because Instagram since November 2015 has changed it's app registration process to one that need to be approved in sandbox mode. With a account dating back before the change it seemed i got away with registering an application without review. 

**In line 5**, we are **initializing** our app called “instaONE”.

**In line 7**, we are creating a “factory” (which does some stuff and returns some data) called “InstagramAPI” which uses Angular’s built-in $http property.

**Lines 9–16** i used a method called “fetchPopular” that hit's the Instagram API and get's data back (SOME). I constructed an **endpoin** variable that should return 99 items (Instagram only returns 30–40 items at this moment).

**Lines 21–26** create a “controller” called “ShowImages” that will interact with our HTML. We create an empty object called “data” that we pump the API response into. This is all the JS we need.

At this point it was necessary to update the HTML to interact with the **Java**.

----
######Connecting the behaviour with the actual markup.
----

I Had to at this point make my HTML aware that this was an app im building, therefore going back to the HTML i updated line 3.
```
<html ng-app="instaONE">
```
This line of code connects to the application.js file, and let's Angular know that anything in its code chunk is of importance.

Moving forward, another big change was to implement this 
```
<div class="spot" ng-repeat="p in pics">
  <p><a href="http://instagram.com/{{p.user.username}}" target="_blank">{{p.user.username}}</a></p>
  <a href="{{p.link}}" target="_blank"><img ng-src="{{p.images.thumbnail.url}}" /></a>
</div>
```
<div> into the index.html. This, if anything, is the most important part of my index.html as it is responsible for pulling content directly from instagram's API.

It displays the username and image, linking to Instagram’s web site during a blank tab.

**“ng-repeat”** to loop through the array of content that comes back from the Instagram API. **“pics”** corresponds to line 24 from our application.js file.

The **image tag** uses ng-src instead of src so it renders the content prior to the HTML load.

![Woops](http://i64.tinypic.com/1690ncg.png)

This under the command of ->
```
<section ng-controller="ShowImages as images">
```
Will access the code command/data inside the "showimages controller of our Application.js file (Line 21).

At this point my index.html was starting to piece together and looked like this.

![Woops](http://i67.tinypic.com/2qm1ce9.png)

######STEP THREE - CSS

To glitter off the final product, i decided to put some CSS into the index.html. Unfortunately this renders pointless due to restrictions as i will develop on. Yet, for technical and practical appreciation i have put it there anyway. 
```
  <style type="text/css">
    body {padding:1;margin:0;font-weight:300;font-family:Helvetica;}
    a {color:#39f;}
    header, section, footer {padding:30px 30px;}
    header {background:#f99;padding-bottom:0;}
    section {overflow:hidden;}
    h1 {font-family:Helvetica;font-size:48px;margin:0;font-weight:700;}
    h1 span {font-size:16px;font-weight:400;padding:0 0 0 10px;}
    .spot {float:left;margin:0 15px 15px 0;}
    .spot p {font-weight:400;}
    footer {background:#3f9;}
    footer a {color:#fff;}
  </style>
```
---
### Issues I Came Across
---

**INSTAGRAM API**

Unfortunately due to Instagram's new ACCESS_TOKEN policy its become more challeging to pull data from there API, since having done this project in class 

"Instagram Platform and documentation update. Apps created on or after Nov 17, 2015 will start in Sandbox Mode and function on newly updated API rate-limits and behaviors. Prior to going Live, and being able to be used by people other than the developers of the app, these apps will have to go through a new review process. Please read the API documentation or the Change Log for more details.

Any app created before Nov 17, 2015 will continue to function until June 2016. After June 2016, the app will automatically be moved to Sandbox Mode if it wasn't approved through the review process. The previous version of our documentation is still available here."(https://www.instagram.com/developer/)

This unfortuntaley became a huge limiting factor in the success of this app. However, i was not fortunate to be able to predict this, so i have to live with it. However, i hope my ability to explain my process in thorough detail and the nature of efforts has sufficed in gaining you confidence with my understanding of API's, their implementation, and the building blocks to creating my very own web-application. 

**OSX npm permissions**

I came across a number of challenges laying down the foundations on my computer. Refferring to "foundations", i mean installing properly bower, and angular. Due to a number of issues regarding the update OSX El Capitan, my computer struggled to download .js libraries particularily Angular. As a result i had to Re-install OSX after a number of silly sudo-commands in Terminal which, created a logic board problem on my mac. Which, didn't help.

##Mockup

![Woops](http://i64.tinypic.com/2ymu1dl.jpg)

##*The Blog posts*

######Here are my blog posts for this unit: RELEVANT PRESENTATIONS CAN BE FOUND IN LINKS.

Learning Goals

https://github.com/zachoughton/InstaONE/blob/master/week1

Filter Bubbles concept

https://github.com/zachoughton/InstaONE/blob/master/week2

Peer learning

https://github.com/zachoughton/InstaONE/blob/master/week3

Filter Bubbles experiments

https://github.com/zachoughton/InstaONE/blob/master/week4

Formative assessment

https://github.com/zachoughton/InstaONE/blob/master/week5

Team work

https://github.com/zachoughton/InstaONE/blob/master/week8

Filter Bubbles

https://github.com/zachoughton/InstaONE/blob/master/week9

## Inspiration

Examples of great Instagram based Apps.
http://thenextweb.com/apps/2011/07/24/the-complete-list-of-top-instagram-apps/#gref

Angular: Javascript Library, great building platform.

Import.io is another service that lets you turn website data into API data

Eli Parsier: Beware of Filter Bubbles

Instagram API (CodeWars Kata by Matteo)

Google Cabs And Uber Bots Will Challenge Jobs 'Below The API'

Selfie City

Googling Freedom is a practical demonstration of a filter bubble

Javascript Book

Instagram API "how-to tutorial"

InstaFeed.js is a JS library you can use to pull data from Instagram (you may find it easier than using the Instagram API)

Selfie City investigates social media self-portraits in five cities across the world

Kimono lets you turn websites into structured APIs from your browser in seconds


## code

Index.html - (https://github.com/zachoughton/InstaONE/blob/master/index.html)

javascript - (https://github.com/zachoughton/InstaONE/blob/master/application.js)

My code in final form. Not working.

#### Formative Presentation.

View my Formative Presentation here. 

https://docs.google.com/presentation/d/11LuClOlU3TYS1TNuWcQA5-PFfCG15WW26xOrEmkeSCo/pub?start=false&loop=false&delayms=3000 

### Summative Presentation

Final Basic Presentation. More a visual cue for explanation.

https://docs.google.com/presentation/d/13yYqKTalmJL5GrandNzVrILa7TLLDZoCY42DBk50Jt8/pub?start=false&loop=false&delayms=3000

