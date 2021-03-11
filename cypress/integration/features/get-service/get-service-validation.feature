@travel-service
@auth-service
Feature: Get Service - Travel management validation with get

  Scenario: Send GET to validate the scheduled travel
    Given I define the user role
      | role | adm |
    And I define travel information
      | acompanhante   | Ana Maria  |
      | dataPartida    | 2021-04-01 |
      | dataRetorno    | 2021-05-01 |
      | localDeDestino | Manaus     |
      | regiao         | Nortec      |
    Then A response with success will return
      | statusCode | 201  |
      | id         | true |
    And I get the stored travel by id
      | role | user |
      | id   | true |
    And Response should contain a travel with
      | acompanhante   | Ana Maria  |
      | dataPartida    | 2021-04-01 |
      | dataRetorno    | 2021-05-01 |
      | localDeDestino | Manaus     |
      | regiao         | Norte      |

  Scenario: Send GET to validate all stored travel
    Given I define the user role
      | role | user |
    And I get all stored travel
      | statusCode | 200 |

  Scenario: Send GET to validate scheduled travel by zone
    Given I define the user role
      | role | user |
    And I define the zone
      | zone | Sul |



