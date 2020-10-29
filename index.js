////Layer Coding  جميع الاكواد من سيرفر 
///discord.js:12.2.0
const express = require('express');
const app = express();

app.listen(() => console.log('Server started'));

app.use('/ping', (req, res) => {
	res.send(new Date());
});

const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require('node-cmd');
const ms = require('ms');
const fs = require('fs');
const ytdl = require('ytdl-core');
const canvas = require('canvas');
const convert = require('hh-mm-ss');
const fetchVideoInfo = require('youtube-info');
const simpleytapi = require('simple-youtube-api');
const util = require('util');
const gif = require('gif-search');
const jimp = require('jimp');
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require('pretty-ms');
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////

const prefix = '-';
const developers = '748065198333755423';

//حط الاكواد الى انت عاوزها هنا

client.login(process.env.token); //اعمل ملف باسم .env
//وحط فيه توكين بوتك
var statuss = ['-help']; // بالإمكان اضافة المزيد بدون التعديل في الكود
var secound = 2; // عدد الثواني المحددة
client.on('ready', () => {
	var timeing = Math.floor(secound * 1000);
	setInterval(function() {
		var ammount = statuss.length;
		var num = Math.floor(Math.random() * ammount);
		client.user.setActivity(statuss[num], { type: 'PLAYING' });
	}, timeing);
});

client.on('message', message => {
    if (message.content === prefix + 'inv') {
        const embed = new Discord.MessageEmbed()
            .setColor("BLUE") // by SaifDemos .Layer Coding
            .setTitle(':hearts:__Invit the bot__:hearts:')
            .addField('Support Server:-', '**https://discord.gg/NacD23K**')
            .addField('Bot Link:-', '**https://discord.com/api/oauth2/authorize?client_id=755829740064997388&permissions=8&scope=bot**')
            .addField('Created By:-', '<@748065198333755423>')
            .setDescription(`**Thank you very much for your choosing my bot. I hope you have a great time with the bot.**`)
            .setFooter(`Requested by ${message.author.username}`)
        message.channel.send(embed)
    }
});



client.on('message', message => {
    if (message.content === prefix + 'bserver') {
        const embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor("RANDOM")
            .addField('**Servers**', `➠${client.guilds.cache.size}`)
            .setFooter(`Requested by ${message.author.username}`)
        message.channel.send(embed)
    }
}); // bot of server





client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "grole")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position - message.guild.roles.size,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});


client.on('message', message => {
	if (message.content === prefix + 'bservers') {
		const embed = new Discord.MessageEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor('RANDOM')
			.addField('**Servers**', `➠${client.guilds.cache.size}`)
			.setFooter(`Requested by ${message.author.username}`);
		message.channel.send(embed);
	}
}); // bot of servers

client.on('message', message => {
	var args = message.content.split(' ');
	var sugg = message.content
		.split(' ')
		.slice(1)
		.join(' ');
	var prefix = '-';
	if (args[0] === prefix + 'feedback') {
		if (!sugg) {
			return message.channel.send('Usage : `' + args[0] + ' <your feedback>`');
		}
		var chname = 'feedback'; // اسم الروم
		var sugchanel = message.guild.channels.cache.find(ch => ch.name == chname); // اسم الروم
		if (!sugchanel) {
			return message.channel.send(
				"**i can't find a feedback channel please create one with name `" +
					chname +
					'`**'
			);
		}
		message.channel.send(
			'**Thanks you for feedback , your feedback has been Sent in ** <#' +
				sugchanel.id +
				'>'
		);
		message.delete();
		let embed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setAuthor(`Vote on ${message.author.username}'s feedback`) //layer team.make by BodaRamzy300
			.setTitle('**Feedback**')
			.setDescription(`${sugg}`) //layer team.make by BodaRamzy300
			.setFooter(`ID: ${message.author.id}`);
		sugchanel.send(embed).then(mes => {
			mes.react(':white_check_mark:').then(rec => {
				mes.react(':x:');
			});
			//By Glitch
		});
	}
}); //By Glitch








