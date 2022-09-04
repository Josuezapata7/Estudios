function hashStringToInt(s,tableSize){

    let hash = 17

    for(let i = 0; i<s.length; i++){

        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    console.log(hash)
    return hash;

}

class HashTable {

    table = new Array(3)
    numItems = 0;

    resize = () =>{

        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if(item){
                item.forEach(([key,value]) =>{

                    const idx = hashStringToInt(key,newTable.length);
                    if(newTable[idx]){
                        newTable[idx].push([key,value]);
                    }else{
                        newTable[idx] = [[key,value]];
                    }

                })

            }

        })

        this.table = newTable;

    }

    setItem = (key,value) =>{

        this.numItems++;

        const loadFactor = this.numItems / this.table.length;

        if( loadFactor > 0.8){

            //rezise
            this.resize();

        }

        const idx = hashStringToInt(key,this.table.length);
        console.log(idx)

        if(this.table[idx]){
            console.log("idx")
            this.table[idx].push([key,value]);
        }else{
            console.log(idx)
            this.table[idx] = [[key,value]];
        }
        
    };

    getItem = key =>{

        const idx = hashStringToInt(key,this.table.length);
        console.log(idx)
        
        if(!this.table[idx]){

            return null

        }

        return this.table[idx].find(x => x[0] === key);

    }

}

const myTable = new HashTable();
myTable.setItem("FirstName","Josue");
myTable.setItem("LastName","tim");
// myTable.setItem("Age",5);
// myTable.setItem("Date","1/2/3");
// myTable.setItem("HolaMundo","Hola Mundo");
// myTable.setItem("Prueba","Buena Practica Tablas Hash");
// myTable.setItem("SegundoNombre","Daniel");
// myTable.setItem("SegundoApellido","Azañon");
// myTable.setItem("Nombre","Jorge");
console.log(myTable.getItem("FirstName"));
console.log(myTable.getItem("LastName"));
console.log(myTable.table)
// console.log(myTable.getItem("Age"));
// console.log(myTable.getItem("Date"));
// console.log(myTable.getItem("HolaMundo"));
// console.log(myTable.getItem("SegundoNombre"));
// console.log(myTable.getItem("SegundoApellido"));
// console.log(myTable.getItem("Nombre"));