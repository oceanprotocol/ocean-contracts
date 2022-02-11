/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC725X, IERC725XInterface } from "../IERC725X";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "ContractCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_operation",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "Executed",
    type: "event",
  },
];

export class IERC725X__factory {
  static readonly abi = _abi;
  static createInterface(): IERC725XInterface {
    return new utils.Interface(_abi) as IERC725XInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC725X {
    return new Contract(address, _abi, signerOrProvider) as IERC725X;
  }
}
