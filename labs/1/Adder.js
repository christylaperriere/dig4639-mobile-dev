class Adder {
    constructor (numbers) {
        this.props = numbers;
    }
    sum() {
        // Check if values are undefined
        if( !this.props.a || !this.props.b ) return null;

        //returning sum; 
        return this.props.a + this.props.b; 
    }

    render() {
        //returning the sum of the two numbers
        return `<p>The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}</p>`; 
    }
}

module.exports = Adder; 