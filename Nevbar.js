fetch("Navbar.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      if (
        link.getAttribute("href") === currentPath ||
        link.pathname === window.location.pathname
      ) {
        link.classList.add("active");
      }
    });
  })
  .catch((error) => {
    console.error("Error loading the navbar:", error);
    document.getElementById("navbar").innerHTML =
      "<p>Error loading the navbar</p>";
    });
