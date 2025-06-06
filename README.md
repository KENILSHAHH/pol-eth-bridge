# posBridge

Simple Demonstration of bridging POL token from Ethereum Sepolia to Polygon PoS Amoy testnet.

## Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/kenilshahh/pol-eth-bridge.git
cd posBridge
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configuration

- Open `bridge.js`.
- Replace the placeholder:

```javascript
const privateKey = 'YOUR_PRIVATE_KEY';
```

with your actual **private key** (never share it publicly).

## Usage

Run the script with:

```bash
node bridge.js
```

## Project Structure

| File                        | Description                                                                                       |
|-----------------------------|---------------------------------------------------------------------------------------------------|
| `bridge.js`              | Main script that handles the approval and deposit of POL tokens.                                 |
| `depositManagerAbi.json`    | ABI for the Deposit Manager Proxy Contract. Required for contract interactions.                   |

## Code Explanation

Here’s what happens in the **`bridge.js`** script:

- **Dependencies and Config**  
  Uses `ethers.js` to connect to the Sepolia RPC, load the contract ABIs, and set up a wallet.

- **Approval Step**  
  Calls the `approve` function on the POL token contract to grant the Polygon Deposit Manager permission to spend your tokens.

- **Deposit Step**  
  Calls `depositERC20ForUser` on the Polygon Deposit Manager contract to bridge the approved POL tokens to Amoy.

- **Status Updates**  
  Prints Etherscan transaction links and logs success once the deposit is confirmed.

- **Final Note**  
  Bridged assets typically arrive on the Amoy testnet **after about 25 minutes**.

## Important Notes

- **Testnet Use Only**  
  This script is designed for the Sepolia and Amoy testnets.  
- **Keep Private Keys Safe**  
  Never commit your private key to version control.  
- **Transaction Delays**  
  Asset bridging might take some time due to network finality and checkpointing.

## Contributing

Contributions are welcome! Feel free to **open an issue** or **submit a PR** for improvements, fixes, or new features.

## License

This project is licensed under the MIT License.