const axios = require("axios");
const { flow, map, filter, uniqBy } = require("lodash/fp");
const trelloConfig = require("./trello.config.json");
require("dotenv").config();

const { API_KEY, TOKEN } = process.env;
const { boardId, actions, url, sinceDate } = trelloConfig;
const actionsSince = (sinceDate
  ? new Date(sinceDate)
  : new Date()
).toISOString();
const request = `${url}/${boardId}/?key=${API_KEY}&token=${TOKEN}&actions=${actions}&actions_since=${actionsSince}`;

(async function(axios) {
  const completedActions = flow(
    filter(action => action.data.checkItem.state === "complete"),
    uniqBy(action => action.data.checkItem.name),
    map(
      ({ data: { card, checkItem } }) =>
        `- ${checkItem.name} on \`${card.name}\``
    )
  )((await axios.get(request)).data.actions);
  console.log(`*What I did today*:\n${completedActions.join("\n")}`);
})(axios);
