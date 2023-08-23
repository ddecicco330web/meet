Feature: Show / hide an events details
    Scenario: Event details are hidden by default
        Given the user didn't click the event details button
        When the user opens the app
        Then the event details are hidden
    
    Scenario: User can expand an event to see its details
        Given the user opened the app
        When the user clicks the details button
        Then the event details are visible

    Scenario: User can collapse an event to hide details
        Given the user clicked the details button
        And the event details are visible
        When the user clicks the details button
        Then the event details are hidden