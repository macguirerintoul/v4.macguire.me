// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const removeMd = require("remove-markdown");
const { truncateOnWord } = require("./src/utilities");

module.exports = function(api) {
	api.loadSource(({ addSchemaResolvers }) => {
		addSchemaResolvers({
			Post: {
				// Adds a front-matter field 'excerpt' to all Post objects
				excerpt: {
					type: "String", // Type of the field
					resolve: function(obj) {
						// What to populate the field with
						return truncateOnWord(removeMd(obj.content));
					}
				}
			}
		});
	});
};
