/**
 * Initialize your data structure here.
 */
class Twitter {
  constructor() {
    this._tweets = {};
    this._followees = {};
    this._uid = 0;
  }
  
  /**
   * Compose a new tweet. 
   * @param {number} userId 
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    this._tweets[userId] = this._tweets[userId] || [];
    this._tweets[userId].unshift({ tweetId, uid: this._uid++ });
  }
  
  /**
   * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    const followees = this._followees[userId] || new Set();
    const users = [...followees];
    if (!followees.has(userId)) {
      users.push(userId);
    }
    const tweetsByUsers = users.map(user => this._tweets[user] || []);
    const indices = Array.from(tweetsByUsers).fill(0);
    const res = [];
    for (let i = 0; i < 10; i++) {
      let newest = -1, tweetId, userIndex;
      for (let j = 0; j < tweetsByUsers.length; j++) {
        if (indices[j] < tweetsByUsers[j].length && tweetsByUsers[j][indices[j]].uid > newest) {
          newest = tweetsByUsers[j][indices[j]].uid;
          tweetId = tweetsByUsers[j][indices[j]].tweetId;
          userIndex = j;
        }
      }
      if (newest === -1) {
        return res;
      } else {
        res.push(tweetId);
        indices[userIndex]++;
      }
    }
    return res;
  }
  
  /**
   * Follower follows a followee. If the operation is invalid, it should be a no-op. 
   * @param {number} followerId 
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    this._followees[followerId] = this._followees[followerId] || new Set();
    this._followees[followerId].add(followeeId);
  }
  
  /**
   * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
   * @param {number} followerId 
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    this._followees[followerId] = this._followees[followerId] || new Set();
    this._followees[followerId].delete(followeeId);
  }
}
/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
   