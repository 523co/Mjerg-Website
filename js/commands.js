/* =====================================================================
   Mjerg's command list.

   The names and categories are the real ones, straight off the bot's own
   help output. The one-line descriptions and the <args> are written for
   the website. Read through them once and fix anything I got wrong,
   they're the only guessed part of this file.

   Fields:
     name     required, no prefix
     args     optional, <required> and [optional]
     desc     one line, sentence case, no trailing period
     cat      must match a key in CATEGORIES
     perms    optional, the permission the *user* needs
     aliases  optional array
     example  optional, written WITHOUT the prefix, it gets added
   ===================================================================== */

var CATEGORIES = {
  info:       "ℹ️ Info",
  fun:        "🎲 Fun",
  utility:    "🔧 Utility",
  levelling:  "📈 Levelling",
  moderation: "🛡️ Moderation",
  setup:      "⚙️ Setup",
  dev:        "🔑 Dev"
};

var COMMANDS = [

  /* --- info --- */
  { name: "about", cat: "info",
    desc: "Version, uptime, and who built Mjerg" },
  { name: "avatar", args: "[user]", cat: "info", aliases: ["pfp"],
    desc: "Pull someone's avatar at full resolution" },
  { name: "communityinfo", cat: "info",
    desc: "Member count, channels, roles and creation date" },
  { name: "help", args: "[command]", cat: "info", aliases: ["commands"],
    desc: "List every command, or explain one in detail",
    example: "help warn" },
  { name: "members", cat: "info",
    desc: "Member count broken down by status and role" },
  { name: "ping", cat: "info",
    desc: "Round-trip latency to the Osmium gateway" },
  { name: "reach", cat: "info",
    desc: "How many people can actually see a message in this channel" },
  { name: "seen", args: "<user>", cat: "info",
    desc: "When a member last spoke" },
  { name: "stats", cat: "info",
    desc: "Mjerg's own numbers: communities, commands run, memory" },
  { name: "uptime", cat: "info",
    desc: "How long the current process has been running" },
  { name: "userinfo", args: "[user]", cat: "info", aliases: ["whois"],
    desc: "Profile card: join date, roles, account age" },

  /* --- fun --- */
  { name: "8ball", args: "<question>", cat: "fun",
    desc: "Ask, receive an unhelpful answer" },
  { name: "addquote", args: "<user> <text>", cat: "fun",
    desc: "Save a line to the community quotebook" },
  { name: "balance", args: "[user]", cat: "fun", aliases: ["bal"],
    desc: "Check a coin balance" },
  { name: "birthday", args: "<set|remove|list> [date]", cat: "fun", aliases: ["bday"],
    desc: "Track birthdays and announce them on the day",
    example: "birthday set 14 March" },
  { name: "buy", args: "<item>", cat: "fun",
    desc: "Buy something from the shop" },
  { name: "choose", args: "<a> | <b> | ...", cat: "fun",
    desc: "Pick one of the options for you" },
  { name: "counting", args: "[channel|off]", cat: "fun",
    desc: "Counting game that enforces the sequence and calls out breaks" },
  { name: "delquote", args: "<id>", cat: "fun",
    desc: "Remove a quote from the quotebook" },
  { name: "gamble", args: "<amount>", cat: "fun",
    desc: "Bet coins. The house is not your friend" },
  { name: "give", args: "<user> <amount>", cat: "fun",
    desc: "Send coins to another member" },
  { name: "hangman", cat: "fun",
    desc: "Start a game of hangman in this channel" },
  { name: "poll", args: "<question> | <a> | <b> ...", cat: "fun",
    desc: "Reaction poll with up to ten options",
    example: "poll pizza friday? | yes | obviously" },
  { name: "quotebook", args: "[page]", cat: "fun",
    desc: "Browse everything the community has saved" },
  { name: "rate", args: "<thing>", cat: "fun",
    desc: "Mjerg rates it out of ten, badly" },
  { name: "rich", cat: "fun",
    desc: "Coin leaderboard for this community" },
  { name: "roll", args: "[NdN]", cat: "fun", aliases: ["dice"],
    desc: "Roll dice, defaults to 1d20",
    example: "roll 2d6" },
  { name: "setcoins", args: "<user> <amount>", cat: "fun", perms: "Manage community",
    desc: "Set a balance outright" },
  { name: "ship", args: "<user> <user>", cat: "fun",
    desc: "Compatibility percentage, scientifically meaningless" },
  { name: "shop", cat: "fun",
    desc: "What coins can actually buy" },
  { name: "topstars", cat: "fun",
    desc: "Members whose messages get starred the most" },
  { name: "trivia", args: "[category]", cat: "fun",
    desc: "Multiple-choice trivia round" },
  { name: "vibecheck", args: "[user]", cat: "fun",
    desc: "Runs a vibe check. Results are final" },
  { name: "wordle", cat: "fun",
    desc: "Daily word puzzle, one grid per member" },
  { name: "work", cat: "fun",
    desc: "Earn coins on a cooldown" },

  /* --- utility --- */
  { name: "afk", args: "[reason]", cat: "utility",
    desc: "Mark yourself away, Mjerg answers for you when you're pinged" },
  { name: "calc", args: "<expression>", cat: "utility",
    desc: "Arithmetic, percentages and unit-aware maths",
    example: "calc 18% of 240" },
  { name: "convert", args: "<value> <from> <to>", cat: "utility",
    desc: "Units and currency",
    example: "convert 20 c f" },
  { name: "decode", args: "<base64|hex|url> <text>", cat: "utility",
    desc: "Decode a string" },
  { name: "define", args: "<word>", cat: "utility",
    desc: "Dictionary lookup" },
  { name: "echo", args: "<text>", cat: "utility", perms: "Manage messages",
    desc: "Repeat text back through the bot" },
  { name: "encode", args: "<base64|hex|url> <text>", cat: "utility",
    desc: "Encode a string" },
  { name: "hash", args: "<algorithm> <text>", cat: "utility",
    desc: "md5, sha1 or sha256 of some text" },
  { name: "pin", cat: "utility", perms: "Manage messages",
    desc: "Pin the message you replied to" },
  { name: "pins", cat: "utility",
    desc: "List what's pinned in this channel" },
  { name: "quote", args: "<message link|id>", cat: "utility",
    desc: "Pull a message into the current channel" },
  { name: "remind", args: "<duration> <text>", cat: "utility", aliases: ["rm"],
    desc: "Ping you later with a note",
    example: "remind 45m check the deploy" },
  { name: "suggest", args: "<text>", cat: "utility",
    desc: "Send a suggestion to the suggestions channel" },
  { name: "tag", args: "<name|create|delete>", cat: "utility",
    desc: "Saved snippets of text the whole community can call up" },
  { name: "time", args: "[user|timezone]", cat: "utility",
    desc: "Current time, or a member's local time" },
  { name: "translate", args: "<language> <text>", cat: "utility", aliases: ["tr"],
    desc: "Translate text into another language" },
  { name: "unpin", cat: "utility", perms: "Manage messages",
    desc: "Unpin the message you replied to" },
  { name: "voice", cat: "utility",
    desc: "Who's in which voice channel right now" },
  { name: "weather", args: "<place>", cat: "utility",
    desc: "Current conditions and today's range" },
  { name: "wiki", args: "<query>", cat: "utility",
    desc: "First paragraph from Wikipedia" },

  /* --- levelling --- */
  { name: "leaderboard", args: "[page]", cat: "levelling", aliases: ["lb"],
    desc: "XP ranking for the community" },
  { name: "levelrole", args: "<add|remove> <level> <role>", cat: "levelling", perms: "Manage roles",
    desc: "Hand out a role automatically when someone hits a level",
    example: "levelrole add 10 Regular" },
  { name: "rank", args: "[user]", cat: "levelling",
    desc: "Level, XP, and position on the ladder" },
  { name: "resetlevels", args: "[user]", cat: "levelling", perms: "Manage community",
    desc: "Wipe XP for one member, or for everyone" },
  { name: "setxp", args: "<user> <amount>", cat: "levelling", perms: "Manage community",
    desc: "Set a member's XP directly" },

  /* --- moderation --- */
  { name: "auditlog", args: "[count]", cat: "moderation", perms: "View audit log",
    desc: "Recent moderator actions across the community" },
  { name: "automod", args: "<rule> <on|off>", cat: "moderation", perms: "Manage community",
    desc: "Filters for spam, invites, links and mass mentions",
    example: "automod invites on" },
  { name: "ban", args: "<user> [reason]", cat: "moderation", perms: "Ban members",
    desc: "Ban a member and log it as a case",
    example: "ban @sam raiding" },
  { name: "banlist", cat: "moderation", perms: "Ban members",
    desc: "Everyone currently banned, with reasons" },
  { name: "editsnipe", cat: "moderation", perms: "Manage messages",
    desc: "Show the last edited message in this channel" },
  { name: "forward", args: "<message> <channel>", cat: "moderation", perms: "Manage messages",
    desc: "Move a message to a more appropriate channel" },
  { name: "inrole", args: "<role>", cat: "moderation",
    desc: "List every member holding a role" },
  { name: "invite", args: "[uses] [expiry]", cat: "moderation", perms: "Create invite",
    desc: "Create an invite to this community" },
  { name: "modlog", args: "[user]", cat: "moderation",
    desc: "Full moderation history for a member" },
  { name: "nick", args: "<user> [name]", cat: "moderation", perms: "Manage nicknames",
    desc: "Change a nickname, or clear it by leaving the name off" },
  { name: "purge", args: "<1-200> [user]", cat: "moderation", perms: "Manage messages", aliases: ["clear"],
    desc: "Bulk delete recent messages, optionally from one member",
    example: "purge 50 @sam" },
  { name: "role", args: "<add|remove> <user> <role>", cat: "moderation", perms: "Manage roles",
    desc: "Add or take away a role",
    example: "role add @sam Contributor" },
  { name: "roles", cat: "moderation",
    desc: "Every role in the community with member counts" },
  { name: "snipe", cat: "moderation", perms: "Manage messages",
    desc: "Show the last deleted message in this channel" },
  { name: "suggestion", args: "<accept|deny> <id> [reason]", cat: "moderation", perms: "Manage community",
    desc: "Act on a submitted suggestion and tell the author" },
  { name: "unban", args: "<user id>", cat: "moderation", perms: "Ban members",
    desc: "Lift a ban by user ID" },
  { name: "unwarn", args: "<case id>", cat: "moderation", perms: "Manage messages",
    desc: "Delete a warning by case ID" },
  { name: "warn", args: "<user> <reason>", cat: "moderation", perms: "Manage messages",
    desc: "Add a warning to a member's record",
    example: "warn @sam link spam in four channels" },
  { name: "warnings", args: "[user]", cat: "moderation",
    desc: "Warnings and past actions on a member" },

  /* --- setup --- */
  { name: "announce", args: "<channel> <message>", cat: "setup", perms: "Manage community",
    desc: "Post an announcement as Mjerg" },
  { name: "autorole", args: "<role|off>", cat: "setup", perms: "Manage roles",
    desc: "Give every new member a role on join" },
  { name: "autotranslate", args: "<channel> <language|off>", cat: "setup", perms: "Manage community",
    desc: "Translate a whole channel as people post in it" },
  { name: "channel", args: "<log|welcome|suggestions|starboard> <channel|off>", cat: "setup", perms: "Manage community",
    desc: "Point Mjerg's channels wherever you want them",
    example: "channel log #mod-log" },
  { name: "config", cat: "setup", perms: "Manage community",
    desc: "Every setting for this community on one screen" },
  { name: "managerole", args: "<role|off>", cat: "setup", perms: "Manage community",
    desc: "Which role counts as a Mjerg manager" },
  { name: "reactionrole", args: "<message> <emoji> <role>", cat: "setup", perms: "Manage roles",
    desc: "React to a message, get a role" },
  { name: "sticky", args: "<channel> <message|off>", cat: "setup", perms: "Manage community",
    desc: "Keep a message stuck to the bottom of a channel" },
  { name: "trigger", args: "<add|remove> <phrase> <response>", cat: "setup", perms: "Manage community",
    desc: "Custom auto-responses to phrases" },

  /* --- dev --- */
  { name: "echoto", args: "<channel> <text>", cat: "dev", perms: "Bot owner",
    desc: "Send a message as Mjerg to any channel it can see" },
  { name: "setavatar", args: "<url>", cat: "dev", perms: "Bot owner",
    desc: "Change Mjerg's avatar" },
  { name: "setbio", args: "<text>", cat: "dev", perms: "Bot owner",
    desc: "Change Mjerg's bio" },
  { name: "setusername", args: "<name>", cat: "dev", perms: "Bot owner",
    desc: "Change Mjerg's username" },
  { name: "status", args: "<text>", cat: "dev", perms: "Bot owner",
    desc: "Set the status Mjerg shows in the member list" }
];

