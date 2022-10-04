// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgUpdateOwner } from "./types/tokenfactory/tx";
import { MsgMintAndSendTokens } from "./types/tokenfactory/tx";
import { MsgCreateDenom } from "./types/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/tokenfactory/tx";


export { MsgUpdateOwner, MsgMintAndSendTokens, MsgCreateDenom, MsgUpdateDenom };

type sendMsgUpdateOwnerParams = {
  value: MsgUpdateOwner,
  fee?: StdFee,
  memo?: string
};

type sendMsgMintAndSendTokensParams = {
  value: MsgMintAndSendTokens,
  fee?: StdFee,
  memo?: string
};

type sendMsgCreateDenomParams = {
  value: MsgCreateDenom,
  fee?: StdFee,
  memo?: string
};

type sendMsgUpdateDenomParams = {
  value: MsgUpdateDenom,
  fee?: StdFee,
  memo?: string
};


type msgUpdateOwnerParams = {
  value: MsgUpdateOwner,
};

type msgMintAndSendTokensParams = {
  value: MsgMintAndSendTokens,
};

type msgCreateDenomParams = {
  value: MsgCreateDenom,
};

type msgUpdateDenomParams = {
  value: MsgUpdateDenom,
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
		
		async sendMsgUpdateOwner({ value, fee, memo }: sendMsgUpdateOwnerParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateOwner: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateOwner({ value: MsgUpdateOwner.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateOwner: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgMintAndSendTokens({ value, fee, memo }: sendMsgMintAndSendTokensParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgMintAndSendTokens: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgMintAndSendTokens({ value: MsgMintAndSendTokens.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgMintAndSendTokens: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgCreateDenom({ value, fee, memo }: sendMsgCreateDenomParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateDenom: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateDenom({ value: MsgCreateDenom.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateDenom: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgUpdateDenom({ value, fee, memo }: sendMsgUpdateDenomParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgUpdateDenom: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgUpdateDenom({ value: MsgUpdateDenom.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgUpdateDenom: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgUpdateOwner({ value }: msgUpdateOwnerParams): EncodeObject {
			try {
				return { typeUrl: "/founderdao.tokenfactory.tokenfactory.MsgUpdateOwner", value: MsgUpdateOwner.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateOwner: Could not create message: ' + e.message)
			}
		},
		
		msgMintAndSendTokens({ value }: msgMintAndSendTokensParams): EncodeObject {
			try {
				return { typeUrl: "/founderdao.tokenfactory.tokenfactory.MsgMintAndSendTokens", value: MsgMintAndSendTokens.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgMintAndSendTokens: Could not create message: ' + e.message)
			}
		},
		
		msgCreateDenom({ value }: msgCreateDenomParams): EncodeObject {
			try {
				return { typeUrl: "/founderdao.tokenfactory.tokenfactory.MsgCreateDenom", value: MsgCreateDenom.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateDenom: Could not create message: ' + e.message)
			}
		},
		
		msgUpdateDenom({ value }: msgUpdateDenomParams): EncodeObject {
			try {
				return { typeUrl: "/founderdao.tokenfactory.tokenfactory.MsgUpdateDenom", value: MsgUpdateDenom.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgUpdateDenom: Could not create message: ' + e.message)
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
			FounderdaoTokenfactoryTokenfactory: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;