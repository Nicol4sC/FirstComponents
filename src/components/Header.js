import { Text, View } from 'react-native';
import {styles}  from '../styles/StylesSheet';

export default function Header() {
    return (
        <View style= {styles.Header}>
            <Text style={styles.textheader}>Cabeçalho</Text>
        </View>
    )
}
