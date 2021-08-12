---
layout: default
title: Dango Music
parent: Addon Bots
nav_order: 1
---

# Dango Music
{: .no_toc }

A music addon to v1 and v2 bots.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Commands

`clip`

`clips`

`help`

`invite`

`loop`

`lyrics`

`move`

`np`

`pause`

`ping`

`play`

`playlist`

`pruning`

`queue`

`remove`

`restartmusic`

`resume`

`search`

`shuffle`

`skip`

`stop`

`uptime`

`volume`

## Examples

(Prefix is "z")

Command: `play`

Response: Plays the Music, then sends the Play Embed

> *User: zplay jazz*

> *Bot:*
> ![musicplay](https://bots.dangoweb.ga/assets/images/musicplay.png)

## Possible Errors

### When you try to play something that doesn't exist:

(Prefix is "z")

Command: `play`

Response: Plays the Music, then sends the Play Embed

> *User: zplay i3rojuhewjqijejwkpoeqifgr89etrh67gbrfnhejrnhgtffyueiwj* --- This is where the error is... the user has to mention a real video.

> *Console: ERROR*

> *Bot:*
> ![musicnotfound](https://bots.dangoweb.ga/assets/images/musicnotfound.png)

### When you are not in a voice channel:

(Prefix is "z")

Command: `play`

Response: Plays the Music, then sends the Play Embed

> *User: zplay jazz* --- This is where the error is... the user has be in a voice channel.

> *Console: ERROR*

> *Bot:*
> ![musicjoin](https://bots.dangoweb.ga/assets/images/musicjoin.png)

### When the API is outdated:

> *Console: ERROR*