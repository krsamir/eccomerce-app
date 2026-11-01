import type {
  CatalogCategory,
  CatalogProduct,
  CategoryListingConfig,
} from "@/types/catalog"

/* -------------------------------------------------------------------------- */
/* Categories                                                                 */
/* -------------------------------------------------------------------------- */

export const grocerySubCategories: CatalogCategory[] = [
  {
    id: "all",
    name: "All",
    image: "/categories/all.png",
  },
  {
    id: "fresh-vegetables",
    name: "Fresh Vegetables",
    image: "/categories/fresh-vegetables.png",
  },
  {
    id: "fresh-fruits",
    name: "Fresh Fruits",
    image: "/categories/fresh-fruits.png",
  },
  {
    id: "exotics",
    name: "Exotics",
    image: "/categories/exotics.png",
  },
  {
    id: "herbs",
    name: "Herbs & Others",
    image: "/categories/herbs.png",
  },
]

export const sauceSubCategories: CatalogCategory[] = [
  {
    id: "all",
    name: "All",
    image: "/categories/all.png",
  },
  {
    id: "tomato-ketchup",
    name: "Tomato Ketchup",
    image: "/categories/ketchup.png",
  },
  {
    id: "asian-sauces",
    name: "Asian Sauces",
    image: "/categories/asian-sauces.png",
  },
  {
    id: "mayonnaise",
    name: "Mayonnaise",
    image: "/categories/mayonnaise.png",
  },
  {
    id: "peanut-butter",
    name: "Peanut Butter",
    image: "/categories/peanut-butter.png",
  },
  {
    id: "jam-spreads",
    name: "Jam & Spreads",
    image: "/categories/jam.png",
  },
  {
    id: "honey",
    name: "Honey & Chyawanprash",
    image: "/categories/honey.png",
  },
]

export const babyCareSubCategories: CatalogCategory[] = [
  {
    id: "all",
    name: "All",
    image: "/categories/all.png",
  },
  {
    id: "diapers",
    name: "Diapers",
    image: "/categories/diapers.png",
  },
  {
    id: "baby-wipes",
    name: "Baby Wipes",
    image: "/categories/baby-wipes.png",
  },
  {
    id: "baby-food",
    name: "Baby Food",
    image: "/categories/baby-food.png",
  },
]

/* -------------------------------------------------------------------------- */
/* Example product data                                                       */
/* -------------------------------------------------------------------------- */

const vegetableProducts: CatalogProduct[] = [
  {
    id: "veg-001",
    name: "Green Chilli (Hari Mirch)",
    image: "/products/green-chilli.jpg",
    quantity: "100 g",
    price: 18,
    mrp: 22,
    discountPercentage: 18,
    deliveryTime: "8 MINS",
  },

  {
    id: "veg-002",
    name: "Green Cucumber (Kheera)",
    image: "/products/cucumber.jpg",
    quantity: "500 g",
    price: 32,
    mrp: 39,
    discountPercentage: 17,
    deliveryTime: "8 MINS",
    cartQuantity: 1,
  },

  {
    id: "veg-003",
    name: "Onion (Pyaz)",
    image: "/products/onion.jpg",
    quantity: "1 kg",
    price: 66,
    mrp: 75,
    discountPercentage: 12,
    deliveryTime: "8 MINS",
    optionsCount: 2,
  },
]

const sauceProducts: CatalogProduct[] = [
  {
    id: "sauce-001",
    name: "Kissan Fresh Tomato Ketchup",
    image: "/products/kissan-ketchup.jpg",
    quantity: "1 kg",
    price: 109,
    mrp: 150,
    discountPercentage: 27,
    deliveryTime: "8 MINS",
  },

  {
    id: "sauce-002",
    name: "Kissan Tomato Ketchup",
    image: "/products/kissan-tomato-ketchup.jpg",
    quantity: "825 g",
    price: 99,
    mrp: 120,
    deliveryTime: "8 MINS",
  },

  {
    id: "sauce-003",
    name: "Veeba Chef's Choice Tomato Ketchup",
    image: "/products/veeba-ketchup.jpg",
    quantity: "900 g",
    price: 82,
    mrp: 120,
    discountPercentage: 31,
    deliveryTime: "8 MINS",
  },

  {
    id: "sauce-004",
    name: "Maggi Rich Tomato Ketchup",
    image: "/products/maggi-ketchup.jpg",
    quantity: "190 g",
    price: 75,
    discountPercentage: 37,
    deliveryTime: "8 MINS",
    optionsCount: 2,
  },

  {
    id: "sauce-005",
    name: "Tops Tomato Ketchup",
    image: "/products/tops-ketchup.jpg",
    quantity: "850 g",
    price: 70,
    mrp: 131,
    discountPercentage: 46,
    deliveryTime: "8 MINS",
    isSponsored: true,
  },
]

const diaperProducts: CatalogProduct[] = [
  {
    id: "diaper-001",
    name: "Pampers Premium Care Baby Diaper",
    image: "/products/pampers-premium.jpg",
    quantity: "44 pcs",
    price: 760,
    mrp: 1499,
    discountPercentage: 49,
    deliveryTime: "8 MINS",
    optionsCount: 2,
    isSponsored: true,
  },

  {
    id: "diaper-002",
    name: "MamyPoko Pants All-Night Absorb Baby Diaper",
    image: "/products/mamypoko.jpg",
    quantity: "40 pcs",
    price: 409,
    mrp: 599,
    discountPercentage: 31,
    deliveryTime: "8 MINS",
    optionsCount: 2,
  },

  {
    id: "diaper-003",
    name: "Pampers Complete Skin Comfort Baby Diaper",
    image: "/products/pampers-complete.jpg",
    quantity: "64 pcs",
    price: 878,
    mrp: 1499,
    discountPercentage: 41,
    deliveryTime: "8 MINS",
    optionsCount: 3,
    isSponsored: true,
  },
]

/* -------------------------------------------------------------------------- */
/* Page configurations                                                        */
/* -------------------------------------------------------------------------- */

export const vegetablesPage: CategoryListingConfig = {
  title: "Vegetables & Fruits",

  categories: grocerySubCategories,

  products: vegetableProducts,

  description: {
    title: "Buy Fresh Fruits and Vegetables Online",

    paragraphs: [
      "Fresh fruits and vegetables are essential daily grocery items used for cooking, salads, snacks, juices, and healthy meals. From onions, tomatoes, cucumbers, green chillies, coriander, lemons, and capsicum to bananas and exotic produce, fresh produce helps support balanced nutrition and everyday cooking needs.",
    ],
  },
}

export const saucesPage: CategoryListingConfig = {
  title: "Sauces & Spreads",

  categories: sauceSubCategories,

  products: sauceProducts,

  description: {
    title: "Buy Sauces, Ketchup and Spreads Online",

    paragraphs: [
      "Explore a wide range of sauces, ketchup, spreads and other pantry essentials. From everyday tomato ketchup to Asian sauces, mayonnaise, jams and spreads, find products for everyday meals, snacks and quick recipes.",
      "Choose from a variety of popular brands, pack sizes and flavours, with convenient delivery right to your doorstep.",
    ],
  },
}

export const babyCarePage: CategoryListingConfig = {
  title: "Baby Care",

  categories: babyCareSubCategories,

  products: diaperProducts,

  description: {
    title: "Buy Baby Care Products Online",

    paragraphs: [
      "Explore a wide range of baby care essentials including diapers, wipes, baby food and other everyday products designed to make childcare more convenient.",
      "Choose from trusted brands, different sizes and pack options to find products that suit your family's needs.",
    ],
  },
}
