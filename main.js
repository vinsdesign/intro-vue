const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vins Brands",
      selectedVariant: 0,
      details: ["50% cotton", "30% Wool", "20% Polyester"],
      variants: [
        {
          id: 1,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: ["S", "M", "L", "XL"],
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    // solution
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1;
      }
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    // solution
    sale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " is on sale.";
      }
      return "";
    },
    // solution
  },
});
