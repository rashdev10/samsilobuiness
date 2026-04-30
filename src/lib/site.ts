export const business = {
  name: "Samsilo Digital Hub",
  phoneDisplay: "09169757481",
  phoneInternational: "2349169757481",
  phoneE164: "+2349169757481",
  location: "Lagos State University of Science and Technology area, Lagos, Nigeria",
  coverage: "LASUSTECH and students across Nigerian campuses"
};

export function whatsappLink(message = "Hello Samsilo Digital Hub, I need help with a digital service."): string {
  return `https://wa.me/${business.phoneInternational}?text=${encodeURIComponent(message)}`;
}
