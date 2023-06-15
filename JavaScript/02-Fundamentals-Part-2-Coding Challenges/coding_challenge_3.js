mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const markHigherBMI = mark.calcBMI() > john.calcBMI();

// We are assuming there BMI will never be the exactly same
if (markHigherBMI) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(2)})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(2)})!`);
}