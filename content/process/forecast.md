import MagicVideo from '~/components/MagicVideo'

### Getting started

My goal at first was to simply learn Vue and see what Electron was all about. I wasn't sure if I would be able to create the countdown to-do list app I was imagining, but that would be a nice bonus.

I was inspired by an app called [Clear](https://apps.apple.com/us/app/clear-todos/id493136154), a beautiful & simple to-do list app with fun interactions. It had few features, but was great at being a to-do list. I wanted to apply a similar philosophy to Forecast, because the problem it was meant to solve was clear and contained.

My priority was to learn development, so I didn't spend much time doing design up-front. I had a pretty clear vision in mind (a list of tasks with the time remaining for each) so I started on a functional prototype right away. 

While Electron has its downsides, it was nice to be able to get up and running quickly using technology I was familiar with. To start the project, I used [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder), which helps bootstrap an Electron app using Vue.

### Making the app

I found Vue lovely to work with. I didn't have the best understanding of JavaScript when I began, so the way Vue is organized made more sense to me compared to React's more JavaScript-y approach. Nowadays, I still prefer Vue over React — something about the way the code is structured feels clearer to me.

The first thing I did was set up event creation, so I could add my tasks. I used [nedb](https://github.com/louischatriot/nedb/), a MongoDB-like database, to store events in a local database, and [moment](https://github.com/moment/moment) to handle dates and calculations. I set up an HTML form where users could add their tasks, which were written to the database and displayed in a list. 

At one point, I even replicated Clear's increasing-darkness UI with a fancy bit of CSS I found somewhere online. Here's what Forecast looked like at this stage:

![The Forecast UI, where each list item is a darker shade of blue than the previous.](~/assets/images/forecast/clear-ui.png)

From here, I fixed bugs and made small usability improvements, like making the default date 'tomorrow' to provide a starting point for tweaking. 

This was cool, but there was still no way to remove a task when it was complete. To implement this (still inspired by Clear), I used [vue-swipe-actions](https://github.com/eCollect/vue-swipe-actions) which allows dragging list items to expose actions. A 'delete' button on the task would've been more straightforward, but I found it more fun to interact with the tasks in a physical way (right-clicking a task also reveals the 'Complete' button).
 
<MagicVideo source="cloudinary" path="Forecast/videos/clear-demo_re1rij" />

I had never been completely happy with the UI, as it felt (and was) a clone. Around this time, I saw an insightful talk from designer Sean Wolcott about the design of his app [Minimal Calendar](https://rationale-design.com/our-work/minimal-calendar/). What I got from Sean's presentation was that sometimes the best design is no design; Apple (and Windows) already have an established design language, so there's no need to create another. Using native styles would also help the app blend in to the system, so that's what I went with.

Over time, I used and worked on the app here and there. I made several improvements, including:

#### Push notifications

Since Forecast is a task manager, I figured it would be useful to receive push notifications at 15 minutes as well as 1 hour from a task being due. This was easy to implement using the Notification API made available through Electron.

```js
// Send a notification if the difference is 15 minutes or an hour
const difference = this.due.diff(this.currentTime, "minutes");
if (difference === 15 || difference === 60) {
	new Notification("Forecast", {
		body: this.title + " due in " + difference + " " + this.unit,
	});
}
```

#### Helpful empty state

When someone first runs Forecast, they won't have any tasks, and likely won't know their way around. The empty state was an opportunity to show them the ropes.

![The Forecast empty state.](~/assets/images/forecast/empty-state.png)

#### Light and dark themes

Using CSS custom properties, I implemented both a light and a dark theme for Forecast. To detect the system theme, I used Electron's `nativeTheme` module. The `setOSTheme()` function is called when the app starts, to set the proper theme. 

```js
function setOSTheme() {
	let theme = nativeTheme.shouldUseDarkColors ? "dark" : "light";
	window.webContents.executeJavaScript(
		'localStorage.setItem("osTheme", "' + theme + '");'
	);
	window.webContents.executeJavaScript("window.__setTheme()");
}
```

`webContents.executeJavaScript()` in the above block is used to execute the following function in the app's `index.html`, which ultimately sets the app theme (adapted from [this post](https://medium.com/missive-app/make-your-electron-app-dark-mode-compatible-c23dcfdd0dfa)).

```js
<script>
	window.__setTheme = () => {
	  let osTheme = localStorage.osTheme
    let defaultTheme = 'light'
    document.documentElement.setAttribute(
	    'data-theme',
      osTheme || defaultTheme,
    )
  }
	__setTheme()
</script>
```

To make Forecast respond to theme changes, use `nativeTheme.on()`:

```js
nativeTheme.on("updated", () => {
	setOSTheme();
});
```

The result is an app that matches the system theme automatically (which I was pretty excited about).

<MagicVideo source="cloudinary" path="Forecast/videos/dark" />

#### Other improvements

- usage analytics (which I later removed as my views on privacy shifted)
- a "danger" style for overdue tasks
- an optional due time field for tasks
- details to make the app nicer to use, like hiding the 'new event' UI by default

### The final product

I had always wanted to release Forecast as a free open-source app, so I set up [Renovate](https://renovate.whitesourcesoftware.com/) to automate dependency updates, as well as [Travis CI](https://travis-ci.com/) to automate testing and building the app. The source code is [available on GitHub](https://github.com/macguirerintoul/Forecast), and I also created a [small site](https://forecast.macguire.me) as a home for Forecast, where you can see a full demo. 

I don't expect others to find it extremely useful, and probably won't maintain it or add additional functionality since I've now moved on to using other tools ([Notion](https://www.notion.so/)) — but if you're a fan of Forecast, [let me know](/contact)!
