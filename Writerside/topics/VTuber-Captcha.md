# VTuber Captcha

A simple web API that serves VTuber related CAPTCHAs including server-side verification. 
Bring your own frontend to display the data.

# Available Endpoints
The base URL or the API currently is: `https://vtuber-captcha.vercel.app/api`

Below are the current API endpoints supported:
[Authenticating Against the API](https://github.com/pinapelz/vtuber-captcha/wiki/Authenticating-Answers-Against-the-API)

## `/affiliation/<org>`
Returns a captcha asking user to identify which of the VTubers are affiliated with a particular organization or group

**Path Parameters**
- `<org>`: Refer to [organization page](https://github.com/pinapelz/vtuber-captcha/wiki/Supported-Terms#organizations) for a list of supported terms
  **Query Parameters**
- `server_auth`: false if answers to captcha should be sent to response, true if you would like the API to store the answer and authenticate against it.
    - Default: `false`
    - Enums: `true, false`



# Authenticating Answers Against The Server
The API supports server-side verification meaning that the answer to the CAPTCHA is never sent to you after making the initial request.

Instead, each request will be assigned a session-token which uniquely identifies the CAPTCHA. The server then saves the answer to the CAPTCHA.
This makes it safe for you to directly call the API client-side from a frontend without the need for a middle-man to store the answer.

To authenticate answers against the API. You need to specify the query parameter `?server_auth=true`

**Example Response with `?server_auth=true`**
```
{
  "category": "affiliation",
  "onFail": {
    "extra": null,
    "text": "You got some wrong"
  },
  "questions": [
    {
      "id": "UCgZuwn-O7Szh9cAgHqJ6vjw",
      "image": "https://yt3.ggpht.com/ytc/AMLnZu_aQ3akSpFc9SVPcFMXATjdKZAcmy1aXtGq364A=s800-c-k-c0x00ffffff-no-rj",
      "name": "Aloe Ch.魔乃アロエ"
    },
    {
      "id": "UC7MMNHR-kf9EN1rXiesMTMw",
      "image": "https://yt3.ggpht.com/8SFoIMf_6XTf0jyeLd6Txdl96BqSyGhb250P3qEh7E4ui8fLNxLXLiLf7phYVy0CIYx3as42=s800-c-k-c0x00ffffff-no-rj",
      "name": "Magni Dezmond Ch. HOLOSTARS-EN"
    },
    {
      "id": "UCwL7dgTxKo8Y4RFIKWaf8gA",
      "image": "https://yt3.ggpht.com/ytc/AOPolaStFlTJ6ISi2Wuwz7L_OLHHShXfoVPDDnqsPWLb=s800-c-k-c0x00ffffff-no-rj",
      "name": "Oga Ch.荒咬オウガ"
    },
    {
      "id": "UCdn5BQ06XqgXoAxIhbqw5Rg",
      "image": "https://yt3.ggpht.com/ytc/AOPolaSFPK_6xlqthNXIpMC7OTWfGsDAoNkR9OexBYxcpA=s800-c-k-c0x00ffffff-no-rj",
      "name": "フブキCh。白上フブキ"
    },
    {
      "id": "UCa9Y57gfeY0Zro_noHRVrnw",
      "image": "https://yt3.ggpht.com/O7m_5HMY_O8yxR3Jhn9cEO1fLNL_GifMERExnAmfY7JrdTRsTjNijTcNYTPN97Llj3zGn8Susw=s800-c-k-c0x00ffffff-no-rj",
      "name": "Luna Ch. 姫森ルーナ"
    },
    {
      "id": "UC1CfXB_kRs3C-zaeTG3oGyg",
      "image": "https://yt3.ggpht.com/B2tq3IQAFxUe9W3MaMc0V62bmlTWCSoTuCk-Y-Ab8yXkZKdIswQhHABZhz2e4YM1-B_Kxen_7w=s800-c-k-c0x00ffffff-no-rj",
      "name": "HAACHAMA Ch 赤井はあと"
    },
    {
      "id": "UCw1KNjVqfrJSfcFd6zlcSzA",
      "image": "https://yt3.ggpht.com/7QQ7vnkdwS7e8cLY6YYRoLTLftUxQCopsIxE7L9Qd6vXW_TsCjb4YZDVqYTJ3qceAAqWtwQH=s800-c-k-c0x00ffffff-no-rj",
      "name": "Nia Suzune / 鈴音にあ [PRISM Project]"
    },
    {
      "id": "UCambvP8yxNDot4FzQc9cgiw",
      "image": "https://yt3.ggpht.com/EgL9iOOKL7KiLIBxjqJO6gmVJE7BJ4xqfmgyis_QQ9zdbYAD_Pco7xagjdpWCTFoPbgxEXyJ=s800-c-k-c0x00ffffff-no-rj",
      "name": "宇佐美リト / Usami Rito【にじさんじ】"
    },
    {
      "id": "UCqEp6RdtsMbUNrCdCswr6pA",
      "image": "https://yt3.ggpht.com/ytc/AMLnZu9ZF7fPn4IghqjrWH-SFrdSzlY9EMtkkoUntGLWLA=s800-c-k-c0x00ffffff-no-rj",
      "name": "海夜叉神/黄泉波咲夜【にじさんじ】"
    },
    {
      "id": "UC6TfqY40Xt1Y0J-N18c85qQ",
      "image": "https://yt3.ggpht.com/50JCdIpi9B-ZxDaveVfSyKuvRyj8d2DgLe0sMkd_UxuxN-VcGQ54W4M-6T0wXzJV2TdfAeZglSc=s800-c-k-c0x00ffffff-no-rj",
      "name": "安土桃"
    },
    {
      "id": "UCFTLzh12_nrtzqBPsTCqenA",
      "image": "https://yt3.ggpht.com/ytc/AOPolaRF12upNUVmDXfH2A7ViS-gyKCcAvAQXTyEmbWAcA=s800-c-k-c0x00ffffff-no-rj",
      "name": "アキロゼCh。Vtuber/ホロライブ所属"
    },
    {
      "id": "UCMwGHR0BTZuLsmjY_NT5Pwg",
      "image": "https://yt3.ggpht.com/f4uYWHJxiGwyXm8NUlm818N1MRnywtgL6wM8JdWqWsKBzI7v1eg8dxDWG7igkWuukUSiufydqPg=s800-c-k-c0x00ffffff-no-rj",
      "name": "Ninomae Ina'nis Ch. hololive-EN"
    },
    {
      "id": "UC6oW4FXETgEGOFTxWmI2h5Q",
      "image": "https://yt3.ggpht.com/ytc/AMLnZu_clEsYJi5qCPCpxCuw2qMwB5rfcm2hgDITVRRn=s800-c-k-c0x00ffffff-no-rj",
      "name": "Noor【NIJISANJI IN】"
    },
    {
      "id": "UC_sFNM0z0MWm9A6WlKPuMMg",
      "image": "https://yt3.ggpht.com/JDCIBWj11TgjY2Uyba_efZ0n5hzjysMB9GxkvHGkIN_sfFQJR5mx3iVPqgJ96IPcYjZpCLsb=s800-c-k-c0x00ffffff-no-rj",
      "name": "Nerissa Ravencroft Ch. hololive-EN"
    },
    {
      "id": "UCnYhIk9aGEx_bIgheVjs53w",
      "image": "https://yt3.ggpht.com/ytc/AOPolaRL4Pk2cC2Q0GXLV-N9tSPZkCDp_c2RqdQEBpY-=s800-c-k-c0x00ffffff-no-rj",
      "name": "Luto Araka / 新火ると [PRISM Project]"
    },
    {
      "id": "UCIytNcoz4pWzXfLda0DoULQ",
      "image": "https://yt3.ggpht.com/21x1Ab6pEffGItAcNTjcYUkG3IzQ1y--5cUUjtEhrUEuz2iCttL08vswnPRe1XvtBaZ0yUAm=s800-c-k-c0x00ffffff-no-rj",
      "name": "エクス・アルビオ -Ex Albio-"
    }
  ],
  "session": "GUQkquh03dwF84EAxif_EA",
  "title": "Select all the VTuber affiliated with Hololive"
}
```

To check your answers against the API. Send `session` token and the `id` of each selected element as a string comma separated as part of a data payload to `/api/verify`

Example Payload
```
session: "j4WjkoMcPgNX8_gnNXf8HA"
answer: "UC0ZTVxCHkZanT5dnP2FZD4Q,UC4WvIIAo89_AzGUh1AZ6Dkg,UCe0JiGnjPfEwEIbWASbOimw"
```
Response:
```
{
    success: false
}
```
In the case above the user selected:
- UC0ZTVxCHkZanT5dnP2FZD4Q
- UC4WvIIAo89_AzGUh1AZ6Dkg
- UCe0JiGnjPfEwEIbWASbOimw

and their answer was incorrect.

After failing a captcha, the token becomes invalidated and a request for a new CAPTCHA must be made

# Supported Keywords
## Organization
- Hololive: All hololive Production affiliated members, including Holostars
- Nijisanji: All Nijisanji affiliated livers, including EN branches (does not include VirtuaReal)