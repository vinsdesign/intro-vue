app.component("product-detail", {
  props: {
    details: {
      detail: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>`,
});
