const pageTitle = 'SPA Application'
const router = {
  "/": { template: "./index.html", title: `خانه | ${pageTitle}` },
  404: { template: "./404.html", title: `پیدا نشد | ${pageTitle}` },
  "/article.html": { template: "./article.html", title: `مقاله ها | ${pageTitle}` },
  "/blog.html": { template: "./blog.html", title: `بلاگ | ${pageTitle}` },
  "/cart.html": { template: "./cart.html", title: `سبد خرید | ${pageTitle}` },
  "/courses.html": { template: "./courses.html", title: `دوره ها | ${pageTitle}` },
  "/product.html": { template: "./product.html", title: `محصولات | ${pageTitle}` },
};
export default router;
