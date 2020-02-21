---
title: Winebox
for: IAT 334
shortDescription: "Assists in keeping track of a personal wine collection"
featured: true
imagePath: Winebox/images/featured
year: 2017
published: true
order: 4
tags: ['Design']
roles: ['Interaction Design', 'Interface Design', 'Prototyping', 'User Research']
tools: ['Sketch', 'Principle']
summary: "One of the most common problems casual wine collectors face is keeping track of their favourite wines and wineries. Since many collectors are only moderately interested, many aren't invested enough to spend time on organization, but later forget the details of wines they enjoyed. After observing these problems across several adult couples, we decided to design a digital solution during an interface design course at SFU."
---

import Showcase from '~/components/Showcase'
import Blockquote from '~/components/Blockquote'

## Contribution
As one of the interface designers, I was responsible for designing the collection tab of Winebox, as well as features in other tabs. As the primary researcher, I developed a survey of 18 respondents, and conducted interviews and think-aloud user tests with various wine collectors to inform and validate the project. At the end of the course, I revised the visual design of the interface.

## Problem
The initial ideas for the product began from the observation that casual wine collectors were often forgetting the details of their wines. We investigated the various stages of wine enthusiasm through interviews and a survey, and found that current options for keeping track of a wine collection aren't quite ideal.

### Is there anything that frustrates you about collecting wine?

<Blockquote
  quote='"Forgetting the wines I love the best."
"I can never remember the cost, where it came from or how long it will last."
"The price! lol but I find its difficult to store and categorize."'
  source="Wine collector research survey"
/>

### Please describe methods you currently use to organize and manage your collection. Do any of these methods incorporate technology?
<Blockquote
  quote='"None, but I could see that being useful."
"I don’t use any. Masking tape and permanent marker to mark the ones my wife can’t open"
"Nothing organized."'
  source="Wine collector research survey"
/>

## Solution
Winebox allows people to more easily understand and manage their wine collection, no matter how serious of a collector they are. Winebox accommodates Sunday sippers and seasoned sommeliers, and tells you everything you would like to know about your wines before you have to ask.

<Showcase
  path="Winebox/videos/collection"
  type="video"
  source="cloudinary"
  orientation="media-left"
  content="The collection screen gives an overview of the collection at a glance, and organizes wines into smart categories"
/>

<Showcase
  path="Winebox/videos/add_wine"
  type="video"
  source="cloudinary"
  orientation="media-right"
  content="Wines can be added by scanning a barcode, or manually entering information"
/>

<Showcase
  path="Winebox/videos/history"
  type="video"
  source="cloudinary"
  orientation="media-right"
  content="History items can be shared with friends to recommend a great bottle"
/>

## Process

To better understand the opportunity, we interviewed five semi-serious wine collectors and collected surveys from eighteen. From this research, we were able to identify wants and frustrations, and better understand the ways in which wine was part of people's lives.

<Showcase
  path="Winebox/images/persona"
  type="image"
  source="cloudinary"
  content="Zameel, the persona we developed from research"
/>

In order to better serve collectors, we focused on addressing frustrations that were brought up consistently when they were asked about their collections. The source of many struggles seemed to be that people couldn’t remember the details that they wanted in that moment. This led us to frame the challenge:

> How might we help people keep tabs on their collections and avoid losing the details?

Further research revealed that people engage with wine in a variety of contexts; at home, at dinner with friends, at liquor stores. We also noted that people could make use of their collection information in any of these contexts.

> How might we provide a companion for the various situations that surround wine?

We mapped out our persona's experience across common wine-related situations to identify frictions and opportunities.

<Showcase
  path="Winebox/images/experience_map_1"
  type="image"
  source="cloudinary"
  content="The first segment of Zameel's experience map"
/>

<Showcase
  path="Winebox/images/experience_map_2"
  type="image"
  source="cloudinary"
  content="The second segment of Zameel's experience map"
/>

The experience map included different contexts of use, although we ultimately ended up designing for use at home.
