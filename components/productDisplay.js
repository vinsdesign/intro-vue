app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },

  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img
          :src="image"
          :class="{'out-of-stock-img' : !inStock}"
          alt="sock-blue"
        />
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p>{{sale}}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out Of Stock</p>
        <p>Shipping : {{shipping}}</p>
        <product-detail :details="details"></product-detail>
        <ul>
          <li v-for="(size,index) in sizes" :key="index">{{size}}</li>
        </ul>
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{backgroundColor:variant.color}"
        ></div>
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
        <button class="button" @click="removeFromCart">Remove Item</button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,

  data() {
    return {
      product: "Socks",
      brand: "Vins Brands",
      selectedVariant: 0,
      details: ["50% cotton", "30% Wool", "20% Polyester"],
      variants: [
        {
          id: 235,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 236,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: ["S", "M", "L", "XL"],
      onSale: true,
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    // solution
    removeFromCart() {
      this.$emit("remove-to-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
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
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
