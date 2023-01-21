import fs from 'fs';
import {Page} from 'puppeteer';
import ClientPage from './../pages/client.page';
import WaitingService from './../services/waiting.service';

// const imageSet = new Set();

export default class ParsingService {
  static imageSet = new Set();
  static isRepeated: boolean;
  static imagesAfterRepeat: (string | null)[];

  static getImageSet = async (page: Page) => {
    let images: (string | null)[];
    do {
      images = await page.$$eval(ClientPage.images.regularThumbnail, nodes =>
        nodes.map(node => node.getAttribute('title'))
      );
      JSON.stringify(images) === JSON.stringify(this.imagesAfterRepeat)
        ? (this.isRepeated = true)
        : (this.isRepeated = false);
      for (const element of images) {
        !this.imageSet.has(element) ? this.imageSet.add(element) : element;
      }
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight * 6);
      });
      await WaitingService.doRandomizedWait(4800, 5600);

      this.imagesAfterRepeat = images;
    } while (!this.isRepeated);

    this.imageSet.forEach((value, valueAgain, imageSet) => {
      fs.appendFileSync('1.txt', `${value}\n`);
    });
    return this.imageSet;
  };
}
