# startup

# Writers App

Have you ever tried to write a story? There is a lot that goes into writing a story, more so than just simply typing words on a page. Whenever I have tried to write a story, I end up with a million documents: from simple maps, to character outlines, and even plot outlines. What if we could put all of these documents in one place and connect it with the book? And if you are working on the story with someone else? Great! You can both be coauthors of the story, and work on all the documents at the same time.

[rough sketch of website]
[cs260mockupstartup.pdf](https://github.com/mangerhofer/startup/files/10526064/cs260mockupstartup.pdf)




### Key Features:

secure login

ability to upload different file types (jpeg, pdf, doc, etc)

ability to publish works under public or private

ability to share works with another for editing rights

commenting available on works users have access to (public/private)

browsing/reading published works available (to read only)

ability to follow other users 

## What I have learned:
I have learned how to successfully push and pull git repositories from Github and my development environment. The last time I tried doing this, I was pretty unsuccessful.

I have learned a lot more about how git works, there is a lot more to git than I originally thought.

I have also learned a lot more about how to write different notes.

**you can make bold notes**
*you can make italicized notes*
~~you can strikethrough~~
**bold _and_ italicize**

######So cool!

This is a modification
This is a modification

this is a modification through github

this is a second modification on github and VS


### Accessing AWS Server

use this command to access server: 
**make sure you are in correct spot (winter2023)
    ssh -i production.pem ubuntu@3.135.126.141

to exit the server simply type:
    exit
    
    
### Executing commands:
echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual

### HTML Useful Facts:

to create a comment: <-- text you want to comment -->

### Also useful:

to pull a git respository: git pull

to upload changes: 
1. git commit -am "include notes on changes"
2. git push

COMMON HTML:
html - The page container
head - Header information
title - Title of the page
meta - Metadata for the page such as character set or viewport settings
script - JavaScript reference. Either a external reference, or inline
include - External content reference
body -The entire content body of the page
header - Header of the main content
footer - Footer of the main content
nav - Navigational inputs
main - Main content of the page
section - A section of the main content
aside - Aside content from the main content
div - A block division of content
span - An inline span of content
h<1-9> - Text heading. From h1, the highest level, down to h9, the lowest level
p - A paragraph of text
b - Bring attention
table - Table
tr - Table row
th - Table header
td - Table data
ol,ul - Ordered or unordered list
li - List item
a - Anchor the text to a hyperlink
img - Graphical image reference
dialog - Interactive component such as a confirmation
form - A collection of user input
input - User input field
audio - Audio content
video - Video content
svg - Scalable vector graphic content
iframe - Inline frame of another HTML page




### How to upload changes to my domain

include the deployWebsite.sh file

in the terminal, enter this:

./deployWebsite.sh  -k /Users/mccallangerhofer/Documents/BYU/winter2023/production.pem -h mccallangerhofer.click

for subdomain uploads:
./deployFiles.sh -k /Users/mccallangerhofer/Documents/BYU/winter2023/production.pem -h mccallangerhofer.click -s <--subdomainName-->

### Other stuff I've learned from the Simon-html assignment

1. Adding an icon for the website tab is super easy and goes in the head area.
2. There are a lot more than just the basic ROYGBIV colors that can be used in HTML.
3. I learned a lot about formatting tables correctly. Different columns go in "td" but different rows go inside "tr"
4. I learned/was reminded how to change file permissions
    chmod 755 <--file location-->
5. it's really fun and super easy to commit changes and see the new versions upload every time I successfully commit a change to github.

### Bootstrap CSS

You can change the look of different CSS elements using words such as "bg-light", "btn-secondary", etc in the element names (div, p, main, etc)

### HTML & CSS stuff I learned:

Formating my HTML with CSS can get really frustrating, especially because sometimes no matter what I did it wouldn't work. But the nice thing about coding is that there are multiple ways to accomplish what I'm trying to do. The answer isn't always through bootstrap, sometimes I have to format using my main.css page. 

Also relative positioning is super important and usually is what I'm missing (especially if it's already in 'absolute').

Be super careful and make sure you are double checking everything!!!


### JS stuff I learned from Simon:

Somethings you code in CSS don't really matter if you code JS right.

This doesn't really have much to do with JS, but I learned I've actually made decent notes here and after being stumped for awhile, I discovered my problem was addressed here. 

JS is also pretty cool, I learned there is a lot I can do with JS that makes a website functional and it's really cool! I'm excited to keep learning more about JS.

Also Javascript debugging is super useful and really helped me when my code wasn't working. DON'T forget to use debugging techniques!!!

Javascript Functions:

push - Add an item to the end of the array
pop - Remove an item from the end of the array
slice - Return a sub-array
sort - Run a function sort an array in place
values - Creates an iterator for use with a for of loop
find - Find the first item satisfied by a test function
forEach - Run a function on each array item
reduce - Run a function to reduce each array item to a single item
map - Run a function to map an array to a new array
filter - Run a function to remove items
every - Run a function to test if all items match
some - Run a function to test if any items match


###MIDTERM REVIEW:

CNAME are aliases (from one dns record to another dns record) - changes without changing IP address
A changes to a literal ip address (if you are pointing to an IP address)

HTTPS:
div stands for division
ol - ordered list
ul - unordered list


CSS:
can use @import to upload from online
to change an element in CSS with name in quotes, have to use element.name since the name isn't actually an element
pals before marriage (content, padding, border, margin)


