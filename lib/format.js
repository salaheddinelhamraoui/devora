import { site } from "./site";

export function formatPrice(value) {
  return `${site.currencySymbol}${Number(value).toFixed(2)}`;
}
