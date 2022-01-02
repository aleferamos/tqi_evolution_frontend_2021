import { ICliente } from './ICliente';
export interface ILocalStorage {
  token?: string;
  cliente?: ICliente;
  data: string;
}
