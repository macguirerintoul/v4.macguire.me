# Content

The `content` directory contains all site content that is stored as Markdown files. Gridsome uses these files to create pages. Each type of content requires certain front-matter fields to work properly. [`vue-remark`](https://github.com/gridsome/gridsome/tree/master/packages/vue-remark) is used to transform the Markdown, meaning we can import Vue components and use them in the files.

## `./projects`

The `./projects` directory contains Markdown files with the necessary data to create a Project page. These files are rendered in the Project template (`~/templates/Project`).

### Fields

- `title` (String): the title of the project
- `for` (String): what the project was for (e.g. employer, university course, etc.)
- `shortDescription` (String): brief description of the project used on the homepage
- `featured` (Boolean): whether the project should be featured under 'Selected work' on the homepage
- `order` (Integer): the order in which the project should appear on the homepage
- `imagePath` (String): the image path of the project's featured image in Cloudinary
- `year` (Integer): the year the project was completed
- `published` (Boolean): whether the project should be included in page builds
- `tags` (Array:String): tags for the project
- `roles` (Array:String): roles I had in the project
- `tools` (Array:String): tools I used to complete the project
- `summary` (String): a longer-form summary which will be rendered as HTML on the project page
- `interested` (String): suggestions for visitors who are interested in learning more about the project, rendered as HTML on the project page

### Structure

Projects should have a consistent content structure as follows.

#### Highlights

Discuss highlights of the project (e.g. awards, acknowledgements, results). This serves as an executive summary of what the project accomplished.

#### Contribution

Discuss my personal contribution to the project. Helps recruiters/visitors understand why I was important to the project.

#### Problem

Discuss the problem to be solved through the project.

#### Solution

Discuss the solution that came from the process.

#### Process

Link to a more detailed explanation of the project's process, if available.

## `./blog`

The `./blog` directory contains Markdown files with the necessary data to create a Blog Post page. These files are rendered in the Post template (`~/templates/Post`).

### Fields

- `title` (String): a title for the post
- `date` (Date): when the post was published

### Structure

Posts that elaborate on the process of a project should have a consistent structure.

#### Introduction

For visitors who didn't arrive via the project page, explain that the post details the process of a particular project. Provide a link back to the project page in italics.

#### Problem

Reiterate the problem as presented on the Project page.

#### Process

Explain the process of the project.

#### Solution

Present the project.

#### Details (optional)

Additional material that may have been too detailed for the process or solution sections.
