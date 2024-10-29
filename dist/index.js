const axios = require("axios");
const cookie = require("cookie");

class CookieAPI {
  constructor() {
    this.token = null;
  }

  initialize(token) {
    this.token = token;
    this.saveToken();
  }

  saveToken() {
    if (this.token) {
      const tokenCookie = cookie.serialize("api_token", this.token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 365 * 100
      });
    } else {
    }
  }

  async checkAPIkey() {
    if (!this.token) {
      console.error("API-Key not set");
      return;
    }

    try {
      const response = await axios.get("https://api.cookieapp.me/v1/", {
        headers: {
          key: this.token,
        }
      });
      if(response.data.success) {
        return true;
    }else{
        console.error("API-Key ungültig oder falsch");
          return false;
    }
    } catch (error) {
      console.error(error.message);
      if (error.response) {
        console.log(error.response.data);
      }
    }
  }

  getToken() {
    return this.token;
  }

  member_count(guild_id) {
    return axios.get(`https://api.cookieapp.me/v1/member_count/${guild_id}/`, {
      headers: {
        key: this.token,
      }
    });
  }


  stats_user(user_id) {
    return axios.get(`https://api.cookieapp.me/v1/stats/user/${user_id}/`, {
      headers: {
        key: this.token,
      }
    });
  }

  activity_member(user_id, guild_id) {
    return axios.get(`https://api.cookieapp.me/v1/activity/member/${user_id}/${guild_id}/`, {
      headers: {
        key: this.token,
      }
    });
  }

  stats_member(user_id, guild_id) {
    return axios.get(`https://api.cookieapp.me/v1/stats/member/${user_id}/${guild_id}/`, {
      headers: {
        key: this.token,
      }
    });
  }

  activity_guild(guild_id) {
    return axios.get(`https://api.cookieapp.me/v1/activity/guild/${guild_id}/`, {
      headers: {
        key: this.token,
      }
    });
  }

  activity_guild_image(guild_id) {
    return axios.get(`https://api.cookieapp.me/v1/activity/guild/${guild_id}/image`, {
      headers: {
        key: this.token,
      }
    });
  }

  activity_member_image(user_id, guild_id) {
    return axios.get(`https://api.cookieapp.me/v1/activity/member/${user_id}/${guild_id}/image`, {
      headers: {
        key: this.token,
      }
    });
  }


}

module.exports = CookieAPI;
