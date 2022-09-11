package keeper

import (
	"context"

	"blog/x/blog/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateAuthorPosts(goCtx context.Context, msg *types.MsgCreateAuthorPosts) (*types.MsgCreateAuthorPostsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetAuthorPosts(
		ctx,
		msg.Index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var authorPosts = types.AuthorPosts{
		Creator: msg.Creator,
		Index:   msg.Index,
		PostIds: msg.Posts,
	}

	k.SetAuthorPosts(
		ctx,
		authorPosts,
	)
	return &types.MsgCreateAuthorPostsResponse{}, nil
}

func (k msgServer) UpdateAuthorPosts(goCtx context.Context, msg *types.MsgUpdateAuthorPosts) (*types.MsgUpdateAuthorPostsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetAuthorPosts(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var authorPosts = types.AuthorPosts{
		Creator: msg.Creator,
		Index:   msg.Index,
		PostIds: msg.Posts,
	}

	k.SetAuthorPosts(ctx, authorPosts)

	return &types.MsgUpdateAuthorPostsResponse{}, nil
}

func (k msgServer) DeleteAuthorPosts(goCtx context.Context, msg *types.MsgDeleteAuthorPosts) (*types.MsgDeleteAuthorPostsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetAuthorPosts(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveAuthorPosts(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteAuthorPostsResponse{}, nil
}
