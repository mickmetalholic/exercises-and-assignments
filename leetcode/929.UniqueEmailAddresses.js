/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = emails => {
  const uniqueEmails = emails.reduce((res, raw) => {
    const [, localName, domainName] = raw.match(/^(.+)@(.+)$/);
    const serialized = `${localName.replace(/\./g, '').replace(/\+.*$/g, '')}@${domainName}`;
    res[serialized] = true;
    return res;
  }, {});
  return Object.keys(uniqueEmails).length;
};