// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	// not sure what this was for, commenting it out to see what happens
	// chainWebpack(config) {
	// 	config.mode("development");
	// },
	siteName: "Macguire Rintoul",
	siteDescription:
		"I'm Macguire, an experience designer & software developer from Vancouver, BC. Currently, I'm working at Visier as a User Experience Design Intern. Previously, I've worked at Vancouver Coastal Health and the Connections Lab.",
	port: 3000,
	permalinks: {
		slugify: {
			use: "@sindresorhus/slugify",
			options: {
				decamelize: false // Prevents 'MyCredit' from becoming 'my-credit'
			}
		}
	},
	plugins: [
		// Add Projects collection
		{
			use: "@gridsome/vue-remark",
			options: {
				typeName: "Project", // Required
				baseDir: "./content/projects", // Where .md files are located
				route: "/work/:title",
				template: "./src/templates/Project.vue" // Optional
			}
		},
		{
			// Add Posts collection
			use: "@gridsome/vue-remark",
			options: {
				typeName: "Post", // Required
				baseDir: "./content/blog", // Where .md files are located
				route: "/blog/:title",
				template: "./src/templates/Post.vue" // Optional
			}
		}
	],
	transformers: {
		remark: {
			externalLinksTarget: "_blank",
			externalLinksRel: "noopener"
		}
	}
};
