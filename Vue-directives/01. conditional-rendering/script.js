const lightingbulb = {
  data() {
    return { 
      notlighting:true,
    }
  },
  methods: {
    tap() {
      this.notlighting = !this.notlighting
    }
  }
} 

Vue.createApp(lightingbulb).mount('#app')
