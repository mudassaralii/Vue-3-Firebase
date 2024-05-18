const app = Vue.createApp({
  //data , function
  // template: "<h2>I am the template</h2>",
  data() {
    return {
      title: "I am the title2",
      age: "30",
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(newTitle) {
      this.title = newTitle;
    },
    handleMouseMove(e) {
      console.log("called");
      (this.x = e.offsetX), (this.y = e.offsetY);
    },
  },
});

app.mount("#app");
