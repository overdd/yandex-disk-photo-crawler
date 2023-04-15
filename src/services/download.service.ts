import {Page} from 'puppeteer';
import {PicturePage} from '../pages/picture.page';
import * as constants from '../data/constants';
import WaitingService from './../services/waiting.service';

export default class DownloadService {
  static goToPictureUrl = async (page: Page, id: unknown) => {
    try {
      const urlBuilder = `${constants.BASE_URL}${constants.PICTURE_URL_STATIC_PART}${id}`;
      console.log(urlBuilder);
      await page.goto(urlBuilder, constants.PAGE_PUPPETEER_OPTIONS);
      await WaitingService.doRandomizedWait(800, 1200);
    } catch (error) {
      console.log(`Unable to go to url of ${id} picture`);
    }
  };
  static clickDownloadButton = async (page: Page, id: unknown) => {
    try {
      await page.waitForNetworkIdle();
      await WaitingService.doRandomizedWait(1000, 4000);
      await page.click(PicturePage.buttons.download);
      await page.waitForNetworkIdle();
    } catch (error) {
      console.log(`Unable click on download button of ${id} picture`);
    }
  };
}
