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
