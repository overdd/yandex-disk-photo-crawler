import PuppeteerService from './services/puppeteer.service';
import ClientPage from './pages/client.page';
import WaitingService from './services/waiting.service';
import ParsingService from './services/parsing.service';
import DownloadService from './services/download.service';

(async () => {
  const page = await PuppeteerService.getPuppeteerPage();
  await PuppeteerService.loginToYandex(page);
  await page.click(ClientPage.tabs.photo);
  await WaitingService.doRandomizedWait(2800, 5600);
  const imageSet = await ParsingService.getImageSet(page);
  for (const element of imageSet) {
    await DownloadService.goToPictureUrl(page, element);
    await DownloadService.clickDownloadButton(page, element);
  }
  await PuppeteerService.closeBrowser();
})();
