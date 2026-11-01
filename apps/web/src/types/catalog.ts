export interface CatalogCategory {
  id: string
  name: string
  slug?: string
  image: string
}

export interface ProductOption {
  id: string
  label: string
  value: string
}

export interface CatalogProduct {
  id: string

  name: string
  image: string

  quantity: string

  price: number
  mrp?: number

  discountPercentage?: number

  deliveryTime?: string

  /**
   * Number of available variants/options.
   *
   * Example:
   * 2 options
   * 3 options
   */
  optionsCount?: number

  /**
   * Optional advertisement/sponsored indicator.
   */
  isSponsored?: boolean

  /**
   * Whether the product is currently available.
   */
  isAvailable?: boolean

  /**
   * Optional selected quantity when the product
   * already exists in the cart.
   */
  cartQuantity?: number

  /**
   * Used when the product has selectable variants.
   */
  selectedOption?: ProductOption

  /**
   * Optional additional product metadata.
   */
  metadata?: Record<string, unknown>
}

export interface CatalogDescription {
  title?: string
  paragraphs: string[]
}

export interface CategoryListingConfig {
  title: string

  categories: CatalogCategory[]

  products: CatalogProduct[]

  description?: CatalogDescription

  /**
   * Number of products to display per row.
   * Defaults to responsive 2/3/4/5/6 layout.
   */
  showCategoryNavigation?: boolean
}