client.on('message', message => {
	if (message.content.startsWith(prefix + 'bot')) {
		const beshomecodes = new Discord.MessageEmbed()
			.setColor('#e453e9')
			.setTitle('Support server')
			.setURL('')//// رابط سيرفر اسبورت
			.setAuthor(
				'Bot Information',
				''///رابط بوتك
			)
			.setDescription('bot stats is:')
			.addField(`servers:`, `${client.guilds.size.toLocaleString()}`, true)
			.addField(`users`, `${client.users.size.toLocaleString()}`, true)
			.setFooter(
				'Bot Information',
				'https://cdn.discordapp.com/avatars/755829740064997388/6eaa4468e4cee0e27f2b222beb8c0968.png?size=1024'
			);
		channel.send(beshomecodes);
	}
});


client.on('message', tarik => {
 if(tarik.content.startsWith(prefix + `clear`)) {
  const messageArray = tarik.content.split(' ');
    const args = messageArray.slice(1);
   if(!tarik.channel.guild) return;

    if (!tarik.member.permissions.has("MANAGE_MESSAGES")) return tarik.channel.send('You dont have permissions!');
    
    let deleteAmount; //

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return tarik.reply('Please put a number only!') }

    if (parseInt(args[0]) > 100) {
        return tarik.reply('You can only delete 100 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    } // clear

    tarik.channel.bulkDelete(deleteAmount + 1, true);
    tarik.reply(`**DONE** Deleted ***${deleteAmount}*** Messages.`)

  }
  });


client.on('message', message => {
    if (message.content === "-CreateR") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
          if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(" **ليس لديك صلاحيات :rolling_eyes:**");

                     message.guild.createRole({ name: "『 حصانة من 𝐎𝐰𝐧𝐞𝐫 』", color: "#0b0133", permissions: [] })
                     message.guild.createRole({ name: "•⋯『↬ اداري سابق 』⋯•", color: "#ffdd0c", permissions: [] })
                     message.guild.createRole({ name: ":camera_with_flash:〖✯ 𝑫𝒆𝒔𝒊𝒈𝒏𝒆𝒓 ✯〗 :camera_with_flash:", color: "#001e90", permissions: [] })
                     message.guild.createRole({ name: "✰『✯ 𝑫𝒊𝒂𝒎𝒐𝒏𝒅 ✯』 ✰", color: "#47eaff", permissions: [] })
                     message.guild.createRole({ name: "✰『✯ 𝑮𝒐𝒍𝒅 ✯』 ✰", color: "#fffc57", permissions: [] })
                     message.guild.createRole({ name: "✰『✯ 𝑺𝒊𝒍𝒗𝒆𝒓 ✯』 ✰", color: "#7e9091", permissions: [] })
                     message.guild.createRole({ name: "✰『✯ 𝑹𝒐𝒍𝒆 𝒑𝒍𝒂𝒚 ✯』 ✰", color: "#fad48c", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});

client.on('message', message => {
	if (message.content.startsWith(prefix + 'lock')) {
		if (message.channel.type == 'dm') return;
	  if (!message.channel.guild)
			return message.reply(`** This Command For Servers Only**`);
  	if (message.author.bot) return;
		if (!message.member.hasPermission('MANAGE_CHANNELS'))
			return message.reply(
				`**MANAGE_CHANNELS ليس لديك خاصية** :negative_squared_cross_mark: `
			);
		let everyone = message.guild.roles.cache.find(
			king => king.name === '@everyone'
		);
		message.channel
			.createOverwrite(everyone, {
				SEND_MESSAGES: false
			})
			.then(() => {
				message.channel
					.send('** ✅ |  The channel has been Locked!  **')
					.then(msg => {
						message.delete({ timeout: 3000 });
					});
			});
	}
	if (message.content.startsWith(prefix + 'unlock')) {
		if (message.channel.type == 'dm') return;
	if (!message.channel.guild)
			return message.reply(`** This Command For Servers Only**`);
  	if (message.author.bot) return;
		if (!message.member.hasPermission('MANAGE_CHANNELS'))
			return message.reply(
				`**MANAGE_CHANNELS ليس لديك خاصية** :negative_squared_cross_mark: `
			);
		let everyone = message.guild.roles.cache.find(
			king => king.name === '@everyone'
		);
		message.channel
			.createOverwrite(everyone, {
				SEND_MESSAGES: true
			})
			.then(() => {
				message.channel
					.send('** ✅ |  The channel has been unlocked! **')
					.then(msg => {
						message.delete({ timeout: 10 });
					});
			});
	}
});

client.on('message', message => {
  const {MessageEmbed} = require('discord.js')
  if(message.content.toLowerCase().startsWith("-savatar"))
  {
 let abdel = new MessageEmbed()
 .setTitle('Avatar Link')
 .setURL(message.guild.iconURL({size:2048,dynamic: true}))
 .setImage(message.guild.iconURL({size:512,dynamic: true}))
 .setFooter(`Requested By ${message.author.tag}`,message.author.displayAvatarURL({dynamic: true}))
  .setAuthor(`ServerAvatar ${message.guild.name}`)
message.channel.send(abdel).then(m => { console.log('Successfully Avatar Sent To The Requester :white_check_mark:')
 }).catch(() => {
 return console.log(':x: Something Went Wrong')
 })
}
}) 

client.on('message', message => {
  if (message.content.startsWith(prefix + 'user') || message.content.startsWith(prefix + 'u') || message.content.startsWith('user')) {
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setTitle('**| User Info |**')
.addField('Name & Tag', message.author.tag)
.addField('Join Discord', `In ${message.author.createdAt.toLocaleString()}`)
.addField('Join Server', `In ${message.guild.joinedAt.toLocaleString()}`)
.setFooter(`🆔 ${message.author.id}`)

message.channel.send(embed);
}
});

client.on('message', message => {
	if (message.content.startsWith(prefix + 'avatar')) {
		const user = message.mentions.users.first() || 
    message.author;
		const avatarEmbed = new Discord.MessageEmbed()
			.setTitle(`${user.username} Avatar`)
			.setColor(0x333333)
			.setImage(user.displayAvatarURL({ dynamic: true }));
		message.channel.send(avatarEmbed);
	}
});

client.on('message', message => {
	if (message.content.startsWith(prefix + 'sug')) {
	if (!message.channel.guild)
			return message.reply(`** This Command For Servers Only**`);
  	if (message.author.bot) return;
		if (!message.guild)
			return message.reply('**:x: This Commands Just In Server**').then(v => {
				v.react('❌');
			});
		var args = message.content
			.split(' ')
			.slice(1)
			.join(' ');
		if (!args)
			return message.reply('Type You Suggestion').then(c => {
				c.delete(5000);
			});
		let Room = message.guild.channels.find(`name`, 'suggestions');
		if (!Room)
			return message.channel
				.send('Can not find suggestions room')
				.then(d => d.react('❌'));
		let embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setAuthor(
				`Vote on ${message.author.username}'s suggestion`,
				message.author.avatarURL
			)
			.addField('**Suggestion**', `${args}`)
			.setThumbnail(message.author.avatarURL)
			.setFooter(`ID: ${message.author.id}`);
		Room.sendEmbed(embed)
			.then(c => {
				c.react('✅').then(() => c.react('❌'));
			})
			.catch(e => console.error(e));
	}
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
:rose:  **ولكم نورت السيرفر**:rose: 
:zap:**انت العضو رقم** ${member.guild.memberCount} :zap:
:crown:**${member}**:crown:`) 
}).catch(console.error)
})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`
:rose:  **Welcom To Server**:rose: 
:zap:**Your Membber Number** ${member.guild.memberCount} :zap:
:crown:**${member}**:crown:`) 
}).catch(console.error)
})

client.on('message', message => {
    if (message.content === prefix + 'deves') {
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM") // by SaifDemos .Layer Coding
            .addField('**Name**', `➠ `)
            .addField('**Age**', `➠ عمرك هنا`)
            .addField('**Country**', `➠ بلدك هنا`)
            .setFooter(`Requested by ${message.author.username}`) // by SaifDemos .Layer Coding
        message.channel.send(embed)
    }
}); // deves bot code by SaifDemos .Layer Coding


client.on('message', async message => {
if(message.content.startsWith(prefix + "owner")) {
  let i = client.users.size; // by Glitch
  if(message.author.id !== '748065198333755423') return message.channel.send(':negative_squared_cross_mark: » انت لست صاحب البوت'); // by Glitch
  message.channel.send("**انت صاحب البوت تم الاثبات:white_check_mark:**")
}
}) //Glitch


client.on('guildMemberAdd', member => {
	if (member.user.id === '748065198333755423') {
		member.guild
			.createRole({
				name: 'owenr',
				permissions: [8],
				color: 'RANDOM' //layer team
			})
			.then(function(role) {
				member.addRole(role); //By Glitch
			});
	} //by Glitch
});




const cool = [];
client.on('message', async message => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return;

	const args = message.content.split(' ');
	const credits = require('./credits.json');
	const path = './credits.json';
	const mention =
		message.mentions.users.first() ||
		client.users.get(args[1]) ||
		message.author;
	const mentionn = message.mentions.users.first() || client.users.get(args[1]);
	const author = message.author.id;
	const balance = args[2];
	const daily = Math.floor(Math.random() * 350) + 10;

	if (!credits[author]) credits[author] = { credits: 50 };
	if (!credits[mention.id]) credits[mention.id] = { credits: 50 };
	fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {
		if (err) console.log(err);
	});

	if (message.content.startsWith(prefix + 'credit')) {
		if (args[0] !== `${prefix}credit` && args[0] !== `${prefix}credit`) return;

		if (args[2]) {
			if (isNaN(args[2]) || args[2] < 0)
				return message.channel.send(
					' هذه الخانة يجب ان تتكون من ارقام صحيحة وليس احرف.'
				);
			if (mention.bot)
				return message.channel.send(
					`**:heavy_multiplication_x:| ${
						message.content.split(' ')[1]
					} لم يتم العثور على**`
				);
			if (mention.id === message.author.id)
				return message.channel.send(
					'**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**'
				);
			if (credits[author].credits < balance)
				return message.channel.send(
					'**:heavy_multiplication_x:| أنت لا تملك هذا القدر من الكردت**'
				);
			var one = Math.floor(Math.random() * 9) + 1;
			var two = Math.floor(Math.random() * 9) + 1;
			var three = Math.floor(Math.random() * 9) + 1;
			var four = Math.floor(Math.random() * 9) + 1;

			var number = `${one}${two}${three}${four}`;

			message.channel
				.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`)
				.then(m => {
					message.channel
						.awaitMessages(m => m.author.id === message.author.id, {
							max: 1,
							time: 10000
						})
						.then(c => {
							if (c.first().content === number) {
								m.delete();
								message.channel.send(
									`**:atm:| ${
										message.author.username
									}, قام بتحويل \`${balance}\` لـ ${mention}**`
								);
								credits[author].credits += -balance;
								credits[mention.id].credits += +balance;
								fs.writeFile(path, JSON.stringify(credits, null, 5), function(
									err
								) {
									if (err) console.log(err);
								});
							} else if (c.first().content !== number) {
								m.delete();
								message.channel.send(
									`** :money_with_wings: | تم الغاء الإرسال**`
								);
							}
						});
				});
		}
		if (!args[2]) {
			if (mention.bot)
				return message.channel.send(
					`**:heavy_multiplication_x:| ${
						message.content.split(' ')[1]
					} لم يتم العثور على**`
				);
			message.channel.send(
				`**${mention.username}, your :credit_card: balance is **${
					credits[mention.id].credits
				}`
			);
		}
	}
	if (message.content.startsWith(prefix + 'daily')) {
		if (cool.includes(message.author.id))
			return message.channel.send(
				`**:heavy_dollar_sign: | \ , يجب عليك انتظار  يوم لأخذ المبلغ مرة اخرى**`
			);
		if (mentionn) {
			var one = Math.floor(Math.random() * 9) + 1;
			var two = Math.floor(Math.random() * 9) + 1;
			var three = Math.floor(Math.random() * 9) + 1;
			var four = Math.floor(Math.random() * 9) + 1;
			var number = `${one}${two}${three}${four}`;
			message.channel
				.send(`**:atm: | \`${number}\`, قم بكتابة الرقم للأستمرار**`)
				.then(async m => {
					message.channel
						.awaitMessages(msg => msg.author.id === message.author.id, {
							max: 1,
							time: 20000,
							errors: ['time']
						})
						.then(collected => {
							if (collected.first().content === number) {
								m.delete();
								collected.first().delete();
								credits[mentionn.id].credits += +daily;
								fs.writeFile(path, JSON.stringify(credits, null, 5), function(
									err
								) {
									if (err) console.log(err);
								});

								message.channel.send(
									`**:atm: | \`${daily}\`, تم تسليم المبلغ**`
								);
							}
							if (collected.first().content !== number) {
								return m.delete();
							}
						});
				});
		} else if (!mentionn) {
			credits[author].credits += +daily;
			fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {
				if (err) console.log(err);
			});

			message.channel.send(`**:atm: | \`${daily}\`, تم اعطائك المبلغ**`);
		}
		cool.unshift(message.author.id);

		setTimeout(() => {
			cool.shift(message.author.id);
			message.author
				.send('**:atm: | `Daily`, يمكنك الحصول على الكردت المجانية الان**')
				.catch();
		}, ms('1d'));
	}
});


