(function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], e) : e(jQuery, moment)
})(function (e, t) {
    (function () {
        (t.defineLocale || t.lang).call(t, "ar-ma", {
            months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
            weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), e.fullCalendar.datepickerLang("ar-ma", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 6,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("ar-ma", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى"
        })
    })(),
    function () {
        var a = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            };
        (t.defineLocale || t.lang).call(t, "ar-sa", {
            months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), e.fullCalendar.datepickerLang("ar-sa", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 6,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("ar-sa", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "ar-tn", {
            months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[اليوم على الساعة] LT",
                nextDay: "[غدا على الساعة] LT",
                nextWeek: "dddd [على الساعة] LT",
                lastDay: "[أمس على الساعة] LT",
                lastWeek: "dddd [على الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "في %s",
                past: "منذ %s",
                s: "ثوان",
                m: "دقيقة",
                mm: "%d دقائق",
                h: "ساعة",
                hh: "%d ساعات",
                d: "يوم",
                dd: "%d أيام",
                M: "شهر",
                MM: "%d أشهر",
                y: "سنة",
                yy: "%d سنوات"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("ar-tn", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 6,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("ar-tn", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى"
        })
    }(),
    function () {
        var a = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            },
            n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            },
            r = function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5
            },
            i = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            },
            s = function (e) {
                return function (t, a) {
                    var n = r(t),
                        s = i[e][r(t)];
                    return 2 === n && (s = s[a ? 0 : 1]), s.replace(/%d/i, t)
                }
            },
            o = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
        (t.defineLocale || t.lang).call(t, "ar", {
            months: o,
            monthsShort: o,
            weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
                return "م" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ص" : "م"
            },
            calendar: {
                sameDay: "[اليوم عند الساعة] LT",
                nextDay: "[غدًا عند الساعة] LT",
                nextWeek: "dddd [عند الساعة] LT",
                lastDay: "[أمس عند الساعة] LT",
                lastWeek: "dddd [عند الساعة] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "بعد %s",
                past: "منذ %s",
                s: s("s"),
                m: s("m"),
                mm: s("m"),
                h: s("h"),
                hh: s("h"),
                d: s("d"),
                dd: s("d"),
                M: s("M"),
                MM: s("M"),
                y: s("y"),
                yy: s("y")
            },
            preparse: function (e) {
                return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                }).replace(/,/g, "،")
            },
            week: {
                dow: 6,
                doy: 12
            }
        }), e.fullCalendar.datepickerLang("ar", "ar", {
            closeText: "إغلاق",
            prevText: "&#x3C;السابق",
            nextText: "التالي&#x3E;",
            currentText: "اليوم",
            monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            weekHeader: "أسبوع",
            dateFormat: "dd/mm/yy",
            firstDay: 6,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("ar", {
            buttonText: {
                month: "شهر",
                week: "أسبوع",
                day: "يوم",
                list: "أجندة"
            },
            allDayText: "اليوم كله",
            eventLimitText: "أخرى"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "bg", {
            months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "D.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Днес в] LT",
                nextDay: "[Утре в] LT",
                nextWeek: "dddd [в] LT",
                lastDay: "[Вчера в] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "след %s",
                past: "преди %s",
                s: "няколко секунди",
                m: "минута",
                mm: "%d минути",
                h: "час",
                hh: "%d часа",
                d: "ден",
                dd: "%d дни",
                M: "месец",
                MM: "%d месеца",
                y: "година",
                yy: "%d години"
            },
            ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
                var t = e % 10,
                    a = e % 100;
                return 0 === e ? e + "-ев" : 0 === a ? e + "-ен" : a > 10 && 20 > a ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("bg", "bg", {
            closeText: "затвори",
            prevText: "&#x3C;назад",
            nextText: "напред&#x3E;",
            nextBigText: "&#x3E;&#x3E;",
            currentText: "днес",
            monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
            dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
            weekHeader: "Wk",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("bg", {
            buttonText: {
                month: "Месец",
                week: "Седмица",
                day: "Ден",
                list: "График"
            },
            allDayText: "Цял ден",
            eventLimitText: function (e) {
                return "+още " + e
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "ca", {
            months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
            monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
            weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: function () {
                    return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextDay: function () {
                    return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastDay: function () {
                    return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "fa %s",
                s: "uns segons",
                m: "un minut",
                mm: "%d minuts",
                h: "una hora",
                hh: "%d hores",
                d: "un dia",
                dd: "%d dies",
                M: "un mes",
                MM: "%d mesos",
                y: "un any",
                yy: "%d anys"
            },
            ordinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
                var a = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                return ("w" === t || "W" === t) && (a = "a"), e + a
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("ca", "ca", {
            closeText: "Tanca",
            prevText: "Anterior",
            nextText: "Següent",
            currentText: "Avui",
            monthNames: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
            monthNamesShort: ["gen", "feb", "març", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"],
            dayNames: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
            dayNamesShort: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
            dayNamesMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
            weekHeader: "Set",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("ca", {
            buttonText: {
                month: "Mes",
                week: "Setmana",
                day: "Dia",
                list: "Agenda"
            },
            allDayText: "Tot el dia",
            eventLimitText: "més"
        })
    }(),
    function () {
        function a(e) {
            return e > 1 && 5 > e && 1 !== ~~(e / 10)
        }

        function n(e, t, n, r) {
            var i = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "pár sekund" : "pár sekundami";
                case "m":
                    return t ? "minuta" : r ? "minutu" : "minutou";
                case "mm":
                    return t || r ? i + (a(e) ? "minuty" : "minut") : i + "minutami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? i + (a(e) ? "hodiny" : "hodin") : i + "hodinami";
                case "d":
                    return t || r ? "den" : "dnem";
                case "dd":
                    return t || r ? i + (a(e) ? "dny" : "dní") : i + "dny";
                case "M":
                    return t || r ? "měsíc" : "měsícem";
                case "MM":
                    return t || r ? i + (a(e) ? "měsíce" : "měsíců") : i + "měsíci";
                case "y":
                    return t || r ? "rok" : "rokem";
                case "yy":
                    return t || r ? i + (a(e) ? "roky" : "let") : i + "lety"
            }
        }
        var r = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            i = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        (t.defineLocale || t.lang).call(t, "cs", {
            months: r,
            monthsShort: i,
            monthsParse: function (e, t) {
                var a, n = [];
                for (a = 0; 12 > a; a++) n[a] = RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
                return n
            }(r, i),
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[dnes v] LT",
                nextDay: "[zítra v] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT"
                    }
                },
                lastDay: "[včera v] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "před %s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("cs", "cs", {
            closeText: "Zavřít",
            prevText: "&#x3C;Dříve",
            nextText: "Později&#x3E;",
            currentText: "Nyní",
            monthNames: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
            monthNamesShort: ["led", "úno", "bře", "dub", "kvě", "čer", "čvc", "srp", "zář", "říj", "lis", "pro"],
            dayNames: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
            dayNamesShort: ["ne", "po", "út", "st", "čt", "pá", "so"],
            dayNamesMin: ["ne", "po", "út", "st", "čt", "pá", "so"],
            weekHeader: "Týd",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("cs", {
            buttonText: {
                month: "Měsíc",
                week: "Týden",
                day: "Den",
                list: "Agenda"
            },
            allDayText: "Celý den",
            eventLimitText: function (e) {
                return "+další: " + e
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "da", {
            months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd [d.] D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[I dag kl.] LT",
                nextDay: "[I morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[I går kl.] LT",
                lastWeek: "[sidste] dddd [kl] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "%s siden",
                s: "få sekunder",
                m: "et minut",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dage",
                M: "en måned",
                MM: "%d måneder",
                y: "et år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("da", "da", {
            closeText: "Luk",
            prevText: "&#x3C;Forrige",
            nextText: "Næste&#x3E;",
            currentText: "Idag",
            monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNamesMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            weekHeader: "Uge",
            dateFormat: "dd-mm-yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("da", {
            buttonText: {
                month: "Måned",
                week: "Uge",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dagen",
            eventLimitText: "flere"
        })
    }(),
    function () {
        function a(e, t, a) {
            var n = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? n[a][0] : n[a][1]
        }(t.defineLocale || t.lang).call(t, "de-at", {
            months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[Morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[Gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: a,
                mm: "%d Minuten",
                h: a,
                hh: "%d Stunden",
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("de-at", "de", {
            closeText: "Schließen",
            prevText: "&#x3C;Zurück",
            nextText: "Vor&#x3E;",
            currentText: "Heute",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekHeader: "KW",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("de-at", {
            buttonText: {
                month: "Monat",
                week: "Woche",
                day: "Tag",
                list: "Terminübersicht"
            },
            allDayText: "Ganztägig",
            eventLimitText: function (e) {
                return "+ weitere " + e
            }
        })
    }(),
    function () {
        function a(e, t, a) {
            var n = {
                m: ["eine Minute", "einer Minute"],
                h: ["eine Stunde", "einer Stunde"],
                d: ["ein Tag", "einem Tag"],
                dd: [e + " Tage", e + " Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: [e + " Monate", e + " Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: [e + " Jahre", e + " Jahren"]
            };
            return t ? n[a][0] : n[a][1]
        }(t.defineLocale || t.lang).call(t, "de", {
            months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Heute um] LT [Uhr]",
                sameElse: "L",
                nextDay: "[Morgen um] LT [Uhr]",
                nextWeek: "dddd [um] LT [Uhr]",
                lastDay: "[Gestern um] LT [Uhr]",
                lastWeek: "[letzten] dddd [um] LT [Uhr]"
            },
            relativeTime: {
                future: "in %s",
                past: "vor %s",
                s: "ein paar Sekunden",
                m: a,
                mm: "%d Minuten",
                h: a,
                hh: "%d Stunden",
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("de", "de", {
            closeText: "Schließen",
            prevText: "&#x3C;Zurück",
            nextText: "Vor&#x3E;",
            currentText: "Heute",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            weekHeader: "KW",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("de", {
            buttonText: {
                month: "Monat",
                week: "Woche",
                day: "Tag",
                list: "Terminübersicht"
            },
            allDayText: "Ganztägig",
            eventLimitText: function (e) {
                return "+ weitere " + e
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "el", {
            monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
            monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
            months: function (e, t) {
                return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
            },
            monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function (e, t, a) {
                return e > 11 ? a ? "μμ" : "ΜΜ" : a ? "πμ" : "ΠΜ"
            },
            isPM: function (e) {
                return "μ" === (e + "").toLowerCase()[0]
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendarEl: {
                sameDay: "[Σήμερα {}] LT",
                nextDay: "[Αύριο {}] LT",
                nextWeek: "dddd [{}] LT",
                lastDay: "[Χθες {}] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT"
                    }
                },
                sameElse: "L"
            },
            calendar: function (e, t) {
                var a = this._calendarEl[e],
                    n = t && t.hours();
                return "function" == typeof a && (a = a.apply(t)), a.replace("{}", 1 === n % 12 ? "στη" : "στις")
            },
            relativeTime: {
                future: "σε %s",
                past: "%s πριν",
                s: "λίγα δευτερόλεπτα",
                m: "ένα λεπτό",
                mm: "%d λεπτά",
                h: "μία ώρα",
                hh: "%d ώρες",
                d: "μία μέρα",
                dd: "%d μέρες",
                M: "ένας μήνας",
                MM: "%d μήνες",
                y: "ένας χρόνος",
                yy: "%d χρόνια"
            },
            ordinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("el", "el", {
            closeText: "Κλείσιμο",
            prevText: "Προηγούμενος",
            nextText: "Επόμενος",
            currentText: "Σήμερα",
            monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            weekHeader: "Εβδ",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("el", {
            buttonText: {
                month: "Μήνας",
                week: "Εβδομάδα",
                day: "Ημέρα",
                list: "Ατζέντα"
            },
            allDayText: "Ολοήμερο",
            eventLimitText: "περισσότερα"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "en-au", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10,
                    a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + a
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("en-au", "en-AU", {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("en-au")
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                LTS: "h:mm:ss A",
                L: "YYYY-MM-DD",
                LL: "D MMMM, YYYY",
                LLL: "D MMMM, YYYY LT",
                LLLL: "dddd, D MMMM, YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10,
                    a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + a
            }
        }), e.fullCalendar.lang("en-ca")
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "en-gb", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            ordinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
                var t = e % 10,
                    a = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + a
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("en-gb", "en-GB", {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("en-gb")
    }(),
    function () {
        var a = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
        (t.defineLocale || t.lang).call(t, "es", {
            months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
            monthsShort: function (e, t) {
                return /-MMM-/.test(t) ? n[e.month()] : a[e.month()]
            },
            weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY LT",
                LLLL: "dddd, D [de] MMMM [de] YYYY LT"
            },
            calendar: {
                sameDay: function () {
                    return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextDay: function () {
                    return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                nextWeek: function () {
                    return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastDay: function () {
                    return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                lastWeek: function () {
                    return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "en %s",
                past: "hace %s",
                s: "unos segundos",
                m: "un minuto",
                mm: "%d minutos",
                h: "una hora",
                hh: "%d horas",
                d: "un día",
                dd: "%d días",
                M: "un mes",
                MM: "%d meses",
                y: "un año",
                yy: "%d años"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("es", "es", {
            closeText: "Cerrar",
            prevText: "&#x3C;Ant",
            nextText: "Sig&#x3E;",
            currentText: "Hoy",
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("es", {
            buttonText: {
                month: "Mes",
                week: "Semana",
                day: "Día",
                list: "Agenda"
            },
            allDayHtml: "Todo<br/>el día",
            eventLimitText: "más"
        })
    }(),
    function () {
        var a = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            },
            n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            };
        (t.defineLocale || t.lang).call(t, "fa", {
            months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
            weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
                return /بعد از ظهر/.test(e)
            },
            meridiem: function (e) {
                return 12 > e ? "قبل از ظهر" : "بعد از ظهر"
            },
            calendar: {
                sameDay: "[امروز ساعت] LT",
                nextDay: "[فردا ساعت] LT",
                nextWeek: "dddd [ساعت] LT",
                lastDay: "[دیروز ساعت] LT",
                lastWeek: "dddd [پیش] [ساعت] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "در %s",
                past: "%s پیش",
                s: "چندین ثانیه",
                m: "یک دقیقه",
                mm: "%d دقیقه",
                h: "یک ساعت",
                hh: "%d ساعت",
                d: "یک روز",
                dd: "%d روز",
                M: "یک ماه",
                MM: "%d ماه",
                y: "یک سال",
                yy: "%d سال"
            },
            preparse: function (e) {
                return e.replace(/[۰-۹]/g, function (e) {
                    return n[e]
                }).replace(/،/g, ",")
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                }).replace(/,/g, "،")
            },
            ordinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: {
                dow: 6,
                doy: 12
            }
        }), e.fullCalendar.datepickerLang("fa", "fa", {
            closeText: "بستن",
            prevText: "&#x3C;قبلی",
            nextText: "بعدی&#x3E;",
            currentText: "امروز",
            monthNames: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
            monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
            dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            weekHeader: "هف",
            dateFormat: "yy/mm/dd",
            firstDay: 6,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("fa", {
            buttonText: {
                month: "ماه",
                week: "هفته",
                day: "روز",
                list: "برنامه"
            },
            allDayText: "تمام روز",
            eventLimitText: function (e) {
                return "بیش از " + e
            }
        })
    }(),
    function () {
        function a(e, t, a, r) {
            var i = "";
            switch (a) {
                case "s":
                    return r ? "muutaman sekunnin" : "muutama sekunti";
                case "m":
                    return r ? "minuutin" : "minuutti";
                case "mm":
                    i = r ? "minuutin" : "minuuttia";
                    break;
                case "h":
                    return r ? "tunnin" : "tunti";
                case "hh":
                    i = r ? "tunnin" : "tuntia";
                    break;
                case "d":
                    return r ? "päivän" : "päivä";
                case "dd":
                    i = r ? "päivän" : "päivää";
                    break;
                case "M":
                    return r ? "kuukauden" : "kuukausi";
                case "MM":
                    i = r ? "kuukauden" : "kuukautta";
                    break;
                case "y":
                    return r ? "vuoden" : "vuosi";
                case "yy":
                    i = r ? "vuoden" : "vuotta"
            }
            return i = n(e, r) + " " + i
        }

        function n(e, t) {
            return 10 > e ? t ? i[e] : r[e] : e
        }
        var r = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            i = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", r[7], r[8], r[9]];
        (t.defineLocale || t.lang).call(t, "fi", {
            months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
            weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "HH.mm.ss",
                L: "DD.MM.YYYY",
                LL: "Do MMMM[ta] YYYY",
                LLL: "Do MMMM[ta] YYYY, [klo] LT",
                LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
                l: "D.M.YYYY",
                ll: "Do MMM YYYY",
                lll: "Do MMM YYYY, [klo] LT",
                llll: "ddd, Do MMM YYYY, [klo] LT"
            },
            calendar: {
                sameDay: "[tänään] [klo] LT",
                nextDay: "[huomenna] [klo] LT",
                nextWeek: "dddd [klo] LT",
                lastDay: "[eilen] [klo] LT",
                lastWeek: "[viime] dddd[na] [klo] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s päästä",
                past: "%s sitten",
                s: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("fi", "fi", {
            closeText: "Sulje",
            prevText: "&#xAB;Edellinen",
            nextText: "Seuraava&#xBB;",
            currentText: "Tänään",
            monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            monthNamesShort: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"],
            dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
            dayNamesMin: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            weekHeader: "Vk",
            dateFormat: "d.m.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("fi", {
            buttonText: {
                month: "Kuukausi",
                week: "Viikko",
                day: "Päivä",
                list: "Tapahtumat"
            },
            allDayText: "Koko päivä",
            eventLimitText: "lisää"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "fr-ca", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|)/,
            ordinal: function (e) {
                return e + (1 === e ? "er" : "")
            }
        }), e.fullCalendar.datepickerLang("fr-ca", "fr-CA", {
            closeText: "Fermer",
            prevText: "Précédent",
            nextText: "Suivant",
            currentText: "Aujourd'hui",
            monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthNamesShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader: "Sem.",
            dateFormat: "yy-mm-dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("fr-ca", {
            buttonText: {
                month: "Mois",
                week: "Semaine",
                day: "Jour",
                list: "Mon planning"
            },
            allDayHtml: "Toute la<br/>journée",
            eventLimitText: "en plus"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "fr", {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: "[Demain à] LT",
                nextWeek: "dddd [à] LT",
                lastDay: "[Hier à] LT",
                lastWeek: "dddd [dernier à] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "un an",
                yy: "%d ans"
            },
            ordinalParse: /\d{1,2}(er|)/,
            ordinal: function (e) {
                return e + (1 === e ? "er" : "")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("fr", "fr", {
            closeText: "Fermer",
            prevText: "Précédent",
            nextText: "Suivant",
            currentText: "Aujourd'hui",
            monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
            monthNamesShort: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
            dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
            dayNamesShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            weekHeader: "Sem.",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("fr", {
            buttonText: {
                month: "Mois",
                week: "Semaine",
                day: "Jour",
                list: "Mon planning"
            },
            allDayHtml: "Toute la<br/>journée",
            eventLimitText: "en plus"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "he", {
            months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
            monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D [ב]MMMM YYYY",
                LLL: "D [ב]MMMM YYYY LT",
                LLLL: "dddd, D [ב]MMMM YYYY LT",
                l: "D/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY LT",
                llll: "ddd, D MMM YYYY LT"
            },
            calendar: {
                sameDay: "[היום ב־]LT",
                nextDay: "[מחר ב־]LT",
                nextWeek: "dddd [בשעה] LT",
                lastDay: "[אתמול ב־]LT",
                lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "בעוד %s",
                past: "לפני %s",
                s: "מספר שניות",
                m: "דקה",
                mm: "%d דקות",
                h: "שעה",
                hh: function (e) {
                    return 2 === e ? "שעתיים" : e + " שעות"
                },
                d: "יום",
                dd: function (e) {
                    return 2 === e ? "יומיים" : e + " ימים"
                },
                M: "חודש",
                MM: function (e) {
                    return 2 === e ? "חודשיים" : e + " חודשים"
                },
                y: "שנה",
                yy: function (e) {
                    return 2 === e ? "שנתיים" : 0 === e % 10 && 10 !== e ? e + " שנה" : e + " שנים"
                }
            }
        }), e.fullCalendar.datepickerLang("he", "he", {
            closeText: "סגור",
            prevText: "&#x3C;הקודם",
            nextText: "הבא&#x3E;",
            currentText: "היום",
            monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יוני", "יולי", "אוג", "ספט", "אוק", "נוב", "דצמ"],
            dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
            dayNamesMin: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !0,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("he", {
            defaultButtonText: {
                month: "חודש",
                week: "שבוע",
                day: "יום",
                list: "סדר יום"
            },
            weekNumberTitle: "שבוע",
            allDayText: "כל היום",
            eventLimitText: "אחר"
        })
    }(),
    function () {
        var a = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            },
            n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            };
        (t.defineLocale || t.lang).call(t, "hi", {
            months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
            monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
            weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
                LT: "A h:mm बजे",
                LTS: "A h:mm:ss बजे",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[कल] LT",
                nextWeek: "dddd, LT",
                lastDay: "[कल] LT",
                lastWeek: "[पिछले] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s में",
                past: "%s पहले",
                s: "कुछ ही क्षण",
                m: "एक मिनट",
                mm: "%d मिनट",
                h: "एक घंटा",
                hh: "%d घंटे",
                d: "एक दिन",
                dd: "%d दिन",
                M: "एक महीने",
                MM: "%d महीने",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function (e) {
                return e.replace(/[१२३४५६७८९०]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                })
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात" === t ? 4 > e ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.fullCalendar.datepickerLang("hi", "hi", {
            closeText: "बंद",
            prevText: "पिछला",
            nextText: "अगला",
            currentText: "आज",
            monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
            monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
            dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
            dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            weekHeader: "हफ्ता",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("hi", {
            buttonText: {
                month: "महीना",
                week: "सप्ताह",
                day: "दिन",
                list: "कार्यसूची"
            },
            allDayText: "सभी दिन",
            eventLimitText: function (e) {
                return "+अधिक " + e
            }
        })
    }(),
    function () {
        function a(e, t, a) {
            var n = e + " ";
            switch (a) {
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return n += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return n += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return n += 1 === e ? "dan" : "dana";
                case "MM":
                    return n += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return n += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
            }
        }(t.defineLocale || t.lang).call(t, "hr", {
            months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
            monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
            weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[jučer u] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "prije %s",
                s: "par sekundi",
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "dan",
                dd: a,
                M: "mjesec",
                MM: a,
                y: "godinu",
                yy: a
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("hr", "hr", {
            closeText: "Zatvori",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Danas",
            monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            weekHeader: "Tje",
            dateFormat: "dd.mm.yy.",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("hr", {
            buttonText: {
                month: "Mjesec",
                week: "Tjedan",
                day: "Dan",
                list: "Raspored"
            },
            allDayText: "Cijeli dan",
            eventLimitText: function (e) {
                return "+ još " + e
            }
        })
    }(),
    function () {
        function a(e, t, a, n) {
            var r = e;
            switch (a) {
                case "s":
                    return n || t ? "néhány másodperc" : "néhány másodperce";
                case "m":
                    return "egy" + (n || t ? " perc" : " perce");
                case "mm":
                    return r + (n || t ? " perc" : " perce");
                case "h":
                    return "egy" + (n || t ? " óra" : " órája");
                case "hh":
                    return r + (n || t ? " óra" : " órája");
                case "d":
                    return "egy" + (n || t ? " nap" : " napja");
                case "dd":
                    return r + (n || t ? " nap" : " napja");
                case "M":
                    return "egy" + (n || t ? " hónap" : " hónapja");
                case "MM":
                    return r + (n || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (n || t ? " év" : " éve");
                case "yy":
                    return r + (n || t ? " év" : " éve")
            }
            return ""
        }

        function n(e) {
            return (e ? "" : "[múlt] ") + "[" + r[this.day()] + "] LT[-kor]"
        }
        var r = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        (t.defineLocale || t.lang).call(t, "hu", {
            months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "YYYY.MM.DD.",
                LL: "YYYY. MMMM D.",
                LLL: "YYYY. MMMM D., LT",
                LLLL: "YYYY. MMMM D., dddd LT"
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
                return "u" === e.charAt(1).toLowerCase()
            },
            meridiem: function (e, t, a) {
                return 12 > e ? a === !0 ? "de" : "DE" : a === !0 ? "du" : "DU"
            },
            calendar: {
                sameDay: "[ma] LT[-kor]",
                nextDay: "[holnap] LT[-kor]",
                nextWeek: function () {
                    return n.call(this, !0)
                },
                lastDay: "[tegnap] LT[-kor]",
                lastWeek: function () {
                    return n.call(this, !1)
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "%s múlva",
                past: "%s",
                s: a,
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: a,
                dd: a,
                M: a,
                MM: a,
                y: a,
                yy: a
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("hu", "hu", {
            closeText: "bezár",
            prevText: "vissza",
            nextText: "előre",
            currentText: "ma",
            monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            dayNamesShort: ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
            weekHeader: "Hét",
            dateFormat: "yy.mm.dd.",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: ""
        }), e.fullCalendar.lang("hu", {
            buttonText: {
                month: "Hónap",
                week: "Hét",
                day: "Nap",
                list: "Napló"
            },
            allDayText: "Egész nap",
            eventLimitText: "további"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "id", {
            months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
            monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
                LT: "HH.mm",
                LTS: "LT.ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY [pukul] LT",
                LLLL: "dddd, D MMMM YYYY [pukul] LT"
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
            },
            calendar: {
                sameDay: "[Hari ini pukul] LT",
                nextDay: "[Besok pukul] LT",
                nextWeek: "dddd [pukul] LT",
                lastDay: "[Kemarin pukul] LT",
                lastWeek: "dddd [lalu pukul] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "dalam %s",
                past: "%s yang lalu",
                s: "beberapa detik",
                m: "semenit",
                mm: "%d menit",
                h: "sejam",
                hh: "%d jam",
                d: "sehari",
                dd: "%d hari",
                M: "sebulan",
                MM: "%d bulan",
                y: "setahun",
                yy: "%d tahun"
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("id", "id", {
            closeText: "Tutup",
            prevText: "&#x3C;mundur",
            nextText: "maju&#x3E;",
            currentText: "hari ini",
            monthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agus", "Sep", "Okt", "Nop", "Des"],
            dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
            dayNamesShort: ["Min", "Sen", "Sel", "Rab", "kam", "Jum", "Sab"],
            dayNamesMin: ["Mg", "Sn", "Sl", "Rb", "Km", "jm", "Sb"],
            weekHeader: "Mg",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("id", {
            buttonText: {
                month: "Bulan",
                week: "Minggu",
                day: "Hari",
                list: "Agenda"
            },
            allDayHtml: "Sehari<br/>penuh",
            eventLimitText: "lebih"
        })
    }(),
    function () {
        function a(e) {
            return 11 === e % 100 ? !0 : 1 === e % 10 ? !1 : !0
        }

        function n(e, t, n, r) {
            var i = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "m":
                    return t ? "mínúta" : "mínútu";
                case "mm":
                    return a(e) ? i + (t || r ? "mínútur" : "mínútum") : t ? i + "mínúta" : i + "mínútu";
                case "hh":
                    return a(e) ? i + (t || r ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                case "d":
                    return t ? "dagur" : r ? "dag" : "degi";
                case "dd":
                    return a(e) ? t ? i + "dagar" : i + (r ? "daga" : "dögum") : t ? i + "dagur" : i + (r ? "dag" : "degi");
                case "M":
                    return t ? "mánuður" : r ? "mánuð" : "mánuði";
                case "MM":
                    return a(e) ? t ? i + "mánuðir" : i + (r ? "mánuði" : "mánuðum") : t ? i + "mánuður" : i + (r ? "mánuð" : "mánuði");
                case "y":
                    return t || r ? "ár" : "ári";
                case "yy":
                    return a(e) ? i + (t || r ? "ár" : "árum") : i + (t || r ? "ár" : "ári")
            }
        }(t.defineLocale || t.lang).call(t, "is", {
            months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] LT",
                LLLL: "dddd, D. MMMM YYYY [kl.] LT"
            },
            calendar: {
                sameDay: "[í dag kl.] LT",
                nextDay: "[á morgun kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[í gær kl.] LT",
                lastWeek: "[síðasta] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "eftir %s",
                past: "fyrir %s síðan",
                s: n,
                m: n,
                mm: n,
                h: "klukkustund",
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("is", "is", {
            closeText: "Loka",
            prevText: "&#x3C; Fyrri",
            nextText: "Næsti &#x3E;",
            currentText: "Í dag",
            monthNames: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"],
            dayNames: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"],
            dayNamesShort: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"],
            dayNamesMin: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"],
            weekHeader: "Vika",
            dateFormat: "dd.mm.yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("is", {
            buttonText: {
                month: "Mánuður",
                week: "Vika",
                day: "Dagur",
                list: "Dagskrá"
            },
            allDayHtml: "Allan<br/>daginn",
            eventLimitText: "meira"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "it", {
            months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
            monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Oggi alle] LT",
                nextDay: "[Domani alle] LT",
                nextWeek: "dddd [alle] LT",
                lastDay: "[Ieri alle] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: function (e) {
                    return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                },
                past: "%s fa",
                s: "alcuni secondi",
                m: "un minuto",
                mm: "%d minuti",
                h: "un'ora",
                hh: "%d ore",
                d: "un giorno",
                dd: "%d giorni",
                M: "un mese",
                MM: "%d mesi",
                y: "un anno",
                yy: "%d anni"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("it", "it", {
            closeText: "Chiudi",
            prevText: "&#x3C;Prec",
            nextText: "Succ&#x3E;",
            currentText: "Oggi",
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
            dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("it", {
            buttonText: {
                month: "Mese",
                week: "Settimana",
                day: "Giorno",
                list: "Agenda"
            },
            allDayHtml: "Tutto il<br/>giorno",
            eventLimitText: function (e) {
                return "+altri " + e
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "Ah時m分",
                LTS: "LTs秒",
                L: "YYYY/MM/DD",
                LL: "YYYY年M月D日",
                LLL: "YYYY年M月D日LT",
                LLLL: "YYYY年M月D日LT dddd"
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
                return "午後" === e
            },
            meridiem: function (e) {
                return 12 > e ? "午前" : "午後"
            },
            calendar: {
                sameDay: "[今日] LT",
                nextDay: "[明日] LT",
                nextWeek: "[来週]dddd LT",
                lastDay: "[昨日] LT",
                lastWeek: "[前週]dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "数秒",
                m: "1分",
                mm: "%d分",
                h: "1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            }
        }), e.fullCalendar.datepickerLang("ja", "ja", {
            closeText: "閉じる",
            prevText: "&#x3C;前",
            nextText: "次&#x3E;",
            currentText: "今日",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            weekHeader: "週",
            dateFormat: "yy/mm/dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "年"
        }), e.fullCalendar.lang("ja", {
            buttonText: {
                month: "月",
                week: "週",
                day: "日",
                list: "予定リスト"
            },
            allDayText: "終日",
            eventLimitText: function (e) {
                return "他 " + e + " 件"
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
                LT: "A h시 m분",
                LTS: "A h시 m분 s초",
                L: "YYYY.MM.DD",
                LL: "YYYY년 MMMM D일",
                LLL: "YYYY년 MMMM D일 LT",
                LLLL: "YYYY년 MMMM D일 dddd LT"
            },
            calendar: {
                sameDay: "오늘 LT",
                nextDay: "내일 LT",
                nextWeek: "dddd LT",
                lastDay: "어제 LT",
                lastWeek: "지난주 dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s 후",
                past: "%s 전",
                s: "몇초",
                ss: "%d초",
                m: "일분",
                mm: "%d분",
                h: "한시간",
                hh: "%d시간",
                d: "하루",
                dd: "%d일",
                M: "한달",
                MM: "%d달",
                y: "일년",
                yy: "%d년"
            },
            ordinalParse: /\d{1,2}일/,
            ordinal: "%d일",
            meridiemParse: /오전|오후/,
            isPM: function (e) {
                return "오후" === e
            },
            meridiem: function (e) {
                return 12 > e ? "오전" : "오후"
            }
        }), e.fullCalendar.datepickerLang("ko", "ko", {
            closeText: "닫기",
            prevText: "이전달",
            nextText: "다음달",
            currentText: "오늘",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            weekHeader: "Wk",
            dateFormat: "yy-mm-dd",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "년"
        }), e.fullCalendar.lang("ko", {
            buttonText: {
                month: "월",
                week: "주",
                day: "일",
                list: "일정목록"
            },
            allDayText: "종일",
            eventLimitText: "개"
        })
    }(),
    function () {
        function a(e, t, a, n) {
            return t ? "kelios sekundės" : n ? "kelių sekundžių" : "kelias sekundes"
        }

        function n(e, t, a, n) {
            return t ? i(a)[0] : n ? i(a)[1] : i(a)[2]
        }

        function r(e) {
            return 0 === e % 10 || e > 10 && 20 > e
        }

        function i(e) {
            return d[e].split("_")
        }

        function s(e, t, a, s) {
            var o = e + " ";
            return 1 === e ? o + n(e, t, a[0], s) : t ? o + (r(e) ? i(a)[1] : i(a)[0]) : s ? o + i(a)[1] : o + (r(e) ? i(a)[1] : i(a)[2])
        }

        function o(e, t) {
            var a = -1 === t.indexOf("dddd HH:mm"),
                n = l[e.day()];
            return a ? n : n.substring(0, n.length - 2) + "į"
        }
        var d = {
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            },
            l = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_");
        (t.defineLocale || t.lang).call(t, "lt", {
            months: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
            monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: o,
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "YYYY-MM-DD",
                LL: "YYYY [m.] MMMM D [d.]",
                LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
                LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
                l: "YYYY-MM-DD",
                ll: "YYYY [m.] MMMM D [d.]",
                lll: "YYYY [m.] MMMM D [d.], LT [val.]",
                llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
            },
            calendar: {
                sameDay: "[Šiandien] LT",
                nextDay: "[Rytoj] LT",
                nextWeek: "dddd LT",
                lastDay: "[Vakar] LT",
                lastWeek: "[Praėjusį] dddd LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "po %s",
                past: "prieš %s",
                s: a,
                m: n,
                mm: s,
                h: n,
                hh: s,
                d: n,
                dd: s,
                M: n,
                MM: s,
                y: n,
                yy: s
            },
            ordinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
                return e + "-oji"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("lt", "lt", {
            closeText: "Uždaryti",
            prevText: "&#x3C;Atgal",
            nextText: "Pirmyn&#x3E;",
            currentText: "Šiandien",
            monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
            monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"],
            dayNames: ["sekmadienis", "pirmadienis", "antradienis", "trečiadienis", "ketvirtadienis", "penktadienis", "šeštadienis"],
            dayNamesShort: ["sek", "pir", "ant", "tre", "ket", "pen", "šeš"],
            dayNamesMin: ["Se", "Pr", "An", "Tr", "Ke", "Pe", "Še"],
            weekHeader: "SAV",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: ""
        }), e.fullCalendar.lang("lt", {
            buttonText: {
                month: "Mėnuo",
                week: "Savaitė",
                day: "Diena",
                list: "Darbotvarkė"
            },
            allDayText: "Visą dieną",
            eventLimitText: "daugiau"
        })
    }(),
    function () {
        function a(e, t, a) {
            var n = e.split("_");
            return a ? 1 === t % 10 && 11 !== t ? n[2] : n[3] : 1 === t % 10 && 11 !== t ? n[0] : n[1]
        }

        function n(e, t, n) {
            return e + " " + a(r[n], e, t)
        }
        var r = {
            mm: "minūti_minūtes_minūte_minūtes",
            hh: "stundu_stundas_stunda_stundas",
            dd: "dienu_dienas_diena_dienas",
            MM: "mēnesi_mēnešus_mēnesis_mēneši",
            yy: "gadu_gadus_gads_gadi"
        };
        (t.defineLocale || t.lang).call(t, "lv", {
            months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD.MM.YYYY",
                LL: "YYYY. [gada] D. MMMM",
                LLL: "YYYY. [gada] D. MMMM, LT",
                LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
            },
            calendar: {
                sameDay: "[Šodien pulksten] LT",
                nextDay: "[Rīt pulksten] LT",
                nextWeek: "dddd [pulksten] LT",
                lastDay: "[Vakar pulksten] LT",
                lastWeek: "[Pagājušā] dddd [pulksten] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s vēlāk",
                past: "%s agrāk",
                s: "dažas sekundes",
                m: "minūti",
                mm: n,
                h: "stundu",
                hh: n,
                d: "dienu",
                dd: n,
                M: "mēnesi",
                MM: n,
                y: "gadu",
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("lv", "lv", {
            closeText: "Aizvērt",
            prevText: "Iepr.",
            nextText: "Nāk.",
            currentText: "Šodien",
            monthNames: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["svētdiena", "pirmdiena", "otrdiena", "trešdiena", "ceturtdiena", "piektdiena", "sestdiena"],
            dayNamesShort: ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"],
            dayNamesMin: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "Ss"],
            weekHeader: "Ned.",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("lv", {
            buttonText: {
                month: "Mēnesis",
                week: "Nedēļa",
                day: "Diena",
                list: "Dienas kārtība"
            },
            allDayText: "Visu dienu",
            eventLimitText: function (e) {
                return "+vēl " + e
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "nb", {
            months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
                LT: "H.mm",
                LTS: "LT.ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY [kl.] LT",
                LLLL: "dddd D. MMMM YYYY [kl.] LT"
            },
            calendar: {
                sameDay: "[i dag kl.] LT",
                nextDay: "[i morgen kl.] LT",
                nextWeek: "dddd [kl.] LT",
                lastDay: "[i går kl.] LT",
                lastWeek: "[forrige] dddd [kl.] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "for %s siden",
                s: "noen sekunder",
                m: "ett minutt",
                mm: "%d minutter",
                h: "en time",
                hh: "%d timer",
                d: "en dag",
                dd: "%d dager",
                M: "en måned",
                MM: "%d måneder",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("nb", "nb", {
            closeText: "Lukk",
            prevText: "&#xAB;Forrige",
            nextText: "Neste&#xBB;",
            currentText: "I dag",
            monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthNamesShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
            dayNamesShort: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
            dayNames: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
            dayNamesMin: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
            weekHeader: "Uke",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("nb", {
            buttonText: {
                month: "Måned",
                week: "Uke",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dagen",
            eventLimitText: "til"
        })
    }(),
    function () {
        var a = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        (t.defineLocale || t.lang).call(t, "nl", {
            months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort: function (e, t) {
                return /-MMM-/.test(t) ? n[e.month()] : a[e.month()]
            },
            weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD-MM-YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[vandaag om] LT",
                nextDay: "[morgen om] LT",
                nextWeek: "dddd [om] LT",
                lastDay: "[gisteren om] LT",
                lastWeek: "[afgelopen] dddd [om] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "over %s",
                past: "%s geleden",
                s: "een paar seconden",
                m: "één minuut",
                mm: "%d minuten",
                h: "één uur",
                hh: "%d uur",
                d: "één dag",
                dd: "%d dagen",
                M: "één maand",
                MM: "%d maanden",
                y: "één jaar",
                yy: "%d jaar"
            },
            ordinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
                return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("nl", "nl", {
            closeText: "Sluiten",
            prevText: "←",
            nextText: "→",
            currentText: "Vandaag",
            monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            monthNamesShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
            dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
            dayNamesShort: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
            dayNamesMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            weekHeader: "Wk",
            dateFormat: "dd-mm-yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("nl", {
            buttonText: {
                month: "Maand",
                week: "Week",
                day: "Dag",
                list: "Agenda"
            },
            allDayText: "Hele dag",
            eventLimitText: "extra"
        })
    }(),
    function () {
        var a = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
            },
            n = {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "0": "0"
            };
        (t.defineLocale || t.lang).call(t, "gu", {
            months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઓગસ્ટ_સપ્ટેમ્બર_ઓક્ટોબર_નવેમ્બર_ડિસેમ્બર".split("_"),
            monthsShort: "જાન્યુ._ફેબ્રુ_માર્ચ_એપ્રિલ._મે_જૂન_જુલાઈ._ઓગસ્ટ_સપ્ટે._ઓક્ટો._નવે._ડિસે".split("_"),
            weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધવાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "રવિ_સોમ_મંગળ_બુધ_ગુરુ_શુક્ર_શનિ".split("_"),
            longDateFormat: {
                LT: "A h:mm સમય",
                LTS: "A h:mm:ss સમય",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[આજે] LT",
                nextDay: "[આવતીકાલે] LT",
                nextWeek: "dddd, LT",
                lastDay: "[આવતીકાલે] LT",
                lastWeek: "[છેલ્લા] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s માં",
                past: "%s પહેલાં",
                s: "થોડી ક્ષણો",
                m: "એક મિનિટ",
                mm: "%d મિનિટ",
                h: "એક કલાક",
                hh: "%d કલાક",
                d: "એક દિવસ",
                dd: "%d દિવસ",
                M: "એક મહિનો",
                MM: "%d માસ",
                y: "એક વર્ષ",
                yy: "%d વર્ષ"
            },
            preparse: function (e) {
                return e.replace(/[1234567890]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                })
            },
            meridiemParse: /રાત્રિ|સવાર|બપોર|સાંજ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "રાત" === t ? 4 > e ? e : e + 12 : "સવાર" === t ? e : "બપોરે" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "રાત" : 10 > e ? "સવાર" : 17 > e ? "બપોરે" : 20 > e ? "સાંજ" : "રાત"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.fullCalendar.datepickerLang("gu", "gu", {
            closeText: "બંધ",
            prevText: "અગાઉના",
            nextText: "આગળ",
            currentText: "આજે",
            monthNames: ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર","ડિસેમ્બર"],
            monthNamesShort: ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર","ડિસેમ્બર"],
            dayNames: ["રવિવાર_સોમવાર_મંગળવાર_બુધવાર_ગુરુવાર_શુક્રવાર_શનિવાર"],
            dayNamesShort: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
            dayNamesMin: ["રવિ", "સોમ", "મંગળ", "બુધ", "ગુરુ", "શુક્ર", "શનિ"],
            weekHeader: "સપ્તાહ",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("gu", {
            buttonText: {
                month: "માસ",
                week: "અઠવાડિયું",
                day: "દિવસ",
                list: "કાર્ય શેડ્યૂલ"
            },
            allDayText: "બધા દિવસ",
            eventLimitText: function (e) {
                return "+વધુ " + e
            }
        })
    }(),
    function () {
        var a = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
            },
            n = {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "0": "0"
            };
        (t.defineLocale || t.lang).call(t, "ta", {
            months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
            monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்.மே_ஜூன்_ஜூலை._ஆகஸ்ட்_செப்._அக்._நவம்._டிசம்பர்".split("_"),
            weekdays: "ஞாயிறு_திங்கட்கிழமை_செவ்வாய்_செவ்வாய்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysShort: "சூரியன்_சோம_செவ்வாய்_ம புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "சூரியன்_சோம_செவ்வாய்_ம புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            longDateFormat: {
                LT: "A h:mm நேரம்",
                LTS: "A h:mm:ss நேரம்",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[இன்று] LT",
                nextDay: "[நாளை] LT",
                nextWeek: "dddd, LT",
                lastDay: "[நாளை] LT",
                lastWeek: "[கடைசி] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s இல்",
                past: "%s முன்பு",
                s: "சில கணங்கள்",
                m: "ஒரு நிமிடம்",
                mm: "%d நிமிடங்கள்",
                h: "ஒரு மணி நேரம்",
                hh: "%d மணி",
                d: "ஒரு நாள்",
                dd: "%d நாள்",
                M: "ஒரு மாதம்",
                MM: "%d நிறை",
                y: "ஒரு வருடம்",
                yy: "%d ஆண்டு"
            },
            preparse: function (e) {
                return e.replace(/[1234567890]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                })
            },
            meridiemParse: /இரவு | காலை | பிற்பகல் | மாலை/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "இரவு" === t ? 4 > e ? e : e + 12 : "காலை" === t ? e : "மதியம்" === t ? e >= 10 ? e : e + 12 : "சாயங்காலம்" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "இரவு" : 10 > e ? "காலை" : 17 > e ? "மதியம்" : 20 > e ? "சாயங்காலம்" : "இரவு"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.fullCalendar.datepickerLang("ta","ta", {
            closeText: "ஆஃப்",
            prevText: "முந்தைய",
            nextText: "அடுத்தது",
            currentText: "இன்று",
            monthNames: ["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"],
            monthNamesShort: ["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"],
            dayNames: ["ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி"],
            dayNamesShort: ["சூரியன்", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "சுக்கிரன்", "சனி"],
            dayNamesMin: ["சூரியன்", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "சுக்கிரன்", "சனி"],
            weekHeader: "வாரம்",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("ta", {
            buttonText: {
                month: "நிறை",
                week: "வாரம்",
                day: "நாள்",
                list: "வேலை திட்டம்"
            },
            allDayText: "நாள் முழுவதும்",
            eventLimitText: function (e) {
                return "+மேலும்" + e
            }
        })
    }(),
    function () {
        var a = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
            },
            n = {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "0": "0"
            };
        (t.defineLocale || t.lang).call(t, "te", {
            months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
            monthsShort: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్.మే_జూన్_జూలై._ఆగస్టు_సెప్టెం._అక్టోబర్_నవంబర్._డిసెంబర్".split("_"),
            weekdays: "ఆదివారం_సోమవారం_మంగళవారం_మంగళవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
            weekdaysShort: "ఆది_సోమ_మంగళవారం_M బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆది_సోమ_మంగళవారం_M బుధ_గురు_శుక్ర_శని".split("_"),
            longDateFormat: {
                LT: "A h:mm సమయం",
                LTS: "A h:mm:ss సమయం",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[ఈరోజు] LT",
                nextDay: "[రేపు] LT",
                nextWeek: "dddd, LT",
                lastDay: "[రేపు] LT",
                lastWeek: "[చివరిది] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s లో",
                past: "%s ముందు",
                s: "కొన్ని క్షణాలు",
                m: "ఒక్క నిమిషం",
                mm: "%d నిమిషాలు",
                h: "ఒక గంట",
                hh: "%d గంటలు",
                d: "ఒక రోజు",
                dd: "%d రోజు",
                M: "ఒక నెల",
                MM: "%d మాస్",
                y: "ఒక సంవత్సరం",
                yy: "%d సంవత్సరం"
            },
            preparse: function (e) {
                return e.replace(/[1234567890]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                })
            },
            meridiemParse: /రాత్రి | ఉదయం | మధ్యాహ్నం | సాయంత్రం/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "రాత్రి" === t ? 4 > e ? e : e + 12 : "ఉదయాన" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "రాత్రి" : 10 > e ? "ఉదయాన" : 17 > e ? "మధ్యాహ్నం" : 20 > e ? "సాయంత్రం" : "రాత్రి"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.fullCalendar.datepickerLang("te", "te", {
            closeText: "ఆఫ్",
            prevText: "మునుపటి",
            nextText: "తరువాత",
            currentText: "ఈరోజు",
            monthNames: ["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జూలై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"],
            monthNamesShort: ["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జూలై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"],
            dayNames: ["ఆదివారము సోమవారము మంగళవారము బుధవారము గురువారము శుక్రవారము శనివారము"],
            dayNamesShort: ["సూర్యుడు", "సోమము", "అంగారకుడు", "బుధుడు", "గురు గ్రహం", "శుక్రుడు", "శని"],
            dayNamesMin: ["సూర్యుడు", "సోమము", "అంగారకుడు", "బుధుడు", "గురు గ్రహం", "శుక్రుడు", "శని"],
            weekHeader: "వారం",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("te", {
            buttonText: {
                month: "మాస్",
                week: "మాస్",
                day: "రోజు",
                list: "పని సమయావళి"
            },
            allDayText: "రోజంతా",
            eventLimitText: function (e) {
                return "+మరింత " + e
            }
        })
    }(),
    function () {
        var a = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
            },
            n = {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "0": "0"
            };
        (t.defineLocale || t.lang).call(t, "kn", {
            months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
            monthsShort: "ಜನವರಿ_ಫೆಬ್ರು_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್.ಮೇ_ಜೂನ್_ಜುಲೈ._ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆ._ಡಿಸೆಂಬರ್".split("_"),
            weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಮಂಗಳವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
            weekdaysShort: "ಸೂರ್ಯ_ಸೋಮ_ಮಂಗಳವಾರ_ಮೆಡ್_ಗುರು_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಸೂರ್ಯ_ಸೋಮ_ಮಂಗಳವಾರ_ಮೆಡ್_ಗುರು_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            longDateFormat: {
                LT: "A h:mm ಸಮಯ",
                LTS: "A h:mm:ss ಸಮಯ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[ಇಂದು] LT",
                nextDay: "[ನಾಳೆ] LT",
                nextWeek: "dddd, LT",
                lastDay: "[ನಾಳೆ] LT",
                lastWeek: "[ಕೊನೆಯ] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ರಲ್ಲಿ",
                past: "%s ಮೊದಲು",
                s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                m: "ಒಂದು ನಿಮಿಷ",
                mm: "%d ನಿಮಿಷಗಳು",
                h: "ಒಂದು ಗಂಟೆ",
                hh: "%d ಗಂಟೆಗಳು",
                d: "ಒಂದು ದಿನ",
                dd: "%d ದಿನ",
                M: "ಒಂದು ತಿಂಗಳು",
                MM: "%d ಸಮೂಹ",
                y: "ಒಂದು ವರ್ಷ",
                yy: "%d ವರ್ಷ"
            },
            preparse: function (e) {
                return e.replace(/[1234567890]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                })
            },
            meridiemParse: /ರಾತ್ರಿ | ಬೆಳಿಗ್ಗೆ | ಮಧ್ಯಾಹ್ನ | ಸಂಜೆ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? 4 > e ? e : e + 12 : "ಮುಂಜಾನೆಯಲ್ಲಿ" === t ? e : "ಮಧ್ಯಾಹ್ನದಲ್ಲಿ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "ರಾತ್ರಿ" : 10 > e ? "ಮುಂಜಾನೆಯಲ್ಲಿ" : 17 > e ? "ಮಧ್ಯಾಹ್ನದಲ್ಲಿ" : 20 > e ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.fullCalendar.datepickerLang("kn", "kn", {
            closeText: "ಆರಿಸಿ",
            prevText: "ಹಿಂದಿನ",
            nextText: "ಮುಂದೆ",
            currentText: "ಮುಂದೆ",
            monthNames: ["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"],
            monthNamesShort: ["ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್", "ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್"],
            dayNames: ["ಭಾನುವಾರ ಸೋಮವಾರ ಮಂಗಳವಾರ ಬುಧವಾರ ಗುರುವಾರ ಶುಕ್ರವಾರ ಶನಿವಾರ"],
            dayNamesShort: ["ಸೂರ್ಯ", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"],
            dayNamesMin: ["ಸೂರ್ಯ", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ"],
            weekHeader: "ವಾರ",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("kn", {
            buttonText: {
                month: "ಸಮೂಹ",
                week: "ವಾರ",
                day: "ದಿನ",
                list: "ಕೆಲಸದ ವೇಳಾಪಟ್ಟಿ"
            },
            allDayText: "ಇಡೀ ದಿನ",
            eventLimitText: function (e) {
                return "+ಇನ್ನಷ್ಟು " + e
            }
        })
    }(),
    function () {
        var a = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
            },
            n = {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "0": "0"
            };
        (t.defineLocale || t.lang).call(t, "bn", {
            months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            monthsShort: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল।মে_জুন_জুলাই।_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
            weekdays: "রবিবার_সোমবার_মঙ্গলবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
            weekdaysShort: "সূর্য_সোম_মঙ্গলবার_মধ্য_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "সূর্য_সোম_মঙ্গলবার_মধ্য_বৃহস্পতি_শুক্র_শনি".split("_"),
            longDateFormat: {
                LT: "A h:mm সময়",
                LTS: "A h:mm:ss সময়",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[আজ] LT",
                nextDay: "[আগামীকাল] LT",
                nextWeek: "dddd, LT",
                lastDay: "[আগামীকাল] LT",
                lastWeek: "[গত] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s ভিতরে",
                past: "%s ভিতরে",
                s: "কয়েক মুহূর্ত",
                m: "এক মিনিট",
                mm: "%d মিনিট",
                h: "এক ঘন্টা",
                hh: "%d ঘন্টার",
                d: "এক দিন",
                dd: "%d দিন",
                M: "এক মাস",
                MM: "%d ভর",
                y: "এক বছর",
                yy: "%d বছর"
            },
            preparse: function (e) {
                return e.replace(/[1234567890]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                })
            },
            meridiemParse: /রাত | সকাল | বিকেল | সন্ধ্যা/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "রাত্রি" === t ? 4 > e ? e : e + 12 : "রাত্রি" === t ? e : "বিকালে" === t ? e >= 10 ? e : e + 12 : "সন্ধ্যা" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "রাত্রি" : 10 > e ? "সকালে" : 17 > e ? "সকালে" : 20 > e ? "সন্ধ্যা" : "রাত্রি"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.fullCalendar.datepickerLang("bn", "bn", {
            closeText: "বন্ধ",
            prevText: "আগে",
            nextText: "পরবর্তী",
            currentText: "পরবর্তী",
            monthNames: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
            monthNamesShort: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
            dayNames: ["রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার"],
            dayNamesShort: ["সূর্য", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
            dayNamesMin: ["সূর্য", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
            weekHeader: "সপ্তাহ",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("bn", {
            buttonText: {
                month: "ভর",
                week: "সপ্তাহ",
                day: "দিন",
                list: "কাজের সময়সূচী"
            },
            allDayText: "সারাদিন",
            eventLimitText: function (e) {
                return "+আbn " + e
            }
        })
    }(),
    function () {
        var a = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
            },
            n = {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "0": "0"
            };
        (t.defineLocale || t.lang).call(t, "mr", {
            months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
            monthsShort: "जानेवारी_फेब्रु_मार्च_एप्रिल.मे_जून_जुलै._ऑगस्ट_सप्टेंबर_ऑक्टो._नोव्हे_डिसेंबर".split("_"),
            weekdays: "रविवार_सोमवार_मंगळवार_गुरुवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रविवार_सोमवार_मंगळवार_गुरुवार_शुक्रवार_शनिवार".split("_"),
            weekdaysMin: "रवि_सोम_मंगळवार_म बुध_गुरुवार_शुक्र_शनि".split("_"),
            longDateFormat: {
                LT: "A h:mm वेळ",
                LTS: "A h:mm:ss वेळ",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[आज] LT",
                nextDay: "[उद्या] LT",
                nextWeek: "dddd, LT",
                lastDay: "[उद्या] LT",
                lastWeek: "[शेवटचे] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s मध्ये",
                past: "%s आधी",
                s: "काही क्षण",
                m: "एक मिनीट",
                mm: "%d मिनिटे",
                h: "एक तास",
                hh: "%d तास",
                d: "एक दिवस",
                dd: "%d दिवस",
                M: "एक महिना",
                MM: "%d वस्तुमान",
                y: "एक वर्ष",
                yy: "%d वर्ष"
            },
            preparse: function (e) {
                return e.replace(/[1234567890]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                })
            },
            meridiemParse: /रात्र | सकाळ | दुपार | संध्याकाळ/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "रात्री" === t ? 4 > e ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "संध्याकाळ" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "रात्री" : 10 > e ? "सकाळी" : 17 > e ? "सकाळी" : 20 > e ? "संध्याकाळ" : "रात्री"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.fullCalendar.datepickerLang("mr", "mr", {
            closeText: "बंद",
            prevText: "मागील",
            nextText: "पुढे",
            currentText: "आज",
            monthNames: ["जानेवारी", "जानेवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर","डिसेंबर"],
            monthNamesShort: ["जानेवारी", "जानेवारी", "मार्च", "एप्रिल", "मे", "जून", "जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर","डिसेंबर"],
            dayNames: ["रविवार सोमवार मंगळवार बुधवार गुरुवार शुक्रवार शनिवार"],
            dayNamesShort: ["सूर्य", "सोम", "मंगळ", "बुध", "गुरू", "शुक्र", "शनि"],
            dayNamesMin: ["सूर्य", "सोम", "मंगळ", "बुध", "गुरू", "शुक्र", "शनि"],
            weekHeader: "आठवडा",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("mr", {
            buttonText: {
                month: "वस्तुमान",
                week: "आठवडा",
                day: "दिवस",
                list: "कामाचे वेळापत्रक"
            },
            allDayText: "संपूर्ण दिवस",
            eventLimitText: function (e) {
                return "+अधिक " + e
            }
        })
    }(),
/* */
function () {
    var a = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
        },
        n = {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "0": "0"
        };
    (t.defineLocale || t.lang).call(t, "ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മെയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ.മെയ്_ജൂൺ_ജൂലൈ._ഓഗസ്റ്റ്_സെപ്തം._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        weekdays: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ചൊവ്വ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysShort: "സൂര്യൻ_സോമ_ചൊവ്വ_എം ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "സൂര്യൻ_സോമ_ചൊവ്വ_എം ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        longDateFormat: {
            LT: "A h:mm സമയം",
            LTS: "A h:mm:ss സമയം",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
        },
        calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[നാളെ] LT",
            lastWeek: "[അവസാനത്തെ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ഇൻ",
            past: "%s മുമ്പ്",
            s: "ഏതാനും നിമിഷങ്ങൾ",
            m: "ഒരു നിമിഷം",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂറുകൾ",
            d: "ഒരുദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസ്സ്",
            y: "ഒരു വര്ഷം",
            yy: "%d വർഷം"
        },
        preparse: function (e) {
            return e.replace(/[1234567890]/g, function (e) {
                return n[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return a[e]
            })
        },
        meridiemParse: /രാത്രി | രാവിലെ | ഉച്ചയ്ക്ക് | വൈകുന്നേരം/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "രാത്രി" === t ? 4 > e ? e : e + 12 : "പ്രഭാതത്തിൽ" === t ? e : "ഉച്ചതിരിഞ്ഞ്" === t ? e >= 10 ? e : e + 12 : "വൈകുന്നേരം" === t ? e + 12 : void 0
        },
        meridiem: function (e) {
            return 4 > e ? "രാത്രി" : 10 > e ? "പ്രഭാതത്തിൽ" : 17 > e ? "ഉച്ചതിരിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), e.fullCalendar.datepickerLang("ml", "ml", {
        closeText: "ഓഫ്",
        prevText: "മുമ്പത്തെ",
        nextText: "അടുത്തത്",
        currentText: "ഇന്ന്",
        monthNames: ["ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മെയ്", "ജൂൺ", "ജൂലൈ", "ഓഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്ടോബർ", "നവംബർ", "ഡിസംബർ"],
        monthNamesShort: ["ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മെയ്", "ജൂൺ", "ജൂലൈ", "ഓഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്ടോബർ", "നവംബർ", "ഡിസംബർ"],
        dayNames: ["ഞായറാഴ്ച തിങ്കളാഴ്ച ചൊവ്വാഴ്ച ബുധനാഴ്ച വ്യാഴാഴ്ച വെള്ളിയാഴ്ച ശനിയാഴ്ച"],
        dayNamesShort: ["സൂര്യൻ", "തിങ്കൾ", "ചൊവ്വ", "ബുധൻ", "വ്യാഴം", "ശുക്രൻ", "ശനി"],
        dayNamesMin: ["സൂര്യൻ", "തിങ്കൾ", "ചൊവ്വ", "ബുധൻ", "വ്യാഴം", "ശുക്രൻ", "ശനി"],
        weekHeader: "ആഴ്ച",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), e.fullCalendar.lang("ml", {
        buttonText: {
            month: "മാസ്സ്",
            week: "ആഴ്ച",
            day: "ദിവസം",
            list: "പ്രവർത്തന സമയം"
        },
        allDayText: "ദിവസം മുഴുവൻ",
        eventLimitText: function (e) {
            return "+കൂടുതൽ " + e
        }
    })
}(),
function () {
    var a = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
        },
        n = {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "0": "0"
        };
    (t.defineLocale || t.lang).call(t, "ur", {
        months: "جنوری_فیبروآری_مارچ_ایپریل_میں_جون_جولائی_اوگسٹ_ستمبر_اوکٹوبر_نوے_ڈیسے".split("_"),
        monthsShort: "جانو_فیبرو_ماچ_ایپریل_میں_جون_جو لائٹ_اوگسٹ _سپٹے _اکٹو_نو_ڈیس".split("_"),
        weekdays: "اتوار_سموار_منگلوار_بُدھوار_گرووار_شوار_شنوار".split("_"),
        weekdaysShort: "اتوار_سم_منگل_بودھ_گرو_شکر_شنی".split("_"),
        weekdaysMin: "اتوار_سم_منگل_بودھ_گرو_شکر_شنی".split("_"),
        longDateFormat: {
            LT: "A h:mm وقت",
            LTS: "A h:mm:ss وقت",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
        },
        calendar: {
            sameDay: "[آج] LT",
            nextDay: "[کل] LT",
            nextWeek: "dddd, LT",
            lastDay: "[کل] LT",
            lastWeek: "[آخری] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s میں",
            past: "%s اس سے پہلے",
            s: "چند لمحے۔۔۔",
            m: "ایک منٹ",
            mm: "%d منٹس",
            h: "ایک گھنٹہ",
            hh: "%d گھنٹے",
            d: "ایک دن",
            dd: "%d دن",
            M: "ایک مہینہ",
            MM: "%d بڑے پیمانے پر",
            y: "ایک سال",
            yy: "%d سال"
        },
        preparse: function (e) {
            return e.replace(/[1234567890]/g, function (e) {
                return n[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return a[e]
            })
        },
        meridiemParse: /رات | صبح | دوپہر | شام/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "رات" === t ? 4 > e ? e : e + 12 : "صبح کے وقت" === t ? e : "دوپہر میں" === t ? e >= 10 ? e : e + 12 : "شام" === t ? e + 12 : void 0
        },
        meridiem: function (e) {
            return 4 > e ? "رات" : 10 > e ? "صبح کے وقت" : 17 > e ? "دوپہر میں" : 20 > e ? "شام" : "رات"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), e.fullCalendar.datepickerLang("ur", "ur", {
        closeText: "بند",
        prevText: "پچھلا",
        nextText: "اگلے",
        currentText: "آج",
        monthNames: ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
        monthNamesShort: ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
        dayNames: ["اتوار سوموار منگل بدھ جمعرات جمعہ ہفتہ"],
        dayNamesShort: ["سورج", "پیر", "مریخ", "مرکری", "مشتری", "وینس", "زحل"],
        dayNamesMin: ["سورج", "پیر", "مریخ", "مرکری", "مشتری", "وینس", "زحل"],
        weekHeader: "ہفتہ",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), e.fullCalendar.lang("ur", {
        buttonText: {
            month: "بڑے پیمانے پر",
            week: "ہفتہ",
            day: "دن",
            list: "کام کا شیڈول"
        },
        allDayText: "تمام دن",
        eventLimitText: function (e) {
            return "+مزید " + e
        }
    })
}(),
function () {
    var a = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
        },
        n = {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "0": "0"
        };
    (t.defineLocale || t.lang).call(t, "or", {
        months: "ଜାନୁଆରୀ_ ଫେବୃଆରୀ_ ମାର୍ଚ୍ଚ_ ଏପ୍ରିଲ୍_ ମେ_ ଜୁନ୍_ ଜୁଲାଇ_ ଅଗଷ୍ଟ_ସେପ୍ଟମ୍ବର_ ଅକ୍ଟୋବର_ ନଭେମ୍ବର_ ଡିସେମ୍ବର".split("_"),
        monthsShort: "Jan_Febru_March_April.May_June_July._August_Sept._Oct._Nove._Dec".split("_"),
        weekdays: "ରବିବାର_ ସୋମବାର_ ମଙ୍ଗଳବାର_ ମଙ୍ଗଳବାର_ ବୁଧବାର_ ଶୁକ୍ରବାର_ ଶନିବାର |".split("_"),
        weekdaysShort: "ସୂର୍ଯ୍ୟ_ ସୋମ_ ମଙ୍ଗଳବାର_ ମି ବୁଧ_ ଥର୍ସ_ ଶୁକ୍ର_ ଶନି |".split("_"),
        weekdaysMin: "ସୂର୍ଯ୍ୟ_ ସୋମ_ ମଙ୍ଗଳବାର_ ମି ବୁଧ_ ଥର୍ସ_ ଶୁକ୍ର_ ଶନି |".split("_"),
        longDateFormat: {
            LT: "A h:mm ସମୟ",
            LTS: "A h:mm:ss ସମୟ",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
        },
        calendar: {
            sameDay: "[ଆଜି |] LT",
            nextDay: "[ଆସନ୍ତାକାଲି] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ଆସନ୍ତାକାଲି] LT",
            lastWeek: "[ଶେଷ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ଇନ୍",
            past: "%s ପୂର୍ବରୁ",
            s: "କିଛି ମୁହୂର୍ତ୍ତ",
            m: "ଏକ ମିନିଟ",
            mm: "%d ମିନିଟ୍ |",
            h: "ଏକ ଘଣ୍ଟା",
            hh: "%d ଘଣ୍ଟା",
            d: "ଦିନେ",
            dd: "%d ଦିନ",
            M: "ଏକ ମାସ",
            MM: "%d ମାସ",
            y: "ଏକ ବର୍ଷ",
            yy: "%d ବର୍ଷ"
        },
        preparse: function (e) {
            return e.replace(/[1234567890]/g, function (e) {
                return n[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return a[e]
            })
        },
        meridiemParse: /ରାତି | ସକାଳ | ଅପରାହ୍ନ | ସନ୍ଧ୍ୟା /,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "ରାତି" === t ? 4 > e ? e : e + 12 : "ସକାଳେ" === t ? e : "ଉପରବେଳା ରେ" === t ? e >= 10 ? e : e + 12 : "ସନ୍ଧ୍ୟା |" === t ? e + 12 : void 0
        },
        meridiem: function (e) {
            return 4 > e ? "ରାତି" : 10 > e ? "ସକାଳେ" : 17 > e ? "ଉପରବେଳା ରେ" : 20 > e ? "ସନ୍ଧ୍ୟା |" : "ରାତି"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), e.fullCalendar.datepickerLang("or", "or", {
        closeText: "ବନ୍ଦ",
        prevText: "ପୂର୍ବ",
        nextText: "ପରବର୍ତ୍ତୀ",
        currentText: "ଆଜି |",
        monthNames: ["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଏପ୍ରିଲ୍", "ମେ", "ଜୁନ୍", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"],
        monthNamesShort: ["ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଏପ୍ରିଲ୍", "ମେ", "ଜୁନ୍", "ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର"],
        dayNames: ["ରବିବାର_ ସୋମବାର_ ମଙ୍ଗଳବାର_ ବୁଧବାର_ ବୁଧବାର_ ଶୁକ୍ରବାର_ ଶନିବାର ଦିନ"],
        dayNamesShort: ["ସୂର୍ଯ୍ୟ", "ସୋମ", "ମଙ୍ଗଳ", "ବୁଧ", "ବୃହସ୍ପତି", "ଶୁକ୍ର", "ଶନି"],
        dayNamesMin: ["ସୂର୍ଯ୍ୟ", "ସୋମ", "ମଙ୍ଗଳ", "ବୁଧ", "ବୃହସ୍ପତି", "ଶୁକ୍ର", "ଶନି"],
        weekHeader: "ସପ୍ତାହ",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), e.fullCalendar.lang("or", {
        buttonText: {
            month: "ସପ୍ତାହ",
            week: "ସପ୍ତାହ",
            day: "ଦିନ",
            list: "କାର୍ଯ୍ୟ ସୂଚୀ"
        },
        allDayText: "ନ ସାରା",
        eventLimitText: function (e) {
            return "+ଅଧିକ" + e
        }
    })
}(),
function () {
    var a = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
        },
        n = {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "0": "0"
        };
    (t.defineLocale || t.lang).call(t, "zu", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Febru_March_April.May_June_July._August_Sept._Oct._Nove._Dec".split("_"),
        weekdays: "NgeSonto_ngoMsombuluko_Lwesibili_Lwesibili_Lwesine_ULwesihlanu_UMgqibelo".split("_"),
        weekdaysShort: "Sun_Som_Tuesday_Med_Thu_Thu_Fri_Saturn".split("_"),
        weekdaysMin: "Sun_Som_Tuesday_Med_Thu_Thu_Fri_Saturn".split("_"),
        longDateFormat: {
            LT: "A h:mm Isikhathi",
            LTS: "A h:mm:ss Isikhathi",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
        },
        calendar: {
            sameDay: "[Namuhla] LT",
            nextDay: "[kusasa] LT",
            nextWeek: "dddd, LT",
            lastDay: "[kusasa] LT",
            lastWeek: "[Esokugcina] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s Ku",
            past: "%s Ngaphambili",
            s: "Imizuzwana embalwa",
            m: "Umzuzu owodwa",
            mm: "%d Amaminithi",
            h: "Ihora",
            hh: "%d Amahora",
            d: "usuku olulodwa",
            dd: "%d Usuku",
            M: "Inyanga eyodwa",
            MM: "%d IMisa",
            y: "Unyaka owodwa",
            yy: "%d Unyaka"
        },
        preparse: function (e) {
            return e.replace(/[1234567890]/g, function (e) {
                return n[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return a[e]
            })
        },
        meridiemParse: /Ebusuku | ekuseni | ntambama | kusihl/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "Ebusuku" === t ? 4 > e ? e : e + 12 : "Ekuseni" === t ? e : "Emini" === t ? e >= 10 ? e : e + 12 : "Kusihlwa" === t ? e + 12 : void 0
        },
        meridiem: function (e) {
            return 4 > e ? "Ebusuku" : 10 > e ? "Ekuseni" : 17 > e ? "Emini" : 20 > e ? "Kusihlwa" : "રાત"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), e.fullCalendar.datepickerLang("zu", "zu", {
        closeText: "Valiwe",
        prevText: "Ngaphambilini",
        nextText: "Olandelayo",
        currentText: "Olandelayo",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        dayNames: ["Sunday_Monday_Tuesday_Lwesithathu_Lwesine_Friday_Saturday"],
        dayNamesShort: ["Ilanga", "Mon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"],
        dayNamesMin: ["Ilanga", "Mon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"],
        weekHeader: "Isonto",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), e.fullCalendar.lang("zu", {
        buttonText: {
            month: "IMisa",
            week: "Isonto",
            day: "Usuku",
            list: "Uhlelo lokusebenza"
        },
        allDayText: "Usuku lonke",
        eventLimitText: function (e) {
            return "+Okuningi " + e
        }
    })
}(),
function () {
    var a = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
        },
        n = {
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            "0": "0"
        };
    (t.defineLocale || t.lang).call(t, "et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "Jaan_veebruar_märts_aprill.mai_juuni_juuli._august_sept._okt._november._detsember".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_teisipäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "Pühapäev_Som_Teisipäev_Med_Thu_Thu_Fri_Saturn".split("_"),
        weekdaysMin: "Pühapäev_Som_Teisipäev_Med_Thu_Thu_Fri_Saturn".split("_"),
        longDateFormat: {
            LT: "A h:mm Aeg",
            LTS: "A h:mm:ss Aeg",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
        },
        calendar: {
            sameDay: "[Täna] LT",
            nextDay: "[homme] LT",
            nextWeek: "dddd, LT",
            lastDay: "[homme] LT",
            lastWeek: "[Viimane] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sisse",
            past: "%s Enne",
            s: "Mõni hetk",
            m: "Üks minut",
            mm: "%d Minutid",
            h: "Tund",
            hh: "%d Tundi",
            d: "üks päev",
            dd: "%d päev",
            M: "Üks kuu",
            MM: "%d Mass",
            y: "Üks aasta",
            yy: "%d aasta"
        },
        preparse: function (e) {
            return e.replace(/[1234567890]/g, function (e) {
                return n[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return a[e]
            })
        },
        meridiemParse: /Öö | hommik | pärastlõuna | õhtu/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "Öö" === t ? 4 > e ? e : e + 12 : "Hommikul" === t ? e : "Pärastlõunal" === t ? e >= 10 ? e : e + 12 : "Õhtu" === t ? e + 12 : void 0
        },
        meridiem: function (e) {
            return 4 > e ? "Öö" : 10 > e ? "Hommikul" : 17 > e ? "Pärastlõunal" : 20 > e ? "Õhtu" : "Öö"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }), e.fullCalendar.datepickerLang("et", "et", {
        closeText: "Väljas",
        prevText: "Eelmine",
        nextText: "Edasi",
        currentText: "Täna",
        monthNames: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
        monthNamesShort: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
        dayNames: ["Esmaspäev Teisipäev Kolmapäev Neljapäev Reede Laupäev"],
        dayNamesShort: ["Päike", "Esmaspäev", "Marss", "Merkuur", "Jupiter", "Veenus", "Saturn"],
        dayNamesMin: ["Päike", "Esmaspäev", "Marss", "Merkuur", "Jupiter", "Veenus", "Saturn"],
        weekHeader: "Nädal",
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
    }), e.fullCalendar.lang("et", {
        buttonText: {
            month: "Mass",
            week: "Nädal",
            day: "päev",
            list: "Töögraafik"
        },
        allDayText: "Terve päev",
        eventLimitText: function (e) {
            return "+Rohkem " + e
        }
    })
}(),
 function () {
        var a = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0"
            },
            n = {
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "0": "0"
            };
        (t.defineLocale || t.lang).call(t, "no", {
            months: "Januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort: "Jan_Febru_Mars_April.May_Juni_July._August_Sept._Oct._Nove._Des.".split("_"),
            weekdays: "søndag_mandag_tirsdag_tirsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "Søn_Som_Tirsdag_Med_Tor_Tor_Fre_Saturn".split("_"),
            weekdaysMin: "Søn_Som_Tirsdag_Med_Tor_Tor_Fre_Saturn".split("_"),
            longDateFormat: {
                LT: "A h:mm Tid",
                LTS: "A h:mm:ss Tid",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY, LT",
                LLLL: "dddd, D MMMM YYYY, LT"
            },
            calendar: {
                sameDay: "[I dag] LT",
                nextDay: "[i morgen] LT",
                nextWeek: "dddd, LT",
                lastDay: "[i morgen] LT",
                lastWeek: "[Den siste] dddd, LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s I",
                past: "%s Før",
                s: "Noen få øyeblikk",
                m: "Et minutt",
                mm: "%d Minutter",
                h: "En time",
                hh: "%d Timer",
                d: "en dag",
                dd: "%d Dag",
                M: "En måned",
                MM: "%d Masse",
                y: "Ett år",
                yy: "%d År"
            },
            preparse: function (e) {
                return e.replace(/[1234567890]/g, function (e) {
                    return n[e]
                })
            },
            postformat: function (e) {
                return e.replace(/\d/g, function (e) {
                    return a[e]
                })
            },
            meridiemParse: /Natt | morgen | ettermiddag | kveld/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "Natt" === t ? 4 > e ? e : e + 12 : "Om morgenen" === t ? e : "På ettermiddagen" === t ? e >= 10 ? e : e + 12 : "Kveld" === t ? e + 12 : void 0
            },
            meridiem: function (e) {
                return 4 > e ? "Natt" : 10 > e ? "Om morgenen" : 17 > e ? "På ettermiddagen" : 20 > e ? "Kveld" : "Natt"
            },
            week: {
                dow: 0,
                doy: 6
            }
        }), e.fullCalendar.datepickerLang("no", "no", {
            closeText: "Av",
            prevText: "Tidligere",
            nextText: "Neste",
            currentText: "I dag",
            monthNames: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            monthNamesShort: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
            dayNames: ["Søndag Mandag Tirsdag Onsdag Torsdag Fredag ​​Lørdag"],
            dayNamesShort: ["Sol", "man", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"],
            dayNamesMin: ["Sol", "man", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"],
            weekHeader: "Uke",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("no", {
            buttonText: {
                month: "Masse",
                week: "Uke",
                day: "Dag",
                list: "Fremdriftsplan"
            },
            allDayText: "Hele dagen",
            eventLimitText: function (e) {
                return "+Mer " + e
            }
        })
    }(),
    function () {
        function a(e) {
            return 5 > e % 10 && e % 10 > 1 && 1 !== ~~(e / 10) % 10
        }

        function n(e, t, n) {
            var r = e + " ";
            switch (n) {
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return r + (a(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return r + (a(e) ? "godziny" : "godzin");
                case "MM":
                    return r + (a(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return r + (a(e) ? "lata" : "lat")
            }
        }
        var r = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        (t.defineLocale || t.lang).call(t, "pl", {
            months: function (e, t) {
                return /D MMMM/.test(t) ? i[e.month()] : r[e.month()]
            },
            monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
            weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
            weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Dziś o] LT",
                nextDay: "[Jutro o] LT",
                nextWeek: "[W] dddd [o] LT",
                lastDay: "[Wczoraj o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "%s temu",
                s: "kilka sekund",
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: "1 dzień",
                dd: "%d dni",
                M: "miesiąc",
                MM: n,
                y: "rok",
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("pl", "pl", {
            closeText: "Zamknij",
            prevText: "&#x3C;Poprzedni",
            nextText: "Następny&#x3E;",
            currentText: "Dziś",
            monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            monthNamesShort: ["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"],
            dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            dayNamesShort: ["Nie", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
            dayNamesMin: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
            weekHeader: "Tydz",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("pl", {
            buttonText: {
                month: "Miesiąc",
                week: "Tydzień",
                day: "Dzień",
                list: "Plan dnia"
            },
            allDayText: "Cały dzień",
            eventLimitText: "więcej"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "pt_BR", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
            weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY [às] LT",
                LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "%s atrás",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº"
        }), e.fullCalendar.datepickerLang("pt_BR", "pt_BR", {
            closeText: "Fechar",
            prevText: "&#x3C;Anterior",
            nextText: "Próximo&#x3E;",
            currentText: "Hoje",
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            weekHeader: "Sm",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("pt_BR", {
            buttonText: {
                month: "Mês",
                week: "Semana",
                day: "Dia",
                list: "Compromissos"
            },
            allDayText: "dia inteiro",
            eventLimitText: function (e) {
                return "mais +" + e
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "pt_PT", {
            months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
            monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
            weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D [de] MMMM [de] YYYY",
                LLL: "D [de] MMMM [de] YYYY LT",
                LLLL: "dddd, D [de] MMMM [de] YYYY LT"
            },
            calendar: {
                sameDay: "[Hoje às] LT",
                nextDay: "[Amanhã às] LT",
                nextWeek: "dddd [às] LT",
                lastDay: "[Ontem às] LT",
                lastWeek: function () {
                    return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "em %s",
                past: "há %s",
                s: "segundos",
                m: "um minuto",
                mm: "%d minutos",
                h: "uma hora",
                hh: "%d horas",
                d: "um dia",
                dd: "%d dias",
                M: "um mês",
                MM: "%d meses",
                y: "um ano",
                yy: "%d anos"
            },
            ordinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("pt_PT", "pt_PT", {
            closeText: "Fechar",
            prevText: "Anterior",
            nextText: "Seguinte",
            currentText: "Hoje",
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            weekHeader: "Sem",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("pt_PT", {
            buttonText: {
                month: "Mês",
                week: "Semana",
                day: "Dia",
                list: "Agenda"
            },
            allDayText: "Todo o dia",
            eventLimitText: "mais"
        })
    }(),
    function () {
        function a(e, t, a) {
            var n = {
                    mm: "minute",
                    hh: "ore",
                    dd: "zile",
                    MM: "luni",
                    yy: "ani"
                },
                r = " ";
            return (e % 100 >= 20 || e >= 100 && 0 === e % 100) && (r = " de "), e + r + n[a]
        }(t.defineLocale || t.lang).call(t, "ro", {
            months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
            monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY H:mm",
                LLLL: "dddd, D MMMM YYYY H:mm"
            },
            calendar: {
                sameDay: "[azi la] LT",
                nextDay: "[mâine la] LT",
                nextWeek: "dddd [la] LT",
                lastDay: "[ieri la] LT",
                lastWeek: "[fosta] dddd [la] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "peste %s",
                past: "%s în urmă",
                s: "câteva secunde",
                m: "un minut",
                mm: a,
                h: "o oră",
                hh: a,
                d: "o zi",
                dd: a,
                M: "o lună",
                MM: a,
                y: "un an",
                yy: a
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("ro", "ro", {
            closeText: "Închide",
            prevText: "&#xAB; Luna precedentă",
            nextText: "Luna următoare &#xBB;",
            currentText: "Azi",
            monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            dayNamesShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
            dayNamesMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            weekHeader: "Săpt",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("ro", {
            buttonText: {
                prev: "precedentă",
                next: "următoare",
                month: "Lună",
                week: "Săptămână",
                day: "Zi",
                list: "Agendă"
            },
            allDayText: "Toată ziua",
            eventLimitText: function (e) {
                return "+alte " + e
            }
        })
    }(),
    function () {
        function a(e, t) {
            var a = e.split("_");
            return 1 === t % 10 && 11 !== t % 100 ? a[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? a[1] : a[2]
        }

        function n(e, t, n) {
            var r = {
                mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                hh: "час_часа_часов",
                dd: "день_дня_дней",
                MM: "месяц_месяца_месяцев",
                yy: "год_года_лет"
            };
            return "m" === n ? t ? "минута" : "минуту" : e + " " + a(r[n], +e)
        }

        function r(e, t) {
            var a = {
                    nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                    accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
                },
                n = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
            return a[n][e.month()]
        }

        function i(e, t) {
            var a = {
                    nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                    accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
                },
                n = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(t) ? "accusative" : "nominative";
            return a[n][e.month()]
        }

        function s(e, t) {
            var a = {
                    nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
                },
                n = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(t) ? "accusative" : "nominative";
            return a[n][e.day()]
        }(t.defineLocale || t.lang).call(t, "ru", {
            months: r,
            monthsShort: i,
            weekdays: s,
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY г.",
                LLL: "D MMMM YYYY г., LT",
                LLLL: "dddd, D MMMM YYYY г., LT"
            },
            calendar: {
                sameDay: "[Сегодня в] LT",
                nextDay: "[Завтра в] LT",
                lastDay: "[Вчера в] LT",
                nextWeek: function () {
                    return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
                },
                lastWeek: function (e) {
                    if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd [в] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "через %s",
                past: "%s назад",
                s: "несколько секунд",
                m: n,
                mm: n,
                h: "час",
                hh: n,
                d: "день",
                dd: n,
                M: "месяц",
                MM: n,
                y: "год",
                yy: n
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
                return /^(дня|вечера)$/.test(e)
            },
            meridiem: function (e) {
                return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
            },
            ordinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("ru", "ru", {
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("ru", {
            buttonText: {
                month: "Месяц",
                week: "Неделя",
                day: "День",
                list: "Повестка дня"
            },
            allDayText: "Весь день",
            eventLimitText: function (e) {
                return "+ ещё " + e
            }
        })
    }(),
    function () {
        function a(e) {
            return e > 1 && 5 > e
        }

        function n(e, t, n, r) {
            var i = e + " ";
            switch (n) {
                case "s":
                    return t || r ? "pár sekúnd" : "pár sekundami";
                case "m":
                    return t ? "minúta" : r ? "minútu" : "minútou";
                case "mm":
                    return t || r ? i + (a(e) ? "minúty" : "minút") : i + "minútami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? i + (a(e) ? "hodiny" : "hodín") : i + "hodinami";
                case "d":
                    return t || r ? "deň" : "dňom";
                case "dd":
                    return t || r ? i + (a(e) ? "dni" : "dní") : i + "dňami";
                case "M":
                    return t || r ? "mesiac" : "mesiacom";
                case "MM":
                    return t || r ? i + (a(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                case "y":
                    return t || r ? "rok" : "rokom";
                case "yy":
                    return t || r ? i + (a(e) ? "roky" : "rokov") : i + "rokmi"
            }
        }
        var r = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            i = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        (t.defineLocale || t.lang).call(t, "sk", {
            months: r,
            monthsShort: i,
            monthsParse: function (e, t) {
                var a, n = [];
                for (a = 0; 12 > a; a++) n[a] = RegExp("^" + e[a] + "$|^" + t[a] + "$", "i");
                return n
            }(r, i),
            weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD.MM.YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[dnes o] LT",
                nextDay: "[zajtra o] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT"
                    }
                },
                lastDay: "[včera o] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pred %s",
                s: n,
                m: n,
                mm: n,
                h: n,
                hh: n,
                d: n,
                dd: n,
                M: n,
                MM: n,
                y: n,
                yy: n
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("sk", "sk", {
            closeText: "Zavrieť",
            prevText: "&#x3C;Predchádzajúci",
            nextText: "Nasledujúci&#x3E;",
            currentText: "Dnes",
            monthNames: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Str", "Štv", "Pia", "Sob"],
            dayNamesMin: ["Ne", "Po", "Ut", "St", "Št", "Pia", "So"],
            weekHeader: "Ty",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("sk", {
            buttonText: {
                month: "Mesiac",
                week: "Týždeň",
                day: "Deň",
                list: "Rozvrh"
            },
            allDayText: "Celý deň",
            eventLimitText: function (e) {
                return "+ďalšie: " + e
            }
        })
    }(),
    function () {
        function a(e, t, a) {
            var n = e + " ";
            switch (a) {
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return n += 1 === e ? "minuta" : 2 === e ? "minuti" : 3 === e || 4 === e ? "minute" : "minut";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return n += 1 === e ? "ura" : 2 === e ? "uri" : 3 === e || 4 === e ? "ure" : "ur";
                case "dd":
                    return n += 1 === e ? "dan" : "dni";
                case "MM":
                    return n += 1 === e ? "mesec" : 2 === e ? "meseca" : 3 === e || 4 === e ? "mesece" : "mesecev";
                case "yy":
                    return n += 1 === e ? "leto" : 2 === e ? "leti" : 3 === e || 4 === e ? "leta" : "let"
            }
        }(t.defineLocale || t.lang).call(t, "sl", {
            months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
            monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
            weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danes ob] LT",
                nextDay: "[jutri ob] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT"
                    }
                },
                lastDay: "[včeraj ob] LT",
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[prejšnja] dddd [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT"
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "čez %s",
                past: "%s nazaj",
                s: "nekaj sekund",
                m: a,
                mm: a,
                h: a,
                hh: a,
                d: "en dan",
                dd: a,
                M: "en mesec",
                MM: a,
                y: "eno leto",
                yy: a
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("sl", "sl", {
            closeText: "Zapri",
            prevText: "&#x3C;Prejšnji",
            nextText: "Naslednji&#x3E;",
            currentText: "Trenutni",
            monthNames: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
            dayNames: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
            dayNamesShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
            dayNamesMin: ["Ne", "Po", "To", "Sr", "Če", "Pe", "So"],
            weekHeader: "Teden",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("sl", {
            buttonText: {
                month: "Mesec",
                week: "Teden",
                day: "Dan",
                list: "Dnevni red"
            },
            allDayText: "Ves dan",
            eventLimitText: "več"
        })
    }(),
    function () {
        var a = {
            words: {
                m: ["један минут", "једне минуте"],
                mm: ["минут", "минуте", "минута"],
                h: ["један сат", "једног сата"],
                hh: ["сат", "сата", "сати"],
                dd: ["дан", "дана", "дана"],
                MM: ["месец", "месеца", "месеци"],
                yy: ["година", "године", "година"]
            },
            correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
            },
            translate: function (e, t, n) {
                var r = a.words[n];
                return 1 === n.length ? t ? r[0] : r[1] : e + " " + a.correctGrammaticalCase(e, r)
            }
        };
        (t.defineLocale || t.lang).call(t, "sr-cyrl", {
            months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
            monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
            weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
            weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
            weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[данас у] LT",
                nextDay: "[сутра у] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT"
                    }
                },
                lastDay: "[јуче у] LT",
                lastWeek: function () {
                    var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                    return e[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "пре %s",
                s: "неколико секунди",
                m: a.translate,
                mm: a.translate,
                h: a.translate,
                hh: a.translate,
                d: "дан",
                dd: a.translate,
                M: "месец",
                MM: a.translate,
                y: "годину",
                yy: a.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("sr-cyrl", "sr", {
            closeText: "Затвори",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Данас",
            monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            weekHeader: "Сед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("sr-cyrl", {
            buttonText: {
                month: "Месец",
                week: "Недеља",
                day: "Дан",
                list: "Планер"
            },
            allDayText: "Цео дан",
            eventLimitText: function (e) {
                return "+ још " + e
            }
        })
    }(),
    function () {
        var a = {
            words: {
                m: ["jedan minut", "jedne minute"],
                mm: ["minut", "minute", "minuta"],
                h: ["jedan sat", "jednog sata"],
                hh: ["sat", "sata", "sati"],
                dd: ["dan", "dana", "dana"],
                MM: ["mesec", "meseca", "meseci"],
                yy: ["godina", "godine", "godina"]
            },
            correctGrammaticalCase: function (e, t) {
                return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
            },
            translate: function (e, t, n) {
                var r = a.words[n];
                return 1 === n.length ? t ? r[0] : r[1] : e + " " + a.correctGrammaticalCase(e, r)
            }
        };
        (t.defineLocale || t.lang).call(t, "sr", {
            months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
            monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
            weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
            weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
            weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
            longDateFormat: {
                LT: "H:mm",
                LTS: "LT:ss",
                L: "DD. MM. YYYY",
                LL: "D. MMMM YYYY",
                LLL: "D. MMMM YYYY LT",
                LLLL: "dddd, D. MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[danas u] LT",
                nextDay: "[sutra u] LT",
                nextWeek: function () {
                    switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT"
                    }
                },
                lastDay: "[juče u] LT",
                lastWeek: function () {
                    var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                    return e[this.day()]
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "za %s",
                past: "pre %s",
                s: "nekoliko sekundi",
                m: a.translate,
                mm: a.translate,
                h: a.translate,
                hh: a.translate,
                d: "dan",
                dd: a.translate,
                M: "mesec",
                MM: a.translate,
                y: "godinu",
                yy: a.translate
            },
            ordinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("sr", "sr", {
            closeText: "Затвори",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Данас",
            monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            weekHeader: "Сед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("sr", {
            buttonText: {
                month: "Месец",
                week: "Недеља",
                day: "Дан",
                list: "Планер"
            },
            allDayText: "Цео дан",
            eventLimitText: function (e) {
                return "+ још " + e
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "sv", {
            months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "YYYY-MM-DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Idag] LT",
                nextDay: "[Imorgon] LT",
                lastDay: "[Igår] LT",
                nextWeek: "dddd LT",
                lastWeek: "[Förra] dddd[en] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "om %s",
                past: "för %s sedan",
                s: "några sekunder",
                m: "en minut",
                mm: "%d minuter",
                h: "en timme",
                hh: "%d timmar",
                d: "en dag",
                dd: "%d dagar",
                M: "en månad",
                MM: "%d månader",
                y: "ett år",
                yy: "%d år"
            },
            ordinalParse: /\d{1,2}(e|a)/,
            ordinal: function (e) {
                var t = e % 10,
                    a = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : 3 === t ? "e" : "e";
                return e + a
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("sv", "sv", {
            closeText: "Stäng",
            prevText: "&#xAB;Förra",
            nextText: "Nästa&#xBB;",
            currentText: "Idag",
            monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            dayNamesShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
            dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            dayNamesMin: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            weekHeader: "Ve",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("sv", {
            buttonText: {
                month: "Månad",
                week: "Vecka",
                day: "Dag",
                list: "Program"
            },
            allDayText: "Heldag",
            eventLimitText: "till"
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
            monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            longDateFormat: {
                LT: "H นาฬิกา m นาที",
                LTS: "LT s วินาที",
                L: "YYYY/MM/DD",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY เวลา LT",
                LLLL: "วันddddที่ D MMMM YYYY เวลา LT"
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
                return "หลังเที่ยง" === e
            },
            meridiem: function (e) {
                return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง"
            },
            calendar: {
                sameDay: "[วันนี้ เวลา] LT",
                nextDay: "[พรุ่งนี้ เวลา] LT",
                nextWeek: "dddd[หน้า เวลา] LT",
                lastDay: "[เมื่อวานนี้ เวลา] LT",
                lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "อีก %s",
                past: "%sที่แล้ว",
                s: "ไม่กี่วินาที",
                m: "1 นาที",
                mm: "%d นาที",
                h: "1 ชั่วโมง",
                hh: "%d ชั่วโมง",
                d: "1 วัน",
                dd: "%d วัน",
                M: "1 เดือน",
                MM: "%d เดือน",
                y: "1 ปี",
                yy: "%d ปี"
            }
        }), e.fullCalendar.datepickerLang("th", "th", {
            closeText: "ปิด",
            prevText: "&#xAB;&#xA0;ย้อน",
            nextText: "ถัดไป&#xA0;&#xBB;",
            currentText: "วันนี้",
            monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            weekHeader: "Wk",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("th", {
            buttonText: {
                month: "เดือน",
                week: "สัปดาห์",
                day: "วัน",
                list: "แผนงาน"
            },
            allDayText: "ตลอดวัน",
            eventLimitText: "เพิ่มเติม"
        })
    }(),
    function () {
        var a = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı"
        };
        (t.defineLocale || t.lang).call(t, "tr", {
            months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd, D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[bugün saat] LT",
                nextDay: "[yarın saat] LT",
                nextWeek: "[haftaya] dddd [saat] LT",
                lastDay: "[dün] LT",
                lastWeek: "[geçen hafta] dddd [saat] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s sonra",
                past: "%s önce",
                s: "birkaç saniye",
                m: "bir dakika",
                mm: "%d dakika",
                h: "bir saat",
                hh: "%d saat",
                d: "bir gün",
                dd: "%d gün",
                M: "bir ay",
                MM: "%d ay",
                y: "bir yıl",
                yy: "%d yıl"
            },
            ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
            ordinal: function (e) {
                if (0 === e) return e + "'ıncı";
                var t = e % 10,
                    n = e % 100 - t,
                    r = e >= 100 ? 100 : null;
                return e + (a[t] || a[n] || a[r])
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("tr", "tr", {
            closeText: "kapat",
            prevText: "&#x3C;geri",
            nextText: "ileri&#x3e",
            currentText: "bugün",
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            dayNamesMin: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
            weekHeader: "Hf",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("tr", {
            buttonText: {
                next: "ileri",
                month: "Ay",
                week: "Hafta",
                day: "Gün",
                list: "Ajanda"
            },
            allDayText: "Tüm gün",
            eventLimitText: "daha fazla"
        })
    }(),
    function () {
        function a(e, t) {
            var a = e.split("_");
            return 1 === t % 10 && 11 !== t % 100 ? a[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? a[1] : a[2]
        }

        function n(e, t, n) {
            var r = {
                mm: "хвилина_хвилини_хвилин",
                hh: "година_години_годин",
                dd: "день_дні_днів",
                MM: "місяць_місяці_місяців",
                yy: "рік_роки_років"
            };
            return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + a(r[n], +e)
        }

        function r(e, t) {
            var a = {
                    nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
                    accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
                },
                n = /D[oD]? *MMMM?/.test(t) ? "accusative" : "nominative";
            return a[n][e.month()]
        }

        function i(e, t) {
            var a = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                },
                n = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
            return a[n][e.day()]
        }

        function s(e) {
            return function () {
                return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
            }
        }(t.defineLocale || t.lang).call(t, "uk", {
            months: r,
            monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
            weekdays: i,
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD.MM.YYYY",
                LL: "D MMMM YYYY р.",
                LLL: "D MMMM YYYY р., LT",
                LLLL: "dddd, D MMMM YYYY р., LT"
            },
            calendar: {
                sameDay: s("[Сьогодні "),
                nextDay: s("[Завтра "),
                lastDay: s("[Вчора "),
                nextWeek: s("[У] dddd ["),
                lastWeek: function () {
                    switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return s("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return s("[Минулого] dddd [").call(this)
                    }
                },
                sameElse: "L"
            },
            relativeTime: {
                future: "за %s",
                past: "%s тому",
                s: "декілька секунд",
                m: n,
                mm: n,
                h: "годину",
                hh: n,
                d: "день",
                dd: n,
                M: "місяць",
                MM: n,
                y: "рік",
                yy: n
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
                return /^(дня|вечора)$/.test(e)
            },
            meridiem: function (e) {
                return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора"
            },
            ordinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e
                }
            },
            week: {
                dow: 1,
                doy: 7
            }
        }), e.fullCalendar.datepickerLang("uk", "uk", {
            closeText: "Закрити",
            prevText: "&#x3C;",
            nextText: "&#x3E;",
            currentText: "Сьогодні",
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
            dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Тиж",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("uk", {
            buttonText: {
                month: "Місяць",
                week: "Тиждень",
                day: "День",
                list: "Порядок денний"
            },
            allDayText: "Увесь день",
            eventLimitText: function (e) {
                return "+ще " + e + "..."
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "vi", {
            months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
            monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
            weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "LT:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM [năm] YYYY",
                LLL: "D MMMM [năm] YYYY LT",
                LLLL: "dddd, D MMMM [năm] YYYY LT",
                l: "DD/M/YYYY",
                ll: "D MMM YYYY",
                lll: "D MMM YYYY LT",
                llll: "ddd, D MMM YYYY LT"
            },
            calendar: {
                sameDay: "[Hôm nay lúc] LT",
                nextDay: "[Ngày mai lúc] LT",
                nextWeek: "dddd [tuần tới lúc] LT",
                lastDay: "[Hôm qua lúc] LT",
                lastWeek: "dddd [tuần rồi lúc] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s tới",
                past: "%s trước",
                s: "vài giây",
                m: "một phút",
                mm: "%d phút",
                h: "một giờ",
                hh: "%d giờ",
                d: "một ngày",
                dd: "%d ngày",
                M: "một tháng",
                MM: "%d tháng",
                y: "một năm",
                yy: "%d năm"
            },
            ordinalParse: /\d{1,2}/,
            ordinal: function (e) {
                return e
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("vi", "vi", {
            closeText: "Đóng",
            prevText: "&#x3C;Trước",
            nextText: "Tiếp&#x3E;",
            currentText: "Hôm nay",
            monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
            monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekHeader: "Tu",
            dateFormat: "dd/mm/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }), e.fullCalendar.lang("vi", {
            buttonText: {
                month: "Tháng",
                week: "Tuần",
                day: "Ngày",
                list: "Lịch biểu"
            },
            allDayText: "Cả ngày",
            eventLimitText: function (e) {
                return "+ thêm " + e
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "zh_CN", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah点mm",
                LTS: "Ah点m分s秒",
                L: "YYYY-MM-DD",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日LT",
                LLLL: "YYYY年MMMD日ddddLT",
                l: "YYYY-MM-DD",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日LT",
                llll: "YYYY年MMMD日ddddLT"
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
            },
            meridiem: function (e, t) {
                var a = 100 * e + t;
                return 600 > a ? "凌晨" : 900 > a ? "早上" : 1130 > a ? "上午" : 1230 > a ? "中午" : 1800 > a ? "下午" : "晚上"
            },
            calendar: {
                sameDay: function () {
                    return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
                },
                nextDay: function () {
                    return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
                },
                lastDay: function () {
                    return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
                },
                nextWeek: function () {
                    var e, a;
                    return e = t().startOf("week"), a = this.unix() - e.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? a + "dddAh点整" : a + "dddAh点mm"
                },
                lastWeek: function () {
                    var e, a;
                    return e = t().startOf("week"), a = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? a + "dddAh点整" : a + "dddAh点mm"
                },
                sameElse: "LL"
            },
            ordinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s内",
                past: "%s前",
                s: "几秒",
                m: "1分钟",
                mm: "%d分钟",
                h: "1小时",
                hh: "%d小时",
                d: "1天",
                dd: "%d天",
                M: "1个月",
                MM: "%d个月",
                y: "1年",
                yy: "%d年"
            },
            week: {
                dow: 1,
                doy: 4
            }
        }), e.fullCalendar.datepickerLang("zh_CN", "zh_CN", {
            closeText: "关闭",
            prevText: "&#x3C;上月",
            nextText: "下月&#x3E;",
            currentText: "今天",
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            weekHeader: "周",
            dateFormat: "yy-mm-dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "年"
        }), e.fullCalendar.lang("zh_CN", {
            buttonText: {
                month: "月",
                week: "周",
                day: "日",
                list: "日程"
            },
            allDayText: "全天",
            eventLimitText: function (e) {
                return "另外 " + e + " 个"
            }
        })
    }(),
    function () {
        (t.defineLocale || t.lang).call(t, "zh-tw", {
            months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
                LT: "Ah點mm",
                LTS: "Ah點m分s秒",
                L: "YYYY年MMMD日",
                LL: "YYYY年MMMD日",
                LLL: "YYYY年MMMD日LT",
                LLLL: "YYYY年MMMD日ddddLT",
                l: "YYYY年MMMD日",
                ll: "YYYY年MMMD日",
                lll: "YYYY年MMMD日LT",
                llll: "YYYY年MMMD日ddddLT"
            },
            meridiemParse: /早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
                return 12 === e && (e = 0), "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
            },
            meridiem: function (e, t) {
                var a = 100 * e + t;
                return 900 > a ? "早上" : 1130 > a ? "上午" : 1230 > a ? "中午" : 1800 > a ? "下午" : "晚上"
            },
            calendar: {
                sameDay: "[今天]LT",
                nextDay: "[明天]LT",
                nextWeek: "[下]ddddLT",
                lastDay: "[昨天]LT",
                lastWeek: "[上]ddddLT",
                sameElse: "L"
            },
            ordinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
                switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e
                }
            },
            relativeTime: {
                future: "%s內",
                past: "%s前",
                s: "幾秒",
                m: "一分鐘",
                mm: "%d分鐘",
                h: "一小時",
                hh: "%d小時",
                d: "一天",
                dd: "%d天",
                M: "一個月",
                MM: "%d個月",
                y: "一年",
                yy: "%d年"
            }
        }), e.fullCalendar.datepickerLang("zh-tw", "zh-TW", {
            closeText: "關閉",
            prevText: "&#x3C;上月",
            nextText: "下月&#x3E;",
            currentText: "今天",
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            weekHeader: "周",
            dateFormat: "yy/mm/dd",
            firstDay: 1,
            isRTL: !1,
            showMonthAfterYear: !0,
            yearSuffix: "年"
        }), e.fullCalendar.lang("zh-tw", {
            buttonText: {
                month: "月",
                week: "週",
                day: "天",
                list: "待辦事項"
            },
            allDayText: "全天",
            eventLimitText: "更多"
        })
    }(), (t.locale || t.lang).call(t, "en"), e.fullCalendar.lang("en"), e.datepicker && e.datepicker.setDefaults(e.datepicker.regional[""])
});