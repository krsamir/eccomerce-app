import { useState } from "react"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react"

import type {
  Product,
  ProductDetailsPageData,
  ProductVariant,
  StoreFeature,
} from "@/types/product"

import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function formatPrice(value: number, currency = "₹"): string {
  return `${currency}${value.toLocaleString("en-IN")}`
}

function getDiscountPercentage(
  price: number,
  mrp?: number
): number | undefined {
  if (!mrp || mrp <= price) {
    return undefined
  }

  return Math.round(((mrp - price) / mrp) * 100)
}

/* -------------------------------------------------------------------------- */
/* Breadcrumb                                                                 */
/* -------------------------------------------------------------------------- */

interface BreadcrumbProps {
  product: Product
}

function Breadcrumb({ product }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-5 flex flex-wrap items-center gap-1 text-xs text-muted-foreground"
    >
      <span>Home</span>

      <span>/</span>

      <span>{product.category.name}</span>

      {product.subCategory && (
        <>
          <span>/</span>
          <span>{product.subCategory.name}</span>
        </>
      )}

      <span>/</span>

      <span className="font-medium text-foreground">{product.name}</span>
    </nav>
  )
}

/* -------------------------------------------------------------------------- */
/* Product Gallery                                                            */
/* -------------------------------------------------------------------------- */

interface ProductGalleryProps {
  product: Product
}

