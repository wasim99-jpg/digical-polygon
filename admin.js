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
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' },
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
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
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
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
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
      { indexed: false, internalType: 'string', name: 'value', type: 'string' },
      { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' },
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
let firstSubContract = address.substring(0, 6)
let SecondSubContract = address.substring(38, 42)
document.getElementById('contract-address').textContent =
  firstSubContract + '...' + SecondSubContract

const startApp = async () => {
  if (typeof window.ethereum == 'undefined') {
    alert(
      'MetaMask is not installed! Please install Metamask in Chrome or Play Store',
    )
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

  document.getElementById('disconnect').onclick = () => {
    if (typeof window.ethereum !== 'undefined') {
      account = null
      document.getElementById('wallet-address').textContent = 'Connect'
      document.getElementById('isConnected').textContent =
        'Please connect wallet to interact'
      document.getElementById('isPaused').textContent = ''
      document.getElementById('disconnect-span').innerHTML = ``
      document.getElementById('admin').innerHTML = ''
    }
  }

  contract = new web3.eth.Contract(ABI, address)

  //check if connected or not && banned or not
  let banned = await contract.methods.isBannedWallet(account).call()
  if (banned == true)
    document.getElementById('isConnected').textContent =
      'You has been banned! 💩❌'
  else
    document.getElementById('isConnected').textContent =
      'You are eligible to use the dApps! 🎉✅'

  //check owner of contract
  let owner = await contract.methods.owner().call()
  if (owner == account) {
    document.getElementById(
      'admin',
    ).innerHTML = `<a class="nav-link" href="admin.html" style="font-weight: bold;color: rgb(255,255,255);">Admin</a>`
    document.getElementById('table').innerHTML = `<div class="container">
        <div class="row">
            <div class="col-12 col-md-12 d-sm-flex justify-content-sm-center" style="text-align: center;margin-bottom: 45px;"><strong class="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center" style="color: rgb(255,255,255);font-size: 37px;margin-bottom: 11px;text-align: center;">ADMIN DASHBOARD</strong></div>
        </div>
    </div>
    <div class="container">
            <div class="row">
                <div class="col-12 col-md-12 d-sm-flex justify-content-sm-center" style="text-align: center;"><strong class="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center" style="color: rgb(255,255,255);font-size: 19px;margin-bottom: 11px;text-align: center;"><span id="statusSupply">new supply of card, initial supply is 30, 30 + add supply = new supply</span></strong></div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center" style="margin-bottom: 5px;"><input id="supply" class="flex-grow-1" type="text" style="background: rgb(55,55,55);color: rgb(255,255,255);" placeholder="add supply"></div>
                <div class="col-md-6 d-flex d-sm-flex d-xxl-flex flex-grow-1 flex-shrink-1 justify-content-center justify-content-sm-center justify-content-xxl-center" style="margin-bottom: 5px;"><button id="add-supply" class="btn btn-primary d-xxl-flex flex-fill justify-content-xxl-center" type="button" style="background: linear-gradient(-172deg, var(--bs-indigo) 0%, var(--bs-pink));box-shadow: -6px 6px 12px 3px var(--bs-pink), 9px -7px 14px var(--bs-indigo);border-width: 0px;border-radius: 5px;">Add Supply</button></div>
            </div>
        </div>
    <div class="container" style="margin-top: 39px;">
        <div class="row">
            <div class="col-12 col-md-12 d-sm-flex justify-content-sm-center" style="text-align: center;"><strong class="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center" style="color: rgb(255,255,255);font-size: 19px;margin-bottom: 11px;text-align: center;"><span id="statusState">Enable smart contract to work, Input true or false</span></strong></div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center" style="margin-bottom: 5px;">
            <input id="state" class="flex-grow-1" type="text" style="background: rgb(55,55,55);color: rgb(255,255,255);" placeholder="true/false">
            </div>

            <div class="col-md-6 d-flex d-sm-flex d-xxl-flex flex-grow-1 flex-shrink-1 justify-content-center justify-content-sm-center justify-content-xxl-center" style="margin-bottom: 5px;">
            <button id="resume-pause" class="btn btn-primary d-xxl-flex flex-fill justify-content-xxl-center" type="button" style="background: linear-gradient(-172deg, var(--bs-indigo) 0%, var(--bs-pink));box-shadow: -6px 6px 12px 3px var(--bs-pink), 9px -7px 14px var(--bs-indigo);border-width: 0px;border-radius: 5px;">Flip state</button>
            </div>
        </div>
    </div>
    <div class="container" style="margin-top: 39px;">
        <div class="row">
            <div class="col-12 col-md-12 d-sm-flex justify-content-sm-center" style="text-align: center;"><strong class="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center" style="color: rgb(255,255,255);font-size: 19px;margin-bottom: 11px;text-align: center;"><span id="statusAmount">Auxiliary mint, helping people to mint their token</span></strong></div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center" style="margin-bottom: 5px;"><input id="amount" class="flex-grow-1" type="text" style="background: rgb(55,55,55);color: rgb(255,255,255);" placeholder="1,2,3"></div>
            <div class="col-md-6 d-flex d-sm-flex d-xxl-flex flex-grow-1 flex-shrink-1 justify-content-center justify-content-sm-center justify-content-xxl-center" style="margin-bottom: 5px;"><button id="aux-mint" class="btn btn-primary d-xxl-flex flex-fill justify-content-xxl-center" type="button" style="background: linear-gradient(-172deg, var(--bs-indigo) 0%, var(--bs-pink));box-shadow: -6px 6px 12px 3px var(--bs-pink), 9px -7px 14px var(--bs-indigo);border-width: 0px;border-radius: 5px;">Mint</button></div>
        </div>
    </div>
    <div class="container" style="margin-top: 39px;">
        <div class="row">
            <div class="col-12 col-md-12 d-sm-flex justify-content-sm-center" style="text-align: center;"><strong class="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center" style="color: rgb(255,255,255);font-size: 19px;margin-bottom: 11px;text-align: center;" id="statusLink">Update URI(characters used to identify a resource on a computer network) for card GIF</strong></div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center" style="margin-bottom: 5px;"><input id="uri-link" class="flex-grow-1" type="text" style="background: rgb(55,55,55);color: rgb(255,255,255);" placeholder="new IPFS Link"></div>
            <div class="col-md-6 d-flex d-sm-flex d-xxl-flex flex-grow-1 flex-shrink-1 justify-content-center justify-content-sm-center justify-content-xxl-center" style="margin-bottom: 5px;"><button id="uri-update" class="btn btn-primary d-xxl-flex flex-fill justify-content-xxl-center" type="button" style="background: linear-gradient(-172deg, var(--bs-indigo) 0%, var(--bs-pink));box-shadow: -6px 6px 12px 3px var(--bs-pink), 9px -7px 14px var(--bs-indigo);border-width: 0px;border-radius: 5px;">Change URI link</button></div>
        </div>
    </div>
    <div class="container" style="margin-top: 39px;">
        <div class="row">
            <div class="col-12 col-md-12 d-sm-flex justify-content-sm-center" style="text-align: center;"><strong class="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center" style="color: rgb(255,255,255);font-size: 19px;margin-bottom: 11px;text-align: center;" id="statusBan">Ban wallet address from minting</strong></div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center" style="margin-bottom: 5px;"><input class="flex-grow-1" type="text" id="ban-address" style="background: rgb(55,55,55);color: rgb(255,255,255);" placeholder="0x54657f"></div>
            <div class="col-md-6 d-flex d-sm-flex d-xxl-flex flex-grow-1 flex-shrink-1 justify-content-center justify-content-sm-center justify-content-xxl-center" style="margin-bottom: 5px;"><button class="btn btn-primary d-xxl-flex flex-fill justify-content-xxl-center" type="button" id="ban-wallet" style="background: linear-gradient(-172deg, var(--bs-indigo) 0%, var(--bs-pink));box-shadow: -6px 6px 12px 3px var(--bs-pink), 9px -7px 14px var(--bs-indigo);border-width: 0px;border-radius: 5px;">Ban address</button></div>
        </div>
    </div>
    <div class="container" style="margin-top: 39px;">
        <div class="row">
            <div class="col-12 col-md-12 d-sm-flex justify-content-sm-center" style="text-align: center;"><strong class="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center" style="color: rgb(255,255,255);font-size: 39px;margin-bottom: 11px;text-align: center;" >Supply : <span id="mint-count">0</span>/30</strong></div>
        </div>
    </div>
    <div class="container" style="margin-top: 39px;">
        <div class="row">
            <div class="col-12 col-md-12 d-sm-flex justify-content-sm-center" style="text-align: center;"><strong class="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center" style="color: rgb(255,255,255);font-size: 39px;margin-bottom: 11px;text-align: center;">smart contract owner : <span id="owner-address"></span></strong></div>
        </div>
    </div>
    <div class="container" style="margin-top: 39px;">
        <div class="row">
            <div class="col-12 col-md-12 d-sm-flex justify-content-sm-center" style="text-align: center;"><strong class="d-sm-flex d-lg-flex justify-content-sm-center justify-content-lg-center" style="color: rgb(255,255,255);font-size: 19px;margin-bottom: 11px;text-align: center;" id="statusRenounce">Renounce ownership of smart contract, There will be no contract owner</strong></div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex d-sm-flex d-xxl-flex flex-grow-1 flex-shrink-1 justify-content-center justify-content-sm-center justify-content-xxl-center" style="margin-bottom: 5px;height: 71px;"><button class="btn btn-primary d-xxl-flex flex-fill justify-content-xxl-center align-items-xxl-center" type="button" style="border-width: 0px;border-radius: 28px;background: var(--bs-red);font-size: 29px;" id="renounce-button">Renounce Ownership</button></div>
        </div>
    </div>`
  } else {
    document.getElementById(
      'table',
    ).innerHTML = `<section style="padding-top: 275px;padding-bottom: 275px;background: #000000;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 style="text-align: center;font-weight: bold;color: rgb(255,255,255);">Access denied, The crypto wallet is not the admin ❌</h1>
                </div>
            </div>
        </div></section>`
    document.getElementById('admin').innerHTML = ''
  }

  let firstSubAccount = owner.substring(0, 6)
  let SecondSubAccount = owner.substring(38, 42)
  document.getElementById('owner-address').textContent =
    firstSubAccount + '...' + SecondSubAccount

  //minted count(read)
  let mintCount = await contract.methods.totalSupply(1).call()
  document.getElementById('mint-count').textContent = mintCount

  //CHECK if contract is paused
  let contractState = await contract.methods.paused().call()
  if (contractState == true) {
    document.getElementById('isPaused').textContent =
      'Smart contract is paused! 🙏💎'
  } else {
    document.getElementById('isPaused').textContent =
      'Smart contract are ready to use 🚀'
  }

  //add supply process
  document.getElementById('add-supply').onclick = () => {
    let newSupply = document.getElementById('supply').value
    if (newSupply == '') {
      document.getElementById('statusSupply').textContent =
        'Please enter new supply 🔢'
    } else if (isNaN(newSupply)) {
      document.getElementById('statusSupply').textContent =
        'Please enter number only 🔢'
    } else {
      document.getElementById('statusSupply').textContent =
        'Interacting with the blockchain, please wait a while.... 🌀'
      let response = contract.methods
        .addSupply(newSupply)
        .send({ from: account })
        .on('receipt', function (receipt) {
          document.getElementById('statusSupply').textContent =
            'Supply Added 🫶🎉 '
          // Transaction was accepted into the blockchain, let's redraw the UI
        })
        .on('error', function (error) {
          document.getElementById('statusSupply').textContent =
            'Something went wrong, try again 😥'
          $('status').text(error)
        })
    }
  }

  // paused||resume smart contract process
  document.getElementById('resume-pause').onclick = () => {
    let newState = document.getElementById('state').value

    if (newState == '') {
      document.getElementById('statusState').textContent =
        'Please enter new state of contract ⏯️'
    } else if (newState != 'true' && newState != 'false') {
      document.getElementById('statusState').textContent =
        'Please enter boolean only (true/false) ⏯️'
    } else if (newState == 'true' || newState == 'false') {
      if(newState == 'true'){
        newState = true
        document.getElementById('statusState').textContent =
        'Interacting with the blockchain, please wait a while.... 🌀'
      let response = contract.methods
        .flipPaused(newState)
        .send({ from: account })
        .on('receipt', function (receipt) {
          document.getElementById('statusState').textContent =
            'State Changed! 🫶🎉 '
          // Transaction was accepted into the blockchain, let's redraw the UI
        })
        .on('error', function (error) {
          document.getElementById('statusState').textContent =
            'Something went wrong, try again 😥'
          $('status').text(error)
        })
      }
      else{
        newState = false
        document.getElementById('statusState').textContent =
        'Interacting with the blockchain, please wait a while.... 🌀'
      let response = contract.methods
        .flipPaused(newState)
        .send({ from: account })
        .on('receipt', function (receipt) {
          document.getElementById('statusState').textContent =
            'State changed! 🫶🎉 '
          // Transaction was accepted into the blockchain, let's redraw the UI
        })
        .on('error', function (error) {
          document.getElementById('statusState').textContent =
            'Something went wrong, try again 😥'
          $('status').text(error)
        })
      }

      
    }
  }

  // auxiliary mint process
  document.getElementById('aux-mint').onclick = () => {
    let amount = document.getElementById('amount').value

    if (amount == '') {
      document.getElementById('statusAmount').textContent =
        'Please enter the amount 🆘'
    } else if (isNaN(amount)) {
      document.getElementById('statusAmount').textContent =
        'Please enter number only 🆘'
    } else {
      document.getElementById('statusAmount').textContent =
        'Interacting with the blockchain, please wait a while.... 🌀'
      let response = contract.methods
        .EmergencyMint(amount)
        .send({ from: account })
        .on('receipt', function (receipt) {
          document.getElementById('statusAmount').textContent =
            'Mint Successfully! 🫶🎉 '
          // Transaction was accepted into the blockchain, let's redraw the UI
        })
        .on('error', function (error) {
          document.getElementById('statusAmount').textContent =
            'Something went wrong, try again 😥'
          $('status').text(error)
        })
    }
  }

  //update URI Link process
  document.getElementById('uri-update').onclick = () => {
    let newLink = document.getElementById('uri-link').value

    if (newLink == '') {
      document.getElementById('statusLink').textContent =
        'Please enter new link 🔗'
    } else {
      document.getElementById('statusLink').textContent =
        'Interacting with the blockchain, please wait a while.... 🌀'
      let response = contract.methods
        .setURI(newLink)
        .send({ from: account })
        .on('receipt', function (receipt) {
          document.getElementById('statusLink').textContent =
            'Link changed! 🫶🎉 '
          // Transaction was accepted into the blockchain, let's redraw the UI
        })
        .on('error', function (error) {
          document.getElementById('statusLink').textContent =
            'Something went wrong, try again 😥'
          $('status').text(error)
        })
    }
  }

  //ban wallet
  document.getElementById('ban-wallet').onclick = () => {
    let banAddress = document.getElementById('ban-address').value
    let length = banAddress.length

    if (banAddress == '') {
      document.getElementById('statusBan').textContent =
        'Please enter new address 🪪'
    } else if (length == 42) {
      document.getElementById('statusBan').textContent =
        'Interacting with the blockchain, please wait a while.... 🌀'
      let response = contract.methods
        .banWallet(banAddress)
        .send({ from: account })
        .on('receipt', function (receipt) {
          document.getElementById('statusBan').textContent =
            'User has been banned 😈🎉 '
          // Transaction was accepted into the blockchain, let's redraw the UI
        })
        .on('error', function (error) {
          document.getElementById('statusBan').textContent =
            'Something went wrong, try again 👿😥'
          $('status').text(error)
        })
    } else {
      document.getElementById('statusBan').textContent =
        'Not proper Ethereum address, recheck the new address 🪪'
    }
  }

  //renounce ownership
  document.getElementById('renounce-button').onclick = () => {
    document.getElementById('statusRenounce').textContent =
      'Are you sure about this? please wait a while... 🌀'
    let response = contract.methods
      .transferOwnership("0x1747c5d4F79F6faAa4409a3d51ABfe5741Fd1538")
      .send({ from: account })
      .on('receipt', function (receipt) {
        document.getElementById('statusRenounce').textContent =
          'Smart contract has been renounced 🤖'
        // Transaction was accepted into the blockchain, let's redraw the UI
      })
      .on('error', function (error) {
        document.getElementById('statusRenounce').textContent =
          'Something went wrong, try again 😥'
        $('status').text(error)
      })
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

setTimeout(startApp, 1000)
