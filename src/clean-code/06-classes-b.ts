(() => {
  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this. birthdate = birthdate;
    }
  }

  interface UserProps {
    name: string,
    gender: Gender,
    birthdate: Date,
    email: string;
    password: string;
  }
  class User extends Person {
    public lastLogin: Date;
    public email: string,
    public password: string

    constructor({name, gender, birthdate, email, password}: UserProps) {
      super({name, gender, birthdate});
      this.email = email;
      this.password = password;
      this.lastLogin = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    name: string,
    gender: Gender,
    birthdate: Date,
    email: string;
    password: string;
    workingDir: string;
    lastOpenedFile: string;
  }
  class UserSettings extends User {
    public workingDir: string;
    public lastOpenedFile: string;

    constructor({
      name,
      gender,
      birthdate,
      email,
      password,
      workingDir,
      lastOpenedFile
    }: UserSettingsProps) {
      super({name, gender, birthdate, email, password});
      this.workingDir = workingDir;
      this.lastOpenedFile = lastOpenedFile;
    }
  }

  const userSettings = new UserSettings({
    name: 'Nato',
    gender: 'M',
    birthdate: new Date(),
    email: 'nato@gmail.com',
    password: '123456',
    workingDir: 'C:\\',
    lastOpenedFile: 'index.html'
  });
})();
