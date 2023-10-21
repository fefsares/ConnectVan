import LoginScreen from './Login/LoginScreen/index'
import PreRegistroScreen from './Login/PreRegistroScreen/index'
import CadastroMotoristaScreen from './Login/Registro/Motorista/CadastroScreen/index'
import InfoMotoristaScreen from './Login/Registro/Motorista/InformacoesScreen/index'
import CadastroResponsavelScreen from './Login/Registro/Responsavel/CadastroScreen/index'
import AlunoCadastroScreen from './Login/Registro/Responsavel/AlunoScreen/index'
import HomeRotaMotoristaScreen from './Motorista/HomeRota/index'
import HomeMotoristaScreen from './Motorista/Home/index'
import Pedidos from './Motorista/Pedidos_Contratacao/index'
import AddAluno from './Motorista/Add_Aluno/index'
import AddAluno2 from './Motorista/Add_Aluno/index2'
import AddAlunos from './Motorista/Add_Alunos/index'
import AddMensalidade from './Motorista/Add_Mensalidade/index'
import AddMensalidades from './Motorista/Add_Mensalidade/index2'
import Escolas from './Motorista/Escolas/index'
import EditarEscolas from './Motorista/Editar_escolas/index'
import EditarCidades from './Motorista/Editar_cidades/index'
import PassageirosEscola from './Motorista/Passageiros_Escola/index'
import InfoAluno from './Motorista/Info_Aluno/index'
import Passageiros from './Motorista/Passageiros/index'
import SplashScreen from './SplashScreen/index'
import EditarPerfilM from './Motorista/Editar_perfil/index'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerM() {
    return (
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="HomeMotorista" component={HomeMotoristaScreen} options={{title:'Home'}}/>
        <Drawer.Screen name='Escolas' component={Escolas}/>
        <Drawer.Screen name='Cidades' component={EditarCidades}/>
        <Drawer.Screen name='Pedidos' component={Pedidos} options={{title:''}}/>
        <Drawer.Screen name='Passageiros' component={Passageiros}/>
        <Drawer.Screen name='Perfil' component={EditarPerfilM}/>
        {/* fazer o negócio sumir */}
      </Drawer.Navigator>
    );
  }

export default function Rotas({navigation}){
    return(
        <Stack.Navigator useLegacyImprementation screenOptions={{title:'', headerShown:false}}>
            <Stack.Screen name='splash' component={SplashScreen}/>
            <Stack.Screen name='login' component={LoginScreen}/>
            <Stack.Screen name='drawerM' component={DrawerM}/>
            <Stack.Screen name='preRegistro' component={PreRegistroScreen}/>
            <Stack.Screen name='cadastroMotorista' component={CadastroMotoristaScreen}/>
            <Stack.Screen name='infoMotorista' component={InfoMotoristaScreen}/>
            <Stack.Screen name='cadastroResponsavel' component={CadastroResponsavelScreen}/>
            <Stack.Screen name='alunoCadastro' component={AlunoCadastroScreen}/>
            <Stack.Screen name='AddAluno' component={AddAluno}/>
            <Stack.Screen name='AddAluno2' component={AddAluno2}/>
            <Stack.Screen name='AddAlunos' component={AddAlunos}/>
            <Stack.Screen name='AddMensalidade' component={AddMensalidade}/>
            <Stack.Screen name='AddMensalidades' component={AddMensalidades}/>
            <Stack.Screen name='HomeRotaMotorista' component={HomeRotaMotoristaScreen}/>
            <Stack.Screen name='EditarE' component={EditarEscolas}/>
            <Stack.Screen name='PassageirosE' component={PassageirosEscola}/>
            <Stack.Screen name='InfoAluno' component={InfoAluno}/>
        </Stack.Navigator>
    )
}