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
            title: "boofe koor",
            author: 'sadegh hedayat',
            age: 45
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
    }
});

// <<>> بعد قرارش دادم روی این المنت
app1.mount("#app1");
app2.mount("#app2");
// توی اینس\کت وبسایت با این صحنه مواجه میشیم:
// <div id="app" data-v-app>
// data-v-app:
// یعنی این برنامه توسط ویو تحت کنترل است

