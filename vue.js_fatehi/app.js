console.log("hello world");
// for using object: ({})
// ساختار رو اینجا ساختم <<>>

const app1 = Vue.createApp({
    template: '<h2> this is test text 1 </h2>'    
})

const app2 = Vue.createApp({
    // date property, function
    // ما کار هایی را با استفاده از تمپلیت انجام میدیم که توسط اچ تی ام ال قابل انجام نباشند
    // template: '<h2> this is test text </h2> معادل تگ اچ ۲ واقع در فایل اچ تی ام ال
    // ما میتونیم یک تابع رو به عنوان ویژگی در نطر بگیریم که مقدار اون یک فانکشن هست که خودش ابجکت برمیگردونه
    data() {
        return {
            x:0,
            y:0,
            showBooksDetails: true,
            title_1: "boofe koor",
            author_1: 'sadegh hedayat',
            age_1: 45,
            books: [
                {title: "boofe koor", author: 'sadegh hedayat'},
                {title: "sage velgard", author: 'sadegh hedayat'},
                {title: "pedare pooldar pedare bi pool", author: 'robert kyusaki'},
            ]
        }
    },

    methods: {
        showName() {
            console.log("fff");
        },

        changeTitle(title) {
            this.title = title;
            console.log('clicked');
        },

        hideBooksDetails() {
            // this.showBooksDetails = false; // just false it
            this.showBooksDetails = !this.showBooksDetails;
        },

        handleEvent(e) {
            console.log(e); // showing the object
        },

        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

// <<>> بعد قرارش دادم روی این المنت
app1.mount("#app1");
app2.mount("#app2");
// توی اینس\کت وبسایت با این صحنه مواجه میشیم:
// <div id="app" data-v-app>
// data-v-app:
// یعنی این برنامه توسط ویو تحت کنترل است

