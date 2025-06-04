# posBridge

posBridge is a project designed to facilitate seamless integration between point-of-sale (POS) systems and various other services. It acts as a bridge, ensuring smooth data flow and synchronization.

## Features

- Connects multiple POS systems to external services.
- Provides real-time data synchronization.
- Supports customizable data mappings.

## Installation

To install posBridge, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/posBridge.git
cd posBridge
npm install
```

## Usage

Run the application using:

```bash
npm start
```

This starts the server and begins listening for incoming POS data.

## Main Components

### Server Initialization

This section sets up the server, configuring necessary middleware and routes to handle incoming requests from POS systems.

### Data Processing

Here, the incoming POS data is validated, transformed, and mapped to the required format for external services.

### External Service Integration

This part handles communication with third-party services, sending synchronized data and managing responses.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

# posBridge

`posBridge` is a JavaScript/Node.js project designed to **bridge** POL tokens from the Ethereum Sepolia testnet to the Amoy testnet using the Polygon PoS bridge. It interacts directly with smart contracts to automate the approval and deposit process.

## Features

- Automated POL token approval for the Polygon bridge contract.
- Deposits POL tokens for the user on the Amoy testnet.
- Provides Etherscan links for transaction tracking.
- Built-in error handling and status updates.

## Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/posBridge.git
cd posBridge
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configuration

- Open `bridgePOL.js`.
- Replace the placeholder:

```javascript
const privateKey = 'YOUR_PRIVATE_KEY';
```

with your actual **private key** (never share it publicly).

## Usage

Run the script with:

```bash
node bridgePOL.js
```

## Project Structure

| File                        | Description                                                                                       |
|-----------------------------|---------------------------------------------------------------------------------------------------|
| `bridgePOL.js`              | Main script that handles the approval and deposit of POL tokens.                                 |
| `depositManagerAbi.json`    | ABI for the Deposit Manager Proxy Contract. Required for contract interactions.                   |

## Code Explanation

Here’s what happens in the **`bridgePOL.js`** script:

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