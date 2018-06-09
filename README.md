### Get this:

![N|Solid](https://trello-attachments.s3.amazonaws.com/58ff660559c9f1a1e9bee69e/5b1b8ece5049d2bad36b6431/e9f50cc80b93881fa06c36ba1412ce78/Screen_Shot_2018-06-09_at_3.22.05_PM.png)

### From this:

![N|Solid](https://trello-attachments.s3.amazonaws.com/58ff660559c9f1a1e9bee69e/5b1b8ece5049d2bad36b6431/2525a09c53fa35b7d9e7f127e2a70dcf/Screen_Shot_2018-06-09_at_4.31.55_PM.png)

### Usage:

- run `git clone` and `cd` into that folder
- run `yarn` in that folder to install library dependencies
- get your `api key` and `token` from https://trello.com/app-key
- update your `api key` and `token` into a new `.env` file:
  - `API_KEY=123`
  - `TOKEN=456`
- update your `boardId` in `trello.config.json`:
  - for `https://trello.com/b/U0tGp6Sy/client-dashboard`, the `boardId` is `U0tGp6Sy`
- to get activities since `08-Jun-2018`, add `"sinceDate": "08-Jun-2018"` from `trello.config.json`. By default, today's date is used
- run `yarn start` to get your **What I did today** in the console
