# Where the heck is jameswhite?

Idea - you can ask a hubot where jameswhite is, and then it tell you.

![random__Channel__-_stahnma_-_Slack](https://github.com/stahnma/jwmapper/assets/6961/e37a6c6c-be0d-46e9-aea4-54bdc6433932)

# Background

1. You need to have jameswhite's location shared with you via google.
1. You need to have a hubot.
1. You need python also.

This relies heavily on [locationsharinglib](https://github.com/costastf/locationsharinglib) and [Get Cookies.txt LOCALLY](https://github.com/kairi003/Get-cookies.txt-LOCALLY).

# Setup

Inside your hubot workdir:

    mkdir maps
    cd maps
    python -m venv v
    v/bin/pip install locationsharinglib
   
Edit the maps.py file to have the correct information if it does not. You may
need to edit the `cookies.txt` location or the output string if you don't like
the one provided.

1. copy `hubot-part.js` in your `scripts` directory in your hubot.
1. Set `GOOGLE_EMAIL` in your hubot setup.
1. Grab your google cookie (I used cookies.txt local to do that) (Or see the Cookies part below)
1. Put your cookies.txt file in the same location with the map python file.


# Usage

Valid chat strings to trigger attempt to find location:

  * where is jameswhite?
  * where is james white?
  * where the fuck is jameswhite?
  * where the heck is jameswhite?
  * where the fuck is james white
  * where the heck is james white
  * where is @james.s.white?
  * where is @james.s.white
  * where the heck is @james.s.white
  * where the heck is @james.s.white?
  * where the fuck is @james.s.white
  * where the fuck is @james.s.white?


:warning: Trailing question marks are optional.

# Caveats

:warning: You also may need to edit `hubot-part.js` if the command you're calling is in a different locaiton.

:warning: This was a quick and dirty hack and is totally not production ready.

:warning: The `cookies.txt` lasts for about 10 minutes. Then you need another `cookies.txt` export.

# Cookies

The easy and most robust way to get the Google Session Cookies required is to use [Get Cookies.txdt LOCAL](https://github.com/kairi003/Get-cookies.txt-LOCALLY).

However, this requires user interaction which is probably less than ideal. 

To fix this, I had to learn a lot about cookies and how they work on Chrome. You need four cookies to make the call using locationsharinglib work. The ones that are domain `.google.com` and `www.google.com` are the domains you can filter for. However, since session cookies are never written to disk, you can't just grab them by mainuplating the sqlite database for cookies. You need a live session cookie. This can be solved by making a chrome extension to download the cookies file every 5 minutes. An extension that does that is included in the `extensions` folder. To use it, enable developer mode inside the [extensions](chrome://extensions) and then load from a path. 

This will download a `cookies_netscape.txt` file every 5 minutes, which is nice since the session cookie rotates the key every 10 minutes. From there, you can use a cron job or some other method to put the `cookies_netscape.txt` file where it's needed for the hubot work.

Note: This only works while you're logged into Chrome and your computer isn't asleep etc. It's still not that robust.

# Futures

Either we automate cookie exports (which sitll may be dangerous). Or we find another location sharing program.


# License
WTFPL



