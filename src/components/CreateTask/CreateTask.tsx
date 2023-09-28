import { PlusCircle } from "@phosphor-icons/react";
import * as S from "./style";
import { Dispatch, FormEvent, useState } from "react";
import { ITask } from "../pages/Home/Home";

interface CreateTaskProps {
  setData: Dispatch<React.SetStateAction<ITask[]>>;
}

export default function CreateTask({ setData }: CreateTaskProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const task = {
      id: new Date().toISOString(),
      name: value,
      isComplete: false,
    };

    setData((state) => [...state, task]);
    setValue("");
  }

  return (
    <S.FormContainer onSubmit={handleSubmit} action="">
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={value}
      />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </S.FormContainer>
  );
}
