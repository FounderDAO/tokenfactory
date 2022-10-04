package keeper

import (
	"github.com/FounderDAO/tokenfactory/x/tokenfactory/types"
)

var _ types.QueryServer = Keeper{}
