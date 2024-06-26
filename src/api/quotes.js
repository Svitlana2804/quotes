import { baseUrl } from "./baseUrl"
export const getQuotes = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/quotes`);
        if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
        // const data = await response.json();
        const data = [
            {
                id: 1,
                text: "Зберігайте спокій та продовжуйте",
                author: "Вінстон Черчилль",
            },
            {
                id: 2,
                text: "Хто не жив посеред бурі, той ціни не знає силі.",
                author: "Леся Українка",
            },
            {
                id: 3,
                text: "Якщо ти за все життя не посадив жодного дерева – плати за чисте повітря.",
                author: "Олександр Довженко",
            },
            {
                id: 4,
                text: "Щастя — це відчуття того, що сила зростає, що опір долається.",
                author: "Фрідріх Ніцше",
            },
            {
                id: 5,
                text: "Життя — це квітка, медом якої є любов",
                author: "Віктор Гюго",
            },
            {
                id: 6,  
                text: "Життя важке, але воно ще важче, коли ти дурний.",
                author: "Джон Вейн",
            },
            {
                id: 7,
                text: "Ви ніколи не навчитеся чомусь, тільки слухаючи самих себе.",
                author: "Джордж Клуні",
            },
            {
                id: 8,
                text: "Я люблю критику. Вона робить тебе сильнішим.",
                author: "Леброн Джеймс",
            },
            {
                id: 9,
                text: "Коли ми прагнемо стати кращими, ніж ми є, все навколо нас теж стає кращим.",
                author: "Пауло Коельо",
            },
            {
                id: 10,
                text: "Коли ви зберігаєте життя, ви зберігаєте себе.",
                author: "Джон Лангстон",
            },
            {
                id: 11,
                text: "Світ ловив мене, та не спіймав",
                author: "Григорій Сковорода",
            },
            {
                id: 12,
                text: "Ви не повинні втрачати віру в людство. Людство — це океан; якщо кілька крапель океану брудні, океан не стає брудним.",
                author: "Магатма Ґанді",
            },
            {
                id: 13,
                text: "Коли ви змінюєте життя, ви змінюєте себе.",
                author: "Джон Лангстон",
            },
            {
                id: 14,
                text: "А секунди летять. Отак можна вмерти й нічого не встигнути. Встигаєш тільки втомитися.",
                author:"Ліна Костенко",
            },
            {
                id: 15,
                text: "На світі той намудріший, хто найдужче любить життя.",
                author: "Василь Симоненко",
            },
            {
                id: 16,
                text: "Неосмислене життя не варте того, щоб його прожити",
                author: "Сократ",
            },
            {
                id: 17,
                text: "Багато людей здаються якраз перед тим, як у них щось вийде. Ніколи не знаєш, яка перешкода стане останньою.",
                author: "Чак Норріс",
            },
            {
                id: 18,
                text: "Здоров’я — це найбільший дар, задоволеність — найбільше багатство, вірність — найкращі стосунки.",
                author: "Будда",
            },
            {
                id: 19,
                text: "Мрія дає нуль, якщо її не зробити життям.",
                author: "Григорій Тютюнник",
            },
            {
                id: 20,
                text: "Щоб жить – ні в кого права не питаюсь. Щоб жить – я всі кайдани розірву",
                author: "Павло Тичина",
            },
            {
                id: 21,
                text: "Найкраща частина життя хорошої людини — це її маленькі безіменні, необтяжливі вчинки доброти й любові.",
                author: "Вільям Вордсворт",
            },
            {
                id: 22,
                text: "Якщо хочеш веселку, мусиш змиритися з дощем.",
                author: "Доллі Партон",
            },
            {
                id: 23,
                text: "Будьте щасливі за цю мить. Ця мить — твоє життя.",
                author: "Омар Хайям",
            },
            {
                id: 24,
                text: "Людина лише тоді по-справжньому дорожить життям, коли в неї є щось несумірно дорожче за власне життя.",
                author: "Василь Сухомлинський",
            },
            {
                id: 25,
                text: "Живіть кожну секунду, не вагаючись.",
                author: "Елтон Джон",
            },
            {
                id: 26,
                text: "Можливо, це і є життя… підморгування очей, підморгування зірок",
                author: "Джек Керуак",
            },
            {
                id: 27,
                text: "Життя не вимагає, щоб ми були найкращими, лише щоб ми намагалися робити все, що в наших силах",
                author: "Г.Джексон Браун ",
            },
            {
                id: 28,
                text: "Життя схоже на їзду на велосипеді. Щоб утримати рівновагу, ви повинні постійно рухатися.",
                author: "Альберт Ейнштейн",
            },
            {
                id: 29,
                text: "Чим більше людина медитує над добрими думками, тим кращим буде її світ і світ в цілому",
                author: "Конфуцій",
            },
            {
                id: 30,
                text: "Коли ви перестаєте мріяти, ви перестаєте жити.",
                author: "Малкольм Форбс",
            }
        ]
        return data;
    } catch (error) {
        console.log(error)
    }
}