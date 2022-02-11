/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MockOldDTInterface extends utils.Interface {
  contractName: "MockOldDT";
  functions: {
    "BASE()": FunctionFragment;
    "BASE_COMMUNITY_FEE_PERCENTAGE()": FunctionFragment;
    "BASE_MARKET_FEE_PERCENTAGE()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "approveMinter()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "blob()": FunctionFragment;
    "calculateFee(uint256,uint256)": FunctionFragment;
    "cap()": FunctionFragment;
    "decimals()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "finishOrder(bytes32,address,uint256,uint256)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initialize(string,string,address,uint256,string,address)": FunctionFragment;
    "isInitialized()": FunctionFragment;
    "isMinter(address)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "minter()": FunctionFragment;
    "name()": FunctionFragment;
    "proposeMinter(address)": FunctionFragment;
    "startOrder(address,uint256,uint256,address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BASE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "BASE_COMMUNITY_FEE_PERCENTAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_MARKET_FEE_PERCENTAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approveMinter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "blob", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "cap", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finishOrder",
    values: [BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isMinter", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeMinter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "startOrder",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "BASE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "BASE_COMMUNITY_FEE_PERCENTAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_MARKET_FEE_PERCENTAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "blob", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finishOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isMinter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeMinter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "MinterApproved(address,address)": EventFragment;
    "MinterProposed(address,address)": EventFragment;
    "OrderFinished(bytes32,address,uint256,uint256,address,uint256)": EventFragment;
    "OrderStarted(address,address,uint256,uint256,uint256,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterApproved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinterProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type MinterApprovedEvent = TypedEvent<
  [string, string],
  { currentMinter: string; newMinter: string }
>;

export type MinterApprovedEventFilter = TypedEventFilter<MinterApprovedEvent>;

export type MinterProposedEvent = TypedEvent<
  [string, string],
  { currentMinter: string; newMinter: string }
>;

export type MinterProposedEventFilter = TypedEventFilter<MinterProposedEvent>;

export type OrderFinishedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, string, BigNumber],
  {
    orderTxId: string;
    consumer: string;
    amount: BigNumber;
    serviceId: BigNumber;
    provider: string;
    timestamp: BigNumber;
  }
>;

export type OrderFinishedEventFilter = TypedEventFilter<OrderFinishedEvent>;

export type OrderStartedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, string, BigNumber],
  {
    consumer: string;
    payer: string;
    amount: BigNumber;
    serviceId: BigNumber;
    timestamp: BigNumber;
    mrktFeeCollector: string;
    marketFee: BigNumber;
  }
>;

export type OrderStartedEventFilter = TypedEventFilter<OrderStartedEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; value: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface MockOldDT extends BaseContract {
  contractName: "MockOldDT";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockOldDTInterface;

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
    BASE(overrides?: CallOverrides): Promise<[BigNumber]>;

    BASE_COMMUNITY_FEE_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    BASE_MARKET_FEE_PERCENTAGE(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveMinter(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    blob(overrides?: CallOverrides): Promise<[string]>;

    calculateFee(
      amount: BigNumberish,
      feePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cap(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    finishOrder(
      orderTxId: BytesLike,
      consumer: string,
      amount: BigNumberish,
      serviceId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      name: string,
      symbol: string,
      minterAddress: string,
      cap_: BigNumberish,
      blob_: string,
      feeCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    isMinter(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    mint(
      account: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    proposeMinter(
      newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startOrder(
      consumer: string,
      amount: BigNumberish,
      serviceId: BigNumberish,
      mrktFeeCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BASE(overrides?: CallOverrides): Promise<BigNumber>;

  BASE_COMMUNITY_FEE_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

  BASE_MARKET_FEE_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveMinter(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  blob(overrides?: CallOverrides): Promise<string>;

  calculateFee(
    amount: BigNumberish,
    feePercentage: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cap(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  finishOrder(
    orderTxId: BytesLike,
    consumer: string,
    amount: BigNumberish,
    serviceId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    name: string,
    symbol: string,
    minterAddress: string,
    cap_: BigNumberish,
    blob_: string,
    feeCollector: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;

  mint(
    account: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  minter(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  proposeMinter(
    newMinter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startOrder(
    consumer: string,
    amount: BigNumberish,
    serviceId: BigNumberish,
    mrktFeeCollector: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASE(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_COMMUNITY_FEE_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    BASE_MARKET_FEE_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approveMinter(overrides?: CallOverrides): Promise<void>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    blob(overrides?: CallOverrides): Promise<string>;

    calculateFee(
      amount: BigNumberish,
      feePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cap(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    finishOrder(
      orderTxId: BytesLike,
      consumer: string,
      amount: BigNumberish,
      serviceId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      name: string,
      symbol: string,
      minterAddress: string,
      cap_: BigNumberish,
      blob_: string,
      feeCollector: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    isMinter(account: string, overrides?: CallOverrides): Promise<boolean>;

    mint(
      account: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    minter(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    proposeMinter(newMinter: string, overrides?: CallOverrides): Promise<void>;

    startOrder(
      consumer: string,
      amount: BigNumberish,
      serviceId: BigNumberish,
      mrktFeeCollector: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "MinterApproved(address,address)"(
      currentMinter?: null,
      newMinter?: null
    ): MinterApprovedEventFilter;
    MinterApproved(
      currentMinter?: null,
      newMinter?: null
    ): MinterApprovedEventFilter;

    "MinterProposed(address,address)"(
      currentMinter?: null,
      newMinter?: null
    ): MinterProposedEventFilter;
    MinterProposed(
      currentMinter?: null,
      newMinter?: null
    ): MinterProposedEventFilter;

    "OrderFinished(bytes32,address,uint256,uint256,address,uint256)"(
      orderTxId?: null,
      consumer?: string | null,
      amount?: null,
      serviceId?: null,
      provider?: string | null,
      timestamp?: null
    ): OrderFinishedEventFilter;
    OrderFinished(
      orderTxId?: null,
      consumer?: string | null,
      amount?: null,
      serviceId?: null,
      provider?: string | null,
      timestamp?: null
    ): OrderFinishedEventFilter;

    "OrderStarted(address,address,uint256,uint256,uint256,address,uint256)"(
      consumer?: string | null,
      payer?: string | null,
      amount?: null,
      serviceId?: null,
      timestamp?: null,
      mrktFeeCollector?: string | null,
      marketFee?: null
    ): OrderStartedEventFilter;
    OrderStarted(
      consumer?: string | null,
      payer?: string | null,
      amount?: null,
      serviceId?: null,
      timestamp?: null,
      mrktFeeCollector?: string | null,
      marketFee?: null
    ): OrderStartedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    BASE(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_COMMUNITY_FEE_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    BASE_MARKET_FEE_PERCENTAGE(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveMinter(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    blob(overrides?: CallOverrides): Promise<BigNumber>;

    calculateFee(
      amount: BigNumberish,
      feePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cap(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    finishOrder(
      orderTxId: BytesLike,
      consumer: string,
      amount: BigNumberish,
      serviceId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      name: string,
      symbol: string,
      minterAddress: string,
      cap_: BigNumberish,
      blob_: string,
      feeCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    isMinter(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      account: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    proposeMinter(
      newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startOrder(
      consumer: string,
      amount: BigNumberish,
      serviceId: BigNumberish,
      mrktFeeCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BASE_COMMUNITY_FEE_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BASE_MARKET_FEE_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveMinter(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blob(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateFee(
      amount: BigNumberish,
      feePercentage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    finishOrder(
      orderTxId: BytesLike,
      consumer: string,
      amount: BigNumberish,
      serviceId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      name: string,
      symbol: string,
      minterAddress: string,
      cap_: BigNumberish,
      blob_: string,
      feeCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isMinter(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      account: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeMinter(
      newMinter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startOrder(
      consumer: string,
      amount: BigNumberish,
      serviceId: BigNumberish,
      mrktFeeCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
