Feature: As a user I should be displayed with Campaigns screen

@test
Scenario Outline: As a user I should be displayed with correct title on navigating to Campaigns page
    Given I am on A million more car safety screen
    Then I will be displayed with correct ScreenTitle <Title> on the browser   

Examples: 
| Title |
| A million more |


@test
Scenario: As a user I should be displayed with menu items on clicking on Hamburger Menu
    Given I am on A million more car safety screen
    When I click the menu button
    Then I will be displayed with menu items


@test
Scenario: As a user I should be displayed with Volvo's icon image on the campaigns screen
    Given I am on A million more car safety screen
    Then I will be displayed with Volvo's icon image on the screen


@test
Scenario: I will be displayed with correct first Header "Ideas that change the world..." on the campaigns screen
    Given I am on A million more car safety screen
    Then I will be displayed with correct first Header <firstHeader> on the screen

Examples: 
| firstHeader|
| Ideas that change the world are often the most controversial |


@test
Scenario: I will be displayed with correct Second Header "With new and existing safety features..." on the campaigns screen
    Given I am on A million more car safety screen
    Then I will be displayed with correct second Header <secondHeader> on the screen

Examples: 
| secondHeader|
| A million more. With new and existing safety features, we are determined to save a million more lives |


@test
Scenario Outline: As a user I should be displayed with correct page on clicking on learn more about safety link
    Given I am on A million more car safety screen
    When I click on Learn More About Car Safety link
    Then I will be navigated to correct screen to learn more about <Title> on the browser

Examples: 
| Title |
| Car safety|


@test
Scenario: I will be displayed with "One of a million" and "Decades of Innovation" sections on the campaigns screen
    Given I am on A million more car safety screen
    Then I will be displayed with correct sections <Section1> and <Section2> on the screen
    When I click on Learn More link of Innovation
    Then I will be presented with more details screen of <InnovationTitle> on the browser

Examples: 
|      Section1    |        Section2       |   InnovationTitle  |
| One of a million | Decades of innovation | Safety innovations |