package keeper

import (
	"context"

	"blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AuthorPostsAll(c context.Context, req *types.QueryAllAuthorPostsRequest) (*types.QueryAllAuthorPostsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var authorPostss []types.AuthorPosts
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	authorPostsStore := prefix.NewStore(store, types.KeyPrefix(types.AuthorPostsKeyPrefix))

	pageRes, err := query.Paginate(authorPostsStore, req.Pagination, func(key []byte, value []byte) error {
		var authorPosts types.AuthorPosts
		if err := k.cdc.Unmarshal(value, &authorPosts); err != nil {
			return err
		}

		authorPostss = append(authorPostss, authorPosts)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAuthorPostsResponse{AuthorPosts: authorPostss, Pagination: pageRes}, nil
}

func (k Keeper) AuthorPosts(c context.Context, req *types.QueryGetAuthorPostsRequest) (*types.QueryGetAuthorPostsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAuthorPosts(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetAuthorPostsResponse{AuthorPosts: val}, nil
}
