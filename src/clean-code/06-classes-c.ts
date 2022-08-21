// Prioritize Composition over Inheritance

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
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    password: string;
  }
  class User {
    public lastLogin: Date;
    public email: string;
    public password: string;

    constructor({ email, password }: UserProps) {
      this.email = email;
      this.password = password;
      this.lastLogin = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDir: string;
    lastOpenedFile: string;
  }
  class Settings {
    public workingDir: string;
    public lastOpenedFile: string;

    constructor({ workingDir, lastOpenedFile }: SettingsProps) {
      this.workingDir = workingDir;
      this.lastOpenedFile = lastOpenedFile;
    }
  }

  interface UserSettingsProps {
    name: string;
    gender: Gender;
    birthdate: Date;
    email: string;
    password: string;
    workingDir: string;
    lastOpenedFile: string;
  }
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      password,
      workingDir,
      lastOpenedFile,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, password });
      this.settings = new Settings({ workingDir, lastOpenedFile });
    }
  }

  const userSettings = new UserSettings({
    name: 'Nato',
    gender: 'M',
    birthdate: new Date(),
    email: 'nato@gmail.com',
    password: '123456',
    workingDir: 'C:\\',
    lastOpenedFile: 'index.html',
  });

  console.log(userSettings);
  
})();
