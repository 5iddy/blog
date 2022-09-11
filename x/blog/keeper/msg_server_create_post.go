package keeper

import (
	"context"

	"blog/x/blog/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreatePost(goCtx context.Context, msg *types.MsgCreatePost) (*types.MsgCreatePostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	var post = types.Post{
		Creator: msg.Creator,
		Title:   msg.Title,
		Content: msg.Content,
	}

	id := k.AppendPost(ctx, post)

	if err := k.AppendPostIdToAuthorPosts(ctx, msg.Creator, id); err != nil {
		return nil, err
	}

	return &types.MsgCreatePostResponse{Id: id}, nil
}
