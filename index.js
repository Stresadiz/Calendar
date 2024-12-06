class Day {
    // Fecha de dia
    date 
    // Dia de la semana
    dayName 
    // Array de tareas
    data
    // Horas disponibles
    hours
    
    constructor(dayName, data) {
        this.date = Date.toString('yyyy-MM-dd')
        this.dayName = dayName;
        this.data = data;
        this.hours = this.setHours()
    }

    setHours(){
        let arrHours = []
        for (let i = 0; i < 24; i++) {
            arrHours[i] = i.toFixed(2);
        }

        return new Set(arrHours);
    }
    
    getDate() {
        return this.date;
    }

    getDayName(){
        return this.dayName;
    }
}

class DataDay {
    constructor(titleTask, descTask, hourInit, hourFinal) {
        
    }
}

let daytest = new Day("Monday", "");
console.log(daytest);

