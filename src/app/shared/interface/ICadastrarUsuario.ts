import { IEndereco } from './IEndereco';
import { IUsuario } from "./IUsuario";

export interface ICadastrarUsuario {
cliente: IUsuario;
endereco: IEndereco;
}
