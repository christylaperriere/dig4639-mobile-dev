<<<<<<< HEAD
// class declaration
class Pet {
  // constructor with argument props
=======
var a = 5

console.log(a)
class Pet {
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
  constructor (props) {
    this.props = props
  }

  getName () {
    return this.props.name
  }

  getSpecies () {
    return this.props.species
  }

  getSpeech () {
    return 'I make this sound: '
  }

<<<<<<< HEAD
    getIdentity = () => {
      console.log(this)
    }
=======
  getIdentity = () => {
    console.log(this)
  }

  // getSum = (a,b) => a + b
  getSum = (a, b) => {
    return a + b
  }
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
}

class Cat extends Pet {
  constructor (props) {
    super(props)
    this.props.species = 'cat'
  }

  getSpeech () {
    return super.getSpeech() + 'Meow!!'
  }
}
<<<<<<< HEAD

=======
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
class Dog extends Pet {
  constructor (props) {
    super(props)
    this.props.species = 'dog'
  }

  getSpeech () {
<<<<<<< HEAD
    return super.getSpeech() + 'Woof!!'
  }
}

=======
    return super.getSpeech() + 'Ruff Ruff!!'
  }
}
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
function sayName (pet) {
  console.log(`My name is ${pet.getName()}, and I am a ${pet.getSpecies()}`)
  console.log(`${pet.getSpeech()}`)
}
<<<<<<< HEAD

// assinging name the string "Fido"
=======
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
var myPet = new Cat({ name: 'Luna' })
sayName(myPet)
myPet.getIdentity()
// Assign the method getIdentity to the variable myIdentity
var myIdentity = myPet.getIdentity
// Call the new function using the myIdentity variable
myIdentity()
var myDog = new Dog({ name: 'Fido' })
sayName(myDog)
myDog.getIdentity()
<<<<<<< HEAD
=======
console.log(myDog.getSum(10, 20))
>>>>>>> fe277fcee38e1b953a813f52fa2d0a9fceacf0f6
