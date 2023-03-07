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
