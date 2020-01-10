require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const db = require('./database/database');
const Ticket = require('./models/Ticket');

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log("Bot is logged in!");
    db.authenticate().then(() => {
        console.log("Logged in to DB.");
        Ticket.init(db);
        Ticket.sync();
    }).catch(err => console.log(err));
});

client.on('raw', async payload => {
    let eventName = payload.t;
    if(eventName === 'MESSAGE_REACTION_ADD') {
        let msgId = payload.d.message_id;
        if(msgId === '665252129979760680') { // For creating tickets.
            let channelId = payload.d.channel_id;
            let channel = client.channels.get(channelId);
            if(channel) {
                if(channel.messages.has(msgId))
                    return;
                else {
                    try {
                        let msg = await channel.fetchMessage(msgId);
                        let reaction = msg.reactions.get('🎫');
                        let user = client.users.get(payload.d.user_id);
                        client.emit('messageReactionAdd', reaction, user);
                    }
                    catch(ex) {
                        console.log(ex);
                        return;
                    }
                }
            }
        }
        else if(payload.d.emoji.name === '✅') {
            try {
                let findTicket = await Ticket.findOne({ where: { closeMessageId: msgId }});
                if(findTicket) {
                    let channelId = payload.d.channel_id;
                    let channel = client.channels.get(channelId);
                    if(channel) {
                        if(channel.messages.has(msgId))
                            return;
                        else {
                            try {
                                let msg = await channel.fetchMessage(msgId);
                                let reaction = msg.reactions.get('✅');
                                let user = client.users.get(payload.d.user_id);
                                reaction.ticket = findTicket;
                                client.emit('messageReactionAdd', reaction, user);
                            }
                            catch(ex) {
                                console.log(ex);
                                return;
                            }
                        }
                    }
                }
                else {
                    console.log("Ticket not found");
                }
            }
            catch(ex) {
                console.log(ex);
            }
        }
        else if(payload.d.emoji.name === '▶️') {
            try {
                let findTicket = await Ticket.findOne({ where: { closeMessageId: msgId }});
                if(findTicket) {
                    let channelId = payload.d.channel_id;
                    let channel = client.channels.get(channelId);
                    if(channel) {
                        if(channel.messages.has(msgId))
                            return;
                        else {
                            try {
                                let msg = await channel.fetchMessage(msgId);
                                let reaction = msg.reactions.get('▶️');
                                let user = client.users.get(payload.d.user_id);
                                client.emit('messageReactionAdd', reaction, user);
                            }
                            catch(ex) {
                                console.log(ex);
                                return;
                            }
                        }
                    }
                }
                else {
                    console.log("Ticket not found");
                }
            }
            catch(ex) {
                console.log(ex);
            }
        }
    }
});

