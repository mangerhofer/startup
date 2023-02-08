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

### HTML Useful Facts:

to create a comment: <-- text you want to comment -->

### Also useful:

to pull a git respository: git pull

to upload changes: 
1. git commit -am "include notes on changes"
2. git push


### How to upload changes to my domain

include the deployWebsite.sh file

in the terminal, enter this:

./deployWebsite.sh  -k /Users/mccallangerhofer/Documents/BYU/winter2023/production.pem -h mccallangerhofer.click

for subdomain uploads:
./deployWebsite.sh -k /Users/mccallangerhofer/Documents/BYU/winter2023/production.pem -h mccallangerhofer.click -s <--subdomainName-->


