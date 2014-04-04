@javascript
Feature: Testing the Dash

  Background: Login to the site
    Given I am on "/logout"
    Given I am on "/login"
    And I fill in "email" with "test3@gmail.com"
    And I fill in "password" with "password"
    And I press "Login"
    And I wait
    Then I should see "You are now logged in!"

  Scenario: I should see the user table
    Given I am on "/admin"
    Then I should not see "Admin Users"
    And I should see "Admin Pages"
    And I should see "Admin Banners"
    And I should see "Your Profile"

