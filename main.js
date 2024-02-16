const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inventory: 3,
      details: ["50% cotton", "30% Wool", "20% Polyester"],
      variants: [
        { id: 1, color: "green" },
        { id: 2235, color: "blue" },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
});
