# Created by fernandobaldo at 09/03/21
@auth-service
@auth-service-page
Feature: Auth Service - Auth validation

  Scenario: Generate auth for admin
    Then I define the user role
      | role | adm |
    And Should be returned the token
      | token | true |
    And A response with success from auth-service will return
      | statusCode | 200 |

  Scenario: Generate auth for user
    Then I define the user role
      | role | user |
    And Should be returned the token
      | token | true |
    And A response with success from auth-service will return
      | statusCode | 200 |
