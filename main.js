const app = Vue.createApp({
  data() {
    return {
      cart: 1,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inventory: 3,
      details: ["50% cotton", "30% Wool", "20% Polyester"],
      variants: [
        { id: 1, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
