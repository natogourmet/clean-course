(() => {

  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
      { id: 1, toEvaluate: false },
      { id: 2, toEvaluate: false },
      { id: 3, toEvaluate: true },
      { id: 4, toEvaluate: false },
      { id: 5, toEvaluate: false },
      { id: 7, toEvaluate: true },
  ]; 
  
  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map( files => files.toEvaluate );

  
  class AbstractUser { };
  class UserMixin { };
  class UserImplementation { };
  interface IUser { };

  // Mejor
  class User { };
  interface User { };


  // Todo: Tarea
      
  // día de hoy - today
  const currentDate = new Date();
  
  // días transcurridos - elapsed time in days
  const elapsedDays: number = 23;
  
  // número de archivos en un directorio - number of files in directory
  const dirFilesNumber = 33;
  
  // primer nombre - first name
  const firstName = 'Fernando';
  
  // primer apellido - last name
  const lastName = 'Herrera';

  // días desde la última modificación - days since modification
  const daysSinceLastMod = 12;
  
  // cantidad máxima de clases por estudiante - max classes per student
  const maxClassesPerStudent = 6;


})();
