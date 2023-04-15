export default class WaitingService {
  static doRandomizedWait = async (min: number, max: number) => {
    // emulates the user's behaviour
    min > max ? ([min, max] = [max, min]) : min;
    const sleepTime = Math.floor(Math.random() * (max - min) + min);
    console.log(`Doing randomized wait for ${sleepTime / 1000} seconds.`);
    await new Promise(time => setTimeout(time, sleepTime));
  };
}
