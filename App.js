import { Text, View } from 'react-native';
import { StatusBar } from 'react-native-web';
//componentes//
import { styles } from './src/styles/StylesSheet';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      {/*Componente cabeçalho */}
      <Header/>

          {/*Componente corpo */}
      <Body/>

          {/*Componente rodapé */}
      <Footer/>
      <StatusBar style='auto'/>

    </View>
  );
}


