/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../blog/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Post } from "../blog/post";
import { AuthorPosts } from "../blog/author_posts";

export const protobufPackage = "blog.blog";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryPostsRequest {
  /** Adding pagination to request */
  pagination: PageRequest | undefined;
}

export interface QueryPostsResponse {
  /** Returning a list of posts */
  Post: Post[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryGetAuthorPostsRequest {
  index: string;
  pagination: PageRequest | undefined;
}

export interface QueryGetAuthorPostsResponse {
  authorPosts: AuthorPosts | undefined;
}

export interface QueryAllAuthorPostsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAuthorPostsResponse {
  authorPosts: AuthorPosts[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryPostsRequest: object = {};

export const QueryPostsRequest = {
  encode(message: QueryPostsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPostsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPostsRequest } as QueryPostsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPostsRequest {
    const message = { ...baseQueryPostsRequest } as QueryPostsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryPostsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPostsRequest>): QueryPostsRequest {
    const message = { ...baseQueryPostsRequest } as QueryPostsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryPostsResponse: object = {};

export const QueryPostsResponse = {
  encode(
    message: QueryPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryPostsResponse } as QueryPostsResponse;
    message.Post = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPostsResponse {
    const message = { ...baseQueryPostsResponse } as QueryPostsResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryPostsResponse): unknown {
    const obj: any = {};
    if (message.Post) {
      obj.Post = message.Post.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.Post = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPostsResponse>): QueryPostsResponse {
    const message = { ...baseQueryPostsResponse } as QueryPostsResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAuthorPostsRequest: object = { index: "" };

export const QueryGetAuthorPostsRequest = {
  encode(
    message: QueryGetAuthorPostsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuthorPostsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthorPostsRequest,
    } as QueryGetAuthorPostsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuthorPostsRequest {
    const message = {
      ...baseQueryGetAuthorPostsRequest,
    } as QueryGetAuthorPostsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAuthorPostsRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuthorPostsRequest>
  ): QueryGetAuthorPostsRequest {
    const message = {
      ...baseQueryGetAuthorPostsRequest,
    } as QueryGetAuthorPostsRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAuthorPostsResponse: object = {};

export const QueryGetAuthorPostsResponse = {
  encode(
    message: QueryGetAuthorPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.authorPosts !== undefined) {
      AuthorPosts.encode(
        message.authorPosts,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuthorPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthorPostsResponse,
    } as QueryGetAuthorPostsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorPosts = AuthorPosts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuthorPostsResponse {
    const message = {
      ...baseQueryGetAuthorPostsResponse,
    } as QueryGetAuthorPostsResponse;
    if (object.authorPosts !== undefined && object.authorPosts !== null) {
      message.authorPosts = AuthorPosts.fromJSON(object.authorPosts);
    } else {
      message.authorPosts = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAuthorPostsResponse): unknown {
    const obj: any = {};
    message.authorPosts !== undefined &&
      (obj.authorPosts = message.authorPosts
        ? AuthorPosts.toJSON(message.authorPosts)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuthorPostsResponse>
  ): QueryGetAuthorPostsResponse {
    const message = {
      ...baseQueryGetAuthorPostsResponse,
    } as QueryGetAuthorPostsResponse;
    if (object.authorPosts !== undefined && object.authorPosts !== null) {
      message.authorPosts = AuthorPosts.fromPartial(object.authorPosts);
    } else {
      message.authorPosts = undefined;
    }
    return message;
  },
};

const baseQueryAllAuthorPostsRequest: object = {};

export const QueryAllAuthorPostsRequest = {
  encode(
    message: QueryAllAuthorPostsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuthorPostsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuthorPostsRequest,
    } as QueryAllAuthorPostsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuthorPostsRequest {
    const message = {
      ...baseQueryAllAuthorPostsRequest,
    } as QueryAllAuthorPostsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuthorPostsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuthorPostsRequest>
  ): QueryAllAuthorPostsRequest {
    const message = {
      ...baseQueryAllAuthorPostsRequest,
    } as QueryAllAuthorPostsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAuthorPostsResponse: object = {};

export const QueryAllAuthorPostsResponse = {
  encode(
    message: QueryAllAuthorPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.authorPosts) {
      AuthorPosts.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuthorPostsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuthorPostsResponse,
    } as QueryAllAuthorPostsResponse;
    message.authorPosts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorPosts.push(AuthorPosts.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuthorPostsResponse {
    const message = {
      ...baseQueryAllAuthorPostsResponse,
    } as QueryAllAuthorPostsResponse;
    message.authorPosts = [];
    if (object.authorPosts !== undefined && object.authorPosts !== null) {
      for (const e of object.authorPosts) {
        message.authorPosts.push(AuthorPosts.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuthorPostsResponse): unknown {
    const obj: any = {};
    if (message.authorPosts) {
      obj.authorPosts = message.authorPosts.map((e) =>
        e ? AuthorPosts.toJSON(e) : undefined
      );
    } else {
      obj.authorPosts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuthorPostsResponse>
  ): QueryAllAuthorPostsResponse {
    const message = {
      ...baseQueryAllAuthorPostsResponse,
    } as QueryAllAuthorPostsResponse;
    message.authorPosts = [];
    if (object.authorPosts !== undefined && object.authorPosts !== null) {
      for (const e of object.authorPosts) {
        message.authorPosts.push(AuthorPosts.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Posts items. */
  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse>;
  /** Queries a AuthorPosts by index. */
  AuthorPosts(
    request: QueryGetAuthorPostsRequest
  ): Promise<QueryGetAuthorPostsResponse>;
  /** Queries a list of AuthorPosts items. */
  AuthorPostsAll(
    request: QueryAllAuthorPostsRequest
  ): Promise<QueryAllAuthorPostsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse> {
    const data = QueryPostsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "Posts", data);
    return promise.then((data) => QueryPostsResponse.decode(new Reader(data)));
  }

  AuthorPosts(
    request: QueryGetAuthorPostsRequest
  ): Promise<QueryGetAuthorPostsResponse> {
    const data = QueryGetAuthorPostsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "AuthorPosts", data);
    return promise.then((data) =>
      QueryGetAuthorPostsResponse.decode(new Reader(data))
    );
  }

  AuthorPostsAll(
    request: QueryAllAuthorPostsRequest
  ): Promise<QueryAllAuthorPostsResponse> {
    const data = QueryAllAuthorPostsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "AuthorPostsAll", data);
    return promise.then((data) =>
      QueryAllAuthorPostsResponse.decode(new Reader(data))
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