Javascript:
filter - filters through an array and returns just the values you are looking at
regex is / a | f / i - i is the regex designation (or case sensitive doesn't matter)
reduce - takes an array and reduces it down to one value
document object gives you back the DOM
querySelector gets first element... querySelecterAll gets all 
map - puts an element together (takes an array and maps each value in the array to another value in another array of the same size)

How would you use JavaScript to select all the p elements with an id of “header” and change their text color to red?
str.bold().fontcolor(‘red’);	document.getelementbyID(‘header’).innerHTML

Which of the following are valid syntax for creating a function in JavaScript?
a.execute = (x) => { } 	const f = function(x) { } 	function(x) { } 

What is the correct syntax for creating a javascript object?
let a = {number: 1}; - must use a colon ':' and NOT an equal sign '='

How do you access properties in a javascript object?
a.number a[“number”]

valid ways to include javascript in HTML
<script>1+1</script>    <script src = 'main.js'/>   <div onclick = '1+1'/>

JSON:
always has key values in double quotes " " NOT single quotes ' '
null is valid JSON, undefind is not

data types:
string - "crockford"
number - 42
boolean - true
array - [null,42,"crockford"]
object - {"a":1,"b":"crockford"}
null - null

You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.



DOM:
textContent - contains all of the element's text
innerHTML - You can access a textual representation of an element's HTML content 
removeChild - deletes elements when called on parent function

event listeners:
Clipboard - Cut, copied, pasted
Focus - An element gets focus
Keyboard - Keys are pressed
Mouse - Click events
Text selection - When text is selected



Promises:
function gets put off on the side and waits until it is resolved. Will not get resolved until timeout ends (# at end is time in milliseconds)
finally always gets called
catch gets called if there is an error - for catch to happen, you have to call regect instead of resolve
    promise function is called -> then it does the then function -> catches anything that isn't allowed -> and ends with finally
    
ASYNC & AWAIT - by putting async in front of a promise, you can then call await so that the promise resolves before you continue with the code rather than just letting the promise complete on its own. async will always return a promise even if you don't use await, await just lets you control when promise is returned


chmod +x deploy.sh - makes a script executable
ls -la - can list all files (even hidden ones) in a long format if you provide the parameter
sudo - Execute a command as a super user (admin)
ssh - executing commands remotely using the secure shell program 

### Javascript Startup

I thought I understood enough javascript to do everything I needed but I discovered that the code I need for my website is a lot more complicated than I orginally thought and it requires a lot more than simple javascript to be functionable.


### URL Notes:

The Uniform Resource Locator (URL) represents the location of a web resource. A web resource can be anything, such as a web page, font, image, video stream, database record, or JSON object. It can also be completely ephemeral, such as a visitation counter, or gaming session.

Part - Example - Meaning

Scheme - https - The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.

Domain name - byu.edu - The domain name that owns the resource represented by the URL.

Port - 3000 - The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.

Path - /school/byu/user/8014 - The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.

Parameters - filter=names&highlight=intro,summary - The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.

Anchor - summary - The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.

A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be <urn:isbn:10,0765350386>. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL and URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

##### Common Ports

Port	Protocol

20	File Transfer Protocol (FTP) for data transfer

22	Secure Shell (SSH) for connecting to remote devices

25	Simple Mail Transfer Protocol (SMTP) for sending email

53	Domain Name System (DNS) for looking up IP addresses

80	Hypertext Transfer Protocol (HTTP) for web requests

110	Post Office Protocol (POP3) for retrieving email

123	Network Time Protocol (NTP) for managing time

161	Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers

194	Internet Relay Chat (IRC) for chatting

443	HTTP Secure (HTTPS) for secure web requests


#### HTTP Common Rules

GET - Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.

POST - Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.

PUT - Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should - contain the updated resource. The body of the response may contain the resulting updated resource.

DELETE - Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.

OPTIONS - Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.

STATUS CODES:

1xx - Informational.

2xx - Success.

3xx - Redirect to some other location, or that the previously cached resource is still valid.

4xx - Client errors. The request is invalid.

5xx - Server errors. The request cannot be satisfied due to an error on the server.



HTTP headers specify metadata about a request or response. This includes things like how to handle security, caching, data formats, and cookies. 



HTTP Cookies

This allows the server to remember things like the language preference of the user, or the user's authentication credentials. A server can also use cookies to track, and share, everything that a user does. However, there is nothing inherently evil about cookies, the problem comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.



SOP & CORS

Simply stated Same Origin Policy (SOP) only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing.

Cross Origin Resource Sharing (CORS) allows the client (e.g. browser) to specify the origin of a request and then let the server respond with what origins are allowed.

For CORS to run, need <Access-Control-Allow-Origin: *>


### Fetch

The basic usage of fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.


### Node.js

1. Create your project directory
2. Initialize it for use with NPM by running npm init -y
3. Make sure .gitignore file contains node-modules
4. Install any desired packages with npm install <package name here>
5. Add require('<package name here>') to your JavaScript code
6. Run your code with node main.js
    
### Creating a web service
    
1. in terminal: mkdir webservicetest (or any other name)
2. in terminal: cd webservicetest
3. in terminal: npm init -y
4. in terminal: npm install http
5. write up code for main.js
6. in terminal: node main.js
7. on web browser: localhost:8080
8. to stop: ctrl-c
    
### Stuff I've learned with Simon Service: 
    
    There is a surprising amount of code that goes into adding just a simple quote or picture to the simon project. It's made me realize that I didn't quite understand as much as I thought. But also I understood more from the about.js code than I thought I did. 
    
    Also... DON'T FORGET TO ADD THE NECESSARY CODE TO THE .html FILE TO LINK THE .js FILE, OTHERWISE YOU WILL SPEND WAYYYY TOO LONG TRYING TO FIGURE OUT WHY YOUR CODE ISN'T WORKING...
    
    Creating a working service for your website isn't that hard, just make sure you are being careful as you code otherwise it will get really complicated really fast.
