import data from "../data";

const DetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);
        return `
            <div>
                <h1 class="text-[25px] font-extrabold text-blue-900 mt-[40px] mb-[20px]">${result.title}</h1>
                <img src="${result.img}" alt="" />
                <p class="text-[18px] mt-[20px] mb-[200px] font-serif">${result.desc}</p>
            </div>
        `;
    },
};
export default DetailPage;
