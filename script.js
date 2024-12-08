const btn = document.querySelector("#emojis");
let emojis = [
    "😊","😂","😍","❤","😒","😘","😁","💕","🤷‍♀️","😢","😎","😉","😜","😢","👀","🤦‍♂️","🤔","😆","🤩","🥰","😛","🙄","🤐"
];


btn.addEventListener("mouseover",()=>{
    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
})