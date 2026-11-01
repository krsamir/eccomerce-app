import { useMemo, useState } from "react"
import { Clock3, ChevronDown, Plus, Minus } from "lucide-react"

import type {
  CatalogCategory,
  CatalogProduct,
  CategoryListingConfig,
} from "@/types/catalog"

interface CategoryListingPageProps {
  config: CategoryListingConfig

  onAddToCart?: (product: CatalogProduct) => void
  onRemoveFromCart?: (product: CatalogProduct) => void
  onCategoryChange?: (category: CatalogCategory) => void
  onProductClick?: (product: CatalogProduct) => void
}

/* -------------------------------------------------------------------------- */
/* Product Card                                                               */
/* -------------------------------------------------------------------------- */

interface ProductCardProps {
  product: CatalogProduct

  onAdd?: (product: CatalogProduct) => void
  onRemove?: (product: CatalogProduct) => void
  onClick?: (product: CatalogProduct) => void
}

function ProductCard({ product, onAdd, onRemove, onClick }: ProductCardProps) {
  const cartQuantity = product.cartQuantity ?? 0

  const hasDiscount =
    Boolean(product.discountPercentage) && product.discountPercentage! > 0

  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-background transition-shadow duration-200 hover:shadow-md">
      {/* ------------------------------------------------------------------ */}
      {/* Product Image                                                      */}
      {/* ------------------------------------------------------------------ */}

      <button
        type="button"
        onClick={() => onClick?.(product)}
        className="relative block aspect-square w-full overflow-hidden bg-muted/30 text-left"
      >
        {/* Discount */}
        {hasDiscount && (
          <div className="absolute top-0 left-0 z-10 flex flex-col items-center bg-blue-600 px-1.5 py-1 text-[10px] leading-[10px] font-bold text-white">
            <span>{product.discountPercentage}%</span>
            <span>OFF</span>
          </div>
        )}

        {/* Sponsored */}
        {product.isSponsored && (
          <span className="absolute top-2 right-2 z-10 rounded bg-background/90 px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground shadow-sm">
            Ad
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </button>

      {/* ------------------------------------------------------------------ */}
      {/* Product Details                                                    */}
      {/* ------------------------------------------------------------------ */}

      <div className="flex flex-1 flex-col px-3 pt-2 pb-3">
        {/* Delivery */}
        {product.deliveryTime && (
          <div className="mb-1.5 flex w-fit items-center gap-1 rounded-sm bg-muted px-1.5 py-0.5 text-[9px] font-semibold text-foreground">
            <Clock3 className="size-2.5" />

            {product.deliveryTime}
          </div>
        )}

        {/* Product name */}
        <button
          type="button"
          onClick={() => onClick?.(product)}
          className="min-h-[34px] text-left text-[13px] leading-[17px] font-semibold text-foreground hover:underline hover:underline-offset-2"
        >
          {product.name}
        </button>

        {/* Quantity */}
        <div className="mt-1 flex items-center gap-1">
          <span className="text-xs text-muted-foreground">
            {product.quantity}
          </span>

          {product.selectedOption && (
            <ChevronDown className="size-3 text-green-700" />
          )}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Price + Action                                                   */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div>
            <div className="text-sm font-bold text-foreground">
              ₹{product.price}
            </div>

            {product.mrp && product.mrp > product.price && (
              <div className="text-[11px] text-muted-foreground line-through">
                ₹{product.mrp}
              </div>
            )}
          </div>

          {/* Cart state */}
          {cartQuantity > 0 ? (
            <div className="flex h-9 items-center overflow-hidden rounded-md bg-green-700 text-white">
              <button
                type="button"
                aria-label={`Remove one ${product.name}`}
                onClick={() => onRemove?.(product)}
                className="flex size-9 items-center justify-center transition-colors hover:bg-green-800"
              >
                <Minus className="size-3.5" />
              </button>

              <span className="min-w-7 text-center text-xs font-bold">
                {cartQuantity}
              </span>

              <button
                type="button"
                aria-label={`Add one ${product.name}`}
                onClick={() => onAdd?.(product)}
                className="flex size-9 items-center justify-center transition-colors hover:bg-green-800"
              >
                <Plus className="size-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={product.isAvailable === false}
              onClick={() => onAdd?.(product)}
              className="flex h-9 min-w-[66px] items-center justify-center rounded-md border border-green-600 px-3 text-xs font-bold text-green-700 transition-colors hover:bg-green-50 active:bg-green-100 disabled:cursor-not-allowed disabled:border-muted disabled:text-muted-foreground"
            >
              {product.isAvailable === false ? "OUT" : "ADD"}
            </button>
          )}
        </div>

        {/* Options */}
        {product.optionsCount && product.optionsCount > 0 && (
          <div className="absolute right-3 bottom-3 text-[9px] font-medium text-green-700">
            {product.optionsCount}{" "}
            {product.optionsCount === 1 ? "option" : "options"}
          </div>
        )}
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/* Category Navigation                                                        */
/* -------------------------------------------------------------------------- */

interface CategoryNavigationProps {
  categories: CatalogCategory[]
  selectedCategory: string
  onChange: (category: CatalogCategory) => void
}

function CategoryNavigation({
  categories,
  selectedCategory,
  onChange,
}: CategoryNavigationProps) {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Desktop sidebar                                                    */}
      {/* ------------------------------------------------------------------ */}

      <aside className="hidden w-[78px] shrink-0 border-r border-border lg:block">
        <div className="max-h-[650px] scrollbar-thin overflow-y-auto">
          {categories.map((category) => {
            const active = selectedCategory === category.id

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onChange(category)}
                className={`relative flex min-h-[94px] w-full flex-col items-center justify-center gap-1 px-1 text-center transition-colors ${
                  active ? "bg-muted/60" : "hover:bg-muted/30"
                } `}
              >
                {active && (
                  <span className="absolute top-1/2 right-0 h-12 w-1 -translate-y-1/2 rounded-l-full bg-green-600" />
                )}

                <div className="size-12 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>

                <span
                  className={`max-w-[70px] text-[10px] leading-[12px] ${
                    active
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  } `}
                >
                  {category.name}
                </span>
              </button>
            )
          })}
        </div>
      </aside>

      {/* ------------------------------------------------------------------ */}
      {/* Mobile navigation                                                  */}
      {/* ------------------------------------------------------------------ */}

      <div className="border-b border-border px-3 py-2 lg:hidden">
        <div className="flex scrollbar-none gap-3 overflow-x-auto">
          {categories.map((category) => {
            const active = selectedCategory === category.id

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onChange(category)}
                className="flex min-w-[64px] shrink-0 flex-col items-center gap-1"
              >
                <div
                  className={`size-12 overflow-hidden rounded-lg border-2 ${
                    active ? "border-green-600" : "border-transparent"
                  } `}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </div>

                <span
                  className={`max-w-[64px] text-[9px] leading-[11px] ${
                    active
                      ? "font-semibold text-green-700"
                      : "text-muted-foreground"
                  } `}
                >
                  {category.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/* Category Description                                                       */
/* -------------------------------------------------------------------------- */

interface CategoryDescriptionProps {
  title?: string
  paragraphs: string[]
}

function CategoryDescription({ title, paragraphs }: CategoryDescriptionProps) {
  return (
    <section className="border-t border-border px-5 py-5 sm:px-8 sm:py-6">
      {title && <h2 className="text-base font-bold sm:text-lg">{title}</h2>}

      <div className="mt-3 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Main Page                                                                  */
/* -------------------------------------------------------------------------- */

export function CategoryListingPage({
  config,
  onAddToCart,
  onRemoveFromCart,
  onCategoryChange,
  onProductClick,
}: CategoryListingPageProps) {
  const initialCategory = config.categories[0]?.id ?? ""

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const selectedProducts = useMemo(() => {
    /*
     * Product filtering should eventually happen through
     * your API / React Query.
     *
     * This component intentionally does not assume
     * anything about your backend.
     */
    return config.products
  }, [config.products])

  const handleCategoryChange = (category: CatalogCategory) => {
    setSelectedCategory(category.id)

    onCategoryChange?.(category)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1280px]">
        {/* -------------------------------------------------------------- */}
        {/* Header                                                         */}
        {/* -------------------------------------------------------------- */}

        <header className="border-x border-t border-border px-4 py-3 sm:px-5">
          <h1 className="text-sm font-bold sm:text-base">{config.title}</h1>
        </header>

        {/* -------------------------------------------------------------- */}
        {/* Catalog                                                         */}
        {/* -------------------------------------------------------------- */}

        <section className="overflow-hidden border border-border bg-background">
          <div className="flex flex-col lg:flex-row">
            {config.showCategoryNavigation !== false && (
              <CategoryNavigation
                categories={config.categories}
                selectedCategory={selectedCategory}
                onChange={handleCategoryChange}
              />
            )}

            {/* Product area */}
            <div className="min-w-0 flex-1">
              <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:gap-2.5 sm:p-2.5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {selectedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={onAddToCart}
                    onRemove={onRemoveFromCart}
                    onClick={onProductClick}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------------- */}
        {/* Description                                                     */}
        {/* -------------------------------------------------------------- */}

        {config.description && (
          <CategoryDescription
            title={config.description.title}
            paragraphs={config.description.paragraphs}
          />
        )}
      </div>
    </main>
  )
}
