---
title: Patchwork Archive API Docs
lang: en-US
outline: deep
---
# Patchwork Archive API

> Version MIT

API data from Patchwork Archive is public and **no API key** is required to access it (subject to change)

Base URL: `https://archive.pinapelz.moe/api/`

## Path Table

| Method | Path | Description |
| --- | --- | --- |
| GET | [/channel/<channel_id>](#get-channelchannel_id) | Gets archived videos from a particular channel |
| GET | [/status](#get-status) | Get the service status |
| GET | [/channel_name](#get-channel_name) | Gets the name of a particular channel by channel id |
| GET | [/search/results](#get-searchresults) | Get paginated search results for some keyword |
| GET | [/search/channel](#get-searchchannel) | Get paginated search results for channels by keyword |
| GET | [/video/<video_id>](#get-videovideo_id) | Get basic information regarding a specific video |
| GET | [/random_video](#get-random_video) | Get a singular random video |
| GET | [/discover_videos](#get-discover_videos) | Get multiple random videos |
| GET | [/discover_channels](#get-discover_channels) | Get multiple random channels |
| GET | [/daily_featured_videos](#get-daily_featured_videos) | Get today's daily featured videos |
| GET | [/recently_archived](#get-recently_archived) | Get the 6 most recently archived videos |
| GET | [/popular](#get-popular) | Get the 6 most popular videos |
| GET | [/database/video_data/<video_id>](#get-databasevideo_datavideo_id) | Get detailed information about the video if available |
| GET | [/database/status](#get-databasestatus) | Get the database status |
| GET | [/storage/status](#get-storagestatus) | Get the storage status |
| POST | [/worker/queue](#post-workerqueue) | Queue a video for processing |
| GET | [/worker/next](#get-workernext) | Get the next video in the queue |
| POST | [/worker/heartbeat](#post-workerheartbeat) | Send a worker heartbeat |
| DELETE | [/storage/delete](#delete-storagedelete) | Delete an archived video |

## Path Details

***

### [GET]/channel/<channel_id>

- Summary  
Gets archived videos from a particular channel as a paginated result.

#### Parameters (Query)

```ts
page: integer
```

#### Responses

- 200 successful operation

`application/json`

```ts
pages: int
results: {
  video_id: string
  title: string
  channel_name: string
  channel_id: string
  upload_date: string
  description: string
}[]
```

***

### [GET]/status

- Summary  
Get the service status.

#### Responses

- 200 successful operation

`application/json`

```ts
workers: {
  name: string
  status: string
  timestamp: string
}[]
```

***

### [GET]/channel_name

- Summary  
Gets the name of a particular channel by channel id. Aliases are channels names previously associated with this channel_id

#### Parameters (Query)

```ts
channel_id: string
```

#### Responses

- 200 successful operation

`application/json`

```ts
{
  channel_name: string
  description: string
  aliases: string[]
}
```

***

### [GET]/search/results

- Summary  
Get paginated search results for some keyword.

#### Parameters (Query)

```ts
q: string
page?: integer
```

#### Responses

- 200 successful operation

`application/json`

```ts
pages: integer
results: {
  video_id: string
  title: string
  channel_name: string
  channel_id: string
  upload_date: string
  description: string
}[]
```

***

### [GET]/search/channel

- Summary  
Get paginated search results for channels by keyword.

#### Parameters (Query)

```ts
q: string
page?: integer
```

#### Responses

- 200 successful operation

`application/json`

```ts
pages: integer
results: {
  channel_id: string
  channel_name: string
  description: string
}[]
```

***

### [GET]/video/<video_id>

- Summary  
Get basic information regarding a specific video.

#### Responses

- 200 successful operation

`application/json`

```ts
{
  video_id: string
  title: string
  channel_name: string
  channel_id: string
  upload_date: string
  description: string
}
```

***

### [GET]/random_video

- Summary  
Get a singular random video.

#### Responses

- 200 successful operation

`application/json`

```ts
{
  video_id: string
  title: string
  channel_name: string
  channel_id: string
  upload_date: string
  description: string
}
```

***

### [GET]/discover_videos

- Summary  
Get multiple random videos.

#### Parameters (Query)

```ts
count?: integer
```

#### Responses

- 200 successful operation

`application/json`

```ts
results: {
  video_id: string
  title: string
  channel_name: string
  channel_id: string
  upload_date: string
  description: string
}[]
```

***

### [GET]/discover_channels

- Summary  
Get multiple random channels.

#### Parameters (Query)

```ts
count?: integer
```

#### Responses

- 200 successful operation

`application/json`

```ts
results: {
  channel_id: string
  channel_name: string
  romanized: string
}[]
```

***

### [GET]/daily_featured_videos

- Summary  
Get today's daily featured videos.

#### Responses

- 200 successful operation

`application/json`

```ts
results: {
  video_id: string
  title: string
  channel_name: string
  channel_id: string
  upload_date: string
  description: string
}[]
```

***

### [GET]/recently_archived

- Summary  
Get the 6 most recently archived videos.

#### Responses

- 200 successful operation

`application/json`

```ts
results: {
  video_id: string
  title: string
  channel_name: string
  channel_id: string
  upload_date: string
  description: string
}[]
```

***

### [GET]/popular

- Summary  
Get the 6 most popular videos.

#### Responses

- 200 successful operation

`application/json`

```ts
results: {
  video_id: string
  title: string
  channel_name: string
  channel_id: string
  upload_date: string
  description: string
}[]
```

***

### [GET]/database/video_data/<video_id>

- Summary  
Get detailed information about the video if available. Used as a fallback if there is no info.json for the file

#### Responses

- 200 successful operation

`application/json`

```ts
{
  video_id: string
  title: string
  channel_name: string
  channel_id: string
  upload_date: string
  description: string
}
```

***

### [GET]/database/status

- Summary  
Get the database status.

#### Responses

- 200 successful operation

`text/plain`

```ts
{
  "status": "OK"
}
```

***

### [GET]/storage/status

- Summary  
Get the storage status.

#### Responses

- 200 successful operation

`application/json`

```ts
{
  number_of_files: integer
  storage_size: string
  number_of_channels: integer
  most_recent_archived_video_date: string
  units: string
}
```

***

### [POST]/worker/queue

- Summary  
Queue a video for processing.

#### Request Headers

```ts
X-AUTHENTICATION: string
```

#### Request Body

```ts
url: string
mode: integer
```

#### Responses

- 200 successful operation

`text/plain`

```ts
"OK"
```

- 401 Unauthorized

***

### [GET]/worker/next

- Summary  
Get the next video in the queue.

#### Request Headers

```ts
X-AUTHENTICATION: string
```

#### Responses

- 200 successful operation

`application/json`

```ts
{
  next_video: string
  mode: integer
}
```

- 204 No videos in queue

***

### [POST]/worker/heartbeat

- Summary  
Send a worker heartbeat.

#### Request Headers

```ts
X-AUTHENTICATION: string
```

#### Request Body

```ts
name: string
status: string
```

#### Responses

- 200 successful operation

`text/plain`

```ts
"OK"
```

- 401 Unauthorized

***

### [DELETE]/storage/delete

- Summary  
Delete an archived video.

#### Request Headers

```ts
X-AUTHENTICATION: string
```

#### Request Body

```ts
videoId: string
```

#### Responses

- 200 successful operation

`text/plain`

```ts
"OK"
```

- 401 Unauthorized

