import news from "../data";

const News = {
    render() {
        return `
        <h2 class="text-[30px] font-bold text-blue-900 mb-[20px]"">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8">
            ${news.map((post) => `
            <div class="border border-solid border-gray-300 p-[20px]">
                <a href="/product/${post.id}"><img src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="/product/${post.id}" class="text-orange-600 text-[20px] font-bold hover:text-blue-900"">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>

        <h2 class="text-[30px] font-bold text-blue-900 mb-[20px]">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8">
            ${news.map((post) => `
            <div class="border border-solid border-gray-300 p-[20px]">
                <a href="/product/${post.id}"><img src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="/product/${post.id}" class="text-orange-600 text-[20px] font-bold hover:text-blue-900"">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        `;
    },
};
export default News;
