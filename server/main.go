package main

import (
	"fmt"
	"net"

	gH "github.com/ariefsn/go-grpc/server/app/todo/delivery/grpc"
	"github.com/ariefsn/go-grpc/server/app/todo/repository/mongo"
	"github.com/ariefsn/go-grpc/server/app/todo/service"
	"github.com/ariefsn/go-grpc/server/common"
	"github.com/ariefsn/go-grpc/server/domain"
	"github.com/ariefsn/go-grpc/server/helper"
	"github.com/ariefsn/go-grpc/server/logger"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func init() {
	helper.InitEnv()
	logger.InitLogger()
}

func main() {
	env := helper.Env()

	// Setup db
	dbEnv := env.Mongo
	dbAddress := fmt.Sprintf("mongodb://%s:%s@%s:%s", dbEnv.User, dbEnv.Password, dbEnv.Host, dbEnv.Port)
	client, _ := helper.MongoClient(dbAddress)
	db := client.Database(dbEnv.Db)

	// Setup Repositories
	todoRepo := mongo.NewMongoTodoRepository(db)

	// Setup Services
	todoSvc := service.NewTodoService(todoRepo)

	// Setup Handler
	todoHdl := gH.NewTodoDelivery(todoSvc)

	// Setup Grpc
	srv := grpc.NewServer()

	domain.RegisterTodoHandlerServer(srv, todoHdl)

	reflection.Register(srv)

	addr := fmt.Sprintf("%s:%s", env.App.Host, env.App.Port)

	logger.Info("server starting at " + addr)

	listen, err := net.Listen("tcp", addr)
	if err != nil {
		logger.Fatal(err, common.M{
			"stack": "net/listen",
		})
	}

	if err := srv.Serve(listen); err != nil {
		logger.Fatal(err, common.M{
			"stack": "grpc/serve",
		})
	}
}
