# Vite + Ionic = 💜💚💙
Develop Ionic/Vue apps using Vue 3, Vite, JS, Capacitor, and the Ionic framework, inspired by [this blog post](https://dev.to/aaronksaunders/getting-started-with-vitejs-ionic-framework-beta-v6-and-vuejs-2o8l).

## Notes about Usage/Workflow
This template is nothing more than a Vite/Vue/JS starter template with Ionic and Capacitor mixed in. After running `npm install` it can be treated like a normal Vue/Ionic project with a few (slightly) noteworthy exceptions:
* Rather than building with `ionic build`, use `npm run build` for Vite to compile a production build to the `dist` folder.
* Likewise, for other `ionic` commands, use corresponding Vite commands instead.
  * Found in `package.json`. 
* After installing the Capacitor CLI you can use commands such as `npx cap sync ios` like normal. 
