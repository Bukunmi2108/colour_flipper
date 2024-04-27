const colors = [
  "#FF6363", // Bright orange
  "#C5E1A5", // Light green
  "#FDFEFE", // Off-white
  "#81C78D", // Seafoam green
  "#D6A0C8", // Lavender pink
  "#48C9B0", // Turquoise
  "#ECEABE", // Light dusty rose
  "#FFCC99", // Peach
  "#73C2FB", // Sky blue
  "#A2A2A2", // Light charcoal
  "#F9F2E7", // Light cream
  "#9D38BD", // Plum purple
  "#A0D6E8", // Light blue
  "#F19C69", // Salmon pink
  "#38A3A5", // Teal blue
  "#E74C3C", // Cherry red
  "#2ECC71", // Emerald green
  "#FFEBEE", // Pale pink
  "#D7CCC8", // Light taupe
  "#1ABC9C", // Turquoise blue

  "#9B59B6", // Amethyst
  "#EFC7C7", // Light pink
  "#F0717A", // Rose red
  "#BBDEFB", // Light lavender
  "#C279A7", // Mauve
  "#3498DB", // Bright blue
  "#95A5A6", // Grayish blue
  "#FCF3CF", // Ivory
  "#D95B43", // Terracotta
  "#92E1C0", // Seafoam green

  "#F0CA42", // Sunflower yellow
  "#29ABCA", // Light blue
  "#D4AC0D", // Mustard yellow
  "#BDC3C5", // Silver
  "#273C75", // Navy blue
  "#EEB763", // Mango orange
  "#43A047", // Forest green
  "#D870DB", // Orchid purple
  "#FAEBD7", // Light blush pink
  "#71DCFA", // Sky blue
];

const btn = document.getElementById('btn');
const colourCode = document.querySelector('span');

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];

  colourCode.textContent = colors[randomNumber];

  colourCode.style.color = colors[randomNumber];
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}