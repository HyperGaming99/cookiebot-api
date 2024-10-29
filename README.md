NPM URL: https://www.npmjs.com/package/cookiebot-api?activeTab=readme

Installation

# 1

npm i cookiebot-api

# 2 

You are now finished and can use cookiebot-api

Basic Code

```javascript
const CookieAPI = require("cookiebot-api");

const api = new CookieAPI();
api.initialize("api-key");
api.checkAPIkey();

api.member_count("guild_id")

api.stats_user("user_id")

api.activity_member("user_id", "guild_id")

api.stats_member("user_id", "guild_id")

api.activity_guild("guild_id")

api.activity_guild_image("guild_id")

api.activity_member_image("user_id", "guild_id")
