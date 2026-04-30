import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hello Samsilo Digital Hub, I need help with a campus digital service.")}
      target="_blank"
      rel="noreferrer"
      className="brand-floating-button fixed bottom-4 right-4 z-50 inline-flex size-12 items-center justify-center rounded-lg text-white shadow-xl transition sm:bottom-5 sm:right-5 sm:size-14"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
