import { createContext, useContext, useState } from "react";

// 1. CREATE CONTEXT
const UserContext = createContext();

// 2. CUSTOM HOOK (RECOMMENDED)
export const useUser = () => useContext(UserContext);

// 3. PROVIDER COMPONENT
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Mohit Gupta",
    email: "mohit@example.com",
  });

  const updateUser = (newUser) => setUser(newUser);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
