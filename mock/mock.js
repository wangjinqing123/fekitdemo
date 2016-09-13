module.exports = {
  rules: [
    {
      pattern: /\/api\/getIndexList/,
      respondwith: './index.json'
    },
    {
      pattern: /\/aa\/bb\/cc\/dd/,
      respondwith: './detail.json'
    }
  ]
};

// fekit server -n -p 8090 -m fekitdemo/mock/mock.js
