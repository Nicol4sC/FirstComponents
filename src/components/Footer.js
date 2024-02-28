import { Text, View } from 'react-native';
import {styles}  from '../styles/StylesSheet';

export default function Footer() {
    return (
        <View style= {styles.Footer}>
            <Text style= {styles.textfooter}>Rodapé</Text>
        </View>
    )
}