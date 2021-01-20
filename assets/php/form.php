<?php

$form_data = array();

if(isset($_POST['subject']) && isset($_POST['name']) &&  isset($_POST['email']) && isset($_POST['tel'])
  && isset($_POST['message']) && isset($_POST['datetime'])) {

  $subject = $_POST['subject'];
  $name = $_POST['name'];
  $email = $_POST['email'];
  $tel = $_POST['tel'];
  $mensagem = $_POST['message'];
  $datetime = $_POST['datetime'];

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.movidesk.com/public/v1/persons?token=f0ae371e-5848-45eb-a109-b3d66a105d98&returnAllProperties=true',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS =>'{
      "codeReferenceAdditional": null,
      "isActive": true,
      "personType": 1,
      "profileType": 2,
      "accessProfile": "Clientes",
      "businessName": "' . $name . '",
      "corporateName": null,
      "cpfCnpj": null,
      "userName": null,
      "password": null,
      "role": null,
      "bossId": null,
      "bossName": null,
      "classification": null,
      "cultureId": "pt-BR",
      "timeZoneId": "Brazil/East",
      "createdDate": "' . $datetime . '",
      "createdBy": null,
      "changedDate": null,
      "changedBy": null,
      "observations": null,
      "authenticateOn": null,
      "addresses": [],
      "contacts": [
        {
          "contactType": "Telefone comercial",
          "contact": "' . $tel . '",
          "isDefault": true
        }
      ],
      "emails": [
        {
          "emailType": "Profissional",
          "email": "' . $email . '",
          "isDefault": true
        }
      ],
      "teams": ["Clientes"],
      "relationships": [
          {
              "id": null,
              "name": null,
              "slaAgreement": null,
              "forceChildrenToHaveSomeAgreement": false,
              "allowAllServices": true,
              "includeInParents": null,
              "loadChildOrganizations": null,
              "services": [],
              "idToDelete": null,
              "isGetMethod": true
          }
      ],
      "customFieldValues": [],
      "atAssets": []
    }',
    CURLOPT_HTTPHEADER => array(
      'Content-Type: application/json'
    ),
  ));

  $response = curl_exec($curl);
  $responseClient =  json_decode($response);

  curl_close($curl);

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.movidesk.com/public/v1/tickets?token=f0ae371e-5848-45eb-a109-b3d66a105d98&returnAllProperties=false',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS =>'{
     "type": 2,
     "subject": "Teste",
     "category": "Dúvida",
     "urgency": "Baixa",
     "status": "Aguardando",
     "justification": "Retorno do cliente",
     "createdDate": "' . $datetime . '",
     "createdBy":{
         "id": "' . $responseClient->id . '"
      },
      "clients": [
            {
                "id": "' . $responseClient->id . '"
            }
        ],"Actions" :[
            {
                "type":2,
                "Description" : "' . $mensagem . '"
            }
        ]
    }',
    CURLOPT_HTTPHEADER => array(
      'Content-Type: application/json'
    ),
  ));

  $response = curl_exec($curl);

  curl_close($curl);
  $form_data['success'] = true;
  $form_data['resposta'] = $response;
  echo json_encode($form_data);

}else {

  $form_data['success'] = false;
  echo json_encode($form_data);

}

?>
