var account = null
var contract = null
const ABI = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
    ],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'URI',
    type: 'event',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'Claimed',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DIGICAL_ID',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_amount', type: 'uint256' }],
    name: 'EmergencyMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_addSupply', type: 'uint256' }],
    name: 'addSupply',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'id', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'accounts', type: 'address[]' },
      { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_wallet', type: 'address' }],
    name: 'banWallet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'bannedWallet',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
    name: 'exists',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bool', name: '_paused', type: 'bool' }],
    name: 'flipPaused',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_wallet', type: 'address' }],
    name: 'isBannedWallet',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'id', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: '_uri', type: 'string' }],
    name: 'setURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'uri',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'uri',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
]
const address = '0x928c403baC26D1811390d40700B8D32381113C77'

const startApp = async () => {
  if (typeof window.ethereum == 'undefined') {
    alert(
      'MetaMask is not installed! Please install Metamask in Chrome or Play Store',
    )
  }
  connectToPolygon()
  if (window.ethereum) {
    if (window.ethereum.chainId == '0x89') {
      await window.ethereum.send('eth_requestAccounts')
      window.web3 = new Web3(window.ethereum)
      var accounts = await web3.eth.getAccounts()
      account = accounts[0]
      let firstSubAccount = account.substring(0, 6)
      let SecondSubAccount = account.substring(38, 42)
      document.getElementById('wallet-address').textContent =
        firstSubAccount + '...' + SecondSubAccount
    } 
  }

  contract = new web3.eth.Contract(ABI, address)

  //check balanceOf owner
  let balance = await contract.methods.balanceOf(account, 1).call()

  if (balance == 0) {
    document.getElementById(
      'verify',
    ).innerHTML = `<section style="padding-top: 275px;padding-bottom: 275px;background: #fffff;">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <h1 style="text-align: center;font-weight: bold;color: rgb(0,0,0);">Access Denied, The asset is not available in your crypto wallet</h1>
                  </div>
                  <div class="col-md-12 text-center d-flex flex-grow-1 flex-shrink-1 justify-content-center align-self-center m-auto" style="text-align: center;min-width: 164px;padding-bottom: 30px;padding-top: 29px;"><a class="btn btn-light action-button" role="button" href="scan.html" style="background: linear-gradient(-130deg, var(--bs-indigo), var(--bs-pink) 105%), var(--bs-indigo);font-weight: bold;box-shadow: 5px 0px 20px 5px var(--bs-indigo), -3px 5px 20px 5px var(--bs-pink);color: rgba(255,255,255,0.9);border-width: 0px;border-radius: 16px;">back to scan</a></div>

              </div>
          </div></section>`
  } else {
    document.getElementById('verify').innerHTML = `
          <div class="row row-cols-1 text-center d-flex flex-grow-1 flex-shrink-1 justify-content-center flex-wrap justify-content-sm-center align-items-sm-center align-self-sm-center" style="padding: 0px;text-align: center;padding-top: 50px;padding-bottom: 50px;">
            <div class="col-md-12 text-center d-flex flex-grow-1 flex-shrink-1 justify-content-center align-self-center m-auto" style="text-align: center;">
                <h1>Asset found!</h1>
            </div>
        </div>
        <div class="row row-cols-1 text-center d-flex flex-grow-1 flex-shrink-1 justify-content-center flex-wrap justify-content-sm-center align-items-sm-center align-self-sm-center" style="padding: 0px;text-align: center;">
            <div class="col-md-12 d-flex flex-grow-1 flex-shrink-1 align-self-center m-auto" style="text-align: center;max-width: 35%;max-height: 50%;min-width: 250px;padding: 15px;"><img class="d-flex flex-grow-1 flex-shrink-1" src="assets/img/digical.gif" style="width: 10px;text-align: center;min-width: 60px;border-radius: 30px;box-shadow: 11px 0px 20px 8px var(--bs-indigo), 0px 11px 20px 8px var(--bs-pink);"></div>
            <div class="col-md-12 text-center d-flex flex-grow-1 flex-shrink-1 justify-content-center align-self-center m-auto" style="text-align: center;min-width: 164px;padding-bottom: 30px;padding-top: 29px;"><a class="btn btn-light action-button" role="button" href="scan.html" style="background: linear-gradient(-130deg, var(--bs-indigo), var(--bs-pink) 105%), var(--bs-indigo);font-weight: bold;box-shadow: 5px 0px 20px 5px var(--bs-indigo), -3px 5px 20px 5px var(--bs-pink);color: rgba(255,255,255,0.9);border-width: 0px;border-radius: 16px;">back to scan</a></div>
        </div>`
  }
}

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

startApp()

setTimeout(startApp, 1000)
