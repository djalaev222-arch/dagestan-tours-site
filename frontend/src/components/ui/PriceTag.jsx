const formatter = new Intl.NumberFormat('ru-RU')

export function PriceTag({ price }) {
  return (
    <span className="price-tag">
      <span className="price-tag__from">от</span>
      <span className="price-tag__value">{formatter.format(price)} ₽</span>
    </span>
  )
}
