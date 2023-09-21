import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event/> component', () => {
  let allEvents;
  let EventComponent;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('renders event location', () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test('render a button that says "show details"', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  test('render event summary', () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test('render start time', () => {
    const dateTime = allEvents[0].start.dateTime.split('T');
    const startTime = dateTime[1].substr(0, 5);
    expect(
      EventComponent.queryByText(`${dateTime[0] + ' at ' + startTime}`)
    ).toBeInTheDocument();
  });

  test('render location', () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test('Details are collapsed by default', async () => {
    expect(
      EventComponent.container.querySelector('.description')
    ).not.toBeInTheDocument();
  });

  test('shows details after "show details" button is clicked', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText('show details');

    await user.click(showDetailsButton);

    const description = EventComponent.container.querySelector('.description');

    expect(description).toBeInTheDocument();
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
  });

  test('hides details after "hide details" button is clicked', async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByText('show details');

    await user.click(showDetailsButton);

    const hideDetailsButton = EventComponent.queryByText('hide details');

    await user.click(hideDetailsButton);

    const description = EventComponent.container.querySelector('.description');

    expect(description).not.toBeInTheDocument();
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });
});
