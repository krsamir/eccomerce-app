import type { Product } from "@/types/product"

const greenCapsicum: Product = {
  id: "product-green-capsicum",

  slug: "green-capsicum-shimla-mirch",

  name: "Green Capsicum (Shimla Mirch)",

  category: {
    id: "vegetables-fruits",
    name: "Fresh Vegetables",
    slug: "fresh-vegetables",
  },

  subCategory: {
    id: "fresh-vegetables",
    name: "Fresh Vegetables",
    slug: "fresh-vegetables",
  },

  quantity: "250 g",

  price: 24,

  mrp: 29,

  discountPercentage: 17,

  currency: "₹",

  deliveryTime: "8 MINS",

  isAvailable: true,

  cartQuantity: 4,

  images: [
    {
      id: "capsicum-1",
      url: "/products/capsicum-1.jpg",
      alt: "Green Capsicum",
    },
    {
      id: "capsicum-2",
      url: "/products/capsicum-2.jpg",
      alt: "Green Capsicum",
    },
    {
      id: "capsicum-3",
      url: "/products/capsicum-3.jpg",
      alt: "Green Capsicum",
    },
    {
      id: "capsicum-4",
      url: "/products/capsicum-4.jpg",
      alt: "Green Capsicum information",
    },
  ],

  benefits: [
    {
      label: "Health Benefits",
      value: "Vitamin C & Fibre Rich",
    },
  ],

  details: {
    "Product Type": "Fresh Vegetable",
    "Storage Instructions": "Store in a cool and dry place.",
    "Country of Origin": "India",
  },

  description:
    "Fresh green capsicum is a versatile vegetable that can be used in curries, stir-fries, salads, sandwiches and a variety of everyday recipes.",

  tags: ["fresh", "vegetables", "capsicum"],
}

/* -------------------------------------------------------------------------- */
/* Similar products                                                           */
/* -------------------------------------------------------------------------- */

const similarProducts: Product[] = [
  {
    id: "yellow-capsicum",
    slug: "yellow-bell-pepper",
    name: "Yellow Bell Pepper (Haladi Menasina Kaayi)",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "125 g",
    price: 42,
    mrp: 53,
    discountPercentage: 20,
    deliveryTime: "17 MINS",
    images: [
      {
        id: "yellow-1",
        url: "/products/yellow-capsicum.jpg",
      },
    ],
  },

  {
    id: "red-capsicum",
    slug: "red-bell-pepper",
    name: "Red Bell Pepper (Kempu Dappa Menasina Kaayi)",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "125 g",
    price: 42,
    mrp: 53,
    discountPercentage: 20,
    deliveryTime: "17 MINS",
    images: [
      {
        id: "red-1",
        url: "/products/red-capsicum.jpg",
      },
    ],
  },

  {
    id: "assorted-capsicum",
    slug: "assorted-capsicum",
    name: "Assorted Capsicum - Red, Yellow, Green",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "3 pcs",
    price: 88,
    mrp: 110,
    discountPercentage: 20,
    deliveryTime: "17 MINS",
    images: [
      {
        id: "assorted-1",
        url: "/products/assorted-capsicum.jpg",
      },
    ],
  },

  {
    id: "organic-capsicum",
    slug: "organic-green-capsicum",
    name: "Organically Grown Green Capsicum",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "250 g",
    price: 37,
    mrp: 47,
    discountPercentage: 21,
    deliveryTime: "17 MINS",
    images: [
      {
        id: "organic-1",
        url: "/products/organic-capsicum.jpg",
      },
    ],
  },

  {
    id: "ozone-capsicum",
    slug: "ozone-washed-capsicum",
    name: "Ozone Washed Capsicum (Pesticide Cleaned)",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "250 g",
    price: 34,
    mrp: 42,
    discountPercentage: 19,
    deliveryTime: "17 MINS",
    images: [
      {
        id: "ozone-1",
        url: "/products/ozone-capsicum.jpg",
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Top category products                                                      */
/* -------------------------------------------------------------------------- */

const topCategoryProducts: Product[] = [
  {
    id: "onion",
    slug: "onion",
    name: "Onion (Pyaz)",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "1 kg",
    price: 66,
    mrp: 75,
    discountPercentage: 12,
    deliveryTime: "8 MINS",
    images: [
      {
        id: "onion-1",
        url: "/products/onion.jpg",
      },
    ],
  },

  {
    id: "green-chilli",
    slug: "green-chilli",
    name: "Green Chilli (Hari Mirch)",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "100 g",
    price: 18,
    mrp: 22,
    discountPercentage: 18,
    deliveryTime: "8 MINS",
    images: [
      {
        id: "chilli-1",
        url: "/products/green-chilli.jpg",
      },
    ],
  },

  {
    id: "potato",
    slug: "potato",
    name: "Potato (Aloo)",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "1 kg",
    price: 17,
    mrp: 21,
    discountPercentage: 13,
    deliveryTime: "8 MINS",
    images: [
      {
        id: "potato-1",
        url: "/products/potato.jpg",
      },
    ],
  },

  {
    id: "lemon",
    slug: "lemon",
    name: "Lemon",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "200 g",
    price: 47,
    mrp: 58,
    discountPercentage: 20,
    deliveryTime: "8 MINS",
    images: [
      {
        id: "lemon-1",
        url: "/products/lemon.jpg",
      },
    ],
  },

  {
    id: "tomato",
    slug: "tomato",
    name: "Fresh Tomato",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "500 g",
    price: 32,
    mrp: 38,
    discountPercentage: 15,
    deliveryTime: "8 MINS",
    images: [
      {
        id: "tomato-1",
        url: "/products/tomato.jpg",
      },
    ],
  },

  {
    id: "cucumber",
    slug: "cucumber",
    name: "Green Cucumber (Kheera)",
    category: {
      id: "vegetables-fruits",
      name: "Fresh Vegetables",
      slug: "fresh-vegetables",
    },
    quantity: "500 g",
    price: 32,
    mrp: 39,
    discountPercentage: 16,
    deliveryTime: "8 MINS",
    images: [
      {
        id: "cucumber-1",
        url: "/products/cucumber.jpg",
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/* Store features                                                             */
/* -------------------------------------------------------------------------- */

const storeFeatures = [
  {
    id: "delivery",
    title: "Round The Clock Delivery",
    description:
      "Get items delivered to your doorstep from nearby stores whenever you need them.",
    icon: "🚚",
  },

  {
    id: "price",
    title: "Best Prices & Offers",
    description:
      "Best price destination with offers directly from the manufacturers.",
    icon: "🏷️",
  },

  {
    id: "assortment",
    title: "Wide Assortment",
    description:
      "Choose from thousands of products across food, personal care, household & other categories.",
    icon: "🛒",
  },
]

/* -------------------------------------------------------------------------- */
/* Complete page data                                                         */
/* -------------------------------------------------------------------------- */

export const greenCapsicumPageData = {
  product: greenCapsicum,

  storeFeatures,

  similarProducts,

  topCategoryProducts,
}
