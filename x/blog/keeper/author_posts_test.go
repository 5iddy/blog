package keeper_test

import (
	"strconv"
	"testing"

	keepertest "blog/testutil/keeper"
	"blog/testutil/nullify"
	"blog/x/blog/keeper"
	"blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNAuthorPosts(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.AuthorPosts {
	items := make([]types.AuthorPosts, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetAuthorPosts(ctx, items[i])
	}
	return items
}

func TestAuthorPostsGet(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNAuthorPosts(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetAuthorPosts(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestAuthorPostsRemove(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNAuthorPosts(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAuthorPosts(ctx,
			item.Index,
		)
		_, found := keeper.GetAuthorPosts(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestAuthorPostsGetAll(t *testing.T) {
	keeper, ctx := keepertest.BlogKeeper(t)
	items := createNAuthorPosts(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAuthorPosts(ctx)),
	)
}
