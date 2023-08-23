import { render, waitFor, within } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import App from '../App';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('32 events are shown by default', ({ given, when, then }) => {
    given("the user didn't type in the NumberOfEvents textbox", () => {});

    let AppComponent;
    when('the user opens the app', () => {
      AppComponent = render(<App />);
    });

    then('32 events should be showing', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventList = within(EventListDOM).queryAllByRole('listitem');
        expect(EventList).toHaveLength(32);
      });
    });
  });

  test('User can change the number of events displayed', ({
    given,
    when,
    then
  }) => {
    let AppComponent;
    given('the main page is open', () => {
      AppComponent = render(<App />);
    });

    let AppDOM;
    when('the user types a number in the NumberOfEvents textbox', async () => {
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      const textbox = AppDOM.querySelector('#number-of-events');

      await user.type(textbox, '{backspace}{backspace}10');
    });

    then(
      'the number of events shown will match the number the user typed',
      async () => {
        const EventListDOM = AppDOM.querySelector('#event-list');

        await waitFor(() => {
          const EventList = within(EventListDOM).queryAllByRole('listitem');
          expect(EventList).toHaveLength(10);
        });
      }
    );
  });
});
