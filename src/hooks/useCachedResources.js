import {useState, useEffect} from 'react';
import SplashScreen from 'react-native-bootsplash';
import Icon from 'react-native-vector-icons/Ionicons';
import {setI18nConfig} from '../utils/languages';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Icon.loadFont();
        await setI18nConfig('tr');
        
        SplashScreen.show({duration: 2000});
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
