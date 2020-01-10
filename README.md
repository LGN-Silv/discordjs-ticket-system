# Discord.JS Ticket System

## Introduction
----

This is the code based off of my Discord Ticket Bot System 2020 series. Playlist link can be found down below:

### [Link to Playlist](https://www.youtube.com/watch?v=_bQiCme1dks&list=PL_cUvD4qzbkzn4_e5rHz9EIFymZH6tciR)

Of course, anyone is free to just clone this repository and use this code however they want. You may read down below on how to set up this bot to get it to work for you, or you can watch the playlist.

---
## Installation & Setup

1) Clone this repository. `git clone https://github.com/ansonfoong/discordjs-ticket-system.git`


2) Run `npm install`
- This will install 4 dependencies (discord.js, dotenv, sequelize, and mysql2), and 1 dev dependency (nodemon).
- To install without nodemon or any dev dependencies, run `npm install --only=prod`

3) Make sure to download and install MySQL server. This project uses MySQL for a database.

---
## Setting up Database

1) Make sure you have MySQL server installed. During the installation process you will be prompted to enter a password for `root` user. 

2) It is not recommended to use `root` user at all, and preserve it for very special and important cases. So you should create a separate user account and grant it privileges. We will not go over that, just google "how to make user in mysql"

3) Create a database, you can call it whatever you want.

4) You don't need to create a table, we will let Sequelize set all of that up for us.


---
## Setting up Environment Variables

You'll notice there are 4 environment variables being used. 
- `process.env.BOT_TOKEN`
- `process.env.DB_NAME`
- `process.env.DB_USER`
- `process.env.DB_PASS`

BOT_TOKEN contains the value of the bot token.

DB_NAME contains the name of our MySQL database.

DB_USER contains the name of our user account.

DB_PASS contains the name of our user account's password

Make sure to create a `.env` file in the root of the directory. Your `.env` should be in the same folder as the `src` folder. Your directory structure should look something like this:

```
/src
    /database
        database.js
    /models
        Ticket.js
    bot.js
.env
.gitignore
```

Inside the `.env` file, set up your environment variables. We need four.

```
# Inside .env file
BOT_TOKEN=YOUR TOKEN
DB_NAME=MYDBNAME
DB_USER=ANSON
DB_PASS=PASS
```

You want to make sure you set DB_NAME to the name of the database that you created earlier. DB_USER and DB_PASS are your database's credentials. You may use root but it's not recommended.

---

## Running

Once you have followed all instructions, you should be able to type `npm run dev` (if you have nodemon) or `npm run start`, and the bot should log in and Sequelize should create the Tickets table for you.

---

## Conclusion

If there are any bugs with this bot or you may think of something clever to add, please feel free to open an issue.

You may reach me on Discord at https://discord.gg/jHYMBFZ
