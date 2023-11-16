#### To start simply install dependencies and start dev server
### `yarn install`
### `yarn start`

I stated with a sketch of a design in Figma. Doing so allows to see exact user flows thus reduces amount of decisions to make while coding implementation.
I use [React MUI](https://mui.com/) design system for Figma and [MUI React Components](https://mui.com/material-ui/react-autocomplete/) in react application - this additionally reduces amount of decisions to make, 
because components in React implements the design system (almost). This is not a cutting edge design, 
but is a good baseline to start from somewhere and make UI look OK without investing much effort. 

Here is [the sketch](https://www.figma.com/file/fX6XLbnl9lJN8qAaqASMYu/DepositPage?type=design&node-id=0%3A1&mode=design&t=0Sw7mgcUEipuZp4u-1]

#### Functionality
I kept the task to an absolute minimum functionality requested in the test. This means that Login, authentication, 
authorization, configuration, etc. were taken out of scope.

#### Design considerations
With a task this small almost everything is an overkill. Anyway, I decided to use Redux for the state management.
I've put everything in a single Slice, kept Transactions list and Balance in a single state container. 
To somewhat justify the usage of this machinery I created "Balance" component that I use twice on the UI and update 
it's state w/o drilling props. I do not call any server side code from this application, instead I mock the API logic
in depositAccountApiCacheMock.js - I know it doesn't contain asyc (promises) code to demo this aspect, we can talk about on the follow-up.
I outlined a few components under /components section; their reusability is a point of discussion though. 
I usually do not try to make things reusable until I walk around the same problem set multiple times and develop the intuition.