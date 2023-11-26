import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/features/auth/authSlice";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      setPassword("");
      setUsername("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-60"
    >
      <h1 className="text-lg text-gray-200 text-center">Регистрация</h1>
      <div className="mt-2"></div>
      <label className="text-xs text-gray-200">
        Имя пользователя:
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Имя пользователя"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-500"
        />
      </label>
      <div className="mt-2">
        <label className="text-xs text-gray-200">
          Пароль:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
            className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-500"
          />
        </label>
      </div>

      <div className="flex gap-8 justify-center mt-4">
        <button
          onClick={handleSubmit()}
          type="submit"
          className="flex justify-center items-center text-sx bg-gray-600 text-white rounded-sm py-w px-4 "
        >
          Зарегистрироваться
        </button>
        <Link
          to={"/login"}
          className="flex justify-center items-center text-xs text-gray-400"
        >
          Уже есть аккаунт?
        </Link>
      </div>
    </form>
  );
}

export { RegisterPage };
