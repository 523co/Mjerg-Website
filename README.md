# Mjerg website

Static site for Mjerg, the Osmium bot. 

## Files

```
index.html        home
about.html        what it is, who runs it
commands.html     all 103 commands, searchable
info.html         version, hosting, permissions, what gets stored
help.html         adding it, setup, FAQ
developers.html   Ruby, and links for building your own Osmium bot

css/style.css     everything, one file
js/config.js      <- edit this one
js/site.js        nav, active link, config injection
js/commands.js    the command list + the search/filter on commands.html
assets/           logo files
scripts/prerender-commands.js   copies the command list into commands.html
```

After editing `js/commands.js`, run `node scripts/prerender-commands.js` so
the list in `commands.html` matches. Browsers render it from the JS either
way; the copy in the HTML is for search engines and link previews.

