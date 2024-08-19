---
title: Personal Tools
lang: en-US
outline: deep
---
# Personal Tools
Here are a bunch of small tools and fun things I made. They're not very big but I find them to be fun and useful.

I've elected to localize all of these smaller tools into one singular place so that its easier to find these tools. (everything here will make its way onto READMEs eventually).

>***Click on any of the subheadings to head to the code repo***

## [wallpaper-sorter-hue](https://github.com/pinapelz/wallpaper-sorter-hue)
A Python script to sort images by their hue. I used this to sort a bunch of wallpapers into different colors. It also comes with a visualizer that will use a random image from each hue/subhue to make a sort of rainbow.

![An example of visualization output. Wallpapers sorted by hues attached next to each other in a line](https://files.catbox.moe/jrlted.png)
<div align="center">
An example output of the visualizer.py program
</div>


Install Pillow
```
pip install Pillow
```

Usage:
```
python sort-wallpaper.py -i path_to_pictures -o output_directory
python visualizer.py -i path_to_sorted_wallpaper -o output_file_name.png -t 200
```
-t: The max height of each image in the output visualization

## [mojibaka](https://github.com/pinapelz/mojibaka)
This is a very simple static flask web app that attempts to resolve "mojibake". These are garbled characters that occur due to text being encoded/decoded in mismatching formats.

While not everything can be recovered 100% of the time (since its a lossy process), sometimes these mismatches line up just right such that none (or nearly none) of the characters are mapped to NULL, meaning that its just a matter of "remapping" everything to make the text readable again.

These days I still run into older Chinese/Japanese programs (specifically Windows installers) where the characters don't quite show up right. While you could troubleshoot fixing it, I find its handy to have a tool like this to quickly get the gist of whats happening.

Hosted at: https://mojibaka.pinapelz.com

You're also welcome to call the API listed on the README.

![Screenshot of Mojibaka site](https://files.catbox.moe/6vshtu.png)

## [youtube-auto-stamp](https://github.com/pinapelz/youtube-auto-stamp)
A CLI program that tracks the speed of a YouTube live chat and records down moments of high chat activity. It can also count income via Superchats as a side task.

I originally made this to help automate the process of finding fun stream moments since those are usually the times when chat goes faster. However it turned out to also be a pretty decent way of finding chats with certain keywords LIVE.

```
YouTube Live Chat Message Rate Tracker

positional arguments:
  video_id              The ID of the YouTube video for the live chat

options:
  -h, --help            show this help message and exit
  --show-chat           Show the live chat in the terminal window
  --superchats          Log superchat messages and amounts
  --threshold THRESHOLD
                        Log timestamps when the message rate exceeds this value (msg/s)
  --keywords KEYWORDS   Log timestamps when a message contains any of these keywords. Enter keywords separated by commas
  --cooldown COOLDOWN   Minimum time that must pass before another notable moment is logged (in seconds)

Example: python yt_livechat_stats.py OoNndQzHMlI --show-chat --superchats --threshold 15 --cooldown 30
```

## [vstream-tracker](https://github.com/pinapelz/vstream-tracker)
A self-hostable Discord bot for tracking VTubers listed on Holodex. Its very simple and was created as a demo of the JHolodex library. There's a quickstart guide on how to quickly get things up and running on the repo README already.

![Screenshot of sample VStreamtracker bot message](https://files.catbox.moe/qzmlip.png)

## audiolink-player
`This is a stub for now. Coming soon!`

## ragtag-remote-player
`This is a stub for now. Coming soon!`

## [youtube-timed-playlist](https://github.com/pinapelz/youtube-timed-playlist) - archived
This web application helps you create a YouTube playlist where you can specify start and end times for each video. Use the `Maker` to create a playlist and get a playlist code in Base64. Then use the `Player` to play it back.

Hosted at: https://yttimed.pinapelz.com/

## [ffxiv-macro-time-calculator](https://github.com/pinapelz/ffxiv-macro-time-calculator)
This is a simple crafting calculator for the game Final Fantasy XIV. Weirdly enough, I couldn't find a easy way to count the total time a macro takes and how long crafting N items will take with that macro + how much food/tinctures will be required. 

(I get that everyone uses more fancy Teamcraft stuff but having something like this is also pretty convenient)

Hosted at: https://ffxivmacro.pinapelz.com/

## [DiscordAutoReplyGPT](https://github.com/pinapelz/DiscordAutoReplyGPT)
This is a Python + JS program that is able to automatically reply to Discord messages with the help of BetterDiscord. The BetterDiscord plugin fires messages via websocket to a locally running Python script which then generated a reply and sends the reply for you.
 
Check out the README on the repo for more details.