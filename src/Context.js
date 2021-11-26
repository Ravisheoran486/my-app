import React, { createContext } from "react";
const songContext = createContext();
const UserProvider = ({ children }) => {
    const [songUrl, setSongurl] = useState("John Doe");
    return (
      <UserContext.Provider value={{ songUrl }}>
        {children}
      </UserContext.Provider>
    );
  };
  const withUser = (Child) => (props) => (
    <UserContext.Consumer>
      {(context) => <Child {...props} {...context} />}
      {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </UserContext.Consumer>
  );
  export { UserProvider, withUser };