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
