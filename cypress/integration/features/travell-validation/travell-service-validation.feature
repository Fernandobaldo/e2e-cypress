@travel-service
@auth-service 
Feature: Travel Service - Travel management validation

  Scenario: Submit valid travel management
    Given I define the user role
      | role | adm |
    And I define travel information
      | acompanhante   | Thays      |
      | dataPartida    | 2021-04-01 |
      | dataRetorno    | 2021-05-01 |
      | localDeDestino | Manaus     |
      | regiao         | Norte      |
    Then A response with success will return
      | statusCode | 201  |
      | id         | true |
    And Response should contain a travel with
      | acompanhante   | Thays      |
      | dataPartida    | 2021-04-01 |
      | dataRetorno    | 2021-05-01 |
      | localDeDestino | Manaus     |
      | regiao         | Norte      |

  Scenario: Submit valid travel management with user role
    Given I define the user role
      | role | user |
    Then I define travel information
      | acompanhante   | Thays      |
      | dataPartida    | 2021-04-01 |
      | dataRetorno    | 2021-05-01 |
      | localDeDestino | Manaus     |
      | regiao         | Norte      |
    And A response with unsuccess will return
      | statusCode | 403 |
    And It will returned a message
      | message | true |


