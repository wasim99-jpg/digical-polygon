var account = null;
var contract = null;
const ABI = [
    { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "name": "Claimed",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DIGICAL_ID",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_amount", "type": "uint256" }
      ],
      "name": "EmergencyMint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_addSupply", "type": "uint256" }
      ],
      "name": "addSupply",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "account", "type": "address" },
        { "internalType": "uint256", "name": "id", "type": "uint256" }
      ],
      "name": "balanceOf",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address[]", "name": "accounts", "type": "address[]" },
        { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_wallet", "type": "address" }
      ],
      "name": "banWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "name": "bannedWallet",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }],
      "name": "exists",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bool", "name": "_paused", "type": "bool" }],
      "name": "flipPaused",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "account", "type": "address" },
        { "internalType": "address", "name": "operator", "type": "address" }
      ],
      "name": "isApprovedForAll",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_wallet", "type": "address" }
      ],
      "name": "isBannedWallet",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxSupply",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" },
        { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" },
        { "internalType": "bytes", "name": "data", "type": "bytes" }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "id", "type": "uint256" },
        { "internalType": "uint256", "name": "amount", "type": "uint256" },
        { "internalType": "bytes", "name": "data", "type": "bytes" }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "operator", "type": "address" },
        { "internalType": "bool", "name": "approved", "type": "bool" }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "string", "name": "_uri", "type": "string" }],
      "name": "setURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }
      ],
      "name": "supportsInterface",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "name": "tokenURI",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }],
      "name": "totalSupply",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "name": "uri",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "uri",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    }
  ]
const address = "0x928c403baC26D1811390d40700B8D32381113C77";
let firstSubContract = address.substring(0, 6);
let SecondSubContract = address.substring(38, 42);
document.getElementById("contract-address").textContent = firstSubContract+"..."+SecondSubContract;

const startApp = async () => {
  if (typeof window.ethereum == "undefined") {
    alert("MetaMask is not installed! Please install Metamask in Chrome or Play Store");
  }
  connectToPolygon()
if (window.ethereum) {
  if (window.ethereum.chainId == "0x89") {
    await window.ethereum.send("eth_requestAccounts");
    window.web3 = new Web3(window.ethereum);
    var accounts = await web3.eth.getAccounts();
    account = accounts[0];
    let firstSubAccount = account.substring(0, 6);
    let SecondSubAccount = account.substring(38, 42);
    document.getElementById("wallet-address").textContent =
      firstSubAccount + "..." + SecondSubAccount;
      document.getElementById("disconnect-span").innerHTML = `
      <a class="btn btn-light action-button" 
      role="button" 
      id="disconnect" 
      href="#" 
      style="background: var(--bs-red);
      color: rgba(255,255,255,0.9);
      border-width: 0px;
      border-radius: 16px;
      font-weight: bold;">
      Disconnect</a>`;
  } else {
    alert("Please change to Polygon mainnet");
  }
}

document.getElementById("disconnect").onclick = () => {
  if (typeof window.ethereum !== 'undefined') {
    account = null;
    document.getElementById("wallet-address").textContent = "Connect";
    document.getElementById("isConnected").textContent = "Please connect wallet to interact";
    document.getElementById("isPaused").textContent ="";
    document.getElementById("disconnect-span").innerHTML = ``;
    document.getElementById("table").innerHTML = `<section style="padding-top: 275px;padding-bottom: 275px;background: #000000;">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 style="text-align: center;font-weight: bold;color: rgb(255,255,255);">Please connect wallet</h1>
            </div>
        </div>
    </div></section>`;
    document.getElementById("admin").innerHTML = "";
  }
}

contract = new web3.eth.Contract(ABI, address);

//check owner of contract
let owner = await contract.methods.owner().call();
if(owner == account)
document.getElementById("admin").innerHTML = `<a class="nav-link" href="admin.html" style="font-weight: bold;color: rgb(255,255,255);">Admin</a>`;
else
document.getElementById("admin").innerHTML = "";

 //check if connected or not && banned or not
 let banned = await contract.methods.isBannedWallet(account).call();
 if(banned == true){
  document.getElementById("camera").innerHTML = `<section style="padding-top: 275px;padding-bottom: 275px;background: #000000;">
 <div class="container">
     <div class="row">
         <div class="col-md-12">
             <h1 style="text-align: center;font-weight: bold;color: rgb(255,255,255);">You has been banned! 💩❌</h1>
         </div>
     </div>
 </div></section>`;
 document.getElementById("isConnected").textContent = "You has been banned! 💩❌";
 
}
 else{
 document.getElementById("isConnected").textContent = "You are eligible to use the dApps! 🎉✅";

 }

//CHECK if contract is paused
let contractState = await contract.methods.paused().call();
if ( contractState == true) {
document.getElementById("isPaused").textContent ="Smart contract is paused! 🙏💎";   
}
else{
document.getElementById("isPaused").textContent ="Smart contract are ready to use 🚀"; 
}

//check balanceOf owner
let balance = await contract.methods.balanceOf(account,1).call();
}

function decodeOnce(codeReader, selectedDeviceId) {
  codeReader
  .decodeFromInputVideoDevice(selectedDeviceId, 'video')
  .then((result) => {
    console.log(result)
    
    window.open(result,"_self");
  }).catch((err) => {
    console.error(err)
    
  })
}


window.addEventListener('load', function () {
  let selectedDeviceId;
  const codeReader = new ZXing.BrowserQRCodeReader()
  console.log('ZXing code reader initialized')

  codeReader.getVideoInputDevices()
    .then((videoInputDevices) => {
      const sourceSelect = document.getElementById('sourceSelect')
      selectedDeviceId = videoInputDevices[0].deviceId
      if (videoInputDevices.length >= 1) {
        videoInputDevices.forEach((element) => {
          const sourceOption = document.createElement('option')
          sourceOption.text = element.label
          sourceOption.value = element.deviceId
          sourceSelect.appendChild(sourceOption)
        })

        sourceSelect.onchange = () => {
          selectedDeviceId = sourceSelect.value;
        };

        const sourceSelectPanel = document
        .getElementById('sourceSelectPanel')
        sourceSelectPanel.style.display = 'block'
      }

      document.getElementById('startButton')
      .addEventListener('click', () => {
          decodeOnce(codeReader, selectedDeviceId);
        console.log(`Started decode from camera with id ${selectedDeviceId}`)
      })

      document.getElementById('resetButton')
      .addEventListener('click', () => {
        codeReader.reset()
        document.getElementById('result').textContent = '';
        console.log('Reset.')
      })

    })
    .catch((err) => {
      console.error(err)
    })
})

function connectToPolygon() {
  if (typeof window.ethereum == 'undefined') {
      alert('MetaMask is not installed!');
  } else {
      

      const chain = {
          chainId: "0x89",
          chainName: "Polygon Mainnet",
          nativeCurrency: {
              name: "Polygon Mainnet",
              symbol: "MATIC",
              decimals: 18,
          },
          rpcUrls: ["https://polygon-rpc.com/"],
          blockExplorerUrls: ["https://www.polygonscan.com/"],
          iconUrls: [
              "https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"
          ]
      };
      window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [chain],
      }).catch((error) => {
          console.log(error);
          alert("An error has occurred. Please make sure the metamask is ready to go. See error in log");
      });
  }
}


setTimeout(startApp, 1000);
  
  