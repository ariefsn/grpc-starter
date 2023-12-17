package grpc

import (
	"context"

	"github.com/ariefsn/go-grpc/server/common"
	"github.com/ariefsn/go-grpc/server/domain"
)

type todoDelivery struct {
	todoService domain.TodoService
	domain.UnimplementedTodoHandlerServer
}

// Create implements domain.TodoHandlerServer.
func (a *todoDelivery) Create(ctx context.Context, payload *domain.TodoPayload) (*domain.TodoResponseSingle, error) {
	res, err := a.todoService.Create(ctx, &domain.TodoDto{
		Title:       payload.Title,
		Description: payload.Description,
	})

	if err != nil {
		return a.responseErrorSingle(err), nil
	}

	return a.responseOkSingle(res.ToPbModel()), nil
}

// Delete implements domain.TodoHandlerServer.
func (a *todoDelivery) Delete(ctx context.Context, payload *domain.TodoPayloadId) (*domain.TodoResponseSingle, error) {
	res, err := a.todoService.GetByID(ctx, payload.Id)
	if err != nil {
		return a.responseErrorSingle(err), nil
	}

	err = a.todoService.Delete(ctx, payload.Id)
	if err != nil {
		return a.responseErrorSingle(err), nil
	}

	return a.responseOkSingle(res.ToPbModel()), nil
}

// Get implements domain.TodoHandlerServer.
func (a *todoDelivery) Get(ctx context.Context, payload *domain.TodoPayloadId) (*domain.TodoResponseSingle, error) {
	res, err := a.todoService.GetByID(ctx, payload.Id)
	if err != nil {
		return a.responseErrorSingle(err), nil
	}

	return a.responseOkSingle(res.ToPbModel()), nil
}

// Gets implements domain.TodoHandlerServer.
func (a *todoDelivery) Gets(ctx context.Context, payload *domain.TodoPayloadList) (*domain.TodoResponseMultiple, error) {
	limit := int64(10)
	if payload.GetLimit() > 0 {
		limit = payload.GetLimit()
	}

	filter := common.M{}

	if payload.GetTitle() != "" {
		filter["title"] = payload.GetTitle()
	}

	if payload.GetDescription() != "" {
		filter["description"] = payload.GetDescription()
	}

	if payload.IsCompleted != nil {
		filter["isCompleted"] = payload.GetIsCompleted()
	}

	res, total, err := a.todoService.Get(ctx, filter, payload.GetSkip(), limit)
	if err != nil {
		return a.responseErrorMultiple(err), nil
	}

	finalRes := []*domain.TodoModel{}

	for _, v := range res {
		finalRes = append(finalRes, v.ToPbModel())
	}

	return a.responseOkMultiple(&domain.TodoResponseMultipleData{
		Total: float64(total),
		Items: finalRes,
	}), nil
}

// Update implements domain.TodoHandlerServer.
func (a *todoDelivery) Update(ctx context.Context, payload *domain.TodoPayloadUpdate) (*domain.TodoResponseSingle, error) {
	res, err := a.todoService.Update(ctx, payload.Id, &domain.TodoDto{
		Title:       payload.Title,
		Description: payload.Description,
	})
	if err != nil {
		return a.responseErrorSingle(err), nil
	}

	return a.responseOkSingle(res.ToPbModel()), nil
}

// UpdateStatus implements domain.TodoHandlerServer.
func (a *todoDelivery) UpdateStatus(ctx context.Context, payload *domain.TodoPayloadStatus) (*domain.TodoResponseSingle, error) {
	res, err := a.todoService.UpdateStatus(ctx, payload.Id, payload.IsCompleted)
	if err != nil {
		return a.responseErrorSingle(err), nil
	}

	return a.responseOkSingle(res.ToPbModel()), nil
}

func (s *todoDelivery) responseErrorSingle(err error) *domain.TodoResponseSingle {
	return &domain.TodoResponseSingle{
		Data:    nil,
		Success: false,
		Message: err.Error(),
	}
}

func (s *todoDelivery) responseErrorMultiple(err error) *domain.TodoResponseMultiple {
	return &domain.TodoResponseMultiple{
		Data:    nil,
		Success: false,
		Message: err.Error(),
	}
}

func (s *todoDelivery) responseOkSingle(data *domain.TodoModel) *domain.TodoResponseSingle {
	return &domain.TodoResponseSingle{
		Data:    data,
		Success: true,
		Message: "",
	}
}

func (s *todoDelivery) responseOkMultiple(data *domain.TodoResponseMultipleData) *domain.TodoResponseMultiple {
	return &domain.TodoResponseMultiple{
		Data:    data,
		Success: true,
		Message: "",
	}
}

func NewTodoDelivery(svc domain.TodoService) domain.TodoHandlerServer {
	return &todoDelivery{
		todoService: svc,
	}
}
