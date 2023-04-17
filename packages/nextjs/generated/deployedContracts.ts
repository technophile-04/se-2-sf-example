const contracts = {
  5: [
    {
      name: "goerli",
      chainId: "5",
      contracts: {
        MoneyRouter: {
          address: "0xA3bA4098a5455bb4151f7aEd324f8C56f09dE193",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "Unauthorized",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "accountList",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
              ],
              name: "allowAccount",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "changeOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "createFlowFromContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "createFlowIntoContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
              ],
              name: "deleteFlowFromContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
              ],
              name: "deleteFlowIntoContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
              ],
              name: "removeAccount",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "sendLumpSumToContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "updateFlowFromContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "updateFlowIntoContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "withdrawFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
