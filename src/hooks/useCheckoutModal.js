import { useSyncExternalStore } from "react";
import {
  subscribeCheckout,
  isCheckoutOpen,
  openCheckout,
  closeCheckout,
} from "@/lib/checkout-modal";

export function useCheckoutModal() {
  const isOpen = useSyncExternalStore(subscribeCheckout, isCheckoutOpen, () => false);
  return { isOpen, openCheckout, closeCheckout };
}