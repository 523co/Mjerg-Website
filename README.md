# Mjerg website

Static site for Mjerg, the Osmium bot. No build step, no dependencies. Open
`index.html` in a browser and it works, or drop the folder on any static host
(GitHub Pages, Netlify, Cloudflare Pages).

## Files

```
index.html        home
about.html        what it is, who runs it
commands.html     all 93 commands, searchable
info.html         version, hosting, permissions, what gets stored
help.html         adding it, setup, FAQ
developers.html   Ruby, and links for building your own Osmium bot
donate.html       marked coming soon

css/style.css     everything, one file
js/config.js      <- edit this one
js/site.js        nav, active link, config injection
js/commands.js    the command list + the search/filter on commands.html
assets/           logo files
```

## Editing

**Links, prefix, version, the stat strip:** `js/config.js`. One edit changes
every page.

**Commands:** `js/commands.js`. The names and categories came off the bot's own
help output and are correct. The one-line descriptions and the `<args>` were
written for the site, so read through them once and fix anything that is wrong.

**People:** `developers.html`, written directly into the page. Copy an existing
`.person` block to add someone.

## Still to fill in

Search for `TODO` in `js/config.js`. Currently just one:

- source link, if the bot ever goes open source. Until then it renders as a
  dead link with a "Link not set yet" tooltip, so delete the "Source" entry
  from the four page footers if it is never going to be filled in.

## Things worth knowing

- There is no bot invite URL by design. Mjerg is added from inside the Osmium
  app: click the bot, then "Add to Chat". Both `index.html` and `help.html`
  explain this, so if the flow changes, both need updating.
- Command examples are written in the HTML with the literal `!` prefix so they
  read correctly with JavaScript off. Elements tagged `class="js-prefix"` get
  rewritten at load if `config.js` sets a different prefix.
- The palette in `css/style.css` is taken from the logo files: background
  `#201e1d`, red `#ec3013`, text `#f3f2f2`. Keep them in step if the logo
  changes.
- Dark only. There is no light theme.
