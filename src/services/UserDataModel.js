/*
creation of class to control the data retrieved with the requests
*/

/**
* The userDataModel class is a constructor function that takes a data object as an argument and
assigns the properties of that object to the userDataModel instance.
* @param {Object} data - id, userInfos todayScore and keyData
* @type {{id: number, userInfos: object, todayScore: number, keyData: object}}
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

/** The class takes in an object with a userId and sessions property. The sessions property is an array
of objects. The class then adds a day property to each object in the sessions array
* @param {Object} - id, sessions
* @type {{userId: number, sessions: array}}
* @author Philippe Guyon
* @version 1.0
*/
export class userDataActivityModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
    for (let i = 0; i < this.sessions.length; i++) {
      this.sessions[i].day = i + 1;
    }
  }
}

/** The userDataPerformanceModel class is a constructor function that takes a single argument, data, and
assigns the values of data.userId, data.kind, and data.data to the properties of the same name on
the object that is created when the function is called.
* @param {Object} - userId, kind, data
* @type {{userId: number, kind: object, data: array}}
* @author Philippe Guyon
* @version 1.0
*/
export class userDataPerformanceModel {
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data;
  }
}

/** This class is a model for the userDataAverageModel class.
 *  @param {Object} - userId, sessions
 *  @type {{userId: number, sessions: array}}
 * @author Philippe Guyon
 * @version 1.0
 */
export class userDataAverageModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}
