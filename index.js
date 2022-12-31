import { join, dirname, parse } from 'path';
import { fileURLToPath } from 'url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import pkg from './wrapper.cjs';
import { config } from 'dotenv';
import * as fs from 'node:fs';
const { Bot } = pkg;

config();
console.log(process.env.PASS)
const bot = new Bot('gcbridge', process.env.PASS);

await db.read();
if (!db.data) db.data = { };

bot.on('ready', () => {
    console.log('Bot is ready!');
})

bot.on('error', (err) => {
    console.log(err);
})

bot.post('teeeeest','post_home');
bot.on('post', async (message) => {
    console.log(message);
    let parsed = bot.parse(message, 'gcbridge.')
    if (parsed) {
        if (parsed.command == 'test') {
          bot.post('test',message.origin);
        }
    }
}