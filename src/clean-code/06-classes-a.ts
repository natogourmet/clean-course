(() => {
  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastLogin: Date;

    constructor(
      name: string,
      gender: Gender,
      birthdate: Date,
      public email: string,
      public password: string
    ) {
      super(name, gender, birthdate);
      this.lastLogin = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      name: string,
      gender: Gender,
      birthdate: Date,
      email: string,
      password: string,
      public workingDir: string,
      public lastOpenedFile: string
    ) {
      super(name, gender, birthdate, email, password);
    }
  }

  const userSettings = new UserSettings(
    'Nato',
    'M',
    new Date(),
    'nato@gmail.com',
    '123456',
    'C:\\',
    'index.html'
  ); 
})();
