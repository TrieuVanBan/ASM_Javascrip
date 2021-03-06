import Banner from "../components/banner";
import News from "../components/news";

const HomePage = {
    render() {
        return `
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${News.render()}
            </div>
        `;
    },
};
export default HomePage;