function ProductGallery({ product }: ProductGalleryProps) {
  const images = product.images

  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedImage = images[selectedIndex] ?? images[0]

  if (!selectedImage) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
        No image available
      </div>
    )
  }

  const goPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    )
  }

  const goNext = () => {
    setSelectedIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    )
  }

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="group relative aspect-square w-full overflow-hidden rounded-lg bg-muted/30">
        <img
          src={selectedImage.url}
          alt={selectedImage.alt ?? product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
        />

        {/* Mobile / image navigation */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous image"
              className="absolute top-1/2 left-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow transition hover:bg-background sm:hidden"
            >
              <ChevronLeft className="size-4" />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 shadow transition hover:bg-background sm:hidden"
            >
              <ChevronRight className="size-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <div className="mt-3 flex scrollbar-none gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => {
            const active = selectedIndex === index

            return (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View image ${index + 1}`}
                className={`size-16 shrink-0 overflow-hidden rounded-lg border bg-background p-0.5 transition sm:size-[68px] ${
                  active
                    ? "border-green-600 ring-1 ring-green-600"
                    : "border-border hover:border-green-400"
                } `}
              >
                <img
                  src={image.url}
                  alt=""
                  className="size-full rounded-md object-cover"
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Quantity Controller                                                        */
/* -------------------------------------------------------------------------- */

interface QuantityControllerProps {
  quantity: number
  onDecrease?: () => void
  onIncrease?: () => void
}

function QuantityController({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityControllerProps) {
  return (
    <div className="flex h-11 items-center overflow-hidden rounded-md bg-green-700 text-white">
      <button
        type="button"
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className="flex h-full w-11 items-center justify-center transition hover:bg-green-800"
      >
        <Minus className="size-4" />
      </button>

      <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="flex h-full w-11 items-center justify-center transition hover:bg-green-800"
      >
        <Plus className="size-4" />
      </button>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Variant Selector                                                           */
/* -------------------------------------------------------------------------- */

interface VariantSelectorProps {
  variants: ProductVariant[]
  selectedId?: string
  onChange?: (variant: ProductVariant) => void
}

function VariantSelector({
  variants,
  selectedId,
  onChange,
}: VariantSelectorProps) {
  const selected = variants.find((variant) => variant.id === selectedId)

  return (
    <div className="mt-5">
      <label
        htmlFor="product-variant"
        className="mb-2 block text-sm font-semibold"
      >
        Select option
      </label>

      <div className="relative">
        <select
          id="product-variant"
          value={selectedId ?? ""}
          onChange={(event) => {
            const variant = variants.find(
              (item) => item.id === event.target.value
            )

            if (variant) {
              onChange?.(variant)
            }
          }}
          className="h-11 w-full appearance-none rounded-md border border-border bg-background px-3 pr-9 text-sm transition outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
        >
          <option value="">Select an option</option>

          {variants.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.label}
              {variant.price ? ` - ${formatPrice(variant.price)}` : ""}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
      </div>

      {selected && (
        <p className="mt-1 text-xs text-muted-foreground">
          Selected: {selected.label}
        </p>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Product Information                                                        */
/* -------------------------------------------------------------------------- */

interface ProductInformationProps {
  product: Product

  quantity: number

  onIncrease?: () => void
  onDecrease?: () => void
  onAddToCart?: () => void

  onVariantChange?: (variant: ProductVariant) => void
}

function ProductInformation({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
  onVariantChange,
}: ProductInformationProps) {
  const discount =
    product.discountPercentage ??
    getDiscountPercentage(product.price, product.mrp)

  return (
    <div className="flex flex-col">
      <h1 className="text-xl leading-7 font-bold tracking-tight sm:text-2xl">
        {product.name}
      </h1>

      {/* Quantity / pack */}
      <div className="mt-4">
        <p className="text-sm font-medium">{product.quantity}</p>
      </div>

      {/* Price */}
      <div className="mt-1 flex flex-wrap items-center gap-2">
        <span className="text-lg font-bold">
          {formatPrice(product.price, product.currency)}
        </span>

        {product.mrp && product.mrp > product.price && (
          <span className="text-sm text-muted-foreground line-through">
            {formatPrice(product.mrp, product.currency)}
          </span>
        )}

        {discount && (
          <Badge className="rounded-sm bg-blue-600 px-1.5 text-[10px] font-bold hover:bg-blue-600">
            {discount}% OFF
          </Badge>
        )}
      </div>

      <p className="mt-1 text-[11px] text-muted-foreground">
        Inclusive of all taxes
      </p>

      {/* Delivery */}
      {product.deliveryTime && (
        <div className="mt-4 flex w-fit items-center gap-1.5 rounded-md bg-muted px-2 py-1.5 text-xs font-medium">
          <Clock3 className="size-3.5" />

          {product.deliveryTime}
        </div>
      )}

      {/* Variants */}
      {product.variants && product.variants.length > 0 && (
        <VariantSelector
          variants={product.variants}
          selectedId={product.selectedVariantId}
          onChange={onVariantChange}
        />
      )}

      {/* Cart */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {quantity > 0 ? (
          <QuantityController
            quantity={quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
        ) : (
          <Button
            type="button"
            onClick={onAddToCart}
            disabled={product.isAvailable === false}
            className="h-11 min-w-[130px] bg-green-700 px-6 font-semibold hover:bg-green-800"
          >
            <ShoppingCart className="mr-2 size-4" />

            {product.isAvailable === false ? "Out of stock" : "Add to cart"}
          </Button>
        )}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Why Shop With Us                                                           */
/* -------------------------------------------------------------------------- */

interface WhyShopWithUsProps {
  features: StoreFeature[]
}

function WhyShopWithUs({ features }: WhyShopWithUsProps) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold">Why shop from BharatJiKaDukan?</h2>

      <div className="mt-5 space-y-5">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start gap-3">
            {/* Feature image */}
            {feature.image ? (
              <div className="size-12 shrink-0 overflow-hidden rounded-full bg-muted">
                <img
                  src={feature.image}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            ) : (
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-lg">
                {feature.icon ?? "✓"}
              </div>
            )}

            <div className="min-w-0">
              <h3 className="text-sm font-medium">{feature.title}</h3>

              <p className="mt-0.5 text-xs leading-4 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Product Details                                                            */
/* -------------------------------------------------------------------------- */

interface ProductDetailsProps {
  product: Product
}

function ProductDetails({ product }: ProductDetailsProps) {
  const [expanded, setExpanded] = useState(false)

  const hasDetails =
    product.benefits?.length ||
    Object.keys(product.details ?? {}).length ||
    product.description

  if (!hasDetails) {
    return null
  }

  return (
    <section className="mt-10">
      <Separator className="mb-6" />

      <h2 className="text-lg font-bold">Product Details</h2>

      {/* Benefits */}
      {product.benefits && product.benefits.length > 0 && (
        <div className="mt-4 space-y-3">
          {product.benefits.map((benefit) => (
            <div key={benefit.label}>
              <p className="text-sm font-medium">{benefit.label}</p>

              <p className="mt-0.5 text-sm text-muted-foreground">
                {benefit.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Additional details */}
      {expanded &&
        product.details &&
        Object.keys(product.details).length > 0 && (
          <div className="mt-5 space-y-3">
            {Object.entries(product.details).map(([label, value]) => (
              <div key={label}>
                <p className="text-sm font-medium">{label}</p>

                <p className="text-sm text-muted-foreground">{value}</p>
              </div>
            ))}
          </div>
        )}

      {/* Description */}
      {expanded && product.description && (
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>
      )}

      {(product.details || product.description) && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-3 text-sm font-medium text-green-700 hover:underline"
        >
          {expanded ? "Show less" : "View more details"}
          <ChevronDown
            className={`ml-1 inline size-3 transition-transform ${
              expanded ? "rotate-180" : ""
            } `}
          />
        </button>
      )}
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Horizontal Product Section                                                 */
/* -------------------------------------------------------------------------- */

interface ProductCarouselProps {
  title: string
  products: Product[]

  onProductClick?: (product: Product) => void
  onAddToCart?: (product: Product) => void
}

function ProductCarousel({
  title,
  products,
  onProductClick,
  onAddToCart,
}: ProductCarouselProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>(() =>
    products.reduce(
      (result, product) => {
        result[product.id] = product.cartQuantity ?? 0

        return result
      },
      {} as Record<string, number>
    )
  )

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities((current) => ({
      ...current,
      [productId]: Math.max(0, (current[productId] ?? 0) + delta),
    }))
  }

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      <div className="grid scrollbar-thin auto-cols-[minmax(190px,1fr)] grid-flow-col gap-3 overflow-x-auto pb-2 sm:auto-cols-[210px]">
        {products.map((product) => {
          const quantity = quantities[product.id] ?? 0

          const discount =
            product.discountPercentage ??
            getDiscountPercentage(product.price, product.mrp)

          return (
            <article
              key={product.id}
              className="group min-w-0 overflow-hidden rounded-lg border border-border bg-background"
            >
              {/* Image */}
              <button
                type="button"
                onClick={() => onProductClick?.(product)}
                className="relative block aspect-square w-full overflow-hidden bg-muted/30"
              >
                {discount && (
                  <span className="absolute top-0 left-0 z-10 bg-blue-600 px-1.5 py-1 text-[10px] leading-[10px] font-bold text-white">
                    {discount}%<br />
                    OFF
                  </span>
                )}

                <img
                  src={product.images[0]?.url}
                  alt={product.name}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </button>

              <div className="p-3">
                {product.deliveryTime && (
                  <div className="mb-1 flex items-center gap-1 text-[9px] font-semibold">
                    <Clock3 className="size-2.5" />

                    {product.deliveryTime}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => onProductClick?.(product)}
                  className="line-clamp-2 min-h-[34px] w-full text-left text-xs leading-4 font-semibold"
                >
                  {product.name}
                </button>

                <p className="mt-1 text-xs text-muted-foreground">
                  {product.quantity}
                </p>

                <div className="mt-2 flex items-end justify-between gap-2">
                  <div>
                    <p className="text-sm font-bold">
                      {formatPrice(product.price, product.currency)}
                    </p>

                    {product.mrp && product.mrp > product.price && (
                      <p className="text-[10px] text-muted-foreground line-through">
                        {formatPrice(product.mrp, product.currency)}
                      </p>
                    )}
                  </div>

                  {quantity > 0 ? (
                    <QuantityController
                      quantity={quantity}
                      onDecrease={() => updateQuantity(product.id, -1)}
                      onIncrease={() => updateQuantity(product.id, 1)}
                    />
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        updateQuantity(product.id, 1)

                        onAddToCart?.(product)
                      }}
                      className="h-8 border-green-600 px-4 text-xs font-semibold text-green-700 hover:bg-green-50 hover:text-green-700"
                    >
                      ADD
                    </Button>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Main Component                                                             */
/* -------------------------------------------------------------------------- */

export interface ProductDetailsPageProps {
  data: ProductDetailsPageData

  onAddToCart?: (product: Product) => void

  onProductClick?: (product: Product) => void

  onVariantChange?: (product: Product, variant: ProductVariant) => void
}

export function ProductDetailsPage({
  data,
  onAddToCart,
  onProductClick,
  onVariantChange,
}: ProductDetailsPageProps) {
  const { product } = data

  const [quantity, setQuantity] = useState(product.cartQuantity ?? 0)

  const increaseQuantity = () => {
    setQuantity((current) => current + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(0, current - 1))
  }

  const handleAddToCart = () => {
    setQuantity(1)
    onAddToCart?.(product)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-5 sm:px-6 lg:px-8">
        <Breadcrumb product={product} />

        {/* ================================================================ */}
        {/* Product overview                                                 */}
        {/* ================================================================ */}

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery */}
          <div className="min-w-0">
            <ProductGallery product={product} />

            {/* Product details appear below gallery on desktop,
                matching the supplied reference. */}
            <div className="hidden lg:block">
              <ProductDetails product={product} />
            </div>
          </div>

          {/* Information */}
          <div className="min-w-0">
            <ProductInformation
              product={product}
              quantity={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onAddToCart={handleAddToCart}
              onVariantChange={(variant) => onVariantChange?.(product, variant)}
            />

            <WhyShopWithUs features={data.storeFeatures} />
          </div>
        </section>

        {/* Product details on mobile */}
        <div className="lg:hidden">
          <ProductDetails product={product} />
        </div>

        {/* ================================================================ */}
        {/* Similar products                                                 */}
        {/* ================================================================ */}

        {data.similarProducts && data.similarProducts.length > 0 && (
          <ProductCarousel
            title="Similar products"
            products={data.similarProducts}
            onProductClick={onProductClick}
            onAddToCart={onAddToCart}
          />
        )}

        {/* ================================================================ */}
        {/* Category products                                                */}
        {/* ================================================================ */}

        {data.topCategoryProducts && data.topCategoryProducts.length > 0 && (
          <ProductCarousel
            title={`Top products in ${product.category.name}`}
            products={data.topCategoryProducts}
            onProductClick={onProductClick}
            onAddToCart={onAddToCart}
          />
        )}
      </div>
    </main>
  )
}
