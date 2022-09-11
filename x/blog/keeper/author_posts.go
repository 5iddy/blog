package keeper

import (
	"blog/x/blog/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// SetAuthorPosts set a specific authorPosts in the store from its index
func (k Keeper) SetAuthorPosts(ctx sdk.Context, authorPosts types.AuthorPosts) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthorPostsKeyPrefix))
	b := k.cdc.MustMarshal(&authorPosts)
	store.Set(types.AuthorPostsKey(
		authorPosts.Index,
	), b)
}

// GetAuthorPosts returns a authorPosts from its index
func (k Keeper) GetAuthorPosts(
	ctx sdk.Context,
	index string,
) (val types.AuthorPosts, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthorPostsKeyPrefix))

	b := store.Get(types.AuthorPostsKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAuthorPosts removes a authorPosts from the store
func (k Keeper) RemoveAuthorPosts(
	ctx sdk.Context,
	index string,
) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthorPostsKeyPrefix))
	store.Delete(types.AuthorPostsKey(
		index,
	))
}

// GetAllAuthorPosts returns all authorPosts
func (k Keeper) GetAllAuthorPosts(ctx sdk.Context) (list []types.AuthorPosts) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthorPostsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AuthorPosts
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// SetAuthorPosts set a specific authorPosts in the store from its index
func (k Keeper) AppendPostIdToAuthorPosts(ctx sdk.Context, creator string, postId uint64) error {
	posts, found := k.GetAuthorPosts(ctx, creator)

	if found {
		if creator == posts.Creator {
			posts.PostIds = append(posts.PostIds, postId)
			k.SetAuthorPosts(ctx, posts)
			return nil
		} else {
			return sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Unauthorized Request")
		}
	} else {
		var postIds []uint64
		postIds = append(postIds, postId)
		var authorPosts = types.AuthorPosts{
			Index:   creator,
			Creator: creator,
			PostIds: postIds,
		}
		k.SetAuthorPosts(ctx, authorPosts)
		return nil
	}
}
