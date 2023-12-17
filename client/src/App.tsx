import { For, Show, createEffect, createSignal, type Component } from 'solid-js';

import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { FaSolidCheck, FaSolidCheckToSlot, FaSolidPencil } from 'solid-icons/fa';
import styles from './App.module.css';
import { TodoModel, TodoPayload, TodoPayloadId, TodoPayloadList, TodoPayloadStatus, TodoPayloadUpdate } from './grpc/todo';
import { TodoHandlerClient } from './grpc/todo.client';

interface InputTextProps {
  label: string
  value: string | number
  onChange: (value: string | number) => void
}

const InputText: Component<InputTextProps> = (props) => {
  return (
    <div class="relative h-11 w-full min-w-[200px] mb-4">
      <input
        value={props.value}
        class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        onchange={(e) => props.onChange(e.target.value)}
      />
      <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        { props.label }
      </label>
    </div>
  )
}

interface ITodoItemProps {
  data: TodoModel
  onEdit: () => void
  onCompleted: () => void
  onNotCompleted: () => void
}

const TodoItem: Component<ITodoItemProps> = ({ data, onEdit, onCompleted, onNotCompleted }) => {
  return (
    <div class='relative p-2 border border-green-400 mb-2 group hover:border-transparent hover:bg-green-400 hover:text-white hover:font-bold hover:cursor-pointer'>
      <Show when={!data.isCompleted} fallback={<span class="absolute left-2 top-2 bg-green-400 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded group-hover:bg-white group-hover:text-green-400">Completed</span>
}>
        <FaSolidPencil class='absolute right-2 top-2 text-green-500 group-hover:text-white' onclick={onEdit} />
      </Show>

      <Show when={data.isCompleted} fallback={<FaSolidCheck class='absolute right-2 bottom-2 text-green-500 group-hover:text-white' onclick={onCompleted} title='Set to completed' />}>
        <FaSolidCheckToSlot class='absolute right-2 bottom-2 text-green-500 group-hover:text-white' onclick={onNotCompleted} title='Set to in progress' />
      </Show>

      <div>
        { data.title }
      </div>
      <div>
        { data.description }
      </div>
    </div>
  )
}

const App: Component = () => {
  const todoClient = new TodoHandlerClient(new GrpcWebFetchTransport({
    baseUrl: 'http://localhost:8080'
  }))

  const [todos, setTodos] = createSignal<TodoModel[]>([])
  const [total, setTotal] = createSignal(0)

  const newTodo:TodoModel = {
    id: '',
    title: '',
    description: '',
    isCompleted: false,
    createdAt: '',
    updatedAt: ''
  }
  const [todo, setTodo] = createSignal<TodoModel>(newTodo)

  const svc = {
    async create(title: string, description: string) {
      const payload: TodoPayload = {
        title,
        description
      }
      try {
        const res = await todoClient.create(payload)
        setTodo(newTodo)
        await this.gets()
      } catch (error) {
        console.log(error)
      }
    },
    async update(payload: TodoPayloadUpdate) {
      try {
        const res = await todoClient.update(payload)
        setTodo(newTodo)
        await this.gets()
      } catch (error) {
        console.log(error)
      }
    },
    async updateStatus(payload: TodoPayloadStatus) {
      try {
        const res = await todoClient.updateStatus(payload)
        await this.gets()
      } catch (error) {
        console.log(error)
      }
    },
    async delete(payload: TodoPayloadId) {
      try {
        const res = await todoClient.delete(payload)
        await this.gets()
      } catch (error) {
        console.log(error)
      }
    },
    async gets() {
      const payload: TodoPayloadList = {}
      try {
        const res = await todoClient.gets(payload)
        if (res.response.success) {
          setTodos(res.response.data?.items ?? [])
          setTotal(res.response.data?.total ?? 0)
        }
      } catch (error) {
        console.log(error)
      }
    },
  }

  createEffect(() => {
    svc.gets()
  })

  return (
    <div class='flex w-full justify-center'>
      <div class={styles.App + ' w-1/3 mt-10'}>
        <InputText label='Title' value={todo().title} onChange={(e) => setTodo({...todo(), title: e.toString()})} />
        <InputText label='Description' value={todo().description} onChange={(e) => setTodo({...todo(), description: e.toString()})} />

        <Show when={todo().id !== ''} fallback={
          <button
            class="mt-6 block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            onclick={() => {
              svc.create(todo().title, todo().description)
            }}
          >
            Save
          </button>
        }>
          <div class='flex justify-between mt-6'>
            <button
              class="w-1/3 select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onclick={() => {
                svc.update({
                  ...todo()
                })
              }}
            >
              Update
            </button>
            <button
              class="w-1/3 select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
              onclick={() => {
                setTodo(newTodo)
              }}
            >
              Cancel
            </button>
          </div>
        </Show>

        <div class='mt-10'>
          <For each={todos()}>
            {
              (item, i) => <TodoItem
                data={item}
                onEdit={() => {
                  setTodo(item)
                }}
                onCompleted={() => {
                  svc.updateStatus({
                    id: item.id,
                    isCompleted: true
                  })
                  if (item.id === todo().id) {
                    setTodo(newTodo)
                  }
                }}
                onNotCompleted={() => {
                  svc.updateStatus({
                    id: item.id,
                    isCompleted: false
                  })
                }}
              />
            }
          </For>
        </div>
      </div>
    </div>
  );
};

export default App;
