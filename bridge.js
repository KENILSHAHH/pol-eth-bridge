/** @format */

const ethers = require('ethers');
const rootChainManagerAbi = require('./depositManagerAbi.json');

const privateKey =
  'YOUR_PRIVATE_KEY'; // Replace with your private key
const depositManagerProxyContractAddressOnSepolia =
  '0x44ad17990f9128c6d823ee10db7f0a5d40a731a4';
const polTokenAddressOnSepolia = '0x44499312f493F62f2DFd3C6435Ca3603EbFCeeBa';

const approveFunctionAbi = [
  'function approve(address spender, uint256 amount) external returns (bool)',
];
const provider = new ethers.JsonRpcProvider(
  'https://ethereum-sepolia-rpc.publicnode.com'
);
const wallet = new ethers.Wallet(privateKey, provider);
const depositManagerProxyContract = new ethers.Contract(
  depositManagerProxyContractAddressOnSepolia,
  rootChainManagerAbi,
  wallet
);
const polTokenApprovalInstance = new ethers.Contract(
  polTokenAddressOnSepolia,
  approveFunctionAbi,
  wallet
);
async function bridgePOL() {
  const amount = 1; // Amount in Ether
  const approveTx = await polTokenApprovalInstance.approve(
    depositManagerProxyContractAddressOnSepolia,
    ethers.parseEther(amount.toString())
  );
  await approveTx.wait();
  console.log(
    'Approval successful',
    `https://sepolia.etherscan.io/tx/${approveTx.hash}`
  );
  const tx = await depositManagerProxyContract.depositERC20ForUser(
    polTokenAddressOnSepolia,
    wallet.address,
    ethers.parseEther(amount.toString()) //bytes 32 for amount 1
  );
  console.log(
    'Tx successful',
    `https://sepolia.etherscan.io/tx/${tx.hash}`
  );
  await tx.wait();
  console.log('Deposit successful');

    //after roughly 25 mins, assets will land on amoy 
}

bridgePOL();
