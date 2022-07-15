const first = document.getElementsByClassName("open")
const second = document.getElementsByClassName("opened")
const roTate = document.getElementsByClassName("rotater")

const form = document.getElementById("form")
const email = document.getElementById("email")
const brand = document.querySelector(".brand")
const whoops = document.querySelector(".whoops")
const errors = document.querySelector(".error")
const us = document.querySelector(".us")

const simple = document.querySelector(".simple")
const speed = document.querySelector(".speed")
const easy = document.querySelector(".easy")

const secondImage = document.querySelector(".secondImage")
const thirdImage = document.querySelector(".thirdImage")
const fourthImage = document.querySelector(".fourthImage")

const organize = document.querySelector(".organize")
const power = document.querySelector(".power")
const collect = document.querySelector(".collect")

const mark = document.querySelector(".mark")
const inter = document.querySelector(".inter")
const share = document.querySelector(".share")

const hamburger = document.querySelector(".hamburger")
const closer = document.querySelector(".Closer")
const listing = document.querySelector(".listing")

for (let i = 0; i < first.length; i++) {
    const element = first[i];
    element.addEventListener("click", () => {
        second[i].classList.toggle("disp")
        roTate[i].classList.toggle("rotate")
        for (let j = 0; j < second.length; j++) {
            const subject = second[j];
            if (j != i) {
                subject.classList.remove("disp")
                roTate[j].classList.remove("rotate")
            }
        }
    })
}

form.addEventListener("submit", (e) => {
    if (email.value.includes("@gmail.com") ||
     email.value.includes("@outlook.com") || 
     email.value.includes("@yahoo.com") || 
     email.value.includes("@email.com")) {
        alert("Your email was submited successfully, you will recieve an email shortly")
    } else {
        e.preventDefault()
        brand.classList.add("borders")
        us.style.border = "2px solid hsl(0, 94%, 66%)"
        us.style.color = "hsl(0, 94%, 66%)"
        us.style.backgroundColor = "white"
        brand.style.height = "auto"
        errors.style.display = "block"
        whoops.style.display = "block"
    }
})

form.addEventListener("input", () => {
    brand.classList.remove("borders")
    whoops.style.display = "none"
    errors.style.display = "none"
    brand.style.height = "40px"
    us.style.border = "none"
    us.style.color = "white"
    us.style.backgroundColor = "hsl(0, 94%, 66%)"
})

simple.addEventListener("click", () => {
    simple.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
    speed.style.borderBottom = "4px solid transparent"
    easy.style.borderBottom = "4px solid transparent"

    secondImage.style.opacity = "1"
    thirdImage.style.opacity = "0"
    fourthImage.style.opacity = "0"

    organize.style.opacity = "1"
    power.style.opacity = "0"
    collect.style.opacity = "0"

    mark.style.opacity = "1"
    inter.style.opacity = "0"
    share.style.opacity = "0"
})

speed.addEventListener("click", () => {
    simple.style.borderBottom = "4px solid transparent"
    speed.style.borderBottom = "4px solid hsl(0, 94%, 66%)"
    easy.style.borderBottom = "4px solid transparent"

    secondImage.style.opacity = "0"
    thirdImage.style.opacity = "1"
    fourthImage.style.opacity = "0"

    organize.style.opacity = "0"
    power.style.opacity = "1"
    collect.style.opacity = "0"

    mark.style.opacity = "0"
    inter.style.opacity = "1"
    share.style.opacity = "0"
})

easy.addEventListener("click", () => {
    simple.style.borderBottom = "4px solid transparent"
    speed.style.borderBottom = "4px solid transparent"
    easy.style.borderBottom = "4px solid hsl(0, 94%, 66%)"

    secondImage.style.opacity = "0"
    thirdImage.style.opacity = "0"
    fourthImage.style.opacity = "1"

    organize.style.opacity = "0"
    power.style.opacity = "0"
    collect.style.opacity = "1"

    mark.style.opacity = "0"
    inter.style.opacity = "0"
    share.style.opacity = "1"
})

const body = document.querySelector(".body")

hamburger.addEventListener("click", () => {
    listing.style.left = "0%"
    hamburger.style.display = "none"
    body.style.overflow = "hidden"
})

closer.addEventListener("click", () => {
    listing.style.left = "-100%"
    hamburger.style.display = "block"
    body.style.overflow = "auto"
})