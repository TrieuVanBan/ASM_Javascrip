const Header = {
    render() {
        return `
        <div class="bg-blue-900 text-center ">
          <img class="w-[15%] mx-auto py-[10px]" src="../../../img/FPT_Polytechnic-logo.png" alt="">
        </div>
        
        <div class="bg-orange-400 py-[6px] flex">
            <ul class="w-[60%]  flex justify-around">
              <li><a href="/" class="text-white text-lg text-[20px] font-bold line-height hover:text-blue-600">Home Page</a></li>
              <li><a href="/about" class="text-white text-[20px] font-bold hover:text-blue-600">About Page</a></li>
              <li><a href="/product" class="text-white text-[20px] font-bold hover:text-blue-600">Product Page</a></li>
            </ul>
          <div class="w-[40%] text-right mr-[20px]">
            <input class="p-[2px] outline-none" type="text" name="" id="" placeholder="Tìm kiếm">
            <input class="bg-blue-900 text-white px-[10px] py-[2px] border border-solid border-white rounded-[2px] hover:bg-blue-800" type="submit" value="Tìm kiếm">
          </div>
        </div>
        `;
    },
};
export default Header;
