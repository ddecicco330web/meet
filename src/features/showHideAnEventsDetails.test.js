import { defineFeature, loadFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('Event details are hidden by default', ({ given, when, then }) => {
    given("the user didn't click the event details button", () => {});

    let AppComponent;
    when('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    then('the event details are hidden', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventDOM = within(EventListDOM).queryAllByRole('listitem')[0];
        expect(EventDOM.querySelector('.description')).toBeNull();
      });
    });
  });

  test('User can expand an event to see its details', ({
    given,
    when,
    then
  }) => {
    let AppComponent;
    given('the user opened the app', () => {
      AppComponent = render(<App />);
    });

    let EventDOM;
    when('the user clicks the details button', async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(async () => {
        EventDOM = within(EventListDOM).queryAllByRole('listitem')[0];
        await user.click(EventDOM.querySelector('.details-btn'));
      });
    });

    then('the event details are visible', () => {
      expect(EventDOM.querySelector('.description')).toBeDefined();
    });
  });

  test('User can collapse an event to hide details', ({
    given,
    and,
    when,
    then
  }) => {
    let EventDOM;
    given('the user clicked the details button', async () => {
      const AppComponent = render(<App />);
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(async () => {
        EventDOM = within(EventListDOM).queryAllByRole('listitem')[0];
        await user.click(EventDOM.querySelector('.details-btn'));
      });
    });

    and('the event details are visible', () => {
      expect(EventDOM.querySelector('.description')).toBeDefined();
    });

    when('the user clicks the details button', async () => {
      const user = userEvent.setup();
      await user.click(EventDOM.querySelector('.details-btn'));
    });

    then('the event details are hidden', () => {
      expect(EventDOM.querySelector('.description')).toBeNull();
    });
  });
});
