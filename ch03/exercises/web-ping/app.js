const https = require("https");

const options = {
  hostname: process.env.TARGET,
  method: process.env.METHOD
};

console.log(
  "** web-ping ** 대상 URL: %s; 메서드: %s; 핑 간격: %dms",
  options.hostname,
  options.method,
  process.env.INTERVAL
);

process.on("SIGINT", function() {
  process.exit();
});

let i = 1;
let start = new Date().getTime();
setInterval(() => {
  start = new Date().getTime();
  console.log("%d 번째 핑(시각: %d)", i++, start);
  var req = https.request(options, res => {
    var end = new Date().getTime();
    var duration = end - start;
    console.log(
      "응답 수신: 상태코드 %s, 수신 시각 %d; 소요시간: %dms",
      res.statusCode,
      end,
      duration
    );
  });
  req.on("error", e => {
    console.error(e);
  });
  req.end();
}, process.env.INTERVAL);
