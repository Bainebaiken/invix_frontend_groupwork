export default function TopToBottom(value) {
  const result = document.querySelector(value);

  if (result) {
    result.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > window.innerHeight ||
        document.documentElement.scrollTop > window.innerHeight
      ) {
        result.style.display = "block";
      } else {
        result.style.display = "none";
      }
    });
  }
}
