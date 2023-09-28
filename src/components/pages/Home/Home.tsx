import { Clipboard, Notepad, Trash } from "@phosphor-icons/react";
import { Header } from "../../Header/Header";
import CreateTask from "../../CreateTask/CreateTask";
import * as S from "./style";

import { useState } from "react";

export interface ITask {
  id: string;
  name: string;
  isComplete: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  console.log(tasks);
  const tasksComplete = tasks.filter((item) => {
    return item.isComplete === true;
  });

  function handleDeleteTask(id: string) {
    setTasks((state) => {
      return state.filter((item) => {
        return item.id !== id;
      });
    });
  }
  return (
    <>
      <Header />
      <S.HomeContent>
        <CreateTask setData={setTasks} />
        <S.Content>
          <S.ContentHeader>
            <div>
              Tarefas criadas <span>{tasks.length}</span>
            </div>
            <div className="finish">
              Concluídas{" "}
              <span>
                {tasksComplete.length} de {tasks.length}
              </span>
            </div>
          </S.ContentHeader>
          <S.TaskContainer>
            {tasks.length !== 0 ? (
              tasks.map((task) => (
                <div className="task" key={task.id}>
                  <input
                    onChange={() =>
                      setTasks((state) => {
                        return state.map((item) =>
                          item.id === task.id
                            ? { ...item, isComplete: !item.isComplete }
                            : item
                        );
                      })
                    }
                    id={task.id}
                    type="checkbox"
                  />
                  <label htmlFor={task.id}>
                    {task.isComplete ? <s>{task.name}</s> : <>{task.name}</>}
                  </label>
                  <button onClick={() => handleDeleteTask(task.id)}>
                    <Trash size={18} />
                  </button>
                </div>
              ))
            ) : (
              <S.NoTaskContainer>
                <Notepad size={56} />
                <div>Você ainda não tem tarefas cadastradas</div>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </S.NoTaskContainer>
            )}
          </S.TaskContainer>
        </S.Content>
      </S.HomeContent>
    </>
  );
}
