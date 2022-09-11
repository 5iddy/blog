package cli

import (
	"blog/x/blog/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"strings"
)

func CmdCreateAuthorPosts() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-author-posts [index] [posts]",
		Short: "Create a new authorPosts",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argCastPosts := strings.Split(args[1], listSeparator)
			argPosts := make([]uint64, len(argCastPosts))
			for i, arg := range argCastPosts {
				value, err := cast.ToUint64E(arg)
				if err != nil {
					return err
				}
				argPosts[i] = value
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAuthorPosts(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argPosts,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateAuthorPosts() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-author-posts [index] [posts]",
		Short: "Update a authorPosts",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argCastPosts := strings.Split(args[1], listSeparator)
			argPosts := make([]uint64, len(argCastPosts))
			for i, arg := range argCastPosts {
				value, err := cast.ToUint64E(arg)
				if err != nil {
					return err
				}
				argPosts[i] = value
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateAuthorPosts(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argPosts,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteAuthorPosts() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-author-posts [index]",
		Short: "Delete a authorPosts",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteAuthorPosts(
				clientCtx.GetFromAddress().String(),
				indexIndex,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
