function fetchNews() {
    fetch('/get-news')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(news => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = ''; 

            news.forEach((item, index) => {
                const newsDiv = document.createElement('div');
                newsDiv.classList.add('news-item');
                newsDiv.innerHTML = `
                    <h2>${item.title}</h2>
                    <p>${item.details}</p>
                    <img src="${item.imageUrl}" alt="Yangilik rasmi">
                    <p><small>Yuborilgan vaqt: ${item.formattedDate}</small></p>
                    <p><strong> <img style="width:12px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO1Uy2oUURBtt45vMQZFMIKujX6EKPgDxheioMHHJ7hLMnNrjAG3iYEsffyAiGAmEmPsqu6MiBpJRMGg7oyKbo5UT93mpo1jR13mQsGlbj1P1T1RtHr+5dxoYh0JzpDgLgneEONbJoJ5YtwhxmknqKw4MIA1jnGRGJ9IgHbiBB9djF71KRWcZrCLBA/yAIxYk9UY+wcZm1RI0E2CSyTgPBnjfp2xs23wayn2OMZrc3hfF5z8U0FOcJQYby3RPAn2tQu+YMEnh2Jsy+GKccoJJoixmImgock9LNdTbCfBlHW84ARdS4IPTGMjCZ6ZwfjVaawNKrzZZgYjgV0lK6I1l+bQJDaEbY5Z8Bf9KTZ7fZ1x3PSfKcFZrbTWRGeNcS7Ttbrtye2b2OIEryz5aEsZ44gZftdBFvCdMOMLRUhVZ2+NUF9NcMAJfmSFJTisQZqWoG+ZIF+s5Y5lhtthfou/vDH6PVR5AlX+rwQkGLC3mUjbsCDaVvdKIXKM8SX6FAc9RCQ45I1HTfFSB5UbM3rCIetmqOjdD7kW45i373uMrcSYLW5YpE75LASNkF9IMPJbmmAMB91WSPDI9Gn1OdYXMe3S32vOU7qSqtfPpOuqUGjVWeWMh9qd/2i6uk7wxDPAIGN3EdIwyaz/kWWpwgneeaqoxtjb1kEJS4krYEtxgsu63/oJVfROCa4QIwkgu1d9ih1RmWP806tUXIKuPzjB+dJ0XWi/ojA5xm0nmHOCryZzxLjlBCdC3lo90d+cn9PmDrsdkYk7AAAAAElFTkSuQmCC"> ${item.views}</strong></p>
                `;
                newsContainer.appendChild(newsDiv);

                fetch(`/view-news/${index}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = '<p>Yangiliklarni yuklashda xato yuz berdi.</p>';
        });
}


window.onload = fetchNews;


var darkBody = document.body;

function dark_light(){
    darkBody.classList.toggle("dark-body");

}
