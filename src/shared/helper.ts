export function redirectWhatsApp(message: string = "Hi! I’d like to book a quick consultation.") {
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }
  