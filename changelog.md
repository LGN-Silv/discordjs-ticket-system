# Changelog

## 1.0.0 - 18/06/2019 <a id="1-0-0-18-06-2019"></a>

### Added <a id="added"></a>

* Re-made the docs using GitBook
* Move to the getbeaned.me domain
* The API can now be considered stable.

## 0.1.1 -&gt; 1.0.0 <a id="0-1-1-greater-than-1-0-0"></a>

The changelog for this versions is the git log available [here](https://github.com/getbeaned/GetBeaned-DiscordBot/commits/master) and [here](https://github.com/getbeaned/GetBeaned-WebInterface/commits/master)​

## 0.1.0 - 02/02/2019 <a id="0-1-0-02-02-2019"></a>

Published the repositories to Git after this release.

### Added <a id="added-1"></a>

* You can now target multiple people in one command For example, g+kick \[user 1\] \[user 2\] will kick two people at the same time, with the same reason
* Text only logs are now available They are easier to copy on mobile, but they are kinda ugly :\( Use your server settings on the webinterface to enable them
* Added help text for settings on the webinterface.
* Made links like "see \#547" clickable in the web interface Example: [https://getbeaned.api-d.com/actions/548](https://getbeaned.api-d.com/actions/548)​
* Made logging non-blocking, for when your server get raided and GetBeaned needs to act more than once per second
* Added a bot field in the database to mention the bot status of an user
* Added a command refresh\_user to refreh a user on the database
* Added bot-admin-specific comments on user pages
* Bot admins and bot mods now see links to the admin panel on different pages of the website
* Added a security score to user pages. Based on types of actions received in "big" servers, it's a really alpha made up formula, so it's subject to change on levels and calculation methods. However, it should be helping if you want to know about an user with a simple number, and \(when it'll be more stable\) to tune the audomod even more depending on your specific needs
* Now showing if an user is a bot on the WebInterface
* Added a +purge command, to remove messages in bulk. To get help, just type +purge. Does not purge pinned messages
* Fixed a bug where a security score calculation could return negative results
* Bot moderators \(@\(Human\) Moderator on the support server\) now have the required access level to moderate the bot
* Added a framework to store user-specific settings \(IE: dark\_theme status\) on the WebInterface
* Better help command using embeds and reactions!
* Fix a bug where no action would be done and nothing would be said by the bot when the bot top role was lower than a target role.
* Added a nice summary table on user pages. Also allows you to copy users IDs.
* Disabled ability to kick people not in server
* Fixed a special case where a wrong error message would be given where the bot is lower in the hierarchy than the target
* Add an AutoTrigger mechanism. This is made for some types of messages that may go past the AutoMod without detection.
  * If your discord server get attacked by user bots that send messages not detected by the automod, head to \#support\_english and request an AutoTrigger.
  * The first AutoTrigger can be enabled on your server settings page.

    AutoTriggers need the AutoMod to be enabled for them to work
* Improved DiscordSexDating autotrigger to also match the url spammed and to be more lenient on keywords

### Fixed <a id="fixed"></a>

* Fixed loads of typos on the webinterface
* Fixed the regex that rendered links to previous actions to make it not render specials chars escaped in HTML
* Updated the website favicon\(s\) to make them render better
* Internal change: changed BigInt to CharFields for discord IDs
* Removed embed check from the automod as the check is not 100% accurate \(tweets links are considered rich embeds by discord\)

## 0.0.1 - 22/11/2018 <a id="0-0-1-22-11-2018"></a>

### Added <a id="added-2"></a>

* Migrated basic functions from DuckHunt community

​

