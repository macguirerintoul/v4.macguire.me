---
title: How to work with developers (for designers)
date: 2019-12-12
---

The following advice might seem elementary, but even the simplest things get missed when we’re working at speed. We all want our work to go smoothly, and nothing disrupts that like realizing something has gone wrong simply because we weren’t talking to each other enough. The following are some tips I’ve picked up while working at Visier, an analytics platform used by organizations like Adobe, Genentech, PayPal, and locals like EA and Coast Capital.

## Communicate early and often
Communication is like design — most of the time, people won’t notice it unless it’s bad. The most important part of our job as digital designers is to communicate the design work to developers. If we fail to do this, our work is fruitless. It won’t be translated into a valuable feature or product for people, and thus, won’t really help anybody.

To make sure team communication happens effectively, chat with your working group regularly. Taking 15 minutes a week to make sure everyone’s on the same page is much cheaper than having to delay and redevelop a feature because of a miscommunication. It also saves your team a lot of frustration.

At Visier, we share specs via Google Drive. We link to these files all over the place. To make sure everybody always has the latest and greatest work, we put ‘latest’ on the end of the file name, so we can save over the file without updating any links. The idea is that whoever needs the file views it in the browser, which which will always show the latest version.

The one time this went wrong was when one of my colleagues downloaded the PDF and was referencing that rather than the version in the cloud. This was an honest mistake on our part, as we hadn’t made it clear that we would be updating the file periodically. Luckily for us, it wasn’t major, but we still learned our lesson.

## Don’t trust the tech
Even if check-ins happen regularly, it’s still easy for two people to look at the same thing and have different interpretations. Beware of tools like Zeplin that can take mocks and turn them into interactive inspectable elements, unless 100% of your mocks are 100% pixel-perfect 100% of the time. I’m not hating on Zeplin, or any other design inspection tool — just make sure you use them carefully.

The developers I’ve worked with like these kinds of tools, as they surface important details about the design without having to ask the designer. They also tend to be easier to reference and more accurate than PDFs, which can distort images and colours. We use Zeplin for visual design specs, but rarely upload entire screens or workflows. Instead, we take small components and create specs for those. Even using this method, an overwhelming amount of information is generated from the design — my colleague calls this ‘noise’. There are plenty of numbers that come out of Zeplin that just aren’t useful, and are sometimes incorrect relative to the intended design.

Zeplin, while powerful, creates several numbers that aren’t particularly relevant. For a while, I thought the ‘16px’ label was for the vertical line, rather than the horizontal one. Visier also uses a 4-point grid, so the 11px label is not what we intended to appear. If the developer reviewing this spec didn’t know about our grid system, they might take this for fact and make damn sure that gap is 11px tall.

To address these issues, we carefully consider what needs to be put on Zeplin in the first place. We also use 4-point spacer tokens when creating visual specs to make sure the numbers Zeplin creates will be as accurate as possible.

## Share progress updates
Keeping the working group updated is a good way to ensure that expectations are being met or adjusted as necessary. If things are falling behind schedule, don’t feel bad or try to cover it up — our work is complicated and unpredictable. Adjusting to unexpected delays is a lot easier with five weeks to release as opposed to five days (after customers have been told, stakeholders are expecting new work to ship, and plans have been made to start the next project). It’s also helpful for team members to know what’s up so they can plan their own lives — perhaps some developers are waiting on an interaction designer to finish a workflow. If it’s going to take a week longer than expected, they can now plan to do other work during that week.

Another benefit of sharing work in progress is the ability to correct things early. Try to test the design as it is developed to see if anything was missed and that it works as intended. Even with proper communication, misunderstandings happen and people forget things. Fixing things early means fewer dollars spent and fewer frustrated people.

## Think like a developer
Designers are faced with the challenge of balancing idealism and realism. The ideal experience is often the one created without consideration of technical limitations. However, for our designs to be useful, they must make use of technology which inherently has limitations. For example, for a filtering feature, ideally we could apply and modify filters and have the data on the screen update in real-time. Depending on the existing tech, this may or may not be feasible. Updating the data on-screen might require another network request, which can take a few hundred milliseconds.

Understanding the considerations that developers will need to make is a reliable way to decide how to balance idealism and realism. In this scenario, rather than spending time communicating a real-time UI (only to have it be shut down), we could design interactions knowing that a network request is involved.

Beyond this, it’s useful to understand how things work when making decisions that aren’t limited by existing technology. For example, the experience of filtering in real-time has the up-front cost of waiting for all data to load at the beginning, which could make the product appear slow. In this case, a short delay between interactions might in fact be a better experience than a longer delay before the user can do anything.

## Design the details
One of the problems with designs being incomplete is that developers need to make decisions themselves, or ask you what to do. Frankly, they do us favours all the time by confirming decisions with us, or leaning on their own experience. However, if they don’t have much design experience, they might not make the decision that’s best for the product.

Another problem with incomplete designs is that if the developer doesn’t make the design decisions, they’re left for the underlying technology to figure out. This results in system defaults; no animation (or linear animation), no type tracking, no beautiful hover state.

One situation where this could happen is form validation. Without debouncing the input, the user is immediately hit with an “invalid email” error message before they’ve even finished typing. A developer’s job is to make things work, not ensure a positive experience (that’s you!), so make sure you consider the small stuff beforehand.

## Learn from mistakes
Have a retrospective after the project to talk about what went well and what could be improved. When discussing positives, thank people for their contributions. When discussing negatives, talk about situations that happened rather than the people who were involved in the situations. Hopefully, people know what they were responsible for and will try to avoid mistakes next time. If they don’t, have a private conversation rather than calling them out in front of everyone. Chances are we’ll work with these same people in the future, so stay on each others’ good sides and keep things civil.

## Celebrate success
Projects can take countless hours and tons of hard work to complete. Take time to recognize the people who contributed to the project in some way. Thank other designers who gave critique or guidance. Thank developers for turning ideas into reality. Thank people outside these teams who support the organization and operations in other ways. Finally, remember to recognize yourself for the work you put in and the things you learned along the way.