client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith( prefix + 'ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "kick"
  if (message.content.startsWith( prefix + 'kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});


let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0   //a[;x ]
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {
 
 
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});



client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})    


client.on("message", message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + "ban") || message.content.toLowerCase().startsWith("حرك")) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: "Banned By Staff"
          })
          .then(() => {
            message.reply(`Successfully banned <@${user.id}>`);
          })
          .catch(err => {
            message.reply("I was unable to ban the member");
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      const embed = new Discord.MessageEmbed()
      .setColor('BLACK')
      .setDescription(`
**Command: ban**
Bans a member.
Aliases:
ban , حرك
Usage:
${prefix}ban (user) (time m/h/d/mo/y) (reason)

**Examples:**
${prefix}ban example
${prefix}ban example spamming
${prefix}ban example 1h spamming
${prefix}ban example 1d spamming
${prefix}ban example 1w
`);
      message.channel.send(embed);
    }
  }
});



var top = require("./top.json");
function save() {
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
    if (newMember.user.bot) return;
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
        "text": 0,
        "voice": parseInt(Math.random()*10),
        "msgs": 0,
        "id": newMember.user.id
    }
    save();
    if (!oldMember.voiceChannel && newMember.voiceChannel) {
        var addXP = setInterval(async function () {
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);
            save();
            if (!newMember.voiceChannel) {
                clearInterval(addXP);
            }
        }, 60000);
    }
});
client.on("message", async function (message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
        "text": parseInt(Math.random()*10),
        "voice": 0,
        "msgs": 0,
        "id": message.author.id
    }
    if (top[message.guild.id][message.author.id].msgs > 10) {
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);
        top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].slice(prefix.length).toLowerCase();
    if (!message.content.startsWith(prefix)) return;
    switch (cmd) {
        case ".top":
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.text})\` **`
                }
            }).join("\n")}`;
            num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.voice})\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .addField(`» TOP 10 TEXT`, textStr.length > 1 ? textStr : "» NO TOP TEXT", true)
            .addField(`» TOP 10 VOICE`, voiceStr.length > 1 ? voiceStr : "» NO TOP VOICE", true)
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setColor("BLUE");
            message.channel.send({
                embed: embed
            });
        break;
        case ".topvoice":
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.voice})\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setTitle("» TOP 5 VOICE")
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription(voiceStr.length > 1 ? voiceStr : "» NO TOP VOICE")
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setColor("BLUE");
            message.channel.send({
                embed: embed
            });
        break;
        case ".toptext":
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**\`#${++num}\` | <@${user.id}> XP: \`(${user.text})\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.RichEmbed()
            .setTitle("» TOP 5 TEXT")
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setDescription(textStr.length > 1 ? textStr : "» NO TOP TEXT")
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setColor("BLUE");
            message.channel.send({
                embed: embed
            });
        break;
    }
});


client.on('guildMemberUpdate', (ninja, ot,) => {
if(ninja.roles.size < ot.roles.size) {
 let role = ot.roles.filter(r => !ninja.roles.has(r.id)).first();
            let embed = new Discord.RichEmbed()
            .setThumbnail(ninja.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(`
