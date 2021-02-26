const app = new Vue({
    delimiters:  ["[[", "]]"],
    data () {
        return {
            courseGoal: 'Finish the course and learn Vue',
            vueLink: 'http://vuejs.org/'
        };
    },
    delimiters: ['[[', ']]'],
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < .5){
                return 'Learn Vue!';
            }
            else {
                return 'Master Vue';
            }
        }
    },
    el: '#user-goal'
}); 
//app.mount('#user-goal');

// var app = new Vue({
//     el: '#app',
//     delimiters: ['[[', ']]'],
//     data: {
//       message: 'Hello Vue!'
//     }
//   })