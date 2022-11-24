//CRUD CON TYPESCRIPT

//Crear clase

class driver{

    id:number = 0;
    dni:number= 0;
    name: string = '';
    lastName: string = '';
    age:number = 0;
    arrayDriver: Array<any> =[];
  
  }
  
  interface Idriver extends driver{
    getAll():void;
    getById(id:number):void;
    getByName(name:string):void;
    create(id:number,dni:number,name:string,lastName:string,age:number):void;
    update(id:number):void;
    del(id:number):void;
  }
  
  class Repository implements Idriver{
    id:number = 0;
    dni:number =0;
    name:string = '';
    lastName:string = '';
    age:number = 0;
    
    arrayDriver = [
      {id:1,dni:10075909666,name: 'Ayleen',lastName: 'Orjuela',age:21},
      {id:2,dni:1006590944,name: 'Andres', lastName: 'Montiel',age:23},
      {id:3,dni:1006898344,name: 'Ricardo',lastName: 'Martinez',age:23},
      {id:4,dni:1005890643,name: 'Miguel',lastName: 'Vidal',age:25},
      {id:5,dni:1007534902,name: 'Alejandro',lastName:'Otaiza',age:23},
      {id:6,dni:1009786543,name: 'Sara', lastName: 'Rodriguez',age:20}
  
      ]
  
      //Mostrar todos los datos
  
     getAll(){
      const copymyObject = this.arrayDriver.map((item) => {return item});
      console.log(copymyObject)
    }
  
    //Mostrar datos x Id
    getById(id:number):void{
      const found = this.arrayDriver.find(element => element.id == id);
      console.log(found);
    }
  
    //Mostrar datos x nombre
  
      getByName(name:string):void{
      const found = this.arrayDriver.find(element => element.name == name);
      console.log(found);
    }
  
    //Crear registros
  
     create(id:number,dni:number,name:string,lastName:string,age:number):void{
      this.arrayDriver.push(
        
        {id:id,dni:dni,name:name,lastName:lastName,age:age})
      console.log("Datos Guardados")
      const copymyObject = this.arrayDriver.map((item) => {return item});
      console.log(copymyObject)
  
      }
  
    //Actualizar registros
     update(id:number):void{
      
      let dni2 = Number(prompt('Digita el nuevo dni'))
      let name2 = prompt('Digita el nuevo nombre')
      let lastName2 = prompt('Digita el nuevo apellido')
      let age2 = Number(prompt('Digita la nueva edad'))
  
      const actualizar = this.arrayDriver.findIndex(element => element.id == id);
      this.arrayDriver[actualizar].dni = dni2,
      this.arrayDriver[actualizar].name = name2,
      this.arrayDriver[actualizar].lastName=lastName2,
      this.arrayDriver[actualizar].age=age2;
      console.log(this.arrayDriver[actualizar])
      }
  
    //Eliminar registros
      del(id:number):void{
  
          const copyArray = this.arrayDriver.filter((i) => i.id != id);
          console.log(copyArray)
      }
  }
  
  class menuoptions {
  
    //Metodo menu
    menu():number{
  let menu = Number(window.prompt('Digita una opcion \n'
    +'1.Mostrar todos los registros \n'
    +'2. Mostrar registros con Id \n'
    +'3. Mostrar registros por nombre \n'
    +'4. Crear registro \n'
    +'5. Actulizar registro \n'
    +'6. Eliminar registro por id \n'
    +'7. Salir \n'));
    return menu;
  }
  
  }
  
  //Instancia 
  let obj = new menuoptions();
  let menu:number=0;
  
  let crud = new Repository;
  
  
  
    menu = obj.menu()
    switch(menu)
    {
      case 1:
        crud.getAll();
      break;
      case 2:
        crud.getById(5);
      break;
      case 3:
        crud.getByName('Ayleen');
      break;
      case 4:
        crud.create(7,2164189,'Sergio','Avendaño',22);
      break;
      case 5:
        crud.update(1);
      break;
      case 6:
      crud.del(1);
      break;
      case 7:
        console.log(":( Hasta Luego")
      break;
      default:
        console.log("opcion incorrecta")
      break;
    }
  
  
  
  
  
  
  
  
  
  