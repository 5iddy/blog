package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// AuthorPostsKeyPrefix is the prefix to retrieve all AuthorPosts
	AuthorPostsKeyPrefix = "AuthorPosts/value/"
)

// AuthorPostsKey returns the store key to retrieve a AuthorPosts from the index fields
func AuthorPostsKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
