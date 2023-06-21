# WhatsApp Auto Message

WhatsApp Auto Message created with NodeJs using [Puppeteer](https://github.com/puppeteer/puppeteer) library.
Allow you to automatically sent message to unlimited contact numbers

## Note

**Important: Bulk messaging can lead to the suspension of your WhatsApp account**. Here some tips to reduce chance of being suspend :

- **Limit the message sending rate**: Send a maximum of 5 messages per second or even fewer.

- **Avoid using new WhatsApp registered numbers**: Newly registered numbers may be subject to closer monitoring during the initial period.

- **Split up your recipient list**: If you need to send messages to a large number of contacts, it is recommended to divide them into smaller groups. For example, if you have 10,000 contacts, consider sending messages to 2,000 contacts per day instead of sending them all at once.

## Requirements

- [NodeJS](https://nodejs.org/en/download) (version 18 or Latest).

## How To Use

Install [NodeJS](https://nodejs.org/en/download) and [Git Bash](https://git-scm.com/downloads) on your device. then run this script

```
$ git clone https://github.com/lackfos/whatsapp-auto-message
$ cd whatsapp-auto-message
$ npm install
$ node .
```

## Add Contact Number

You can add list of contact number in `src/contact.txt` file (comma seperated).

## Config

in `src/config.js` file you can customize :

- Message Content.
- Message Per Minute.

## Donate

[<img src="./github/saweria.png" width="180" />](https://saweria.co/lackfos)
