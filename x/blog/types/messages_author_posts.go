package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateAuthorPosts = "create_author_posts"
	TypeMsgUpdateAuthorPosts = "update_author_posts"
	TypeMsgDeleteAuthorPosts = "delete_author_posts"
)

var _ sdk.Msg = &MsgCreateAuthorPosts{}

func NewMsgCreateAuthorPosts(
	creator string,
	index string,
	posts []uint64,

) *MsgCreateAuthorPosts {
	return &MsgCreateAuthorPosts{
		Creator: creator,
		Index:   index,
		Posts:   posts,
	}
}

func (msg *MsgCreateAuthorPosts) Route() string {
	return RouterKey
}

func (msg *MsgCreateAuthorPosts) Type() string {
	return TypeMsgCreateAuthorPosts
}

func (msg *MsgCreateAuthorPosts) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAuthorPosts) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAuthorPosts) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateAuthorPosts{}

func NewMsgUpdateAuthorPosts(
	creator string,
	index string,
	posts []uint64,

) *MsgUpdateAuthorPosts {
	return &MsgUpdateAuthorPosts{
		Creator: creator,
		Index:   index,
		Posts:   posts,
	}
}

func (msg *MsgUpdateAuthorPosts) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAuthorPosts) Type() string {
	return TypeMsgUpdateAuthorPosts
}

func (msg *MsgUpdateAuthorPosts) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAuthorPosts) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAuthorPosts) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteAuthorPosts{}

func NewMsgDeleteAuthorPosts(
	creator string,
	index string,

) *MsgDeleteAuthorPosts {
	return &MsgDeleteAuthorPosts{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteAuthorPosts) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAuthorPosts) Type() string {
	return TypeMsgDeleteAuthorPosts
}

func (msg *MsgDeleteAuthorPosts) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAuthorPosts) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAuthorPosts) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
