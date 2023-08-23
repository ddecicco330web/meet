import puppeteer from 'puppeteer';
import { getEvents } from '../api';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');

    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
});

describe('filter events by city', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
    const eventList = await page.$$('.event');
    expect(eventList).toHaveLength(32);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin');
    const suggestions = await page.$$('.suggestion');
    expect(suggestions).toHaveLength(2);
  });

  test('User can select a city from the suggested list.', async () => {
    await page.click('.suggestion');
    const citySearchValue = await page.$eval('.city', (ev) => ev.value);
    expect(citySearchValue).toBe('Berlin, Germany');

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      (event) => event.location === citySearchValue
    );

    const eventList = await page.$$('.event');
    expect(eventList).toHaveLength(berlinEvents.length);
  });
});
