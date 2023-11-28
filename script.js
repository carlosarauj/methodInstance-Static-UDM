class Controle {
    constructor(tv){
        this.tv  = tv
        this.volume = 0
    }

    aumentarVolume(){
        this.volume++
    }

    diminuirVolume(){
        this.volume--
    }

    static soma(x, y){
        return x + y
    }
}

let c1 = new Controle('LG')

c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()
c1.aumentarVolume()

let c2 = new Controle('Samsumg')

c2.aumentarVolume()
c2.aumentarVolume()


console.log(c1)
console.log(c2)
console.log(Controle.soma(2,8))