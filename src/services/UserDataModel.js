/*
creation of class to control the data retrieved with the requests
*/

/**
* The userDataModel class is a constructor function that takes a data object as an argument and
assigns the properties of that object to the userDataModel instance.
* @param {Object} - id, userInfos score and keyData
* @author Philippe Guyon
* @version 1.0
*/
export class userDataModel {
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    if (data.score) {
      this.todayScore = data.score;
    } else if (data.todayScore) {
      this.todayScore = data.todayScore;
    }
    this.keyData = data.keyData;
  }
}

export class userDataActivityModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
    for (let i = 0; i < this.sessions.length; i++) {
      this.sessions[i].day = i + 1;
    }
  }
}

export class userDataPerformanceModel {
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data;
  }
}

export class userDataAverageModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
