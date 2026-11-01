export interface ProductImage {
  id: string
  url: string
  alt?: string
}

export interface ProductVariant {
  id: string
  label: string
  value: string
  price?: number
  mrp?: number
}

export interface ProductBenefit {
  label: string
  value: string
}

export interface StoreFeature {
  id: string
  title: string
  description: string
  icon?: string
  image?: string
}

export interface Product {
  id: string
  slug: string

  name: string

  category: {
    id: string
    name: string
    slug: string
  }

  subCategory?: {
    id: string
    name: string
    slug: string
  }

  images: ProductImage[]

  quantity: string

  price: number
  mrp?: number
  discountPercentage?: number

  currency?: string

  deliveryTime?: string

  isAvailable?: boolean

  cartQuantity?: number

  variants?: ProductVariant[]

  selectedVariantId?: string

  benefits?: ProductBenefit[]

  description?: string

  details?: Record<string, string>

  tags?: string[]
}

export interface ProductSection {
  title: string
  products: Product[]
}

export interface ProductDetailsPageData {
  product: Product

  storeFeatures: StoreFeature[]

  similarProducts?: Product[]

  topCategoryProducts?: Product[]
}
