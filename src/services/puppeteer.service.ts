import puppeteer, {Browser, Page} from 'puppeteer';
import * as constants from '../data/constants';
import {MainPage} from './../pages/main.page';
import {PassportPage} from './../pages/passport.page';
import WaitingService from './../services/waiting.service';

export default class PuppeteerService {
  static browser: Browser;

  static getPuppeteerPage = async () => {
    this.browser = await puppeteer.launch(constants.LAUNCH_PUPPETEER_OPTIONS);
    const page = await this.browser.newPage();
    await page.goto(constants.BASE_URL, constants.PAGE_PUPPETEER_OPTIONS);
    return page;
  };

  static loginToYandex = async (page: Page) => {
    if (
      process.env.YANDEX_PASSWORD === undefined ||
      process.env.YANDEX_USERNAME === undefined
    )
      throw new Error('Yandex credentials are not set as system variables!');
    try {
      await page.click(MainPage.buttons.Login);
      await page.waitForNetworkIdle();
      await WaitingService.doRandomizedWait(800, 2000);
      await page.waitForSelector(PassportPage.inputs.username);
      await page.focus(PassportPage.inputs.username);
      await page.keyboard.type(`${process.env.YANDEX_USERNAME}`, {delay: 152});
      await page.click(PassportPage.buttons.login);
      await page.waitForNetworkIdle();
      await WaitingService.doRandomizedWait(800, 2000);
      await page.focus(PassportPage.inputs.password);
      await page.keyboard.type(`${process.env.YANDEX_PASSWORD}`, {delay: 384});
      await page.click(PassportPage.buttons.login);
      await page.waitForNetworkIdle();
      await WaitingService.doRandomizedWait(4800, 5600);
    } catch (error) {
      console.log(`Not able to login to Yandex: ${error}`);
    }
  };

  static closeBrowser = async () => {
    this.browser.close();
  };
}
