Feature: Specify the number of events shown
    Scenario: 32 events are shown by default
        Given the user didn't type in the NumberOfEvents textbox
        When the user opens the app
        Then 32 events should be showing

    Scenario: User can change the number of events displayed
        Given the main page is open
        When the user types a number in the NumberOfEvents textbox
        Then the number of events shown will match the number the user typed