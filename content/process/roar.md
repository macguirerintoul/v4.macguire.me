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

## Details

According to Clinical Education, CEAs process roughly 1500 new hires per year at a conservative estimate of half an hour each. That means 750 hours are spent every year creating schedules. Since ROAR automates schedule creation and data management to be practically instantaneous, we eliminate the majority of that time.
