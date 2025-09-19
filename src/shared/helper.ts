export function redirectWhatsApp(
  message: string = "Hi! I’d like to book a quick consultation.",
  phone: string = "917204598621" // 91 = India country code + number
) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.location.href = url;
}



