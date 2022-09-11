// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: blog/author_posts.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type AuthorPosts struct {
	Index   string   `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	PostIds []uint64 `protobuf:"varint,2,rep,packed,name=postIds,proto3" json:"postIds,omitempty"`
	Creator string   `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
}

func (m *AuthorPosts) Reset()         { *m = AuthorPosts{} }
func (m *AuthorPosts) String() string { return proto.CompactTextString(m) }
func (*AuthorPosts) ProtoMessage()    {}
func (*AuthorPosts) Descriptor() ([]byte, []int) {
	return fileDescriptor_3895573fddaf11d3, []int{0}
}
func (m *AuthorPosts) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *AuthorPosts) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_AuthorPosts.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *AuthorPosts) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AuthorPosts.Merge(m, src)
}
func (m *AuthorPosts) XXX_Size() int {
	return m.Size()
}
func (m *AuthorPosts) XXX_DiscardUnknown() {
	xxx_messageInfo_AuthorPosts.DiscardUnknown(m)
}

var xxx_messageInfo_AuthorPosts proto.InternalMessageInfo

func (m *AuthorPosts) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

func (m *AuthorPosts) GetPostIds() []uint64 {
	if m != nil {
		return m.PostIds
	}
	return nil
}

func (m *AuthorPosts) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func init() {
	proto.RegisterType((*AuthorPosts)(nil), "blog.blog.AuthorPosts")
}

func init() { proto.RegisterFile("blog/author_posts.proto", fileDescriptor_3895573fddaf11d3) }

var fileDescriptor_3895573fddaf11d3 = []byte{
	// 161 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4f, 0xca, 0xc9, 0x4f,
	0xd7, 0x4f, 0x2c, 0x2d, 0xc9, 0xc8, 0x2f, 0x8a, 0x2f, 0xc8, 0x2f, 0x2e, 0x29, 0xd6, 0x2b, 0x28,
	0xca, 0x2f, 0xc9, 0x17, 0xe2, 0x04, 0x49, 0xe8, 0x81, 0x08, 0xa5, 0x70, 0x2e, 0x6e, 0x47, 0xb0,
	0x82, 0x00, 0x90, 0xbc, 0x90, 0x08, 0x17, 0x6b, 0x66, 0x5e, 0x4a, 0x6a, 0x85, 0x04, 0xa3, 0x02,
	0xa3, 0x06, 0x67, 0x10, 0x84, 0x23, 0x24, 0xc1, 0xc5, 0x0e, 0xd2, 0xee, 0x99, 0x52, 0x2c, 0xc1,
	0xa4, 0xc0, 0xac, 0xc1, 0x12, 0x04, 0xe3, 0x82, 0x64, 0x92, 0x8b, 0x52, 0x13, 0x4b, 0xf2, 0x8b,
	0x24, 0x98, 0xc1, 0x3a, 0x60, 0x5c, 0x27, 0xed, 0x13, 0x8f, 0xe4, 0x18, 0x2f, 0x3c, 0x92, 0x63,
	0x7c, 0xf0, 0x48, 0x8e, 0x71, 0xc2, 0x63, 0x39, 0x86, 0x0b, 0x8f, 0xe5, 0x18, 0x6e, 0x3c, 0x96,
	0x63, 0x88, 0x12, 0x04, 0x3b, 0xab, 0x42, 0x1f, 0x4c, 0x95, 0x54, 0x16, 0xa4, 0x16, 0x27, 0xb1,
	0x81, 0xdd, 0x65, 0x0c, 0x08, 0x00, 0x00, 0xff, 0xff, 0x6a, 0x6d, 0x4a, 0x4d, 0xb2, 0x00, 0x00,
	0x00,
}

func (m *AuthorPosts) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *AuthorPosts) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *AuthorPosts) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintAuthorPosts(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.PostIds) > 0 {
		dAtA2 := make([]byte, len(m.PostIds)*10)
		var j1 int
		for _, num := range m.PostIds {
			for num >= 1<<7 {
				dAtA2[j1] = uint8(uint64(num)&0x7f | 0x80)
				num >>= 7
				j1++
			}
			dAtA2[j1] = uint8(num)
			j1++
		}
		i -= j1
		copy(dAtA[i:], dAtA2[:j1])
		i = encodeVarintAuthorPosts(dAtA, i, uint64(j1))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Index) > 0 {
		i -= len(m.Index)
		copy(dAtA[i:], m.Index)
		i = encodeVarintAuthorPosts(dAtA, i, uint64(len(m.Index)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAuthorPosts(dAtA []byte, offset int, v uint64) int {
	offset -= sovAuthorPosts(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *AuthorPosts) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Index)
	if l > 0 {
		n += 1 + l + sovAuthorPosts(uint64(l))
	}
	if len(m.PostIds) > 0 {
		l = 0
		for _, e := range m.PostIds {
			l += sovAuthorPosts(uint64(e))
		}
		n += 1 + sovAuthorPosts(uint64(l)) + l
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovAuthorPosts(uint64(l))
	}
	return n
}

func sovAuthorPosts(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAuthorPosts(x uint64) (n int) {
	return sovAuthorPosts(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *AuthorPosts) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAuthorPosts
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: AuthorPosts: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: AuthorPosts: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthorPosts
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAuthorPosts
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuthorPosts
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Index = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType == 0 {
				var v uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowAuthorPosts
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				m.PostIds = append(m.PostIds, v)
			} else if wireType == 2 {
				var packedLen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowAuthorPosts
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					packedLen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if packedLen < 0 {
					return ErrInvalidLengthAuthorPosts
				}
				postIndex := iNdEx + packedLen
				if postIndex < 0 {
					return ErrInvalidLengthAuthorPosts
				}
				if postIndex > l {
					return io.ErrUnexpectedEOF
				}
				var elementCount int
				var count int
				for _, integer := range dAtA[iNdEx:postIndex] {
					if integer < 128 {
						count++
					}
				}
				elementCount = count
				if elementCount != 0 && len(m.PostIds) == 0 {
					m.PostIds = make([]uint64, 0, elementCount)
				}
				for iNdEx < postIndex {
					var v uint64
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowAuthorPosts
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						v |= uint64(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					m.PostIds = append(m.PostIds, v)
				}
			} else {
				return fmt.Errorf("proto: wrong wireType = %d for field PostIds", wireType)
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAuthorPosts
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthAuthorPosts
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAuthorPosts
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAuthorPosts(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAuthorPosts
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipAuthorPosts(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAuthorPosts
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAuthorPosts
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowAuthorPosts
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthAuthorPosts
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAuthorPosts
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAuthorPosts
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAuthorPosts        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAuthorPosts          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAuthorPosts = fmt.Errorf("proto: unexpected end of group")
)
