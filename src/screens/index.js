import LoginScreen from './Login/LoginScreen/index'
import PreRegistroScreen from './Login/PreRegistroScreen/index'
import CadastroMotoristaScreen from './Login/Registro/Motorista/CadastroScreen/index'
import InfoMotoristaScreen from './Login/Registro/Motorista/InformacoesScreen/index'
import CadastroResponsavelScreen from './Login/Registro/Responsavel/CadastroScreen/index'
import AlunoCadastroScreen from './Login/Registro/Responsavel/AlunoScreen/index'
import HomeRotaMotoristaScreen from './Motorista/HomeRota/index'
import HomeMotoristaScreen from './Motorista/Home/index'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Rotas({navigation}){
    return(
        <Stack.Navigator useLegacyImprementation>
            <Stack.Screen name='login' component={LoginScreen} options={{title:'', headerShown:false}}/>
            <Stack.Screen name='preRegistro' component={PreRegistroScreen} options={{title:'', headerShown:false}}/>
            <Stack.Screen name='cadastroMotorista' component={CadastroMotoristaScreen} options={{title:'', headerShown:false}}/>
            <Stack.Screen name='infoMotorista' component={InfoMotoristaScreen} options={{title:'', headerShown:false}}/>
            <Stack.Screen name='cadastroResponsavel' component={CadastroResponsavelScreen} options={{title:'', headerShown:false}}/>
            <Stack.Screen name='alunoCadastro' component={AlunoCadastroScreen} options={{title:'', headerShown:false}}/>
            <Stack.Screen name='HomeRotaMotorista' component={HomeRotaMotoristaScreen} options={{title:'', headerShown:false}}/>
            <Stack.Screen name='HomeMotorista' component={HomeMotoristaScreen} options={{title:'', headerShown:false}}/>
        </Stack.Navigator>
    )
}