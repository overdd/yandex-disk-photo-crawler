import {WaitForOptions} from 'puppeteer';

export const DEFAULT_WAIT_TIMEOUT = 200000;
export const BASE_URL = 'https://disk.yandex.com';
export const LAUNCH_PUPPETEER_OPTIONS = {
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--disable-accelerated-2d-canvas',
    '--disable-gpu',
    '--start-maximized',
  ],
  headless: false,
  ignoreHTTPSErrors: true,
  defaultViewport: null,
};

export const PAGE_PUPPETEER_OPTIONS: WaitForOptions = {
  waitUntil: 'networkidle2',
  timeout: 3000000,
};

export const PICTURE_URL_STATIC_PART =
  '/client/photo?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%A4%D0%BE%D1%82%D0%BE%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D0%B0%2F';
