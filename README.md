sudo apt install -y libx11-xcb1 libxcomposite1 libxdamage1 libxi6 libxtst6 libnss3 libcups2 libxss1 libxrandr2 libasound2 libpangocairo-1.0-0 libatk1.0-0 libatk-bridge2.0-0 libgtk-3-0 libgbm1


If you prefer to use Yarn as your package manager, you can use it with PM2 as well. PM2 supports Yarn out of the box, so you don't need to change much in your setup.

**Installing PM2**

If you haven't installed PM2 yet, install it globally using Yarn:

```bash
yarn global add pm2
```

**Using PM2 with Yarn**

1. Navigate to the directory containing your `server.js` file.

2. Start your application with PM2 using Yarn with the following command:

   ```bash
   pm2 start yarn --interpreter bash --name my-app -- start
   ```

In this command, `yarn` is the script that PM2 will run, `--interpreter bash` tells PM2 to run the script with bash, `--name my-app` sets the name of the application as it will appear in PM2's process list, and `start` is the argument passed to the yarn command.

3. To view the status of your application or any other managed processes, use the following command:

   ```bash
   pm2 list
   ```

4. To stop your application, you can use the application name from the PM2 process list:

   ```bash
   pm2 stop my-app
   ```

5. To restart your application, use the following command:

   ```bash
   pm2 restart my-app
   ```

Remember to replace `my-app` with the name you want to give your application.

[Source 1](https://pm2.keymetrics.io/docs/usage/quick-start/), [Source 2](https://www.npmjs.com/package/pm2), [Source 3](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps)

*FOR Educational purpose only*