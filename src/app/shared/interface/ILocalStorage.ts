import { IUsuario } from 'src/app/shared/interface/IUsuario';
import { ICliente } from './ICliente';
export interface ILocalStorage {
  token?: string;
  cliente?: IUsuario;
  data: string;
}