/* --------------------------------------------------------------------
   Rendering. Only runs on commands.html.
   -------------------------------------------------------------------- */

(function () {
  "use strict";

  var list = document.getElementById("cmd-list");
  if (!list) return;

  var search = document.getElementById("cmd-search");
  var chipBox = document.getElementById("cmd-chips");
  var count = document.getElementById("cmd-count");
  var prefix = (window.MJERG && window.MJERG.prefix) || "!";

  var active = "all";
  var query = "";

  // chips are built from CATEGORIES, so adding a category up there is
  // the only edit needed to get a new filter down here
  var chips = ['<button class="chip is-on" data-cat="all">All ' + COMMANDS.length + "</button>"];
  Object.keys(CATEGORIES).forEach(function (key) {
    var n = COMMANDS.filter(function (c) { return c.cat === key; }).length;
    chips.push('<button class="chip" data-cat="' + key + '">' + CATEGORIES[key] + " " + n + "</button>");
  });
  chipBox.innerHTML = chips.join("");

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function matches(c) {
    if (active !== "all" && c.cat !== active) return false;
    if (!query) return true;
    var hay = (c.name + " " + c.desc + " " + (c.aliases || []).join(" ")).toLowerCase();
    return hay.indexOf(query) !== -1;
  }

  function cmdHTML(c) {
    var sig = '<div class="cmd-sig">' + esc(prefix + c.name);
    if (c.args) sig += ' <span class="arg">' + esc(c.args) + "</span>";
    if (c.perms) sig += '<span class="badge badge--perm">' + esc(c.perms) + "</span>";
    sig += "</div>";

    var body = '<div><div class="cmd-desc">' + esc(c.desc) + "</div>";

    var meta = [];
    if (c.aliases && c.aliases.length) {
      meta.push("also " + c.aliases.map(function (a) {
        return "<code>" + esc(prefix + a) + "</code>";
      }).join(" "));
    }
    if (c.example) {
      meta.push("e.g. <code>" + esc(prefix + c.example) + "</code>");
    }
    if (meta.length) body += '<div class="cmd-meta">' + meta.join(" &nbsp;·&nbsp; ") + "</div>";

    return '<div class="cmd">' + sig + body + "</div></div>";
  }

  function render() {
    var shown = COMMANDS.filter(matches);
    count.textContent = shown.length + (shown.length === 1 ? " command" : " commands");

    if (!shown.length) {
      list.innerHTML = '<p class="empty">Nothing matches \'' + esc(query) + "'.</p>";
      return;
    }

    var html = "";
    Object.keys(CATEGORIES).forEach(function (key) {
      var group = shown.filter(function (c) { return c.cat === key; });
      if (!group.length) return;
      html += '<section class="cmd-group"><h2 id="' + key + '">' + CATEGORIES[key] + "</h2>" +
              group.map(cmdHTML).join("") + "</section>";
    });
    list.innerHTML = html;
  }

  search.addEventListener("input", function () {
    query = this.value.trim().toLowerCase();
    render();
  });

  chipBox.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    active = btn.dataset.cat;
    chipBox.querySelectorAll(".chip").forEach(function (c) {
      c.classList.toggle("is-on", c === btn);
    });
    render();
  });

  render();
})();
