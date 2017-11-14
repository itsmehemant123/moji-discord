# MojiMaker

Converts text to mojified text. Thanks to [notwaldorf](https://github.com/notwaldorf/emoji-translate) for her dank library.

- `!moji` converts words in the sentence to mojis.
- `!shitmoji` spits out only the words which were converted to mojis.

## Setting up
- While in the root directory, run
```sh
npm install
```
- Create the `auth.json`:

```json
{
    "token": "<token>",
    "client_id": "<client_id>"
}
```

## Running the bot

- Place the `auth.json` in the config folder.
- Run the bot with
```sh
npm start
```
