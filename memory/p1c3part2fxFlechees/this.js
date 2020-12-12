const name = 'Extérieur'

const obj = {
  name: 'Intérieur',
  runGreet () {
    // Ici, this.name est bien "Intérieur"
    setTimeout(function () {
      // Ici, this est soit l’objet global (mode laxiste de JS),
      // soit null (mode strict de JS)
    }, 0)
  }
}

obj.runGreet()







///modern
const name2 = 'Extérieur'

const obj2 = {
  name: 'Intérieur',
  runGreet () {
    // Ici, this.name est bien "Intérieur"
    setTimeout(() => {
      // Ici, this n’est pas redéfini par la fonction,
      // car c’est une fonction fléchée : comme n’importe
      // quel identifiant, il est donc recherché dans les
      // portées englobantes, et trouvé au niveau de
      // runGreet, c’est donc aussi "Intérieur".
    }, 0)
  }
}

obj2.runGreet()