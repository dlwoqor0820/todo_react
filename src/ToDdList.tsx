import { useForm } from "react-hook-form";
import { StoreID } from "recoil";

/* function TodoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChnage = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (toDo.length < 10) {
        return setToDoError("To Do should be longer")
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChnage}
          value={toDo}
          placeholder="Write a to do"
        />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

interface IForm {
  toDo: string;
  email: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError("password1", { message: "password not same" }, { shouldFocus: true });
    } else {
      setError("extraError", { message: "server offline" });
    }
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", width: "200px" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("toDo", { required: true, minLength: 10 })}
          placeholder="todo"
        />

        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only Naver!",
            },
            minLength: { value: 10, message: "email too short" },
            validate: {
              noNico: (value) => (value.includes("nico") ? "no nico" : true),
              noNick: (value) => (value.includes("nick") ? "no nick" : true),
            },
          })}
          placeholder="email"
        />
        <span>{errors.email?.message}</span>

        <input
          {...register("password", {
            required: "password is required", //값이 입력되지 않았을 때
            minLength: { value: 10, message: "password too short" }, //10자 이하로 작성 했을 때
          })}
          placeholder="password"
        />
        <span>{errors.password?.message}</span>

        <input
          {...register("password1", {
            required: "password check is required",
          })}
          placeholder="password1"
        />
        <span>{errors.password1?.message}</span>

        <button>Add</button>

        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
