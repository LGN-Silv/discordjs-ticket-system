# Welcome to the Vague documentation

A simple fast and fun bot

## How does it work? <a id="how-does-it-work"></a>

The automoderator works by calculating a multiplicator, that represents how likely a user has a tendency to spam. Using multiple data points, such as the Discord Nitro status of the user, the account age and how long ago the user joined, GetBeaned is able to have a pretty good estimate of the spam-potential of an user.

After calculating the multiplicator, GetBeaned will then look at the specific message to determine if it could be considered as spam, using factors such as the presence of CAPS, swear words, failed @everyone pings, etc.

Finally, by multiplying the multiplicator and the message score, GetBeaned applies actions corresponding to the specific total score.

multiplicator∗message score=message total scoremultiplicator \* message\ score = message\ total\ scoremultiplicator∗message score=message total score

## What does that mean in practice? <a id="what-does-that-mean-in-practice"></a>

Have you ever been on a server, and then tried to send messages quickly one after another or just with a few CAPITAL letters, only to see it get removed by a very strict moderation bot, while, at the same time in another channel, a user is spamming mentions without getting banned? Well, if you don't want that to happen on your server, **GetBeaned is the solution!**

A user that has just joined and tries to post invite links should be treated as a spammer while a trusted user that has been present for a year shouldn't. And that's what the GetBeaned AutoModerator does.

## More information on the bot configuration. <a id="more-information-on-the-bot-configuration"></a>

You can configure GetBeaned on the webinterface by logging in with Discord. The defaults provided are quite good, just enabling Thresholds and Automod should get you started!

More settings are provided for advanced configuration. For best performance and to minimise the risk of false positives, we recommend enabling AutoMod and Thresholds, then enable AutoInspect and AutoTriggers as needed.

But, if you need, more than 60 settings are available. So, customising the bot shouldn't be a problem.

## Need support? <a id="need-support"></a>

Not a problem, we are here to help on the [support server](https://discordapp.com/invite/cPbhK53)​

## Contributing: <a id="contributing"></a>

### If you are a developer: <a id="if-you-are-a-developer"></a>

The bot code is open-sourced on [GitHub](https://github.com/getbeaned) and Pull Requests are welcomed with great pleasure. An API is available on request to access the data on the GetBeaned website to improve overall detection. Please contact Eyesofcreeper\#0001 if you are interested.

### If you are a Discord server owner: <a id="if-you-are-a-discord-server-owner"></a>

Please [install the bot]() and spread the word. Don't forget to report spambots or new types of spam that aren't currently detected by the GetBeaned algorithms.

### If you are a Discord user: <a id="if-you-are-a-discord-user"></a>

If my bot has helped you, [donations](https://www.paypal.me/duckduckhunt) are welcome to help fund the server costs! If you find any bugs, feel free to report them on the support server or contact me on Discord : Eyesofcreeper\#0001

​

