/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "blog.blog";

export interface MsgCreatePost {
  creator: string;
  title: string;
  content: string;
}

export interface MsgCreatePostResponse {
  id: number;
}

export interface MsgCreateAuthorPosts {
  creator: string;
  index: string;
  posts: number[];
}

export interface MsgCreateAuthorPostsResponse {}

export interface MsgUpdateAuthorPosts {
  creator: string;
  index: string;
  posts: number[];
}

export interface MsgUpdateAuthorPostsResponse {}

export interface MsgDeleteAuthorPosts {
  creator: string;
  index: string;
}

export interface MsgDeleteAuthorPostsResponse {}

const baseMsgCreatePost: object = { creator: "", title: "", content: "" };

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    return message;
  },
};

const baseMsgCreatePostResponse: object = { id: 0 };

export const MsgCreatePostResponse = {
  encode(
    message: MsgCreatePostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePostResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePostResponse>
  ): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateAuthorPosts: object = { creator: "", index: "", posts: 0 };

export const MsgCreateAuthorPosts = {
  encode(
    message: MsgCreateAuthorPosts,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    writer.uint32(26).fork();
    for (const v of message.posts) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAuthorPosts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAuthorPosts } as MsgCreateAuthorPosts;
    message.posts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.posts.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.posts.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuthorPosts {
    const message = { ...baseMsgCreateAuthorPosts } as MsgCreateAuthorPosts;
    message.posts = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateAuthorPosts): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    if (message.posts) {
      obj.posts = message.posts.map((e) => e);
    } else {
      obj.posts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAuthorPosts>): MsgCreateAuthorPosts {
    const message = { ...baseMsgCreateAuthorPosts } as MsgCreateAuthorPosts;
    message.posts = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateAuthorPostsResponse: object = {};

export const MsgCreateAuthorPostsResponse = {
  encode(
    _: MsgCreateAuthorPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateAuthorPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateAuthorPostsResponse,
    } as MsgCreateAuthorPostsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateAuthorPostsResponse {
    const message = {
      ...baseMsgCreateAuthorPostsResponse,
    } as MsgCreateAuthorPostsResponse;
    return message;
  },

  toJSON(_: MsgCreateAuthorPostsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateAuthorPostsResponse>
  ): MsgCreateAuthorPostsResponse {
    const message = {
      ...baseMsgCreateAuthorPostsResponse,
    } as MsgCreateAuthorPostsResponse;
    return message;
  },
};

const baseMsgUpdateAuthorPosts: object = { creator: "", index: "", posts: 0 };

export const MsgUpdateAuthorPosts = {
  encode(
    message: MsgUpdateAuthorPosts,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    writer.uint32(26).fork();
    for (const v of message.posts) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAuthorPosts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAuthorPosts } as MsgUpdateAuthorPosts;
    message.posts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.posts.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.posts.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAuthorPosts {
    const message = { ...baseMsgUpdateAuthorPosts } as MsgUpdateAuthorPosts;
    message.posts = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: MsgUpdateAuthorPosts): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    if (message.posts) {
      obj.posts = message.posts.map((e) => e);
    } else {
      obj.posts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAuthorPosts>): MsgUpdateAuthorPosts {
    const message = { ...baseMsgUpdateAuthorPosts } as MsgUpdateAuthorPosts;
    message.posts = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(e);
      }
    }
    return message;
  },
};

const baseMsgUpdateAuthorPostsResponse: object = {};

export const MsgUpdateAuthorPostsResponse = {
  encode(
    _: MsgUpdateAuthorPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateAuthorPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateAuthorPostsResponse,
    } as MsgUpdateAuthorPostsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateAuthorPostsResponse {
    const message = {
      ...baseMsgUpdateAuthorPostsResponse,
    } as MsgUpdateAuthorPostsResponse;
    return message;
  },

  toJSON(_: MsgUpdateAuthorPostsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateAuthorPostsResponse>
  ): MsgUpdateAuthorPostsResponse {
    const message = {
      ...baseMsgUpdateAuthorPostsResponse,
    } as MsgUpdateAuthorPostsResponse;
    return message;
  },
};

const baseMsgDeleteAuthorPosts: object = { creator: "", index: "" };

export const MsgDeleteAuthorPosts = {
  encode(
    message: MsgDeleteAuthorPosts,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAuthorPosts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAuthorPosts } as MsgDeleteAuthorPosts;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAuthorPosts {
    const message = { ...baseMsgDeleteAuthorPosts } as MsgDeleteAuthorPosts;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteAuthorPosts): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteAuthorPosts>): MsgDeleteAuthorPosts {
    const message = { ...baseMsgDeleteAuthorPosts } as MsgDeleteAuthorPosts;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteAuthorPostsResponse: object = {};

export const MsgDeleteAuthorPostsResponse = {
  encode(
    _: MsgDeleteAuthorPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteAuthorPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteAuthorPostsResponse,
    } as MsgDeleteAuthorPostsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteAuthorPostsResponse {
    const message = {
      ...baseMsgDeleteAuthorPostsResponse,
    } as MsgDeleteAuthorPostsResponse;
    return message;
  },

  toJSON(_: MsgDeleteAuthorPostsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteAuthorPostsResponse>
  ): MsgDeleteAuthorPostsResponse {
    const message = {
      ...baseMsgDeleteAuthorPostsResponse,
    } as MsgDeleteAuthorPostsResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  CreateAuthorPosts(
    request: MsgCreateAuthorPosts
  ): Promise<MsgCreateAuthorPostsResponse>;
  UpdateAuthorPosts(
    request: MsgUpdateAuthorPosts
  ): Promise<MsgUpdateAuthorPostsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteAuthorPosts(
    request: MsgDeleteAuthorPosts
  ): Promise<MsgDeleteAuthorPostsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Msg", "CreatePost", data);
    return promise.then((data) =>
      MsgCreatePostResponse.decode(new Reader(data))
    );
  }

  CreateAuthorPosts(
    request: MsgCreateAuthorPosts
  ): Promise<MsgCreateAuthorPostsResponse> {
    const data = MsgCreateAuthorPosts.encode(request).finish();
    const promise = this.rpc.request(
      "blog.blog.Msg",
      "CreateAuthorPosts",
      data
    );
    return promise.then((data) =>
      MsgCreateAuthorPostsResponse.decode(new Reader(data))
    );
  }

  UpdateAuthorPosts(
    request: MsgUpdateAuthorPosts
  ): Promise<MsgUpdateAuthorPostsResponse> {
    const data = MsgUpdateAuthorPosts.encode(request).finish();
    const promise = this.rpc.request(
      "blog.blog.Msg",
      "UpdateAuthorPosts",
      data
    );
    return promise.then((data) =>
      MsgUpdateAuthorPostsResponse.decode(new Reader(data))
    );
  }

  DeleteAuthorPosts(
    request: MsgDeleteAuthorPosts
  ): Promise<MsgDeleteAuthorPostsResponse> {
    const data = MsgDeleteAuthorPosts.encode(request).finish();
    const promise = this.rpc.request(
      "blog.blog.Msg",
      "DeleteAuthorPosts",
      data
    );
    return promise.then((data) =>
      MsgDeleteAuthorPostsResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
