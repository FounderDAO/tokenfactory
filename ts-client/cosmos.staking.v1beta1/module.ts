// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreateValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgEditValidator } from "./types/cosmos/staking/v1beta1/tx";
import { MsgDelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgBeginRedelegate } from "./types/cosmos/staking/v1beta1/tx";
import { MsgCancelUnbondingDelegation } from "./types/cosmos/staking/v1beta1/tx";
import { MsgUndelegate } from "./types/cosmos/staking/v1beta1/tx";


export { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgCancelUnbondingDelegation, MsgUndelegate };

type sendMsgCreateValidatorParams = {
  value: MsgCreateValidator,
  fee?: StdFee,
  memo?: string
};

type sendMsgEditValidatorParams = {
  value: MsgEditValidator,
  fee?: StdFee,
  memo?: string
};

type sendMsgDelegateParams = {
  value: MsgDelegate,
  fee?: StdFee,
  memo?: string
};

type sendMsgBeginRedelegateParams = {
  value: MsgBeginRedelegate,
  fee?: StdFee,
  memo?: string
};

type sendMsgCancelUnbondingDelegationParams = {
  value: MsgCancelUnbondingDelegation,
  fee?: StdFee,
  memo?: string
};

type sendMsgUndelegateParams = {
  value: MsgUndelegate,
  fee?: StdFee,
  memo?: string
};


type msgCreateValidatorParams = {
  value: MsgCreateValidator,
};

type msgEditValidatorParams = {
  value: MsgEditValidator,
};

type msgDelegateParams = {
  value: MsgDelegate,
};

type msgBeginRedelegateParams = {
  value: MsgBeginRedelegate,
};

type msgCancelUnbondingDelegationParams = {
  value: MsgCancelUnbondingDelegation,
};

type msgUndelegateParams = {
  value: MsgUndelegate,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCreateValidator({ value, fee, memo }: sendMsgCreateValidatorParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateValidator: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateValidator({ value: MsgCreateValidator.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateValidator: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgEditValidator({ value, fee, memo }: sendMsgEditValidatorParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgEditValidator: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgEditValidator({ value: MsgEditValidator.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgEditValidator: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgDelegate({ value, fee, memo }: sendMsgDelegateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgDelegate: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgDelegate({ value: MsgDelegate.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgDelegate: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgBeginRedelegate({ value, fee, memo }: sendMsgBeginRedelegateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgBeginRedelegate: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgBeginRedelegate({ value: MsgBeginRedelegate.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgBeginRedelegate: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCancelUnbondingDelegation({ value, fee, memo }: sendMsgCancelUnbondingDelegationParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCancelUnbondingDelegation: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCancelUnbondingDelegation({ value: MsgCancelUnbondingDelegation.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCancelUnbondingDelegation: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUndelegate({ value, fee, memo }: sendMsgUndelegateParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUndelegate: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUndelegate({ value: MsgUndelegate.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUndelegate: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreateValidator({ value }: msgCreateValidatorParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator", value: MsgCreateValidator.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateValidator: Could not create message: ' + e.message)
			}
		},
		
		msgEditValidator({ value }: msgEditValidatorParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator", value: MsgEditValidator.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgEditValidator: Could not create message: ' + e.message)
			}
		},
		
		msgDelegate({ value }: msgDelegateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgDelegate", value: MsgDelegate.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgDelegate: Could not create message: ' + e.message)
			}
		},
		
		msgBeginRedelegate({ value }: msgBeginRedelegateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate", value: MsgBeginRedelegate.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgBeginRedelegate: Could not create message: ' + e.message)
			}
		},
		
		msgCancelUnbondingDelegation({ value }: msgCancelUnbondingDelegationParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", value: MsgCancelUnbondingDelegation.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCancelUnbondingDelegation: Could not create message: ' + e.message)
			}
		},
		
		msgUndelegate({ value }: msgUndelegateParams): EncodeObject {
			try {
				return { typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate", value: MsgUndelegate.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUndelegate: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]>;

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });
		this.tx = txClient({ signer: client.signer, addr: client.env.rpcURL, prefix: client.env.prefix ?? "cosmos" });
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			CosmosStakingV1Beta1: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;