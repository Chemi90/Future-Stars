export interface User {
  email: string;
  password: string;
  name: string;
  rol: 'estudiante' | 'inversor';
  imagen: string;
}
