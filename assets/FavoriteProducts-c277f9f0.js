import{_ as g,a as u,r as v,o as s,c as r,d as e,n as d,f as c,j as b,g as i,t as n,F as m,i as x,e as _,w,h as f}from"./index-8e713a6f.js";import{f as y}from"./favoriteStore-b87fe6ff.js";import{c as k}from"./cartStore-c0a293f6.js";import"./swalMixin-8b7e2e5f.js";const C={data(){return{favoriteToggle:!0}},computed:{...u(y),...u(k)}},S={class:"pt-[96px]","data-aos":"fade-up","data-aos-duration":"800","data-aos-once":"true"},z={class:"text-center"},L=e("h3",{class:"mb-2 sm:mb-0 font-montserrat text-2xl tracking-[0.2rem] font-bold text-brown-100"},"Favorite List",-1),T=e("h2",{class:"text-5xl md:text-[64px] font-medium tracking-widest text-brown-300 font-maru mb-5"},"收藏清單",-1),F=e("p",{class:"font-bold tracking-[0.12em] text-black-light"},[i("心動不如馬上行動！"),e("br"),i(" 快把喜歡的商品帶回家吧～")],-1),N={class:"container mt-12 sm:mt-16 mb-20 min-h-[calc(100vh_-_674px)]"},$={class:"flex flex-wrap -mx-3 gap-y-5"},V={class:"relative flex flex-col h-full overflow-hidden border rounded-xl"},j={class:"relative overflow-hidden card-img aspect-square"},B=["src","alt"],I=["onClick"],R={key:0,class:"text-3xl text-red-400 material-symbols-outlined",style:{"font-variation-settings":`'FILL' 1,\r
                    'opsz' 24`}},A={key:1,class:"text-3xl text-red-400 material-symbols-outlined"},D=e("div",{class:"absolute -translate-y-1/4 -translate-x-1/2 z-[5] left-1/2 top-1/2 view-detail hidden"},[e("p",{href:"#",class:"flex items-center py-2 pl-8 pr-6 text-sm font-medium leading-normal tracking-wider text-white uppercase z-5"},[i("查看商品資訊"),e("span",{class:"ml-1 material-symbols-outlined"}," keyboard_double_arrow_right ")])],-1),E={class:"p-5 min-h-[150px] flex flex-col justify-between grow"},q={class:"mb-1 text-lg font-medium text-black lg:text-2xl"},G={class:"flex gap-1 mb-2 -ml-1 text-sm text-gray-400"},M=["onClick"],P=["onClick"],U={class:"flex items-center justify-between"},H={class:"flex flex-col"},J={key:0,class:"px-2 ml-2 text-xs text-white rounded-full font-montserrat op bg-success"},K=["onClick"],O={key:0,class:"inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mr-2",role:"status"},Q=e("span",{class:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"},"Loading... ",-1),W=[Q],X={key:0,class:"py-10 text-center"},Y=e("br",null,null,-1);function Z(o,p,ee,te,l,oe){const h=v("RouterLink");return s(),r(m,null,[e("header",S,[e("div",z,[e("button",{class:d(["p-2 mb-4 border-2 rounded-full w-[46px] h-[46px]",l.favoriteToggle?" border-danger":"border-brown-100"]),onClick:p[0]||(p[0]=c(t=>l.favoriteToggle=!l.favoriteToggle,["prevent"]))},[e("span",{class:d(["text-[26px] align-middle material-symbols-outlined",l.favoriteToggle?" text-danger":"text-brown-100"]),style:b(l.favoriteToggle?"font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;":"")}," favorite ",6)],2),L,T,F])]),e("main",N,[e("ul",$,[i(n(o.favoriteStore.cartList)+" ",1),(s(!0),r(m,null,x(o.favoriteStore.favorite,t=>(s(),r("li",{"data-aos":"fade-up","data-aos-duration":"800",class:"w-full px-3 productCard sm:w-1/2 lg:w-1/3 xl:w-1/4",key:t.id},[e("div",V,[e("div",j,[e("img",{class:"relative w-full h-full",src:t.imageUrl,alt:t.title},null,8,B),e("button",{class:"absolute top-0 right-0 z-10 p-4",onClick:c(a=>o.favoriteStore.toggleFavorite(t),["prevent"])},[o.favoriteStore.favorite.some(a=>a.id===t.id)?(s(),r("span",R," favorite ")):(s(),r("span",A," favorite "))],8,I),D]),e("div",E,[e("div",null,[e("h3",q,n(t.title),1),e("div",G,[e("span",{class:"z-10 py-[1px] px-1 hover:bg-brown-100 hover:text-white",onClick:c(a=>o.tagSearch(t.category),["prevent"])},"# "+n(t.category),9,M),(s(!0),r(m,null,x(t.tag,a=>(s(),r("span",{class:"z-10 py-[1px] px-1 hover:bg-brown-100 hover:text-white",onClick:c(se=>o.tagSearch(a),["prevent"]),key:a},"# "+n(a),9,P))),128))])]),e("div",U,[e("div",H,[e("div",null,[e("span",{class:d(["text-xl font-medium text-black-light",{"text-success":t.price!==t.origin_price}])},"NT "+n(o.$filters.currency(t.price)),3),t.price!==t.origin_price?(s(),r("span",J,"SALE")):f("",!0)]),e("span",{class:d(["text-xs text-gray-500 line-through",{hidden:t.price===t.origin_price}])}," NT "+n(o.$filters.currency(t.origin_price)),3)]),e("button",{type:"button",class:"z-10 flex items-center py-2 text-sm font-medium leading-normal tracking-wider text-white uppercase transition duration-150 ease-in-out rounded-full px-7 bg-brown-300 focus:outline-none focus:ring-0 active:bg-cerulean-700 hover:opacity-80",onClick:c(a=>o.cartStore.addToCart(t,1),["prevent"])},[o.cartStore.status.loadingIcon===t.id?(s(),r("div",O,W)):f("",!0),i(" 加入購物車 ")],8,K)])]),_(h,{to:"product/"+t.id,class:"after:z-[9] after:top-0 after:left-0 after:right-0 after:absolute after:inset-0"},null,8,["to"])])]))),128))]),o.favoriteStore.favorite.length===0?(s(),r("p",X,[i("目前沒有喜歡的商品"),Y,_(h,{to:"/shop",class:"z-10 items-center inline-block mx-1 font-medium leading-normal tracking-wider uppercase transition duration-150 ease-in-out border-b text-brown-300 border-brown-300 hover:opacity-80"},{default:w(()=>[i("點我")]),_:1}),i("來逛逛！")])):f("",!0)])],64)}const le=g(C,[["render",Z]]);export{le as default};