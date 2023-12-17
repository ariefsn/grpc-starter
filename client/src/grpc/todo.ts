// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "todo.proto" (package "domain", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message domain.TodoPayload
 */
export interface TodoPayload {
    /**
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 2;
     */
    description: string;
}
/**
 * @generated from protobuf message domain.TodoPayloadStatus
 */
export interface TodoPayloadStatus {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: bool isCompleted = 2;
     */
    isCompleted: boolean;
}
/**
 * @generated from protobuf message domain.TodoPayloadUpdate
 */
export interface TodoPayloadUpdate {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string title = 2;
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * @generated from protobuf field: bool isCompleted = 4;
     */
    isCompleted: boolean;
}
/**
 * @generated from protobuf message domain.TodoPayloadId
 */
export interface TodoPayloadId {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message domain.TodoPayloadList
 */
export interface TodoPayloadList {
    /**
     * @generated from protobuf field: optional string title = 1;
     */
    title?: string;
    /**
     * @generated from protobuf field: optional string description = 2;
     */
    description?: string;
    /**
     * @generated from protobuf field: optional bool isCompleted = 3;
     */
    isCompleted?: boolean;
    /**
     * @generated from protobuf field: optional int64 skip = 4;
     */
    skip?: bigint;
    /**
     * @generated from protobuf field: optional int64 limit = 5;
     */
    limit?: bigint;
}
/**
 * @generated from protobuf message domain.TodoModel
 */
export interface TodoModel {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string title = 2;
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 3;
     */
    description: string;
    /**
     * @generated from protobuf field: bool isCompleted = 4;
     */
    isCompleted: boolean;
    /**
     * @generated from protobuf field: string createdAt = 5;
     */
    createdAt: string;
    /**
     * @generated from protobuf field: string updatedAt = 6;
     */
    updatedAt: string;
}
/**
 * @generated from protobuf message domain.TodoResponseSingle
 */
export interface TodoResponseSingle {
    /**
     * @generated from protobuf field: domain.TodoModel data = 1;
     */
    data?: TodoModel;
    /**
     * @generated from protobuf field: bool success = 2;
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 3;
     */
    message: string;
}
/**
 * @generated from protobuf message domain.TodoResponseMultipleData
 */
export interface TodoResponseMultipleData {
    /**
     * @generated from protobuf field: double total = 1;
     */
    total: number;
    /**
     * @generated from protobuf field: repeated domain.TodoModel items = 2;
     */
    items: TodoModel[];
}
/**
 * @generated from protobuf message domain.TodoResponseMultiple
 */
export interface TodoResponseMultiple {
    /**
     * @generated from protobuf field: domain.TodoResponseMultipleData data = 1;
     */
    data?: TodoResponseMultipleData;
    /**
     * @generated from protobuf field: bool success = 2;
     */
    success: boolean;
    /**
     * @generated from protobuf field: string message = 3;
     */
    message: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class TodoPayload$Type extends MessageType<TodoPayload> {
    constructor() {
        super("domain.TodoPayload", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TodoPayload>): TodoPayload {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.title = "";
        message.description = "";
        if (value !== undefined)
            reflectionMergePartial<TodoPayload>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TodoPayload): TodoPayload {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TodoPayload, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message domain.TodoPayload
 */
export const TodoPayload = new TodoPayload$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TodoPayloadStatus$Type extends MessageType<TodoPayloadStatus> {
    constructor() {
        super("domain.TodoPayloadStatus", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "isCompleted", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<TodoPayloadStatus>): TodoPayloadStatus {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.isCompleted = false;
        if (value !== undefined)
            reflectionMergePartial<TodoPayloadStatus>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TodoPayloadStatus): TodoPayloadStatus {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* bool isCompleted */ 2:
                    message.isCompleted = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TodoPayloadStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* bool isCompleted = 2; */
        if (message.isCompleted !== false)
            writer.tag(2, WireType.Varint).bool(message.isCompleted);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message domain.TodoPayloadStatus
 */
export const TodoPayloadStatus = new TodoPayloadStatus$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TodoPayloadUpdate$Type extends MessageType<TodoPayloadUpdate> {
    constructor() {
        super("domain.TodoPayloadUpdate", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "isCompleted", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<TodoPayloadUpdate>): TodoPayloadUpdate {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.title = "";
        message.description = "";
        message.isCompleted = false;
        if (value !== undefined)
            reflectionMergePartial<TodoPayloadUpdate>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TodoPayloadUpdate): TodoPayloadUpdate {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string title */ 2:
                    message.title = reader.string();
                    break;
                case /* string description */ 3:
                    message.description = reader.string();
                    break;
                case /* bool isCompleted */ 4:
                    message.isCompleted = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TodoPayloadUpdate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string title = 2; */
        if (message.title !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.title);
        /* string description = 3; */
        if (message.description !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.description);
        /* bool isCompleted = 4; */
        if (message.isCompleted !== false)
            writer.tag(4, WireType.Varint).bool(message.isCompleted);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message domain.TodoPayloadUpdate
 */
export const TodoPayloadUpdate = new TodoPayloadUpdate$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TodoPayloadId$Type extends MessageType<TodoPayloadId> {
    constructor() {
        super("domain.TodoPayloadId", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TodoPayloadId>): TodoPayloadId {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        if (value !== undefined)
            reflectionMergePartial<TodoPayloadId>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TodoPayloadId): TodoPayloadId {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TodoPayloadId, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message domain.TodoPayloadId
 */
export const TodoPayloadId = new TodoPayloadId$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TodoPayloadList$Type extends MessageType<TodoPayloadList> {
    constructor() {
        super("domain.TodoPayloadList", [
            { no: 1, name: "title", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "isCompleted", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "skip", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "limit", kind: "scalar", opt: true, T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<TodoPayloadList>): TodoPayloadList {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<TodoPayloadList>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TodoPayloadList): TodoPayloadList {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string title */ 1:
                    message.title = reader.string();
                    break;
                case /* optional string description */ 2:
                    message.description = reader.string();
                    break;
                case /* optional bool isCompleted */ 3:
                    message.isCompleted = reader.bool();
                    break;
                case /* optional int64 skip */ 4:
                    message.skip = reader.int64().toBigInt();
                    break;
                case /* optional int64 limit */ 5:
                    message.limit = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TodoPayloadList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string title = 1; */
        if (message.title !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.title);
        /* optional string description = 2; */
        if (message.description !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.description);
        /* optional bool isCompleted = 3; */
        if (message.isCompleted !== undefined)
            writer.tag(3, WireType.Varint).bool(message.isCompleted);
        /* optional int64 skip = 4; */
        if (message.skip !== undefined)
            writer.tag(4, WireType.Varint).int64(message.skip);
        /* optional int64 limit = 5; */
        if (message.limit !== undefined)
            writer.tag(5, WireType.Varint).int64(message.limit);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message domain.TodoPayloadList
 */
export const TodoPayloadList = new TodoPayloadList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TodoModel$Type extends MessageType<TodoModel> {
    constructor() {
        super("domain.TodoModel", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "isCompleted", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "createdAt", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "updatedAt", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TodoModel>): TodoModel {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.title = "";
        message.description = "";
        message.isCompleted = false;
        message.createdAt = "";
        message.updatedAt = "";
        if (value !== undefined)
            reflectionMergePartial<TodoModel>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TodoModel): TodoModel {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string title */ 2:
                    message.title = reader.string();
                    break;
                case /* string description */ 3:
                    message.description = reader.string();
                    break;
                case /* bool isCompleted */ 4:
                    message.isCompleted = reader.bool();
                    break;
                case /* string createdAt */ 5:
                    message.createdAt = reader.string();
                    break;
                case /* string updatedAt */ 6:
                    message.updatedAt = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TodoModel, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string title = 2; */
        if (message.title !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.title);
        /* string description = 3; */
        if (message.description !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.description);
        /* bool isCompleted = 4; */
        if (message.isCompleted !== false)
            writer.tag(4, WireType.Varint).bool(message.isCompleted);
        /* string createdAt = 5; */
        if (message.createdAt !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.createdAt);
        /* string updatedAt = 6; */
        if (message.updatedAt !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.updatedAt);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message domain.TodoModel
 */
export const TodoModel = new TodoModel$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TodoResponseSingle$Type extends MessageType<TodoResponseSingle> {
    constructor() {
        super("domain.TodoResponseSingle", [
            { no: 1, name: "data", kind: "message", T: () => TodoModel },
            { no: 2, name: "success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TodoResponseSingle>): TodoResponseSingle {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.success = false;
        message.message = "";
        if (value !== undefined)
            reflectionMergePartial<TodoResponseSingle>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TodoResponseSingle): TodoResponseSingle {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* domain.TodoModel data */ 1:
                    message.data = TodoModel.internalBinaryRead(reader, reader.uint32(), options, message.data);
                    break;
                case /* bool success */ 2:
                    message.success = reader.bool();
                    break;
                case /* string message */ 3:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TodoResponseSingle, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* domain.TodoModel data = 1; */
        if (message.data)
            TodoModel.internalBinaryWrite(message.data, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool success = 2; */
        if (message.success !== false)
            writer.tag(2, WireType.Varint).bool(message.success);
        /* string message = 3; */
        if (message.message !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message domain.TodoResponseSingle
 */
export const TodoResponseSingle = new TodoResponseSingle$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TodoResponseMultipleData$Type extends MessageType<TodoResponseMultipleData> {
    constructor() {
        super("domain.TodoResponseMultipleData", [
            { no: 1, name: "total", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 2, name: "items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TodoModel }
        ]);
    }
    create(value?: PartialMessage<TodoResponseMultipleData>): TodoResponseMultipleData {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.total = 0;
        message.items = [];
        if (value !== undefined)
            reflectionMergePartial<TodoResponseMultipleData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TodoResponseMultipleData): TodoResponseMultipleData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double total */ 1:
                    message.total = reader.double();
                    break;
                case /* repeated domain.TodoModel items */ 2:
                    message.items.push(TodoModel.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TodoResponseMultipleData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double total = 1; */
        if (message.total !== 0)
            writer.tag(1, WireType.Bit64).double(message.total);
        /* repeated domain.TodoModel items = 2; */
        for (let i = 0; i < message.items.length; i++)
            TodoModel.internalBinaryWrite(message.items[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message domain.TodoResponseMultipleData
 */
export const TodoResponseMultipleData = new TodoResponseMultipleData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TodoResponseMultiple$Type extends MessageType<TodoResponseMultiple> {
    constructor() {
        super("domain.TodoResponseMultiple", [
            { no: 1, name: "data", kind: "message", T: () => TodoResponseMultipleData },
            { no: 2, name: "success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TodoResponseMultiple>): TodoResponseMultiple {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.success = false;
        message.message = "";
        if (value !== undefined)
            reflectionMergePartial<TodoResponseMultiple>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TodoResponseMultiple): TodoResponseMultiple {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* domain.TodoResponseMultipleData data */ 1:
                    message.data = TodoResponseMultipleData.internalBinaryRead(reader, reader.uint32(), options, message.data);
                    break;
                case /* bool success */ 2:
                    message.success = reader.bool();
                    break;
                case /* string message */ 3:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TodoResponseMultiple, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* domain.TodoResponseMultipleData data = 1; */
        if (message.data)
            TodoResponseMultipleData.internalBinaryWrite(message.data, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool success = 2; */
        if (message.success !== false)
            writer.tag(2, WireType.Varint).bool(message.success);
        /* string message = 3; */
        if (message.message !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message domain.TodoResponseMultiple
 */
export const TodoResponseMultiple = new TodoResponseMultiple$Type();
/**
 * @generated ServiceType for protobuf service domain.TodoHandler
 */
export const TodoHandler = new ServiceType("domain.TodoHandler", [
    { name: "Gets", options: {}, I: TodoPayloadList, O: TodoResponseMultiple },
    { name: "Get", options: {}, I: TodoPayloadId, O: TodoResponseSingle },
    { name: "Create", options: {}, I: TodoPayload, O: TodoResponseSingle },
    { name: "Update", options: {}, I: TodoPayloadUpdate, O: TodoResponseSingle },
    { name: "UpdateStatus", options: {}, I: TodoPayloadStatus, O: TodoResponseSingle },
    { name: "Delete", options: {}, I: TodoPayloadId, O: TodoResponseSingle }
]);
