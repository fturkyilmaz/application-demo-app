import React, {createContext, useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const NetworkContext = createContext({
  isConnected: null,
});

const NetworkProvider = ({children}) => {
  const [isConnectedState, setIsConnectedState] = useState(null);

  const onChangeConnected = (isConnected) => {
    setIsConnectedState(isConnected);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) =>
      onChangeConnected(state.isConnected),
    );

    return () => unsubscribe();
  }, []);

  return (
    <NetworkContext.Provider
      value={{
        isConnected: isConnectedState,
      }}>
      {children}
    </NetworkContext.Provider>
  );
};

export {NetworkProvider, NetworkContext};
