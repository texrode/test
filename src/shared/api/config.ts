export const configApi = {
  url: process.env.NEXT_PUBLIC_API_URL as string,
};

export const api = {
  // отправка формы обратной связи
  send: "/send",
  // проверка капчи
  checkCaptcha: "/check/recaptcha"
}