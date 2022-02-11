/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPool, IPoolInterface } from "../IPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
    ],
    name: "exitswapPoolAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_swapMarketFee",
        type: "uint256",
      },
    ],
    name: "getAmountInExactOut",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_swapMarketFee",
        type: "uint256",
      },
    ],
    name: "getAmountOutExactIn",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBaseTokenAddress",
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
    inputs: [],
    name: "getController",
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
    inputs: [],
    name: "getDatatokenAddress",
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
    inputs: [],
    name: "getId",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minPoolAmountOut",
        type: "uint256",
      },
    ],
    name: "joinswapExternAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "poolAmountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
    ],
    name: "setSwapFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "datatokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "datatokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "datatokennWeight",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "baseTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseTokenWeight",
        type: "uint256",
      },
    ],
    name: "setup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[3]",
        name: "tokenInOutMarket",
        type: "address[3]",
      },
      {
        internalType: "uint256[4]",
        name: "amountsInOutMaxFee",
        type: "uint256[4]",
      },
    ],
    name: "swapExactAmountIn",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "spotPriceAfter",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[3]",
        name: "tokenInOutMarket",
        type: "address[3]",
      },
      {
        internalType: "uint256[4]",
        name: "amountsInOutMaxFee",
        type: "uint256[4]",
      },
    ],
    name: "swapExactAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "spotPriceAfter",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPool__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolInterface {
    return new utils.Interface(_abi) as IPoolInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IPool {
    return new Contract(address, _abi, signerOrProvider) as IPool;
  }
}
