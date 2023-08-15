import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test('renders a textbox', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
  });

  test('textbox has value of 32 by default', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox').placeholder).toEqual(
      '32'
    );
  });

  test('textbox value changes when user types in it', async () => {
    const user = userEvent.setup();
    const textbox = NumberOfEventsComponent.queryByRole('textbox');

    await user.type(textbox, '{backspace}{backspace}10');

    expect(textbox.value).toEqual('10');
  });
});
