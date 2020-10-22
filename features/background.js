// random integer between 0 and max
const randomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

module.exports = (controller) => {

  // what is your phone number
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('phone') || message.text.toLowerCase().includes('cell') || message.text.toLowerCase().includes('number'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `<a href="tel: 845-866-4302">${controller.resume.phone}</a>`);
    }, 1200);
  });

  // what is your email
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('email'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `<a href="mailto: danielsinger200@gmail.com">${controller.resume.email}</a>`);

    }, 1200);
  });

  // what is your github
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('github'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 300)

    setTimeout(async () => {
      await bot.reply(message, `<a href="https://github.com/dannys430" target="_blank">${controller.resume.github}</a>`);
    }, 1200);
  });

  // where did you go to college
  controller.hears(async (message) => message.text && message.text.toLowerCase().includes('college') || message.text.toLowerCase().includes('school'), ['message'], async (bot, message) => {

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { type: 'typing' });
    }, 500)

    setTimeout(async () => {
      await bot.reply(message, `I'm a graduate of ${controller.resume.school}, where I studied full stack software engineering.`);
    }, 2300);
  });
  

}