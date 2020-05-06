---
title: ROAR
for: Vancouver Coastal Health
shortDescription: "ROAR is a web app that streamlines the process of registering newly-hired employees into training sessions."
year: 2019
published: true
order: 2
imagePath: ROAR/images/featured
featured: true
tags: ["Design", "Development"]
roles:
  [
    "Interaction Design",
    "Interface Design",
    "Project Management",
    "Full-Stack Web Development",
  ]
tools: ["Sketch", "React", "Laravel"]
interested: "<a href='/contact'>Contact me</a>"
summary: "<a href='http://vch.ca' target='_blank'>Vancouver Coastal Health</a> trains around 1000 new staff per year, but was processing all new hires with manual document editing and data entry. To modernize the workflow, I worked alongside the Clinical Education and Recruitment Services teams to design and develop a web app to automate each employee’s schedule and manage education sessions. The new process saves over 750 hours of labour each year."
---

import Showcase from '~/components/Showcase'

## Contribution

As the sole member of my team working on the project, I was responsible for user experience design, interface design, project management, and full-stack development. I regularly met with users and stakeholders to ensure the project was usable and fulfilled requirements, and balanced business needs and user experience.

## Problem

Vancouver Coastal Health is responsible for the training of over 15 thousand healthcare staff and volunteers. The process of registering a newly-hired employees into their mandatory training sessions involved numerous emails, PDF forms, manual data entry into multiple spreadsheets, and hand-editing a Word template to create each employee’s training schedule.

## Solution

In order to modernize the workflow, I worked alongside the Clinical Education and Recruitment Services teams to design and develop a web app to generate each employee’s schedule and manage education sessions.

<Showcase
  path="ROAR/videos/registration"
  type="video"
  source="cloudinary"
  content="To register a new hire for training, a recruitment associate fills out the registration form"
/>

<Showcase
  path="ROAR/videos/dashboard"
  type="video"
  source="cloudinary"
  content="The Dashboard displays registrations that have been submitted along with their status"
/>

<Showcase
  path="ROAR/videos/schedule"
  type="video"
  source="cloudinary"
  content="The employee's schedule is generated based on the data from the registration form, and can be reviewed in-browser and sent to the employee"
/>

## Process

### Design

Clinical Education staff initially approached our team asking how the amount of manual labour involved in the registration process could be reduced. After evaluating the workflow from end to end, I confirmed that much of the work that people were doing could be accomplished using relatively simple technologies. This led me to my initial problem frame:

> How might we leverage technology to reduce the time spent on new hire registration?

We also noted that the workflow was not centralized in any way — the first step took the form of a PDF attached to an email; the next step involved a spreadsheet stored on a network drive; the step after that involved a Word document in a subfolder (which was then saved as another PDF and emailed to the employee). This presented another frame:

> How might we centralize the registration process so that all relevant information is accessible within a single system?

There was also an opportunity to improve the process for the staff that were submitting the registration — rather than providing a PDF that had to be downloaded with an embedded button to save and send in an email (which seemed to only work intermittently), we framed the problem with a focus on the beginning of the process:

> How might we rethink the way the registration is submitted to eliminate work for the person submitting the form?

Due to the complexity of the project, CEAs and Recruitment Associates provided input every step of the way. This made sure that we were designing something that was similar enough to their existing workflow to be understandable, but also made things more efficient where possible.

### Development

Laravel and React were used to create a system that was available over the Internet to anyone that needed to submit a registration, and to CEAs no matter the location. The Ant Design UI library was used to create a product that was visually similar to the mockups without spending too much time creating custom components.

## Results

According to Clinical Education, CEAs process roughly 1500 new hires per year at a conservative estimate of half an hour each. That means 750 hours are spent every year creating schedules. Since ROAR automates schedule creation and data management to be practically instantaneous, we eliminate the majority of that time.
