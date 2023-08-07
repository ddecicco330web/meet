# Meet Features

## Descrition
Meet is a serverless, progressive web application built with React. Meet allows users to search and learn details about events around them.

## Feature 1: Filter Events by City. 
**User Story:** As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city. 

- **Scenario 1:** When user hasn’t searched for a specific city, show upcoming events from all cities.

    + **Given:** user hasn’t searched for any city.
    + **When:** the user opens the app.
    + **Then:** the user should see a list of upcoming events.

- **Scenario 2:** User should see a list of suggestions when they search for a city.

    + **Given:** the main page is open.
    + **When:** user starts typing in the city textbox.
    + **Then:** the user should receive a list of cities (suggestions) that match what they’ve typed.

- **Scenario 3:** User can select a city from the suggested list.

    + **Given:** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing.
    + **When:** the user selects a city (e.g., “Berlin, Germany”) from the list.
    + **Then:** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Feature 2: Show/Hide Event Details. 
**User Story:** As a user, I would like to be able to show/hide event details so that I can see more/less information about an event. 

- **Scenario 1:** When the event is loaded, the user should see a “Show Details” button and the details are collapsed by default.

	+ **Given:** The user loaded a page with events on it.
	+ **When:** The user loads the events.
	+ **Then:** The details will be collapse and the user will see a “Show Details” button.

- **Scenario 2:** When the user clicks the “Show Details” button, the details section should expand and “Show Details” should say “Hide Details”.

    + **Given:** The user loaded a page with events on it.
    + **When:** The user clicks “Show Details.”
    + **Then:** The details section will expand to show it’s contents and the “Show Details” button will be changed to “Hide Details”.

- **Scenario 3:** When the user clicks the “Hide Details” button, the details section should collapse and “Hide Details” should say “Show Details”

    + **Given:** The user expanded the details section
    + **When:** The user clicks on “Hide Details”
    + **Then:** The details section will collapse and “Hide Details” will change into “Show Details”

## Feature 3: Specify Number of Events. 
**User Story:** As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once. 

- **Scenario 1:** When user hasn’t specified a number, 32 events are shown by default. 

    + **Given:** The user hasn’t specified a number for what amount of events to show.
    + **When:** The user loads the page.
    + **Then:** The specified number will be 32, so 32 events will be shown

- **Scenario 2:** User can change the number of events displayed. 

    + **Given:** The user loaded the main page.
    + **When:** The user enters a number in the specified number textbox.
    + **Then:** The number of loaded events will match the specified number.

## Feature 4: Use the App When Offline
**User Story:** As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online. 

- **Scenario 1:** Show cached data when there’s no internet connection. 

    + **Given:** The user is not connected to the internet.
    + **When:** The user loads the page.
    + **Then:** The app will use cached data to show event information.

- **Scenario 2:** Show error when user changes search settings (city, number of events). 

    + **Given:** The user is not connected to the internet.
    + **When:** The user changes search settings.
    + **Then:** An error will be displayed to the user.

## Feature 5: Add an App Shortcut to the Home Screen 
**User Story:** As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster. 

- **Scenario 1:** User can install the meet app as a shortcut on their device home screen.

    + **Given:** The user wants to install the app as a shortcut on their device.
    + **When:** The user selects the option to make a shortcut.
    + **Then:** A shortcut will be created and placed on the devices home screen.

- **Scenario 2:** User can OPEN the meet app from the shortcut.

    + **Given:** The user is on the devices homescreen and the shortcut is installed.
    + **When** The user clicks on the shortcut.
    + **Then** The app will open to the main page. 

## Feature 6: Display Charts Visualizing Event Details 
**User Story:** As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city. 
- **Scenario 1:** Show a chart with the number of upcoming events in each city.

    + **Given:** The user is on the main page and a city is not selected.
    + **When:** The user loads the events.
    + **Then:** A chart will be displayed to the user showing upcoming events in each city.

## Serverless Functions
Meet app will use serverless functions for OAuth authorization and use of the Google Calendar API. The app will also use serverless functions to have the front-end to make requests from the server like filtered events.