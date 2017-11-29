// Import the page's CSS. Webpack will know what to do with it.


// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '7b5931ef',
  apiSecret: '866ef07512a48ee6'
});

/*
 * When you compile and deploy your Voting contract,
 * truffle stores the abi and deployed address in a json
 * file in the build directory. We will use this information
 * to setup a Voting abstraction. We will use this abstraction
 * later to create an instance of the Voting contract.
 * Compare this against the index.js from our previous tutorial to see the difference
 * https://gist.github.com/maheshmurthy/f6e96d6b3fff4cd4fa7f892de8a1a1b4#file-index-js
 */

import voting_artifacts from '../../build/contracts/PatientInfo.json'

var Voting = contract(voting_artifacts);

let candidates = {}

let tokenPrice = null;

window.search = function(){
  $("#state-modal").css("display","block");
}
$("#searchBtn").click(function(){
  nexmo.message.sendSms(
    '918281408609', '918281408609', 'yo',
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
   );
  $("#state-modal").removeClass("fade");
 $("#state-modal").css("display","block");
});
$(".close").click(function(){
  $("#state-modal").addClass("fade");
 $("#state-modal").css("display","none");
});
$("#validate").click(function(){


});

window.login = function() {

 window.location.href ="search.html";
  // Voting.deployed().then(funcAC477862f9c1a449ed234c5554fdfb287ftion(contractInstance) {
  //   contractInstance.getUser.call(address).then(function(v) {
  //    console.log(v);
  //   });
  // });var twilio = require('twilio');
 
// Find your account sid and auth token in your Twilio account Console.
  
}

$( document ).ready(function() {
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  Voting.setProvider(web3.currentProvider);


});
