---
title: MyCredit
for: "IAT 438: Interactive Objects & Environments"
shortDescription: "Helps Vancity members understand and build credit, improving their financial well-being"
featured: true
order: 1
imagePath: MyCredit/images/featured
year: 2018
published: true
tags: ['Product Design']
roles: ['Content Strategy', 'Project Management', 'Interface Design', 'User Research']
tools: ['Sketch', 'Keynote', 'G Suite']
summary: "Despite the importance of credit in personal finance, an estimated 56% of Canadians have never checked their credit score and 31% don't know how to improve their score (BMO, 2016). We saw this as an opportunity to support people in learning about credit through a mobile app offered by Vancity, a local credit union. The project was extremely well-received by industry designers and Vancity directors, who invited us to present to their Digital Services team at their head office in Vancouver."
contribution: "As the project manager, I ensured that the project's individual parts were being completed and were cohesive, and decided when to stop iterating and start polishing. As the content strategist, I wrote copy that was consistent with our three design principles: personal, clear, and hopeful. I also ensured that the credit-related content in MyCredit was beneficial and easy to understand, which I validated by conducting interviews and think-aloud testing with 9 participants."
---

import Showcase from '~/components/Showcase'
import MagicLink from '~/components/MagicLink'
import MagicVideo from '~/components/MagicVideo'
import MagicImage from '~/components/MagicImage'
import Blockquote from '~/components/Blockquote'

<MagicVideo type="vimeo" path="305425536" />

## Problem
Despite the importance of credit scores in personal finance, an estimated 56% of Canadians have never checked their credit score and 31% don't know how to improve their score.

<Blockquote
  quote="With 250,000 of them – close to half of our members – interacting with us almost entirely online or via our mobile app, we’re under pressure to deliver even more mobile and digital functionality."
  url="https://www.vancity.com/AboutVancity/GovernanceAndLeadership/OurReports/2017/"
  source="Vancity 2017 Annual Report"
/>

Vancity's current website offers some credit help, but it lies 4 levels deep in navigation. Furthermore, their existing banking app has yet to provide resources for credit management.

## Solution
MyCredit is a companion app for Vancity members to manage their credit and set goals that encourage credit building, to better support their financial well-being.

<MagicVideo source="vimeo" path="305425815" />

<Showcase
  path="MyCredit/videos/onboarding"
  type="video"
  source="cloudinary"
  orientation="media-left"
  content="Since credit is unfamiliar for so many people, the onboarding helps members learn a bit about credit while setting up the app."
/>

<Showcase
  path="MyCredit/videos/score_details"
  type="video"
  source="cloudinary"
  orientation="media-right"
  content="The Score Details screen provides members with an overview of their score, as well as a breakdown of what is influencing their score."
/>

<Showcase
  path="MyCredit/videos/learn"
  type="video"
  source="cloudinary"
  orientation="media-left"
  content="The Learn tab provides resources for members to better understand the five factors that influence their score, and how their financial activity is influencing their score."
/>

<Showcase
  path="MyCredit/videos/goals"
  type="video"
  source="cloudinary"
  orientation="media-right"
  content="The Goals tab allows members to track their progress, see the steps they need to take to improve their score, and set new goals."
/>

## Process
After discovering the study by BMO, we decided that as a values-based non-profit organization, Vancity would be a great client to design for. We audited Vancity's existing products and services, and identified frictions.

From secondary research, we drew two main insights: that people are reluctant to check their score, and that many don't feel the need to until a lender requires it.

<MagicImage path="MyCredit/images/insights" alt="Insights with more detailed explanations." />

With what we knew, we framed the problem as follows:
> How might we provide guidance that is not overwhelming, encourages members, and provides them with tools to reach their goals?

After looking at the member segments of Vancity, we chose to focus our project toward the 'disappointed applicant', because compared to the other segments, there was more opportunity to improve their experience.

<MagicImage path="MyCredit/images/member_segment" alt="The member segment we chose to design for: the disappointed applicant." />

The target audience for MyCredit is Vancity members ages 25 - 45, as this is a period where many people are purchasing cars, paying off student loans, or might be thinking about a mortgage.

<MagicImage path="MyCredit/images/target_audience" alt="The target audience for MyCredit was Vancity members ages 25 – 45." />

From our research, we developed a persona to guide us in our process.

