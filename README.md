## Filter bubbles
---

**Name:** Isaac Houghton

**Course:** BA (Hons) Web Media

**Unit Code:** WEB14203

# InstaONE
----
###### Introduction
----
I decided to try and create an APP that could pull the best photos from instagram, and place them in alligment, on a web-platform device. I wanted to find the best photos in all genres and have a refresh-rate short enough to display the latest and greated. Essentially becomming a go"to" place for the most popular content on instagram at that moment in time.

The idea for this when i watched one of my friends frantically refresh the "explore tabe on instagram (mobile App). This triggered my thought process, people -> see great new content -> often. While i thought that it could be possible to create a third-party mobile app for an app, i didnt see it as a affective solution. A web-based APP however, got my attention as i prefer to use instagram on their web-platform anyway.
...
----
######STEP ONE 
----
My first step was verify the existence and version of the crucical programs that were going to power such idea. GIT and NODE.js 
To do so i simple opened my terminal and typed
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

Angular supposeably helps pull data from the Instagram API into my/your web app. Hopefully.

through arduous, contious, and determined research i developed my application.js file to this final product.

![Woops](http://i65.tinypic.com/qo9ceo.png)

**Line's 1 & 28** wrap our code together nicely

**Line 3** is my Instagram client ID, this proved difficult at first to get, until i used a previous account. Why? because Instagram since November 2015 has changed it's app registration process to one that need to be approved in sandbox mode. With a account dating back before the change it seemed i got away with registering an application without review. 

**In line 5**, we are **initializing** our app called “instaONE”.

**In line 7**, we are creating a “factory” (which does some stuff and returns some data) called “InstagramAPI” which uses Angular’s built-in $http property.

**Lines 9–16** i used a method called “fetchPopular” that hit's the Instagram API and get's data back (SOME). I constructed an **endpoin** variable that should return 99 items (Instagram only returns 30–40 items at this moment).

**Lines 21–26** create a “controller” called “ShowImages” that will interact with our HTML. We create an empty object called “data” that we pump the API response into. This is all the JS we need.

At this point it was necessary to update the HTML to interact with the **Java**.

######Connecting the behaviour with the actual markup






##*The Blog posts*


## Inspiration

Iinspiration for the app:

Http://www...

## Broken code

Evidence of my code in broken form and how i overcame challenges with it.

## Working code

My code in final form, working.

#### Formative Presentation.

I presented the progress of my development with the wire-framing and planning process and also with the recipe development.

Download my Formative Presentation here.

or View on GitHub

### Summative Presentation