client.on('message', message => {
    if(message.author.bot) return;
    let regex = new RegExp(/(ticket-[0-9]+)/);
    let channelName = message.channel.name;

    if(message.content.toLowerCase().startsWith("?closeticket") && regex.test(channelName) && message.member.hasPermission('ADMINISTRATOR')) {
        message.channel.delete().then(c => console.log(c.name + " was deleted.")).catch(err => console.log(err));
        let channelId = message.channel.id;
        Ticket.update({ resolved: true }, { where: { channelId: channelId }})
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    if(user.bot) return;
    if(reaction.emoji.name === '🎫') {
        let findTicket = await Ticket.findOne({ where: { authorId: user.id, resolved: false }}).catch(err => console.log(err));
        if(findTicket) {
            user.send("You already have a ticket opened!");
        }
        else {
            console.log("Create new ticket.")
            try {
                console.log("Creating ticket...");
                let channel = await reaction.message.guild.createChannel('ticket', { 
                    type: 'text', 
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: user.id
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: '625907626303160354'
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: reaction.message.guild.id
                        }
                    ]
                });
                // Create Embed Message and send it to channel.
                let embed = new discord.RichEmbed();
                embed.setTitle(`Support Ticket`);
                embed.setDescription("React with ✅ to close the ticket.\nReact with ▶️ to add a user to this ticket.");
                embed.setColor("#00FF4D");
                embed.setTimestamp();
                embed.setFooter("Ticket Bot System v1.0.0 2020");
                let msg = await channel.send(embed);
                await msg.react('✅');
                await msg.react('▶️');

                let newTicket = await Ticket.create({
                    authorId: user.id,
                    channelId: channel.id,
                    guildId: reaction.message.guild.id,
                    resolved: false,
                    closeMessageId: msg.id
                });
                console.log("Ticket Saved...");
                let ticketId = String(newTicket.dataValues.ticketId).padStart(4, "0");
                await channel.edit({ name: `${channel.name}-${ticketId}`});
            }
            catch(ex) {
                console.log(ex);
            } 
        }
    }
    else if(reaction.emoji.name === '✅') {
        let embeds = reaction.message.embeds;
        if(embeds.length !== 1) {
            console.log("Incorrect message.");
            return;
        }
        if(embeds[0].title === 'Support Ticket') {
            try {
                let tickets = await Ticket.update({ resolved: true }, { where: { closeMessageId: reaction.message.id }});
                let findTicket = await Ticket.findOne({ where: { closeMessageId: reaction.message.id }});
                console.log("Updated...");
                let channel = reaction.message.channel;
                let updatedChannel = await channel.overwritePermissions(findTicket.dataValues.authorId, {
                    VIEW_CHANNEL: false
                });
                console.log("Updated channel permissions.");
                if(findTicket.dataValues.additionalUsers) {
                    let otherUsers = JSON.parse(findTicket.dataValues.additionalUsers);
                    otherUsers.forEach(userId => {
                        channel.overwritePermissions(userId, {
                            VIEW_CHANNEL: false
                        }).then(v => console.log("Success")).catch(err => console.log(err));
                    });
                }
            }
            catch(ex) {
                console.log(ex);
            }
        }
    }
    else if(reaction.emoji.name === '▶️') {
        let embeds = reaction.message.embeds;
        if(embeds.length !== 1) {
            console.log("Incorrect message.");
            return;
        }
        if(embeds[0].title === 'Support Ticket') {
            console.log("Trying to add user to ticket");
            try {
                let findTicket = await Ticket.findOne({ where: { closeMessageId: reaction.message.id }});
                if(findTicket) {
                    let otherUsers;
                    if(findTicket.dataValues.additionalUsers) {
                        otherUsers = JSON.parse(findTicket.dataValues.additionalUsers);
                    }
                    else
                        otherUsers = [];
                    
                    let channel = reaction.message.channel;
                    if(otherUsers.length >= 2) {
                        let m = await channel.send("You cannot add any more users to this ticket!");
                        await m.delete(5000);
                    }
                    else if(otherUsers.length === 0) {
                        let filter = m => m.author.id === user.id;
                        channel.send("Please enter the ID of the user you wish to add to the ticket.");
                        let userId = (await channel.awaitMessages(filter, { max: 1 })).first().content;
                        let findUser = channel.guild.members.find(m => m.id === userId);
                        if(!findUser.user.bot) {
                            await Ticket.update({ additionalUsers: JSON.stringify([ findUser.id ])}, { where: { closeMessageId: reaction.message.id }});
                            console.log("Added user to ticket.");
                            await channel.overwritePermissions(findUser.id, {
                                VIEW_CHANNEL: true
                            });
                            console.log("Updated permissions for user.");
                        } 
                    }
                    else {
                        let filter = m => m.author.id === user.id;
                        channel.send("Please enter the ID of the user you wish to add to the ticket.");
                        let userId = (await channel.awaitMessages(filter, { max: 1 })).first().content;
                        let findUser = channel.guild.members.find(m => m.id === userId);
                        if(findUser) {
                            if(otherUsers.find(v => v === findUser.id)) {
                                channel.send("User is already in ticket.")
                                .then(m => m.delete(5000))
                                .catch(err => console.log(err));
                            }
                            else {
                                otherUsers.push(findUser.id);
                                console.log(otherUsers);
                                await Ticket.update({ additionalUsers: JSON.stringify(otherUsers)}, { where: { closeMessageId: reaction.message.id }});
                                console.log("Updated.");
                                await channel.overwritePermissions(findUser.id, {
                                    VIEW_CHANNEL: true
                                });
                                console.log("Updated permissions for user.");
                            }
                        }
                        else {
                            console.log("User is not in guild or does not exist.");
                        }
                    }
                }
            }
            catch(ex) {
                console.log(ex);
            }
        }
    }
});