<MagicImage path="MyCredit/images/persona" alt="A description of the persona we developed to guide us in our process." />

We then mapped out the customer journey to identify where we could improve the experience.

<MagicImage path="MyCredit/images/customer_journey" alt="A diagram of the customer journey." />

We developed three design principles to reference throughout the project and keep us focused on what was most important.

<MagicImage path="MyCredit/images/principles" alt="The three design principles we developed: personal, clear, and hopeful." />

Of course, the project wouldn't be complete without user testing, so throughout the 3 weeks of developing the project, we iterated and validated.

<MagicImage path="MyCredit/images/iterations" alt="Screenshots of three weeks of iterations." />

A teammate and I conducted user research with nine participants over the course of the project, seeking to validate three assumptions. While the project was generally well-received, it was noted that the onboarding needed to be improved.

<MagicImage path="MyCredit/images/validation" alt="Description of the results of user testing." />

We then got to work making iterations and finalizing MyCredit.

## Product

<Showcase
  path="MyCredit/videos/other_accounts"
  type="video"
  source="cloudinary"
  orientation="media-left"
  content="Members can link credit accounts from other financial institutions via MX Technologies to receive payment reminders, view balances, and see how the account influences their score."
/>

<Showcase
  path="MyCredit/videos/notify_utilization"
  type="video"
  source="cloudinary"
  orientation="media-right"
  content="Everyone manages their finances differently, so MyCredit recommends actions specific to each member’s habits rather than providing generic information."
/>

<Showcase
  path="MyCredit/images/tips"
  type="image"
  source="cloudinary"
  orientation="media-left"
  content="Curated information helps members reach goals by providing clear, actionable steps to take."
/>

<Showcase
  path="MyCredit/videos/celebration"
  type="video"
  source="cloudinary"
  orientation="media-right"
  content="Celebrating accomplishments and recognizing members for their efforts encourages them along their credit building journey."
/>

In the case that a member's score is declining, after user testing, we decided to always project their score as if they were taking on the good habits presented in MyCredit. Research participants felt that there was enough information in the rest of the app to understand that their score was low, and that they didn't want the visual reminder that it was declining.

<MagicImage
  path="MyCredit/images/declining_score"
  source="cloudinary"
  alt="A screenshot showing future growth that could be achieved, which encourages members to improve their score."
/>

In the case that a member has no credit, MyCredit offers an explanation of why it's important and recommends ways to start.

<MagicImage
  path="MyCredit/images/no_credit"
  source="cloudinary"
  alt="Screenshots showing states when a user has no credit score."
/>

## Details
The following explains the details of our design decisions and highlights where decisions were made in MyCredit.

<MagicImage
  path="MyCredit/images/copywriting"
  source="cloudinary"
  alt="Example of copywriting in the app."
/>

<MagicImage
  path="MyCredit/images/colour"
  source="cloudinary"
  alt="Examples of using colour in the app."
/>

<MagicImage
  path="MyCredit/images/type"
  source="cloudinary"
  alt="Examples of using typography in the app."
/>

<MagicImage
  path="MyCredit/images/app_architecture"
  source="cloudinary"
  alt="Diagram of the app architecture."
/>

## Wrap-Up

### Key Performance Indicators

<MagicImage
  path="MyCredit/images/measuring_success"
  source="cloudinary"
  orientation="vertical"
  alt="A list of metrics used to evaluate the success of MyCredit."
/>

### Dependencies
#### Borrowell
A vendor that provides credit scores of individuals to financial institutions.
#### MX Technologies
A vendor that provides access to information about banking and credit acounts across all financial institutions.
#### Central 1
As a service provider to Vancity and other credit unions, Central 1 will need to collect and manage additional data from members.
#### Additional Staff
Vancity or their digital partners will require additional managers, designers, and developers to maintain a second mobile app.

## Appendix

<MagicImage
  path="MyCredit/images/why_vancity"
  source="cloudinary"
  alt="Explanation for why we chose to design for Vancity."
/>

<MagicImage
  path="MyCredit/images/why_separate"
  source="cloudinary"
  alt="Explanation for why we chose to design an app separate from Vancity's existing banking app."
/>

<MagicImage
  path="MyCredit/images/why_download"
  source="cloudinary"
  alt="Explanation of how we would encourage people to download MyCredit."
/>
