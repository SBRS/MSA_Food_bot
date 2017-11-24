var request = require('request'); //node module for http post requests

exports.retreiveMessage = function (session){

    request.post({
        url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/89e278a7-c7ee-4d0d-86cf-fb95641c7011/url?iterationId=89f9f356-af3d-4234-bc19-c7b083d5667c',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Prediction-Key': 'a8e10e08aa534e8ab77978e142738e32'
        },
        body: { 'Url': session.message.text }
    }, function(error, response, body){
        console.log(validResponse(body));
        session.send(validResponse(body));
    });
}

function validResponse(body){
    if (body && body.Predictions && body.Predictions[0].Tag){
        return "This is " + body.Predictions[0].Tag;
    } else{
        console.log('Oops, please try again!');
    }
}