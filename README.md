
## MakerDAO Core Community Initiative Transparency Dashboard

The dashboard displays how the funds in the CCDI are being distributed.

Developed from the [Gatbsy-hello world starter kit](https://github.com/gatsbyjs/gatsby-starter-hello-world)

### Develop
Install dependencies:

> npm i

Fire up site:
> $ gatbsy develop

And navigate to http://localhost:8000/ to visit your site

### Deploy

TBD

### Feeding data into the site

Public Data (*name*, *type*, *status*,...) for **accepted projects** is entered
into ```/static/data/acceptedProjectsData.json```.

The format for that file is specified in a JSON-SCHEMA in
```/static/data/dataformat.js``` and compliance is checked in the integration
pipeline and can be tested manually by running:

> npm run test

General information about awarded money (average dispersed, total awarded, ...),
completed milestones (total and last30days) and the total number of submitted
projects is entered into ```/static/data/publicData.json```
