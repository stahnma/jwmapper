# Where the heck is jameswhite?

Idea - you can ask a hubot where jameswhite is, and then it tell you.

![random__Channel__-_stahnma_-_Slack](https://github.com/stahnma/jwmapper/assets/6961/e37a6c6c-be0d-46e9-aea4-54bdc6433932)

# Background

1. You need to have jameswhite's location shared with you via google.
1. You need to have a hubot.
1. You need python also.

This relies heavily on [locationsharinglib](https://github.com/costastf/locationsharinglib).

# Setup

Inside your hubot workdir:

    mkdir maps
    cd maps
    python -m venv v
    v/bin/pip install locationsharinglib
   
Edit the maps.py file to have the correct information if it does not. You may
need to edit the `cookies.txt` location or the output string if you don't like
the one provided.

1. copy `james.js` in your `scripts` directory in your hubot.
1. Set `GOOGLE_EMAIL` in your hubot setup.
1. Grab your google cookie (I used cookies.txt local to do that)
1. Put your cookies.txt file in the same location with the map python file.


# Usage

Valid chat strings to trigger attempt to find location:

  * Where is jameswhite?
  * where is james white?
  * where the fuck is jameswhite?
  * where the heck is jameswhite?
  * where the fuck is james white
  * where the heck is james white
  * Trailing question marks are optional.

# Caveats

:warning: You also may need to edit `james.js` if the command you're calling is in a different locaiton.

:warning: This was a quick and dirty hack and is totally not production ready.

:warning: The `cookies.txt` lasts for about 10 minutes. Then you need another `cookies.txt` export.

# Futures

Either we automate cookie exports (which sitll may be dangerous). Or we find another location sharing program.


# License
WTFPL



