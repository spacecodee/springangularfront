export class Persona {
  id: number = 0;
  name: String = '';
  lastname: String = '';

  constructor(name = '', lastname = '') {
    this.name = name;
    this.lastname = lastname
  }

  setId(id: number): void {
    this.id = id;
  }
}
