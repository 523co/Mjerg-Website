/* =====================================================================
   EDIT THIS FILE.

   Everything here is site-wide text and links. Change it once and it
   updates on every page, nothing else needs touching.

   Anything still set to "#" is a placeholder waiting on a real URL.
   Grep for TODO to see what's outstanding.
   ===================================================================== */

window.MJERG = {

  // Command prefix, used in every example on the site.
  // Change it here and the examples change with it.
  prefix: "!",

  links: {
    // Note: this is the SUPPORT COMMUNITY, not a way to add the bot. Mjerg
    // is added from inside the Osmium app (open its profile, hit "Add to
    // Chat"), which is why there is no invite URL here. See help.html#add.
    //
    // Two links reach the same place. The invite below is what every "join
    // the support community" link on the site points at. If the code ever
    // expires, swap in the community link on the next line instead.
    support:   "https://osm.pm/i/65YKKxgeBjixQhfs",
    community: "https://osm.pm/c/mjerg",
    // TODO: repo link, if the source ever goes public
    source:  "#",
    // Osmium's own developer docs
    osmium:  "https://osmium.chat/docs/api",
    email:   "mailto:mail@armd.one"
  },

  // Home page strip. Update by hand, or point it at the bot's own
  // stats endpoint later. The markup doesn't care where it comes from.
  stats: [
    { value: "93",     label: "commands"        },
    { value: "7",      label: "categories"      },
    { value: "Jul 2026", label: "running since"  },
    { value: "0",      label: "paid features"   }
  ],

  version: "26.92"
};
