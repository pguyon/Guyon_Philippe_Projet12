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
    constructor(data){
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