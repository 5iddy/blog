package types

import (
	"testing"

	"blog/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateAuthorPosts_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateAuthorPosts
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateAuthorPosts{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateAuthorPosts{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateAuthorPosts_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateAuthorPosts
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateAuthorPosts{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateAuthorPosts{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteAuthorPosts_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteAuthorPosts
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteAuthorPosts{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteAuthorPosts{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
