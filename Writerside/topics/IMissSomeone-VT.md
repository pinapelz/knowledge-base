# IMissSomeone-VT

Miss your favorite VTuber? "I Miss Someone VT" is a template for deploying a fansite for any particular VTuber.

This page serves as documentation for necessary configuration

# Environment Variables
The Flask backend relies on environment variables for configuration.

- **KV_REST_API_URL**
  - Redis KV database REST API URL
- **KV_REST_API_TOKEN**
  - Redis KV API Token
- **FREE_CHAT_ID**
  - Video ID of the free chat/waiting room. The thumbnail from this scheduled waiting room is used as the schedule page PNG
- **CHANNEL_ID**
  - YouTube Channel ID of the tracked channel
- **API_KEY**
  - Holodex API Key
- **MANUAL_OVERRIDE**
  - In case Holodex misreports a video as a stream, this can be used to ignore a particular video (insert video ID)

# Site Config
The configuration for the frontend can be found within `site-config.json`

- **soundUrls**
  - List of soundbites that will play when the button is clicked
- **rareSoundUrls**
  - An extended list of soundUrls but these will only play 10% of the time
- *pastImages*
  - A list of images that are cycled through on the landing page
- *buttonIcon*
  - Icon that appears in the background when the button is clicked (img)

The project itself is reliant on Holodex API for data and Redis KV for storing information regarding the button's global click count


![](https://github.com/pinapelz/pinapelz/assets/21994085/cc0f1230-76a4-416c-8aa7-eb88172679b4)
