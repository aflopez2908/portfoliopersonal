// GSAP installation script for Next.js
// Run this to install GSAP and its plugins

const { execSync } = require("child_process")

try {
  console.log("Installing GSAP...")
  execSync("npm install gsap", { stdio: "inherit" })

  console.log("GSAP installed successfully!")
  console.log("You can now use GSAP animations in your components.")
} catch (error) {
  console.error("Error installing GSAP:", error.message)
}
