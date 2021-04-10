
### Getting started

My goal at first was to simply learn Vue and see what Electron was all about. I wasn't sure if I would be able to create the countdown to-do list app I was imagining, but it *would* be a nice bonus.

I was inspired by an app called [Clear](https://apps.apple.com/us/app/clear-todos/id493136154), a beautiful & simple to-do list app with fun interactions. It had few features, but was great at being a to-do list and was enjoyable to use. I wanted to apply a similar philosophy to Forecast, because the problem it was meant to solve was clear and contained.

My priority was to learn development, so I didn't spend much time doing design up-front. I had a pretty clear (no pun intended) vision in mind — a list of tasks with the time remaining for each — so I started on a functional prototype right away. 

While I don't necessarily think Electron is a good option for applications, it was nice to be able to get up and running quickly using technology I was familiar with. To start the project, I used [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder), which helps bootstrap an Electron app using Vue.

### Making the app

I found Vue lovely to work with. I didn't have the best understanding of JavaScript when I began, so the way Vue is organized made more sense to me compared to React's more JavaScript-y approach. To this day, I still prefer Vue's syntax over React's — something about the way the code is structured feels clearer to me.

The first thing I did was set up event creation, so I could add my tasks. I used [nedb](https://github.com/louischatriot/nedb/), a MongoDB-like database, to store events in a local database, and the infamous [moment](https://github.com/moment/moment) to handle dates and calculations. I set up an HTML form where users could add their tasks, which were written to the database and displayed in a list. 

At one point, I even replicated Clear's increasing-darkness UI with a fancy bit of CSS I found somewhere online. Here's what Forecast looked like at this stage:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2db2c902-3581-4a6f-89c6-033ed7e216c9/Screen_Shot_2020-05-25_at_2.12.20_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2db2c902-3581-4a6f-89c6-033ed7e216c9/Screen_Shot_2020-05-25_at_2.12.20_PM.png)

From here, I fixed bugs and made small usability improvements, like making the default date 'tomorrow' to provide a starting point for tweaking. This was cool, but there was still no way to remove a task after it was completed. To implement this (still being inspired by Clear), I used [vue-swipe-actions](https://github.com/eCollect/vue-swipe-actions) which allows dragging list items to expose actions. A 'delete' button on the task would've been more straightforward, but I found it more fun to interact with the tasks in a physical way (but right-clicking a task also reveals the 'Complete' button).

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/37b81a44-9026-422b-96c8-e1e251b1c4ff/Screen_Recording_2020-05-25_at_2.23.42_PM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/37b81a44-9026-422b-96c8-e1e251b1c4ff/Screen_Recording_2020-05-25_at_2.23.42_PM.mov)

I had never been totally happy with the UI, as it was wrong to be ripping off another app like that (even though this was just a fun project). Around this time, I saw an insightful talk from designer Sean Wolcott about the design of his app [Minimal Calendar](https://rationale-design.com/our-work/minimal-calendar/). 

What I got from it was that sometimes the best design is no design. Apple (and Windows) already have an established design language, so there's no need to create another. Using native styles would also help the app blend in to the system, so that's what I went with.

Over time, I used and worked on the app here and there. I made several improvements, including:

#### Push notifications

Since Forecast is a task manager, I figured it would be useful to receive push notifications at 15 minutes as well as 1 hour from a task being due. This was easy to implement (far easier than I'd imagined) using the Notification API made available through Electron.

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

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6181d61c-73a2-440f-8a55-331932387514/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6181d61c-73a2-440f-8a55-331932387514/Untitled.png)

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

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b70e98fe-0ae3-4be6-b78a-263036bcd39f/dark2.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b70e98fe-0ae3-4be6-b78a-263036bcd39f/dark2.mov)

#### Other improvements

- usage analytics (which I later removed as my views on privacy shifted)
- a "danger" style for overdue tasks
- an optional due time field for tasks
- details to make the app nicer to use, like hiding the 'new event' UI by default

### The final product

I had always wanted to release Forecast as a free open-source app, but other priorities prevented me from publishing it. I recently picked it up again, and set up [Renovate](https://renovate.whitesourcesoftware.com/) to automate dependency updates, as well as [Travis CI](https://travis-ci.com/) to automate testing and building the app. The source code is [available on GitHub](https://github.com/macguirerintoul/Forecast), and I also created a [small site](https://forecast.macguire.me) as a home for Forecast. 

I don't expect others to find it extremely useful, and probably won't maintain it or add additional functionality since I've now moved on to using other tools ([Notion](https://www.notion.so/)) — but if you're a fan of Forecast, let me know! Here's a demo of the final product.
