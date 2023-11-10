window.onload = () => {
    document.querySelector(".message-button").onclick = () => {
        const userNameField = document.querySelector(".username-field>div>span").innerText;
        if (confirm("Would you like to contact me on Telegram?")) {
            window.open(`https://t.me/${userNameField.slice(1)}`, '_blank');
        }
    };
    document.querySelector(".call-button").onclick = () => {
        alert("This button is only a visual element");
    };
    document.querySelector(".more-button").onclick = () => {
        if (confirm("Want to see my GitHub profile?")) {
            window.open('https://github.com/koval01', '_blank');
        }
    };
};