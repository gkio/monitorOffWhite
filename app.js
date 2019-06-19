const KEYWORDS = ['terra', 'kiger'];
const REGIONS =  ['RU','DE','IT','GB','ES','US','NL']

const getUrl = region => 
  `https://www.off---white.com/en/${region}/search?q=${KEYWORDS.join('+')}&admin=True`;


  var sec = 0;
  function timer(){
    var timer = setInterval(function(){
        sec++;
    }, 1000);
}

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
const urls = REGIONS.map(region => getUrl(region));
console.log(urls)
  await page.emulate(iPhonex);
  timer();
  for (let i = 0; i < 6; i++) {
    const url = urls[3];
    await page.goto(`${url}`);
    console.log(sec);
    await page.screenshot({ path: i+'.png'});
}
  await browser.close();
});