import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateOwner } from "./types/tokenfactory/tx";
import { MsgMintAndSendTokens } from "./types/tokenfactory/tx";
import { MsgCreateDenom } from "./types/tokenfactory/tx";
import { MsgUpdateDenom } from "./types/tokenfactory/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/founderdao.tokenfactory.tokenfactory.MsgUpdateOwner", MsgUpdateOwner],
    ["/founderdao.tokenfactory.tokenfactory.MsgMintAndSendTokens", MsgMintAndSendTokens],
    ["/founderdao.tokenfactory.tokenfactory.MsgCreateDenom", MsgCreateDenom],
    ["/founderdao.tokenfactory.tokenfactory.MsgUpdateDenom", MsgUpdateDenom],
    
];

export { msgTypes }