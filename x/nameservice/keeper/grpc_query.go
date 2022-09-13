package keeper

import (
	"blog/x/nameservice/types"
)

var _ types.QueryServer = Keeper{}
