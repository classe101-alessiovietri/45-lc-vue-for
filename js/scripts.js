const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            names: ['Michele', 'Fabio', 'Roberto'],
            newName: ''
        }
    },
    methods: {
        addToNames() {
            this.names.push(this.newName);

            this.newName = '';
        }
    }
}).mount('#app');

// for (let key in obj) {
//     console.log(obj[key]);
// }

// for (let i in arr) {
//     console.log(arr[i]);
// }

// names.forEach(element => {
    
// });

// names.forEach((element, index) => {
    
// });