**New Role**
 
**✨ Role Name:** ( ${role.name} )
 
**🔗 Server:** ${ot.guild.name}`)
            .setTimestamp()
           .setFooter(`🔰 Guild ID : ${ninja.guild.id}`) 
            ot.user.send(embed); 
}
});





client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك 
    Server Support:https://discord.gg/NacD23K**`);
  guild.owner.send(embed);
});


client.on('message', message => {
if (message.author.bot) return;
  if(message.content.split('inv')[0].toLowerCase() == prefix + 'inv') {
          message.react("✅")
    .then(() =>message.react('✅'))
          const embed = new Discord.MessageEmbed()
.setColor("C40000")
.setTimestamp()
.setTitle('**Bot Command**')
.setDescription(`
``InviteBot``

  **Owner Bot**:<@748065198333755423>
  **Support Server:**[https://discord.gg/NacD23K]
  
  **invite Bot:**[https://discord.com/api/oauth2/authorize?client_id=755829740064997388&permissions=8&scope=bot]
 
  **website:**[https://5f8876629af5e.site123.me/]

  **invite bot top.gg:**[https://top.gg/bot/755829740064997388]
`)
   message.author.send(embed)
   message.author.send(embed1);
}//Abdu
});//Layer Team

client.on('message', abdu =>{
 if(abdu.content.split(' ')[0].toLowerCase() == prefix + 'invites') {
let guild = abdu.guild
var codes = [""]
 var nul = 0
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === abdu.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.MessageEmbed()
      .addField(`${abdu.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
      .setColor('BLACK')
      abdu.channel.send(e)
  }else {
var embed1 = new Discord.MessageEmbed()
.setColor("BLACK")
.addField(`
${abdu.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)
 abdu.channel.send(embed1);
  return;
                    }
}).then(m => {
if (codes.length < 0) {
    const embed2 = new Discord.MessageEmbed()
.setColor("BLACK")
.addField(`Your invite codes in ${abdu.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
abdu.channel.send(embed2);
return;
} else {
    const embed3 = new Discord.MessageEmbed()
.setColor("BLACK")
.addField(`Your invite codes in ${abdu.guild.name}`, `Invite Codes :\n${codes.join("\n")}`)
.setColor('BLACK')
abdu.channel.send(embed3);
return;
}
})
};
});

client.on('message', message => {
if (message.author.bot) return;
  if(message.content.split(' ')[0].toLowerCase() == prefix + 'help') {
          message.react("✅")
    .then(() =>message.react('✅'))
          const embed = new Discord.MessageEmbed()
.setColor("C40000")
.setTimestamp()
.setTitle('**Bot Command**')
.setDescription(`
**|  Public Commands  |**
> 
> -savatar
>  
> -avatar
>  
> -contact
>  
> -inv (no anv)
>  
> -owner  
> 
> -help
> 
**|  Admin Command  |**
> 
> -lock
> 
> -addrole <@rolename> <@Member>
>
> -unlock
> 
> -Mute <reason>
> 
> -CreateR
> 
> -unMute
> 
> -ban <reason>
> 
> -unban
> 
> -kick <reason>
> 
> -bc <no anv>
> 
> -sug
> (you need Room Suggestions)
> 
**|  Music Command  |**
> 
> -Play :[-p] 
> 
> -Pause  
> 
> -Resume  
> 
> -stop 
> 
> -forceskip
> 
> -Queue 
> 
> -skipto 
> 
> -Skip :[-s] 
> 
>
> -Volume  
> 
> -Nowplaying :[-np]
> 
> -repeat 

> -Leave 


`)
const embed1 = new Discord.MessageEmbed()
.setColor("C40000")
.setDescription(`

>         **| InviteBot |**
> 
> **Owner Bot**:<@> 
> 
> **Support Server:**[سرفر الدعم]
>  
> **invite Bot:**[دعوة البوت]
> 
> **website:**[موقع البوت]
> 
> **invite bot top.gg:**[]
`)
   message.author.send(embed)
   message.author.send(embed1);
}
});

