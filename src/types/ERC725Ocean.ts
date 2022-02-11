/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ERC725OceanInterface extends utils.Interface {
  contractName: "ERC725Ocean";
  functions: {
    "getData(bytes32)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getData", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "getData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "ContractCreated(address)": EventFragment;
    "DataChanged(bytes32,bytes)": EventFragment;
    "Executed(uint256,address,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DataChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Executed"): EventFragment;
}

export type ContractCreatedEvent = TypedEvent<
  [string],
  { contractAddress: string }
>;

export type ContractCreatedEventFilter = TypedEventFilter<ContractCreatedEvent>;

export type DataChangedEvent = TypedEvent<
  [string, string],
  { key: string; value: string }
>;

export type DataChangedEventFilter = TypedEventFilter<DataChangedEvent>;

export type ExecutedEvent = TypedEvent<
  [BigNumber, string, BigNumber, string],
  { _operation: BigNumber; _to: string; _value: BigNumber; _data: string }
>;

export type ExecutedEventFilter = TypedEventFilter<ExecutedEvent>;

export interface ERC725Ocean extends BaseContract {
  contractName: "ERC725Ocean";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC725OceanInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getData(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { _value: string }>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  getData(_key: BytesLike, overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    getData(_key: BytesLike, overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ContractCreated(address)"(
      contractAddress?: string | null
    ): ContractCreatedEventFilter;
    ContractCreated(
      contractAddress?: string | null
    ): ContractCreatedEventFilter;

    "DataChanged(bytes32,bytes)"(
      key?: BytesLike | null,
      value?: null
    ): DataChangedEventFilter;
    DataChanged(key?: BytesLike | null, value?: null): DataChangedEventFilter;

    "Executed(uint256,address,uint256,bytes)"(
      _operation?: BigNumberish | null,
      _to?: string | null,
      _value?: BigNumberish | null,
      _data?: null
    ): ExecutedEventFilter;
    Executed(
      _operation?: BigNumberish | null,
      _to?: string | null,
      _value?: BigNumberish | null,
      _data?: null
    ): ExecutedEventFilter;
  };

  estimateGas: {
    getData(_key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getData(
      _key: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
