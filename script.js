var Monthlycard = new Vue({
    el: "#monthly",
    data: {
        title: {
            month: {
                en: 'JANUARY',
                en_ta: 'ஜனவரி',
                ta: 'மார்கழி - தை',
            },
            year: {
                en: 2019,
                ta: 'ஸ்ரீ ஹேவிளம்பி வருடம்',
            },
        },
        dates: [
            {
                date: {
                    hijri: '',
                    en: '',
                    ta: '',
                },
                month: {
                    hijri: '',
                    ta: '',
                },
            },
            {
                date: {
                    hijri: '',
                    en: '',
                    ta: '',
                },
                month: {
                    hijri: '',
                    ta: '',
                },
            },
            {
                date: {
                    hijri: '',
                    en: '',
                    ta: '',
                },
                month: {
                    hijri: '',
                    ta: '',
                },
            },
        ],
    },
});