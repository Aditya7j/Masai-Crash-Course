export const AuthContextProvider = () => {

  let providerState = {};

  if (window.Cypress) {
    window.store = providerState;
  }

  return <AuthContext.Provider value={providerState}></AuthContext.Provider>;
};
