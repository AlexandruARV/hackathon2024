import { createContext, useContext, useReducer } from "react";

const initialState = {
  name: "",
  isLogged: false,
  questions: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loggin":
      return { ...state, isLogged: true };
  }
}

const UserContext = createContext();

function ProviderUser({ children }) {
  const [{ name, isLogged }, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ name, isLogged }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  return context;
}

export { useUser, ProviderUser };
