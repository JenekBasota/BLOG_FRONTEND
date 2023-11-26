import { ReactElement } from "react";
import { Link } from "react-router-dom";

function LogingPage(): ReactElement {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-60"
    >
      <h1 className="text-lg text-gray-200 text-center">Авторизация</h1>
      <div className="mt-2"></div>
      <label className="text-xs text-gray-200">
        Имя пользователя:
        <input
          type="text"
          placeholder="Имя пользователя"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-500"
        />
      </label>
      <div className="mt-2">
        <label className="text-xs text-gray-200">
          Пароль:
          <input
            type="password"
            placeholder="Пароль"
            className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-500"
          />
        </label>
      </div>

      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          className="flex justify-center items-center text-sx bg-gray-600 text-white rounded-sm py-w px-4 "
        >
          Войти
        </button>
        <Link
          to={"/register"}
          className="flex justify-center items-center text-xs text-gray-400"
        >
          Нет аккаунта?
        </Link>
      </div>
    </form>
  );
}

export { LogingPage };
