const listeners = new Set();
let isOpen = false;

export function openCheckout() {
  isOpen = true;
  listeners.forEach((l) => l());
}

export function closeCheckout() {
  isOpen = false;
  listeners.forEach((l) => l());
}

export function subscribeCheckout(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function isCheckoutOpen() {
  return isOpen;
}