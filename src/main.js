import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(+id));
    },
});

router.resolve();
// Buổi 2
// import Navigo from "navigo";

// const router = new Navigo("/", { linksSelector: "a" });
// router.on({
//     // Nếu user truy cập vào đường dẫn "/" thì làm việc gì đó
//     "/": () => console.log("home page"),
//     "/about": () => console.log("about page"),
//     "/product": () => console.log("product page"),
// });
// router.notFound(() => console.log("not found"));
// // router.notFound(() => alert("Not found"));

// router.resolve();

// import Navigo from "navigo";

// const router = new Navigo("/", { linksSelector: "a" });

// const render = (content) => {
//     document.querySelector("#app").innerHTML = content;
// };
// router.on({
//     "/": () => {
//         render("<h1>Home page</h1>");
//         // console.log("home page");
//     },
//     "/about": () => {
//         render("<h1>About page</h1>");
//         // console.log("about page");
//     },
//     "/product": () => {
//         render("<h1>Product page</h1>");
//         // console.log("about page");
//     },
// });
// router.resolve();

// Buổi3
// class Tuongphep {
//     constructor(name, congVatLy, congPhep) {
//         this.tenTuong = name;
//         this.congVatLyTuong = congVatLy;
//         this.congPhepTuong = congPhep;
//     }

//     showInfo() {
//         console.log(`
//             Ten tuong la : ${this.tenTuong}
//             Cong vat ly tuong la : ${this.congVatLyTuong}
//             Cong phep tuong la : ${this.congPhepTuong}
//         `);
//     }
// }
// const veera = new Tuongphep("Yasuo", 200, 300);
// const garen = new Tuongphep("Garen", 600, 100);
// const yasuo = new Tuongphep("Nasut", 200, 900);
// veera.showInfo();
// garen.showInfo();
// yasuo.showInfo();
