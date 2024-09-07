require('dotenv').config();
const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const puppeteer = require('puppeteer');

const operations = require('./ops');

const start = async () => {

  const server = Hapi.server({ port: process.env.PORT || 4000 });

  server.route({
    method: 'POST',
    path: '/get-balance',
    options: {
      validate: {
        payload: Joi.object({
          surname: Joi.string().required(),
          smartcard: Joi.string().required()
        })
      }
    },
    handler: async (request, h) => {

      const { surname, smartcard } = request.payload;

      const browser = await puppeteer.launch({ headless: 'new', timeout: 7000 });

      const page = await browser.newPage();

      try {
        await operations.login(page, surname, smartcard, process.env.LOGIN_URL);

        const availableBalance = await operations.getAvailableBalance(page);

        if (isNaN(availableBalance)) {
          throw "Not a number";
        }

        return h.response({ balance: availableBalance }).code(200);

      } catch (error) {
        return h.response({ error: error.message }).code(500);
      } finally {
        await browser.close();
      }
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

start().catch(err => {
  console.log(err);
});
