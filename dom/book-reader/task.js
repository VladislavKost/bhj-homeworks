const fontSizeControl = document.querySelector(".book__control_font-size");
const fontColorControl = document.querySelector(".book__control_color");
const bookBackgroundControl = document.querySelector(
  ".book__control_background"
);

const book = document.getElementById("book");
const activeFontSizeClass = "font-size_active";
const activeFontColorClass = "color_active";
const activeBackgroundColorClass = "color_active";

const fontSizes = {
  small: "book_fs-small",
  big: "book_fs-big",
};

const fontColors = {
  black: "book_color-black",
  gray: "book_color-gray",
  whitesmoke: "book_color-whitesmoke",
};

const backgroundColors = {
  gray: "book_bg-gray",
  black: "book_bg-black",
  white: "book_bg-white",
};

// Change font size
fontSizeControl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("font-size")) {
    fontSizeControl.querySelectorAll(".font-size").forEach((control) => {
      control.classList.remove(activeFontSizeClass);
    });

    e.target.classList.add(activeFontSizeClass);

    const newSize = e.target.getAttribute("data-size");
    book.classList.remove("book_fs-big", "book_fs-small");
    if (newSize) {
      book.classList.add(fontSizes[newSize] ? fontSizes[newSize] : "");
    }
  }
});

// Change font color
fontColorControl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("color")) {
    fontColorControl.querySelectorAll(".color").forEach((control) => {
      control.classList.remove(activeFontColorClass);
    });

    e.target.classList.add(activeFontColorClass);

    const newColor = e.target.getAttribute("data-text-color");
    book.classList.remove(
      "book_color-black",
      "book_color-whitesmoke",
      "book_color-gray"
    );
    if (newColor) {
      book.classList.add(
        fontColors[newColor] ? fontColors[newColor] : fontColors["black"]
      );
    }
  }
});

// Change background color
bookBackgroundControl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("color")) {
    bookBackgroundControl.querySelectorAll(".color").forEach((control) => {
      control.classList.remove(activeBackgroundColorClass);
    });

    e.target.classList.add(activeBackgroundColorClass);

    const newBackgroundColor = e.target.getAttribute("data-bg-color");
    book.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white");
    if (newBackgroundColor) {
      book.classList.add(
        backgroundColors[newBackgroundColor]
          ? backgroundColors[newBackgroundColor]
          : backgroundColors["white"]
      );
    }
  }
});
