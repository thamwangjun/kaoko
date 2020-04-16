![kaoko](docs/static/kaoko-px.png)

# kaoko

Resident Bot of Jun's Cat Colony

# Pre-requisites

* Node 12.16.1 LTS
* npm

## Install

```sh
npm install
```

## `.env`

Create a `.env` file in kaoko root folder.

`.env` File

```
DISCORD_BOT_TOKEN=<DISCORD_BOT_TOKEN_HERE>
BOT_SERVER_ID=<DISCORD_GUID_ID>
```

## `config.json`

`./kaokoConfigs/config.json`
```
{
    "modules": {
      "animoji": true,
      "imageRespond": true,
      "mhwRespond": true,
      "emoteInfo": true
    }
}
```

You can decide which features to enable by editing `config.json`.

## Run

```sh
npm run start
```

## License

Kaoko is MIT Licensed.
