<template>
  <div>
    <ul>
      <li v-for="(item, index) in items">{{ item }}</li>
    </ul>
    <a href="" v-on:click="shuffle($event)">Shuffle List</a>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        items: [
          'Vue is great',
          'Electron is good',
          'Development is easy'
        ]
      }
    },
    methods: {
      shuffle(event) {
        event.preventDefault();
        var currentIndex = this.items.length,
            temporaryValue,
            randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = this.items[currentIndex];
          this.items[currentIndex] = this.items[randomIndex];
          this.items[randomIndex] = temporaryValue;
        }

        this.items = [].concat(this.items);
      }
    }
  }
</script>