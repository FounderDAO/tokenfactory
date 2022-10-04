package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/FounderDAO/tokenfactory/testutil/keeper"
	"github.com/FounderDAO/tokenfactory/x/tokenfactory/keeper"
	"github.com/FounderDAO/tokenfactory/x/tokenfactory/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TokenfactoryKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
