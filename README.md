## Todo gRPC

Simple todo app with gRPC. Build with `Go` and `SolidJS`.

### Stack

- [Go](https://go.dev/)
- [gRPC](https://grpc.io/)
- [SolidJs](https://www.solidjs.com/)
- [Envoy](https://www.envoyproxy.io/)
- [Docker](https://docs.docker.com/)
- [Mongo](https://www.mongodb.com/)

### Tools

- protobuf: `brew install protobuf`
- protoc-gen-go: `go install google.golang.org/protobuf/cmd/protoc-gen-go@latest`
- protoc-gen-go-grpc: `go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest`
- protoc-gen-grpc-web: `brew install protoc-gen-grpc-web`
- [protobuf-ts](https://github.com/timostamm/protobuf-ts)

### How to

- Install deps for server `cd server && go mod tidy`
- Install deps for client `cd client && yarn install`
- To start app run `make up`
- To stop app run `make down`
