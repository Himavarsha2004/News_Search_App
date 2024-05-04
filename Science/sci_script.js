const apiKey = '87ab7e5213f94c5d9b1334d9515c0b6a';
const blogcontainer = document.getElementById("blog-container");
const searchField = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

async function fetchTopNewsWithImages() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=science&pageSize=20&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
        
        // If there are fewer than 10 articles with images, return all of them
        if (articlesWithImages.length < 10) {
            return articlesWithImages;
        }
        
        // Otherwise, return the first 10 articles with images
        return articlesWithImages.slice(0, 10);
    } catch (error) {
        console.error("Error fetching news with images", error);
        return [];
    }
}



async function fetchBuisnessNewsQuery(query) {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?q=${query}&country=in&category=science&pageSize=20&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const articlesWithImages = data.articles.filter(article => article.urlToImage !== null);
        return articlesWithImages.slice(0, 10); // Get the top 10 articles with images
    } catch (error) {
        console.error("Error fetching news with images", error);
        return [];
    }
}

function displayBlogs(articles) {
    blogcontainer.innerHTML = "";
    articles.forEach(article => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        const truncatedTitle = article.title.length > 30 ? article.title.slice(0, 30) + "...." : article.title;
        title.textContent = truncatedTitle;
        const description = document.createElement("p");
        const truncatedDes = article.description.length > 30 ? article.description.slice(0,120) + "...." : article.description;
        description.textContent = truncatedDes;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click', () => {
            window.open(article.url, "_blank");
        });
        blogcontainer.appendChild(blogCard);
    });
}

searchButton.addEventListener("click", async () => {
    const query = searchField.value.trim();
    if (query !== "") {
        try {
            const articles = await fetchBuisnessNewsQuery(query);
            displayBlogs(articles);
        } catch (error) {
            console.log("Error fetching news by query", error)
        }
    }
});

(async () => {
    try {
        const articles = await fetchTopNewsWithImages();
        displayBlogs(articles);
    } catch (error) {
        console.error("Error fetching top news with images", error);
    }
})();
