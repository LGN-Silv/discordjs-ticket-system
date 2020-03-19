# Commands

On this page, we'll use the default prefix of `+`. Of course, your server prefix may have been changed on the web interface. In any case, add the correct prefix before starting a command.

{% tabs %}
{% tab title="Users" %}
| Command | Explanation |
| :--- | :--- |
| `+help` | Show a list of commands or details of the specified command. |
| `+server-info` | Get the server online logs, and webpages about a specific user. |
| `+invite` | Get a bot invite link [to install VagueAgency on your server](https://discordapp.com/api/oauth2/authorize?client_id=655188952969379884&permissions=8&scope=bot) |
| `+info` | Show some information about the bot like the author and essential commands |
| `+whois` | Show user information. |
| `+ping` | Check the health of the connection between the bot and Discord. |
| `+channelinfo` | Run a quick check of the bot permissions on the channel, useful to figure out why the bot isn't working properly. |
| `+weather [city]` | Say something! |
| `+say` | Shows role information |
| `+translate [from] [to] [text to translate]` | ex- `+translate en ja Hello world`. Note `+t` and `+ts` can be used instead of `translate` |
| `+code` | Suggest a feature to add to the bot. Can also be used to report bugs. |
| `+tweet` `(username) (content)` | Fun twitter template command |
| `+meme` | This commands is used for Some Fresh Memes |
| `+dog` | This command is used for a Fresh picture of a Dog |
| `+joke` | Random Joke |
| `+hack` | A fake hack command. |
{% endtab %}

{% tab title="Moderatorion" %}
Moderators can also use any command Trusted users can.

| Command | Explanation |
| :--- | :--- |
| `+ban {user}<reason>` | Ban the users provided in the command, with an optional reason. |
| `+setupmute` | Setup Mute roles for Mute cmd. |
| `+kick {user}` | Kick the users from your server. They will be able to rejoin using a new invite link. |
| `+mute {users} <duration>` | Mute users on the server. They won't be able to speak until unmuted or until they leave and rejoin the server. **This command requires a specific GetBeaned\_Muted role, that can be setup by server admins with the `+create_muted_role` command.** |
| `+unmute {muted_user} <reason>` | Remove the GetBeaned\_Muted role from users, to let them talk again. |
| `+unban {banned_user}` | Unban users from your server. They'll be able to rejoin using a new invite. |
| `+purge <amount>` | Purge messages. |
| `+nuke` | Purge all messages in a channel. |
| `+prefix (prefix)` | sets a server-specific prefix |
{% endtab %}

{% tab title="Music" %}
Admins can also use any command Moderators can.

| Command | Explanation |  |  |
| :--- | :--- | :--- | :--- |
| `+lyrics [song name]` | shows the lyrics to the currently-playing song |  |  |
| `+nowplaying` | shows the song that is currently playing. |  |  |
| \`+play &lt;title | URL | subcommand&gt;\` | plays the provided song |
| `+playlists` | shows the available playlists |  |  |
| `+queue [pagenum]` | shows the current queue |  |  |
| `+remove` | removes a song from the queue |  |  |
| `+search <query>` | searches Youtube for a provided query |  |  |
| `+scsearch <query>` | searches Soundcloud for a provided query |  |  |
| `+shuffle` | shuffles songs you have added |  |  |
| `+skip` | votes to skip the current song |  |  |
| **DJ:** |  |  |  |
| `+forceremove <user>` | removes all entries by a user from the queue |  |  |
| `+forceskip` | skips the current song |  |  |
| `+movetrack <from> <to>` | move a track in the current queue to a different position |  |  |
| `+pause` | pauses the current song |  |  |
| \`+playnext &lt;title | url&gt;\` | plays a single song next |  |
| \`+repeat \[on | off\]\` | re-adds music to the queue when finished |  |
| `+skipto <position>` | skips to the specified song |  |  |
| `+stop` | stops the current song and clears the queue |  |  |
| `+volume [0-150]` | sets or shows volume |  |  |
| **Admin:** |  |  |  |
| \`+setdj &lt;rolename | none&gt;\` | sets the DJ role for certain music commands |  |
| \`+settc &lt;channel | none&gt;\` | sets the text channel for music commands |  |
| \`+setvc &lt;channel | none&gt;\` | sets the voice channel for playing music |  |
|  |  |  |  |
{% endtab %}
{% endtabs %}

