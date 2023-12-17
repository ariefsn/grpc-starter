proto.generate.server:
	protoc \
		--go_out=./server/domain \
		--go_opt=paths=source_relative \
		--go-grpc_out=./server/domain \
		--go-grpc_opt=paths=source_relative \
		--proto_path=proto \
		proto/todo.proto

proto.generate.client:
	protoc \
		--js_out=import_style=commonjs:./client/src/grpc \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:./client/src/grpc \
		--proto_path=proto \
		proto/todo.proto

proto.generate.client.ts:
	protoc \
		--ts_out=./client/src/grpc \
		--proto_path=proto \
		proto/todo.proto

proto.generate.clientx:
	protoc \
		--js_out=import_style=commonjs:./client/src/grpc \
		--ts_out=./client/src/grpc \
		--ts_opt generate_dependencies \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:./client/src/grpc \
		--proto_path=proto \
		proto/todo.proto

envoy.build:
	docker build -t envoy:go-grpc ./envoy

envoy.run:
	docker run -p 8080:8080 -p 9901:9901 --name envoy-go-grpc -d envoy:go-grpc

up:
	docker compose up --build -d

down:
	docker compose down
