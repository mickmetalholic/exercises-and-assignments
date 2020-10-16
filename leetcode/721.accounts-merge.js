/*
 * @lc app=leetcode id=721 lang=javascript
 *
 * [721] Accounts Merge
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
function accountsMerge(accounts) {
  // a disjoint set used for storing account ids
  const ds = new DisjointSet();

  const emailToId = {};

  for (let i = 0; i < accounts.length; i++) {
    ds.add(i);
    const [, ...emails] = accounts[i];
    // add emails to the disjoint set
    for (const email of emails) {
      if (!emailToId.hasOwnProperty(email)) {
        emailToId[email] = i;
      }
      // join the first email's id with the current email's id to
      // ensure that all the emails within the same account are joint
      ds.union(emailToId[emails[0]], emailToId[email]);
    }
  }

  const idToEmails = {};
  for (const [email, id] of Object.entries(emailToId)) {
    const rootId = ds.find(id);
    idToEmails[rootId] = idToEmails[rootId] || [];
    idToEmails[rootId].push(email);
  }

  const res = [];
  for (const [id, emails] of Object.entries(idToEmails)) {
    emails.sort();
    res.push([accounts[id][0], ...emails]);
  }
  return res;
}

class DisjointSet {
  constructor() {
    this._parent = {};
  }

  add(x) {
    this._parent[x] = x;
  }

  find(x) {
    let root = x;
    while (this._parent[root] !== root) {
      root = this._parent[root];
    }

    // path compress
    let node = x;
    while (this._parent[node] !== node) {
      const parent = this._parent[node];
      this._parent[node] = root;
      node = parent;
    }
    return root;
  }

  union(x, y) {
    this._parent[this.find(x)] = this.find(y);
  }
}
// @lc code=end
