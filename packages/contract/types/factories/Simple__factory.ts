/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Simple, SimpleInterface } from "../Simple";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "number",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600160008190555060b3806100276000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80638381f58a14602d575b600080fd5b60336047565b604051603e91906064565b60405180910390f35b60005481565b6000819050919050565b605e81604d565b82525050565b6000602082019050607760008301846057565b9291505056fea2646970667358221220577bb517b00310df72a3a5dd48a73bd2b4c7504baf5e32f272a2da9c1ff51d8e64736f6c63430008110033";

type SimpleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Simple__factory extends ContractFactory {
  constructor(...args: SimpleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Simple> {
    return super.deploy(overrides || {}) as Promise<Simple>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Simple {
    return super.attach(address) as Simple;
  }
  override connect(signer: Signer): Simple__factory {
    return super.connect(signer) as Simple__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleInterface {
    return new utils.Interface(_abi) as SimpleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Simple {
    return new Contract(address, _abi, signerOrProvider) as Simple;
  }
}