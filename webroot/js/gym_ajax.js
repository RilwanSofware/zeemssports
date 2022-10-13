$( document ).ajaxStart(function() {
  $(".gym-overlay").css("display","block");
});

$( document ).ajaxStop(function() {
  $(".gym-overlay").css("display","none");
});

$(document).ready(function(){
	var resources = {
		en: {
            translation: {
                confirm_message: "Are you sure You want to delete this record?",
				error_message:"There was an error processing form.Please try again later.",
				deleteRecord_message:"There was an error deleting record,Please try again later.",
				specialChar_message:"Special characters not allow.",
				maximum_message:"Please Enter Maximum 50 Chars.",
				category_message:"Please Enter Category Name.",
				insert_message: "Please Enter Interest.",
				source_message:"Please Enter Source.",
				deleteWorkout_message:"Are you sure, you want to delete this workout data?",
				errorwhile_message:"Error While deleting, please try again.",
				onlychar_message:"Please Enter Maximum 50 Chars Only.",
				noactivity_message:"No activity found.",
                
            },
        },
		ko: {
            translation: {
                confirm_message:
                    "이 레코드를 삭제하시겠습니까?",
					error_message:"양식을 처리하는 동안 오류가 발생했습니다. 나중에 다시 시도해 주세요.",
					deleteRecord_message:"레코드를 삭제하는 동안 오류가 발생했습니다. 나중에 다시 시도해 주세요.",
					specialChar_message:"특수 문자는 허용되지 않습니다.",
					maximum_message:"최대 50자까지 입력하세요.",
					category_message:"카테고리 이름을 입력하세요.",
					insert_message: "이자를 입력하세요.",
					source_message:"출처를 입력하세요.",
					deleteWorkout_message:"이 운동 데이터를 삭제하시겠습니까?",
					errorwhile_message:"오류 삭제하는 동안 다시 시도하십시오.",
					onlychar_message:"최대 50자만 입력하십시오.",
					noactivity_message:"활동이 없습니다.",
			}
		},
		gu: {
            translation: {
                confirm_message:"શું તમે ખરેખર આ રેકોર્ડ કાઢી નાખવા માંગો છો?",
				error_message:"ફોર્મની પ્રક્રિયા કરવામાં ભૂલ હતી. કૃપા કરીને પછીથી ફરી પ્રયાસ કરો.",
				deleteRecord_message:"રેકોર્ડ કાઢી નાખવામાં ભૂલ આવી હતી, કૃપા કરીને પછીથી ફરી પ્રયાસ કરો.",
				specialChar_message:"વિશિષ્ટ અક્ષરોને મંજૂરી નથી.",
				maximum_message:"કૃપા કરીને મહત્તમ 50 અક્ષરો દાખલ કરો.",
				category_message:"કૃપા કરીને શ્રેણીનું નામ દાખલ કરો.",
				insert_message: "કૃપા કરીને રસ દાખલ કરો.",
				source_message:"કૃપા કરીને સ્ત્રોત દાખલ કરો.",
				deleteWorkout_message:"શું તમે ખરેખર આ વર્કઆઉટ ડેટા ડિલીટ કરવા માંગો છો?",
				errorwhile_message:"કાઢી નાખતી વખતે ભૂલ, કૃપા કરીને ફરી પ્રયાસ કરો.",
				onlychar_message:"મહેરબાની કરીને ફક્ત મહત્તમ 50 અક્ષરો જ દાખલ કરો.",
				noactivity_message:"કોઈ પ્રવૃત્તિ મળી નથી.",
			}
		},
		mr: {
            translation: {
                confirm_message:"तुमची खात्री आहे की तुम्ही हा रेकॉर्ड हटवू इच्छिता?",
				error_message:"फॉर्मवर प्रक्रिया करताना त्रुटी आली. कृपया नंतर पुन्हा प्रयत्न करा.",
				deleteRecord_message:"रेकॉर्ड हटवताना त्रुटी आली, कृपया नंतर पुन्हा प्रयत्न करा.",
				specialChar_message:"विशेष वर्णांना परवानगी नाही.",
				maximum_message:"कृपया जास्तीत जास्त 50 वर्ण प्रविष्ट करा.",
				category_message:"कृपया श्रेणीचे नाव प्रविष्ट करा.",
				insert_message: "कृपया स्वारस्य प्रविष्ट करा.",
				source_message:"कृपया स्त्रोत प्रविष्ट करा.",
				deleteWorkout_message:"तुमची खात्री आहे, तुम्ही हा कसरत डेटा हटवू इच्छिता?",
				errorwhile_message:"हटवताना त्रुटी, कृपया पुन्हा प्रयत्न करा.",
				onlychar_message:"कृपया जास्तीत जास्त ५० वर्ण प्रविष्ट करा.",
				noactivity_message:"कोणतीही गतिविधी आढळली नाही.",
			}
		},
		ta: {
            translation: {
                confirm_message:"இந்தப் பதிவை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
				error_message:"படிவத்தை செயலாக்குவதில் பிழை ஏற்பட்டது. பிறகு முயற்சிக்கவும்.",
				deleteRecord_message:"பதிவை நீக்குவதில் பிழை, பிறகு முயற்சிக்கவும்.",
				specialChar_message:"சிறப்பு எழுத்துக்கள் அனுமதிக்கப்படவில்லை.",
				maximum_message:"அதிகபட்சம் 50 எழுத்துகளை உள்ளிடவும்.",
				category_message:"வகை பெயரை உள்ளிடவும்.",
				insert_message: "தயவுசெய்து ஆர்வத்தை உள்ளிடவும்.",
				source_message:"தயவுசெய்து மூலத்தை உள்ளிடவும்.",
				deleteWorkout_message:"இந்த உடற்பயிற்சி தரவை நிச்சயமாக நீக்க விரும்புகிறீர்களா?",
				errorwhile_message:"நீக்குவதில் பிழை, மீண்டும் முயற்சிக்கவும்.",
				onlychar_message:"அதிகபட்சம் 50 எழுத்துகளை மட்டும் உள்ளிடவும்.",
				noactivity_message:"செயல்பாடு எதுவும் இல்லை.",
			}
		},
		te: {
            translation: {
                confirm_message:"మీరు ఖచ్చితంగా ఈ రికార్డ్‌ను తొలగించాలనుకుంటున్నారా?",
				error_message:"ఫారమ్‌ను ప్రాసెస్ చేయడంలో లోపం ఏర్పడింది.దయచేసి తర్వాత మళ్లీ ప్రయత్నించండి.",
				deleteRecord_message:"రికార్డును తొలగిస్తున్నప్పుడు లోపం ఏర్పడింది, దయచేసి తర్వాత మళ్లీ ప్రయత్నించండి.",
				specialChar_message:"ప్రత్యేక అక్షరాలు అనుమతించబడవు.",
				maximum_message:"దయచేసి గరిష్టంగా 50 అక్షరాలను నమోదు చేయండి.",
				category_message:"దయచేసి వర్గం పేరును నమోదు చేయండి.",
				insert_message: "దయచేసి ఆసక్తిని నమోదు చేయండి.",
				source_message:"దయచేసి మూలాన్ని నమోదు చేయండి.",
				deleteWorkout_message:"మీరు ఖచ్చితంగా ఈ వ్యాయామ డేటాను తొలగించాలనుకుంటున్నారా?",
				errorwhile_message:"తొలగిస్తున్నప్పుడు లోపం, దయచేసి మళ్లీ ప్రయత్నించండి.",
				onlychar_message:"దయచేసి గరిష్టంగా 50 అక్షరాలు మాత్రమే నమోదు చేయండి.",
				noactivity_message:"కార్యాచరణ ఏదీ కనుగొనబడలేదు.",
			}
		},
		kn: {
            translation: {
                confirm_message:"ಈ ದಾಖಲೆಯನ್ನು ಅಳಿಸಲು ನೀವು ಖಚಿತವಾಗಿ ಬಯಸುವಿರಾ?",
				error_message:"ಫಾರ್ಮ್ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಲ್ಲಿ ದೋಷ ಕಂಡುಬಂದಿದೆ.ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
				deleteRecord_message:"ದಾಖಲೆಯನ್ನು ಅಳಿಸುವಲ್ಲಿ ದೋಷ ಕಂಡುಬಂದಿದೆ, ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
				specialChar_message:"ವಿಶೇಷ ಅಕ್ಷರಗಳನ್ನು ಅನುಮತಿಸಲಾಗುವುದಿಲ್ಲ.",
				maximum_message:"ದಯವಿಟ್ಟು ಗರಿಷ್ಠ 50 ಅಕ್ಷರಗಳನ್ನು ನಮೂದಿಸಿ.",
				category_message:"ದಯವಿಟ್ಟು ವರ್ಗದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
				insert_message: "ದಯವಿಟ್ಟು ಆಸಕ್ತಿಯನ್ನು ನಮೂದಿಸಿ.",
				source_message:"ದಯವಿಟ್ಟು ಮೂಲವನ್ನು ನಮೂದಿಸಿ.",
				deleteWorkout_message:"ಈ ತಾಲೀಮು ಡೇಟಾವನ್ನು ಅಳಿಸಲು ನೀವು ಖಚಿತವಾಗಿ ಬಯಸುವಿರಾ?",
				errorwhile_message:"ಅಳಿಸುವಾಗ ದೋಷ, ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
				onlychar_message:"ದಯವಿಟ್ಟು ಗರಿಷ್ಠ 50 ಅಕ್ಷರಗಳನ್ನು ಮಾತ್ರ ನಮೂದಿಸಿ.",
				noactivity_message:"ಯಾವುದೇ ಚಟುವಟಿಕೆ ಕಂಡುಬಂದಿಲ್ಲ.",
			}
		},
		ml: {
            translation: {
                confirm_message:"ഈ റെക്കോർഡ് ഇല്ലാതാക്കണമെന്ന് തീർച്ചയാണോ?",
				error_message:"ഫോം പ്രോസസ്സ് ചെയ്യുന്നതിൽ ഒരു പിശകുണ്ടായി. ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കുക.",
				deleteRecord_message:"റെക്കോർഡ് ഇല്ലാതാക്കുന്നതിൽ ഒരു പിശകുണ്ടായി, ദയവായി പിന്നീട് വീണ്ടും ശ്രമിക്കുക.",
				specialChar_message:"പ്രത്യേക പ്രതീകങ്ങൾ അനുവദിക്കില്ല.",
				maximum_message:"ദയവായി പരമാവധി 50 അക്ഷരങ്ങൾ നൽകുക.",
				category_message:"ദയവായി വിഭാഗത്തിന്റെ പേര് നൽകുക.",
				insert_message: "ദയവായി പലിശ നൽകുക.",
				source_message:"ദയവായി ഉറവിടം നൽകുക.",
				deleteWorkout_message:"ഈ വർക്കൗട്ട് ഡാറ്റ ഇല്ലാതാക്കണമെന്ന് തീർച്ചയാണോ?",
				errorwhile_message:"ഇല്ലാതാക്കുമ്പോൾ പിശക്, ദയവായി വീണ്ടും ശ്രമിക്കുക.",
				onlychar_message:"ദയവായി പരമാവധി 50 അക്ഷരങ്ങൾ മാത്രം നൽകുക.",
				noactivity_message:"പ്രവർത്തനങ്ങളൊന്നും കണ്ടെത്തിയില്ല.",
			}
		},
		bn: {
            translation: {
                confirm_message:"আপনি কি নিশ্চিত আপনি এই রেকর্ড মুছে দিতে চান?",
				error_message:"ফর্ম প্রক্রিয়াকরণে একটি ত্রুটি ছিল৷ অনুগ্রহ করে পরে আবার চেষ্টা করুন৷",
				deleteRecord_message:"রেকর্ড মোছার সময় একটি ত্রুটি ছিল, অনুগ্রহ করে পরে আবার চেষ্টা করুন৷",
				specialChar_message:"বিশেষ অক্ষর অনুমোদিত নয়।",
				maximum_message:"অনুগ্রহ করে সর্বোচ্চ 50টি অক্ষর লিখুন।",
				category_message:"অনুগ্রহ করে ক্যাটাগরির নাম লিখুন।",
				insert_message: "আগ্রহ লিখুন.",
				source_message:"উত্স লিখুন দয়া করে.",
				deleteWorkout_message:"আপনি কি নিশ্চিত, আপনি এই ওয়ার্কআউট ডেটা মুছতে চান?",
				errorwhile_message:"মুছে ফেলার সময় ত্রুটি, আবার চেষ্টা করুন.",
				onlychar_message:"অনুগ্রহ করে সর্বোচ্চ ৫০টি অক্ষর লিখুন।",
				noactivity_message:"কোন কার্যকলাপ পাওয়া যায়নি.",
			}
		},
		ur: {
            translation: {
                confirm_message:"کیا آپ واقعی اس ریکارڈ کو حذف کرنا چاہتے ہیں؟",
				error_message:"فارم پر کارروائی کرنے میں ایک خامی تھی۔ براہ کرم بعد میں دوبارہ کوشش کریں۔",
				deleteRecord_message:"ریکارڈ کو حذف کرنے میں ایک خامی تھی، براہ کرم بعد میں دوبارہ کوشش کریں۔",
				specialChar_message:"خصوصی حروف کی اجازت نہیں ہے۔",
				maximum_message:"براہ کرم زیادہ سے زیادہ 50 حروف درج کریں۔",
				category_message:"براہ کرم زمرہ کا نام درج کریں۔",
				insert_message: "براہ کرم دلچسپی درج کریں۔",
				source_message:"براہ کرم ماخذ درج کریں۔",
				deleteWorkout_message:"کیا آپ واقعی اس ورزش ڈیٹا کو حذف کرنا چاہتے ہیں؟",
				errorwhile_message:"حذف کرتے وقت خرابی، براہ کرم دوبارہ کوشش کریں۔",
				onlychar_message:"براہ کرم صرف زیادہ سے زیادہ 50 حروف درج کریں۔",
				noactivity_message:"کوئی سرگرمی نہیں ملی۔",
			}
		},
		or: {
            translation: {
                confirm_message:"ଆପଣ ନିଶ୍ଚିତ କି ଆପଣ ଏହି ରେକର୍ଡ ବିଲୋପ କରିବାକୁ ଚାହୁଁଛନ୍ତି?",
				error_message:"ସେଠାରେ ଏକ ତ୍ରୁଟି ପ୍ରକ୍ରିୟାକରଣ ଫର୍ମ ଥିଲା | ଦୟାକରି ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ |",
				deleteRecord_message:"ରେକର୍ଡ ବିଲୋପ କରିବାରେ ଏକ ତ୍ରୁଟି ଥିଲା, ଦୟାକରି ପରେ ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ |",
				specialChar_message:"ବିଶେଷ ବର୍ଣ୍ଣଗୁଡିକ ଅନୁମତି ଦିଏ ନାହିଁ |",
				maximum_message:"ଦୟାକରି ସର୍ବାଧିକ 50 ଅକ୍ଷର ପ୍ରବେଶ କରନ୍ତୁ |",
				category_message:"ଦୟାକରି ବର୍ଗ ନାମ ପ୍ରବେଶ କରନ୍ତୁ |",
				insert_message: "ଦୟାକରି ଆଗ୍ରହ ପ୍ରବେଶ କରନ୍ତୁ |",
				source_message:"ଦୟାକରି ଉତ୍ସ ପ୍ରବେଶ କରନ୍ତୁ |",
				deleteWorkout_message:"ଆପଣ ନିଶ୍ଚିତ କି, ଆପଣ ଏହି ୱାର୍କଆଉଟ୍ ଡାଟା ଡିଲିଟ୍ କରିବାକୁ ଚାହୁଁଛନ୍ତି କି?",
				errorwhile_message:"ବିଲୋପ କରିବା ସମୟରେ ତ୍ରୁଟି, ଦୟାକରି ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ |",
				onlychar_message:"ଦୟାକରି କେବଳ ସର୍ବାଧିକ 50 ଅକ୍ଷର ପ୍ରବେଶ କରନ୍ତୁ |",
				noactivity_message:"କ activity ଣସି କାର୍ଯ୍ୟକଳାପ ମିଳିଲା ନାହିଁ |",
			}
		},
		bg: {
            translation: {
                confirm_message: "Сигурни ли сте, че искате да изтриете този запис?",
				error_message:"Възникна грешка при обработката на формуляра. Моля, опитайте отново по-късно.",
				deleteRecord_message:"Възникна грешка при изтриването на записа. Моля, опитайте отново по-късно.",
				specialChar_message:"Не се допускат специални знаци.",
				maximum_message:"Моля, въведете максимум 50 знака.",
				category_message:"Моля, въведете име на категория.",
				insert_message: "Моля, въведете интерес.",
				source_message:"Моля, въведете източника.",
				deleteWorkout_message:"Сигурни ли сте, че искате да изтриете тези данни за тренировка?",
				errorwhile_message:"Грешка при изтриване, моля, опитайте отново.",
				onlychar_message:"Моля, въведете само максимум 50 знака.",
				noactivity_message:"Няма открита дейност.",
                
            },
        },
		is: {
            translation: {
                confirm_message: "Ertu viss um að þú viljir eyða þessari færslu?",
				error_message:"Villa kom upp við vinnslu eyðublaðs. Reyndu aftur síðar.",
				deleteRecord_message:"Villa kom upp við að eyða skrá, vinsamlegast reyndu aftur síðar.",
				specialChar_message:"Sérstafir ekki leyfa.",
				maximum_message:"Vinsamlegast sláðu inn hámark 50 stafir.",
				category_message:"Vinsamlega sláðu inn heiti flokks.",
				insert_message: "Vinsamlega sláðu inn áhuga.",
				source_message:"Vinsamlegast sláðu inn uppruna.",
				deleteWorkout_message:"Ertu viss um að þú viljir eyða þessum æfingagögnum?",
				errorwhile_message:"Villa við að eyða, vinsamlegast reyndu aftur.",
				onlychar_message:"Vinsamlega sláðu inn hámark 50 stafi Aðeins.",
				noactivity_message:"Engin virkni fannst.",
                
            },
        },
		lb: {
            translation: {
                confirm_message: "Sidd Dir sécher, Dir wëllt dëse Rekord läschen?",
				error_message:"Et gouf e Feeler beim Veraarbechtung v",
				deleteRecord_message:"Et gouf e Feeler beim Läschen vum Rekord, probéiert w.e.g. méi spéit nach eng Kéier.",
				specialChar_message:"Spezial Zeechen net erlaben.",
				maximum_message:"Gitt w.e.g. maximal 50 Zeechen.",
				category_message:"Gitt w.e.g. Kategorie Numm.",
				insert_message: "Gitt w.e.g. Interessi un.",
				source_message:"Gitt w.e.g. Quell un.",
				deleteWorkout_message:"Sidd Dir sécher, Dir wëllt dës Workoutdaten läschen?",
				errorwhile_message:"Feeler beim Läschen, probéiert w.e.g. nach eng Kéier.",
				onlychar_message:"Gitt w.e.g. maximal 50 Zeechen nëmmen.",
				noactivity_message:"Keng Aktivitéit fonnt.",
                
            },
        },
		lv: {
            translation: {
                confirm_message: "Vai tiešām vēlaties dzēst šo ierakstu?",
				error_message:"Veidlapas apstrādē radās kļūda. Lūdzu, vēlāk mēģiniet vēlreiz.",
				deleteRecord_message:"Dzēšot ierakstu, radās kļūda. Lūdzu, vēlāk mēģiniet vēlreiz.",
				specialChar_message:"Speciālās rakstzīmes nav atļautas.",
				maximum_message:"Lūdzu, ievadiet ne vairāk kā 50 rakstzīmes.",
				category_message:"Lūdzu, ievadiet kategorijas nosaukumu.",
				insert_message: "Lūdzu, ievadiet interesi.",
				source_message:"Lūdzu, ievadiet avotu.",
				deleteWorkout_message:"Vai tiešām vēlaties dzēst šos treniņa datus?",
				errorwhile_message:"Kļūda Dzēšot, lūdzu, mēģiniet vēlreiz.",
				onlychar_message:"Lūdzu, ievadiet tikai ne vairāk kā 50 rakstzīmes.",
				noactivity_message:"Netika atrasta darbība.",
                
            },
        },
		sk: {
            translation: {
                confirm_message: "Naozaj chcete odstrániť tento záznam?",
				error_message:"Pri spracovaní formulára sa vyskytla chyba. Skúste to znova neskôr.",
				deleteRecord_message:"Pri odstraňovaní záznamu sa vyskytla chyba. Skúste to znova neskôr.",
				specialChar_message:"Špeciálne znaky nie sú povolené.",
				maximum_message:"Zadajte maximálne 50 znakov.",
				category_message:"Zadajte názov kategórie.",
				insert_message: "Zadajte záujem.",
				source_message:"Zadajte zdroj.",
				deleteWorkout_message:"Naozaj chcete odstrániť tieto údaje o cvičení?",
				errorwhile_message:"Chyba Pri odstraňovaní skúste znova.",
				onlychar_message:"Zadajte maximálne 50 znakov.",
				noactivity_message:"Nenašla sa žiadna aktivita.",
                
            },
        },
		sl: {
            translation: {
                confirm_message: "Ali ste prepričani, da želite izbrisati ta zapis?",
				error_message:"Pri obdelavi obrazca je prišlo do napake. Prosimo, poskusite znova pozneje.",
				deleteRecord_message:"Pri brisanju zapisa je prišlo do napake. Poskusite znova pozneje.",
				specialChar_message:"Posebni znaki niso dovoljeni.",
				maximum_message:"Vnesite največ 50 znakov.",
				category_message:"Vnesite ime kategorije.",
				insert_message: "Vnesite obresti.",
				source_message:"Vnesite vir.",
				deleteWorkout_message:"Ali ste prepričani, da želite izbrisati te podatke o vadbi?",
				errorwhile_message:"Napaka med brisanjem, poskusite znova.",
				onlychar_message:"Vnesite največ 50 znakov.",
				noactivity_message:"Ni dejavnosti.",
                
            },
        },
		hi: {
            translation: {
                confirm_message:"क्या आप वाकई इस रिकॉर्ड को हटाना चाहते हैं?",
				error_message:"फ़ॉर्म को संसाधित करने में त्रुटि हुई थी। कृपया बाद में पुन: प्रयास करें।",
				deleteRecord_message:"रिकॉर्ड हटाने में एक त्रुटि हुई, कृपया बाद में पुन: प्रयास करें।",
				specialChar_message:"विशेष वर्ण की अनुमति नहीं है।",
				maximum_message:"कृपया अधिकतम 50 वर्ण दर्ज करें।",
				category_message:"कृपया श्रेणी का नाम दर्ज करें।",
				insert_message: "कृपया ब्याज दर्ज करें।",
				source_message:"कृपया स्रोत दर्ज करें।",
				deleteWorkout_message:"क्या आप वाकई इस कसरत डेटा को हटाना चाहते हैं?",
				errorwhile_message:"हटाते समय त्रुटि, कृपया पुन: प्रयास करें।",
				onlychar_message:"कृपया अधिकतम 50 वर्ण ही दर्ज करें।",
				noactivity_message:"कोई गतिविधि नहीं मिली।",
			}
		},
		ar: {
            translation: {
                confirm_message:"هل أنت متأكد أنك تريد حذف هذا السجل؟",
				error_message:"حدث خطأ في معالجة النموذج ، يرجى المحاولة مرة أخرى لاحقًا.",
				deleteRecord_message:"حدث خطأ أثناء حذف السجل ، يرجى المحاولة مرة أخرى لاحقًا.",
				specialChar_message:"الأحرف الخاصة غير مسموح بها.",
				maximum_message:"الرجاء إدخال بحد أقصى 50 حرفًا.",
				category_message:"الرجاء إدخال اسم الفئة.",
				insert_message: "الرجاء إدخال الفائدة.",
				source_message:"الرجاء إدخال المصدر.",
				deleteWorkout_message:"هل أنت متأكد من أنك تريد حذف بيانات التمرين هذه؟",
				errorwhile_message:"خطأ أثناء الحذف ، يرجى المحاولة مرة أخرى.",
				onlychar_message:"الرجاء إدخال بحد أقصى 50 حرفًا فقط.",
				noactivity_message:"لم يتم العثور على أي نشاط.",
			}
		},
		zh_CN: {
            translation: {
                confirm_message:"您确定要删除此记录吗？",
				error_message:"处理表单时出错。请稍后再试。",
				deleteRecord_message:"删除记录时出错，请稍后重试。",
				specialChar_message:"不允许使用特殊字符。",
				maximum_message:"请输入最多 50 个字符。",
				category_message:"请输入类别名称。",
				insert_message: "请输入兴趣。",
				source_message:"请输入来源。",
				deleteWorkout_message:"您确定要删除此锻炼数据吗？",
				errorwhile_message:"删除时出错，请重试。",
				onlychar_message:"请输入最多 50 个字符。",
				noactivity_message:"未找到任何活动。",
			}
		},
		cs: {
            translation: {
                confirm_message:"Opravdu chcete tento záznam smazat?",
				error_message:"Při zpracování formuláře došlo k chybě. Zkuste to prosím znovu později.",
				deleteRecord_message:"Při mazání záznamu došlo k chybě, zkuste to prosím znovu později.",
				specialChar_message:"Speciální znaky nejsou povoleny.",
				maximum_message:"Zadejte prosím maximálně 50 znaků.",
				category_message:"Zadejte název kategorie.",
				insert_message: "Zadejte prosím zájem.",
				source_message:"Zadejte zdroj.",
				deleteWorkout_message:"Opravdu chcete tato data cvičení smazat?",
				errorwhile_message:"Chyba Při mazání to zkuste znovu.",
				onlychar_message:"Zadejte pouze maximálně 50 znaků.",
				noactivity_message:"Nebyla nalezena žádná aktivita.",
			}
		},
		fr: {
            translation: {
                confirm_message:"Êtes-vous sûr de vouloir supprimer cet enregistrement ?",
				error_message:"Une erreur s'est produite lors du traitement du formulaire. Veuillez réessayer ultérieurement.",
				deleteRecord_message:"Une erreur s'est produite lors de la suppression de l'enregistrement, veuillez réessayer plus tard.",
				specialChar_message:"Les caractères spéciaux ne sont pas autorisés.",
				maximum_message:"Veuillez entrer un maximum de 50 caractères.",
				category_message:"Veuillez saisir le nom de la catégorie.",
				insert_message: "Veuillez saisir un intérêt.",
				source_message:"Veuillez entrer la source.",
				deleteWorkout_message:"Êtes-vous sûr de vouloir supprimer ces données d'entraînement ?",
				errorwhile_message:"Erreur lors de la suppression, veuillez réessayer.",
				onlychar_message:"Veuillez entrer un maximum de 50 caractères uniquement.",
				noactivity_message:"Aucune activité trouvée.",
			}
		},
		de: {
            translation: {
                confirm_message:"Sind Sie sicher, dass Sie diesen Datensatz löschen möchten?",
				error_message:"Bei der Verarbeitung des Formulars ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
				deleteRecord_message:"Beim Löschen des Datensatzes ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
				specialChar_message:"Sonderzeichen nicht erlaubt.",
				maximum_message:"Bitte geben Sie maximal 50 Zeichen ein.",
				category_message:"Bitte geben Sie den Kategorienamen ein.",
				insert_message: "Bitte Interesse eingeben.",
				source_message:"Bitte Quelle eingeben.",
				deleteWorkout_message:"Möchten Sie diese Trainingsdaten wirklich löschen?",
				errorwhile_message:"Fehler beim Löschen, bitte versuchen Sie es erneut.",
				onlychar_message:"Bitte geben Sie nur maximal 50 Zeichen ein.",
				noactivity_message:"Keine Aktivität gefunden.",
			}
		},
		el: {
            translation: {
                confirm_message:"Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτήν την εγγραφή;",
				error_message:"Παρουσιάστηκε σφάλμα κατά την επεξεργασία της φόρμας. Προσπαθήστε ξανά αργότερα.",
				deleteRecord_message:"Παρουσιάστηκε σφάλμα κατά τη διαγραφή της εγγραφής, δοκιμάστε ξανά αργότερα.",
				specialChar_message:"Δεν επιτρέπονται οι ειδικοί χαρακτήρες.",
				maximum_message:"Εισαγάγετε το μέγιστο 50 χαρακτήρες.",
				category_message:"Παρακαλώ εισάγετε Όνομα κατηγορίας.",
				insert_message: "Εισαγάγετε ενδιαφέρον.",
				source_message:"Εισαγάγετε την πηγή.",
				deleteWorkout_message:"Είστε βέβαιοι ότι θέλετε να διαγράψετε αυτά τα δεδομένα προπόνησης;",
				errorwhile_message:"Σφάλμα Κατά τη διαγραφή, δοκιμάστε ξανά.",
				onlychar_message:"Εισαγάγετε μόνο 50 χαρακτήρες.",
				noactivity_message:"Δεν βρέθηκε δραστηριότητα.",
			}
		},
		it: {
            translation: {
                confirm_message:"Sei sicuro di voler eliminare questo record?",
				error_message:"Si è verificato un errore durante l'elaborazione del modulo. Riprova più tardi.",
				deleteRecord_message:"Si è verificato un errore durante l'eliminazione del record. Riprova più tardi.",
				specialChar_message:"I caratteri speciali non sono ammessi.",
				maximum_message:"Inserisci un massimo di 50 caratteri.",
				category_message:"Si prega di inserire il nome della categoria.",
				insert_message: "Si prega di inserire l'interesse.",
				source_message:"Si prega di inserire la fonte.",
				deleteWorkout_message:"Sei sicuro di voler eliminare questi dati di allenamento?",
				errorwhile_message:"Errore Durante l'eliminazione, riprova.",
				onlychar_message:"Inserisci un massimo di 50 caratteri solo.",
				noactivity_message:"Nessuna attività trovata.",
			}
		},
		ja: {
            translation: {
                confirm_message:"このレコードを削除してもよろしいですか？",
				error_message:"エラー処理フォームがありました。しばらくしてからもう一度お試しください。",
				deleteRecord_message:"レコードの削除中にエラーが発生しました。しばらくしてからもう一度お試しください。",
				specialChar_message:"特殊文字は使用できません。",
				maximum_message:"最大50文字を入力してください。",
				category_message:"カテゴリ名を入力してください。",
				insert_message: "興味を入力してください。",
				source_message:"ソースを入力してください。",
				deleteWorkout_message:"よろしいですか、このワークアウトデータを削除しますか？",
				errorwhile_message:"エラー削除中に、再試行してください。",
				onlychar_message:"最大50文字のみ入力してください。",
				noactivity_message:"アクティビティが見つかりません。",
			}
		},
		pl: {
            translation: {
                confirm_message:"Czy na pewno chcesz usunąć ten wpis?",
				error_message:"Wystąpił błąd podczas przetwarzania formularza.Spróbuj ponownie później.",
				deleteRecord_message:"Podczas usuwania rekordu wystąpił błąd. Spróbuj ponownie później.",
				specialChar_message:"Znaki specjalne nie są dozwolone.",
				maximum_message:"Wprowadź maksymalnie 50 znaków.",
				category_message:"Wprowadź nazwę kategorii.",
				insert_message: "Wprowadź zainteresowanie.",
				source_message:"Podaj źródło.",
				deleteWorkout_message:"Czy na pewno chcesz usunąć te dane treningu?",
				errorwhile_message:"Błąd Podczas usuwania, spróbuj ponownie.",
				onlychar_message:"Wprowadź tylko maksymalnie 50 znaków.",
				noactivity_message:"Nie znaleziono żadnej aktywności.",
			}
		},
		pt_BR: {
            translation: {
                confirm_message:"Tem certeza de que deseja excluir este registro?",
				error_message:"Ocorreu um erro ao processar o formulário. Tente novamente mais tarde.",
				deleteRecord_message:"Ocorreu um erro ao excluir o registro. Tente novamente mais tarde.",
				specialChar_message:"Caracteres especiais não permitidos.",
				maximum_message:"Insira no máximo 50 caracteres.",
				category_message:"Por favor, insira o nome da categoria.",
				insert_message: "Por favor, insira interesse.",
				source_message:"Por favor, digite a fonte.",
				deleteWorkout_message:"Tem certeza de que deseja excluir esses dados de treino?",
				errorwhile_message:"Erro Ao excluir, tente novamente.",
				onlychar_message:"Insira o máximo de 50 caracteres apenas.",
				noactivity_message:"Nenhuma atividade encontrada.",
			}
		},
		pt_PT: {
            translation: {
				confirm_message:"Tem certeza de que deseja excluir este registro?",
				error_message:"Ocorreu um erro ao processar o formulário. Tente novamente mais tarde.",
				deleteRecord_message:"Ocorreu um erro ao excluir o registro. Tente novamente mais tarde.",
				specialChar_message:"Caracteres especiais não permitidos.",
				maximum_message:"Insira no máximo 50 caracteres.",
				category_message:"Por favor, insira o nome da categoria.",
				insert_message: "Por favor, insira interesse.",
				source_message:"Por favor, digite a fonte.",
				deleteWorkout_message:"Tem certeza de que deseja excluir esses dados de treino?",
				errorwhile_message:"Erro Ao excluir, tente novamente.",
				onlychar_message:"Insira o máximo de 50 caracteres apenas.",
				noactivity_message:"Nenhuma atividade encontrada.",
			}
		},
		fa: {
            translation: {
                confirm_message:"آیا مطمئن هستید که می خواهید این رکورد را حذف کنید؟",
				error_message:"یک فرم پردازش خطایی وجود داشت. لطفاً بعداً دوباره امتحان کنید.",
				deleteRecord_message:"هنگام حذف رکورد خطایی روی داد، لطفاً بعداً دوباره امتحان کنید.",
				specialChar_message:"کاراکترهای خاص اجازه نمی دهد.",
				maximum_message:"لطفا حداکثر 50 کاراکتر را وارد کنید.",
				category_message:"لطفا نام دسته را وارد کنید",
				insert_message: "لطفا علاقه را وارد کنید.",
				source_message:"لطفا منبع را وارد کنید",
				deleteWorkout_message:"آیا مطمئنید که می‌خواهید این داده‌های تمرینی را حذف کنید؟",
				errorwhile_message:"خطا هنگام حذف، لطفاً دوباره امتحان کنید.",
				onlychar_message:"لطفا حداکثر 50 کاراکتر را وارد کنید.",
				noactivity_message:"هیچ فعالیتی پیدا نشد",
			}
		},
		ru: {
            translation: {
                confirm_message:"Вы уверены, что хотите удалить эту запись?",
				error_message:"При обработке формы произошла ошибка. Повторите попытку позже.",
				deleteRecord_message:"При удалении записи произошла ошибка. Повторите попытку позже.",
				specialChar_message:"Специальные символы не допускаются.",
				maximum_message:"Пожалуйста, введите максимум 50 символов.",
				category_message:"Пожалуйста, введите название категории.",
				insert_message: "Пожалуйста, введите интерес.",
				source_message:"Пожалуйста, введите источник.",
				deleteWorkout_message:"Вы уверены, что хотите удалить данные этой тренировки?",
				errorwhile_message:"Ошибка При удалении повторите попытку.",
				onlychar_message:"Пожалуйста, введите максимум 50 символов.",
				noactivity_message:"Активность не найдена.",
			}
		},
		es: {
            translation: {
                confirm_message:"¿Está seguro de que desea eliminar este registro?",
				error_message:"Hubo un error al procesar el formulario. Vuelva a intentarlo más tarde.",
				deleteRecord_message:"Hubo un error al eliminar el registro, intente nuevamente más tarde.",
				specialChar_message:"Caracteres especiales no permitidos.",
				maximum_message:"Ingrese un máximo de 50 caracteres.",
				category_message:"Ingrese el nombre de la categoría.",
				insert_message: "Ingrese el interés.",
				source_message:"Ingrese la fuente.",
				deleteWorkout_message:"¿Está seguro de que desea eliminar estos datos de entrenamiento?",
				errorwhile_message:"Error al eliminar, inténtalo de nuevo.",
				onlychar_message:"Ingrese solo un máximo de 50 caracteres.",
				noactivity_message:"No se encontró actividad.",
			}
		},
		th: {
            translation: {
                confirm_message:"คุณแน่ใจหรือไม่ว่าต้องการลบบันทึกนี้",
				error_message:"มีข้อผิดพลาดในการประมวลผลแบบฟอร์ม โปรดลองอีกครั้งในภายหลัง",
				deleteRecord_message:"เกิดข้อผิดพลาดในการลบบันทึก โปรดลองอีกครั้งในภายหลัง",
				specialChar_message:"ไม่อนุญาตให้ใช้อักขระพิเศษ",
				maximum_message:"กรุณาใส่สูงสุด 50 ตัวอักษร",
				category_message:"กรุณาใส่ชื่อหมวดหมู่",
				insert_message: "กรุณากรอกดอกเบี้ย",
				source_message:"กรุณาป้อนแหล่งที่มา",
				deleteWorkout_message:"คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลการออกกำลังกายนี้",
				errorwhile_message:"เกิดข้อผิดพลาดขณะลบ โปรดลองอีกครั้ง",
				onlychar_message:"กรุณากรอกสูงสุด 50 ตัวอักษรเท่านั้น",
				noactivity_message:"ไม่พบกิจกรรม",
			}
		},
		tr: {
            translation: {
                confirm_message:"Bu kaydı silmek istediğinizden emin misiniz?",
				error_message:"Form işlenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
				deleteRecord_message:"Kayıt silinirken bir hata oluştu, Lütfen daha sonra tekrar deneyin.",
				specialChar_message:"Özel karakterlere izin verilmez.",
				maximum_message:"Lütfen Maksimum 50 Karakter Girin.",
				category_message:"Lütfen Kategori Adını Girin.",
				insert_message: "Lütfen Faiz Giriniz.",
				source_message:"Lütfen Kaynak Giriniz.",
				deleteWorkout_message:"Bu antrenman verilerini silmek istediğinizden emin misiniz?",
				errorwhile_message:"Hata Silinirken lütfen tekrar deneyin.",
				onlychar_message:"Lütfen Yalnızca Maksimum 50 Karakter Girin.",
				noactivity_message:"Etkinlik bulunamadı.",
			}
		},
		ca: {
            translation: {
                confirm_message:"Esteu segur que voleu suprimir aquest registre?",
				error_message:"S'ha produït un error en processar el formulari. Torneu-ho a provar més tard.",
				deleteRecord_message:"S'ha produït un error en suprimir el registre. Torneu-ho a provar més tard.",
				specialChar_message:"No es permeten caràcters especials.",
				maximum_message:"Introduïu un màxim de 50 caràcters.",
				category_message:"Introduïu el nom de la categoria.",
				insert_message: "Introduïu l'interès.",
				source_message:"Introduïu la font.",
				deleteWorkout_message:"Esteu segur que voleu suprimir aquestes dades d'entrenament?",
				errorwhile_message:"Error en suprimir, torneu-ho a provar.",
				onlychar_message:"Introduïu només 50 caràcters com a màxim.",
				noactivity_message:"No s'ha trobat cap activitat.",
			}
		},
		da: {
            translation: {
                confirm_message:"Er du sikker på, at du vil slette denne post?",
				error_message:"Der opstod en fejl under behandling af formularen. Prøv venligst igen senere.",
				deleteRecord_message:"Der opstod en fejl under sletning af posten. Prøv venligst igen senere.",
				specialChar_message:"Specialtegn er ikke tilladt.",
				maximum_message:"Indtast maks. 50 tegn.",
				category_message:"Indtast venligst kategorinavn.",
				insert_message: "Indtast venligst interesse.",
				source_message:"Indtast venligst kilde.",
				deleteWorkout_message:"Er du sikker på, at du vil slette disse træningsdata?",
				errorwhile_message:"Fejl under sletning, prøv venligst igen.",
				onlychar_message:"Indtast kun maksimalt 50 tegn.",
				noactivity_message:"Ingen aktivitet fundet.",
			}
		},
		et: {
            translation: {
                confirm_message:"Kas olete kindel, et soovite selle kirje kustutada?",
				error_message:"Vormi töötlemisel ilmnes viga. Proovige hiljem uuesti.",
				deleteRecord_message:"Kirje kustutamisel ilmnes viga. Proovige hiljem uuesti.",
				specialChar_message:"Erimärgid pole lubatud.",
				maximum_message:"Sisestage maksimaalselt 50 tähemärki.",
				category_message:"Sisestage kategooria nimi.",
				insert_message: "Palun sisestage huvi.",
				source_message:"Palun sisestage allikas.",
				deleteWorkout_message:"Kas olete kindel, kas soovite need treeninguandmed kustutada?",
				errorwhile_message:"Viga Kustutamise ajal proovige uuesti.",
				onlychar_message:"Sisestage ainult maksimaalselt 50 tähemärki.",
				noactivity_message:"Tegevust ei leitud.",
			}
		},
		fi: {
            translation: {
                confirm_message:"Oletko varma, että haluat poistaa tämän tietueen?",
				error_message:"Lomakkeen käsittelyssä tapahtui virhe. Yritä myöhemmin uudelleen.",
				deleteRecord_message:"Tietueen poistamisessa tapahtui virhe. Yritä myöhemmin uudelleen.",
				specialChar_message:"Erikoismerkit eivät ole sallittuja.",
				maximum_message:"Anna enintään 50 merkkiä.",
				category_message:"Anna luokan nimi.",
				insert_message: "Anna kiinnostus.",
				source_message:"Anna lähde.",
				deleteWorkout_message:"Oletko varma, haluatko poistaa nämä harjoitustiedot?",
				errorwhile_message:"Virhe Poistamisen aikana yritä uudelleen.",
				onlychar_message:"Anna enintään 50 merkkiä.",
				noactivity_message:"Toimintaa ei löytynyt.",
			}
		},
		he: {
            translation: {
                confirm_message:"האם אתה בטוח שברצונך למחוק את הרשומה הזו",
				error_message:"אירעה שגיאה בעיבוד הטופס. אנא נסה שוב מאוחר יותר.",
				deleteRecord_message:"אירעה שגיאה במחיקת רשומה, אנא נסה שוב מאוחר יותר.",
				specialChar_message:"תווים מיוחדים אינם מאפשרים.",
				maximum_message:"נא להזין מקסימום 50 תווים.",
				category_message:"נא להזין את שם הקטגוריה.",
				insert_message: "נא להזין עניין.",
				source_message:"נא להזין מקור.",
				deleteWorkout_message:"האם אתה בטוח שאתה רוצה למחוק את נתוני האימון האלה?",
				errorwhile_message:"שגיאה בעת המחיקה, אנא נסה שוב.",
				onlychar_message:"נא להזין מקסימום 50 תווים בלבד.",
				noactivity_message:"לא נמצאה פעילות.",
			}
		},
		hr: {
            translation: {
                confirm_message:"Jeste li sigurni da želite izbrisati ovaj zapis?",
				error_message:"Došlo je do pogreške u obradi obrasca. Pokušajte ponovo kasnije.",
				deleteRecord_message:"Došlo je do pogreške prilikom brisanja zapisa, pokušajte ponovo kasnije.",
				specialChar_message:"Posebni znakovi nisu dopušteni.",
				maximum_message:"Unesite najviše 50 znakova.",
				category_message:"Unesite naziv kategorije.",
				insert_message: "Unesite interes.",
				source_message:"Unesite izvor.",
				deleteWorkout_message:"Jeste li sigurni da želite izbrisati ove podatke o vježbanju?",
				errorwhile_message:"Pogreška Prilikom brisanja, pokušajte ponovo.",
				onlychar_message:"Unesite samo najviše 50 znakova.",
				noactivity_message:"Nije pronađena aktivnost.",
			}
		},
		hu: {
            translation: {
                confirm_message:"Biztos benne, hogy törli ezt a rekordot?",
				error_message:"Hiba történt az űrlap feldolgozása során. Kérjük, próbálja újra később.",
				deleteRecord_message:"Hiba történt a rekord törlésekor. Kérjük, próbálja újra később.",
				specialChar_message:"A speciális karakterek nem engedélyezettek.",
				maximum_message:"Kérjük, adjon meg legfeljebb 50 karaktert.",
				category_message:"Kérjük, adja meg a kategória nevét.",
				insert_message: "Kérjük, adja meg érdeklődését.",
				source_message:"Kérjük, adja meg a forrást.",
				deleteWorkout_message:"Biztos benne, hogy törölni szeretné ezeket az edzésadatokat?",
				errorwhile_message:"Hiba Törlés közben próbálja újra.",
				onlychar_message:"Kérjük, csak legfeljebb 50 karaktert írjon be.",
				noactivity_message:"Nem található tevékenység.",
			}
		},
		id: {
            translation: {
                confirm_message:"Anda yakin ingin menghapus catatan ini?",
				error_message:"Terjadi kesalahan saat memproses formulir. Harap coba lagi nanti.",
				deleteRecord_message:"Terjadi kesalahan saat menghapus rekaman, Harap coba lagi nanti.",
				specialChar_message:"Karakter khusus tidak diperbolehkan.",
				maximum_message:"Silakan Masukkan Maksimum 50 Karakter.",
				category_message:"Silakan Masukkan Nama Kategori.",
				insert_message: "Silakan Masukkan Minat.",
				source_message:"Silakan Masukkan Sumber.",
				deleteWorkout_message:"Yakin ingin menghapus data latihan ini?",
				errorwhile_message:"Kesalahan Saat menghapus, harap coba lagi.",
				onlychar_message:"Harap Masukkan Maksimum 50 Karakter Saja.",
				noactivity_message:"Tidak ada aktivitas yang ditemukan.",
			}
		},
		lt: {
            translation: {
                confirm_message:"Ar tikrai norite ištrinti šį įrašą?",
				error_message:"Apdorojant formą įvyko klaida. Vėliau bandykite dar kartą.",
				deleteRecord_message:"Ištrinant įrašą įvyko klaida. Vėliau bandykite dar kartą.",
				specialChar_message:"Specialieji simboliai neleidžiami.",
				maximum_message:"Įveskite ne daugiau kaip 50 simbolių.",
				category_message:"Įveskite kategorijos pavadinimą.",
				insert_message: "Įveskite palūkanas.",
				source_message:"Įveskite šaltinį.",
				deleteWorkout_message:"Ar tikrai norite ištrinti šiuos treniruotės duomenis?",
				errorwhile_message:"Klaida Trindami bandykite dar kartą.",
				onlychar_message:"Įveskite tik ne daugiau kaip 50 simbolių.",
				noactivity_message:"Nerasta jokios veiklos.",
			}
		},
		nl: {
            translation: {
                confirm_message:"Weet u zeker dat u deze record wilt verwijderen?",
				error_message:"Er is een fout opgetreden bij het verwerken van het formulier. Probeer het later opnieuw.",
				deleteRecord_message:"Er is een fout opgetreden bij het verwijderen van de record. Probeer het later opnieuw.",
				specialChar_message:"Speciale tekens zijn niet toegestaan.",
				maximum_message:"Voer maximaal 50 tekens in.",
				category_message:"Voer de categorienaam in.",
				insert_message: "Vul interesse in.",
				source_message:"Vul alstublieft de bron in.",
				deleteWorkout_message:"Weet u zeker dat u deze trainingsgegevens wilt verwijderen?",
				errorwhile_message:"Fout Probeer tijdens het verwijderen opnieuw.",
				onlychar_message:"Voer maximaal 50 tekens in.",
				noactivity_message:"Geen activiteit gevonden.",
			}
		},
		no: {
            translation: {
                confirm_message:"Er du sikker på at du vil slette denne posten?",
				error_message:"Det oppsto en feil under behandling av skjemaet. Prøv igjen senere.",
				deleteRecord_message:"Det oppsto en feil under sletting av posten. Prøv igjen senere.",
				specialChar_message:"Spesialtegn er ikke tillatt.",
				maximum_message:"Vennligst skriv inn maksimalt 50 tegn.",
				category_message:"Vennligst skriv inn kategorinavn.",
				insert_message: "Vennligst skriv inn interesse.",
				source_message:"Vennligst skriv inn kilde.",
				deleteWorkout_message:"Er du sikker på at du vil slette disse treningsdataene?",
				errorwhile_message:"Feil under sletting, prøv igjen",
				onlychar_message:"Vennligst skriv inn maksimalt 50 tegn.",
				noactivity_message:"Ingen aktivitet funnet.",
			}
		},
		ro: {
            translation: {
                confirm_message:"Sunteți sigur că doriți să ștergeți această înregistrare?",
				error_message:"A apărut o eroare la procesarea formularului. Vă rugăm să încercați din nou mai târziu.",
				deleteRecord_message:"A apărut o eroare la ștergerea înregistrării. Vă rugăm să încercați din nou mai târziu.",
				specialChar_message:"Caracterele speciale nu sunt permise.",
				maximum_message:"Vă rugăm să introduceți maximum 50 de caractere.",
				category_message:"Vă rugăm să introduceți numele categoriei.",
				insert_message: "Vă rugăm să introduceți interesul.",
				source_message:"Vă rugăm să introduceți sursa.",
				deleteWorkout_message:"Ești sigur că vrei să ștergi aceste date de antrenament?",
				errorwhile_message:"Eroare În timpul ștergerii, încercați din nou.",
				onlychar_message:"Vă rugăm să introduceți numai maximum 50 de caractere.",
				noactivity_message:"Nu a fost găsită nicio activitate.",
			}
		},
		sv: {
            translation: {
                confirm_message:"Är du säker på att du vill radera denna post?",
				error_message:"Det uppstod ett fel vid bearbetning av formuläret. Försök igen senare.",
				deleteRecord_message:"Det gick inte att ta bort posten. Försök igen senare.",
				specialChar_message:"Specialtecken är inte tillåtet.",
				maximum_message:"Ange maximalt 50 tecken.",
				category_message:"Vänligen ange kategorinamn.",
				insert_message: "Vänligen ange intresse.",
				source_message:"Vänligen ange källa.",
				deleteWorkout_message:"Är du säker på att du vill ta bort denna träningsdata?",
				errorwhile_message:"Fel vid borttagning, försök igen.",
				onlychar_message:"Ange endast maximalt 50 tecken.",
				noactivity_message:"Ingen aktivitet hittades.",
			}
		},
		vi: {
            translation: {
                confirm_message:"Bạn có chắc chắn Bạn muốn xóa bản ghi này không?",
				error_message:"Đã xảy ra lỗi khi xử lý biểu mẫu. Vui lòng thử lại sau.",
				deleteRecord_message:"Đã xảy ra lỗi khi xóa bản ghi, Vui lòng thử lại sau.",
				specialChar_message:"Các ký tự đặc biệt không được phép.",
				maximum_message:"Vui lòng nhập tối đa 50 ký tự.",
				category_message:"Vui lòng nhập Tên loại.",
				insert_message: "Vui lòng nhập lãi suất.",
				source_message:"Vui lòng nhập nguồn.",
				deleteWorkout_message:"Bạn có chắc chắn muốn xóa dữ liệu tập luyện này không?",
				errorwhile_message:"Lỗi khi xóa, vui lòng thử lại.",
				onlychar_message:"Vui lòng chỉ nhập tối đa 50 ký tự.",
				noactivity_message:"Không tìm thấy hoạt động nào.",
			}
		},
		zu: {
            translation: {
                confirm_message: "Uqinisekile ukuthi ufuna ukususa leli rekhodi?",
				error_message:"Kube nephutha lokucubungula ifomu.Sicela uzame futhi ngokuhamba kwesikhathi.",
				deleteRecord_message:"Kube nephutha ekususeni irekhodi, Sicela uzame futhi ngokuhamba kwesikhathi.",
				specialChar_message:"Izinhlamvu ezikhethekile azivunyelwe.",
				maximum_message:"Sicela ufake Izinhlamvu eziphezulu ezingu-50.",
				category_message:"Sicela ufake igama lesigaba.",
				insert_message: "Sicela Ufake Intshisekelo.",
				source_message:"Sicela Ufake Umthombo.",
				deleteWorkout_message:"Uqinisekile, ufuna ukususa le datha yokujima?",
				errorwhile_message:"Iphutha ngenkathi isusa, sicela uzame futhi.",
				onlychar_message:"Sicela Faka Ubuningi Bezinhlamvu Ezingu-50 Kuphela.",
				noactivity_message:"Awukho umsebenzi otholiwe.",
                
            },
        },
		
        };
		
		var settingajaxurl = $("#get_language_ajax_path").val();
		$.ajax({
			url: settingajaxurl,
			type: "POST",
			async: false,
			success: function (result) {
				if (result) {
					i18n.init(
						{
							lng: result,
							resStore: resources,
							fallbackLng: "en",
						},
						function (t) {
							$(document).i18n();
						}
					);
				}
			},
			error: function (e) {
				if (confirm(i18n.t("error_message")))
				// alert(e.responseText);
				console.log(e.responseText);
			},
		});
$(".body-overlay").css("display","none");
$("body").css("overflow-y","scroll");

$(".gym-modal").on("hidden.bs.modal", function () {
   $('.gym-modal').modal('hide');
   $("body").css("padding-right","0");
});

$("body").on("click",".add_category",function(){	
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		},
		error : function(e)
		{
			if (confirm(i18n.t("error_message")));
			// alert(e.responseText);
			console.log(e.responseText);
		}
	});
});

// $("body").on("click",".add-category",function(){
// 	var name = $(".cat_name").val();
// 	var ajaxurl = $(this).attr("data-url");
// 	//var regex = new RegExp("^[a-zA-Z]+$");
// 	var regex = /^[a-zA-Z\s._-]*$/;
// 	if(name != "")
// 	{
// 		if(regex.test(name)) 
// 		{
// 			if(name.length<=50)
// 			{
// 				var curr_data = { name : name};
// 				$.ajax({
// 					url : ajaxurl,
// 					type : "POST",
// 					data : curr_data,
// 					success : function(response){					
// 							if(response)
// 							{
// 								$(".cat_name").val('');
// 								response = $.parseJSON(response);
// 								$("#category_list").prepend(response[0]);
// 								$(".cat_list").append(response[1]);
// 							}
// 					}
// 				});
// 			}
// 			else{
// 				alert("Please Enter Maximum 50 Chars Only.");
// 			}
// 		}
// 		else{
// 			alert("Please Enter Letters Only.");
// 		}
// 	}
// 	else{
// 		alert("Please Enter Category Name.");
// 	}
	
// });

// $("body").on("click",".del-category",function(){
// 	var did = $(this).attr("del-id");
// 	var ajaxurl = $(this).attr("data-url");
// 	var cdata = {did:did};
// 	var msg = '<?php echo $this->GYM->translateMessage("Are you sure You want to delete this record?") ?>';
// 	if(confirm(msg))
// 	{
// 		$.ajax({
// 				url:ajaxurl,
// 				type : "POST",
// 				data : cdata,
// 				success : function(response)
// 				{
// 					if(response)
// 					{
// 						$("tr[id=row-"+did+"]").remove();
// 						$("option[value="+did+"]").remove();
// 					}
// 				}
// 		});
// 	}else{
// 		return false;
// 	}
// });

$("body").on("click",".add_plan",function(){	
	var ajaxurl = $(this).attr("data-url");
	$.ajax({
			url:ajaxurl,
			type : "POST",			
			success : function(response)
			{
				if(response)
				{
					$('.gym-modal').modal('show');			
					$(".gym-modal .modal-content").html(response);
				}
			}
	});
});

// $("body").on("click",".add-plan",function(){
// 	var number = $("#number").val();
// 	var duration = $("#duration").val();
// 	var ajaxurl = $(this).attr("data-url");
// 	var regex = new RegExp("^[0-9]+$");
// 	if(number != "" && duration!="")
// 	{
// 		if(regex.test(number)) 
// 		{
// 			if(number.length<=3)
// 			{
// 				var curr_data = { name : name,number:number,duration:duration};
// 				$.ajax({
// 					url : ajaxurl,
// 					type : "POST",
// 					data : curr_data,
// 					success : function(response){					
// 							if(response)
// 							{
// 								$("#number").val('');
// 								$("#duration").val('');
// 								response = $.parseJSON(response);
// 								$("#plan_list").prepend(response[0]);
// 								$(".plan_list").append(response[1]);
// 							}
// 					}
// 				});
// 			}else{
// 				alert("Please Enter Maximum 3 Numbers Only.");
// 			}
// 		}else{
// 			alert("Please Enter Only Number.");
// 		}	
// 	}else{
// 		alert("Please Enter Number or Select Duration.");
// 	}
	
// });

// $("body").on("click",".del-plan",function(){
// 	var did = $(this).attr("del-id");
// 	var ajaxurl = $(this).attr("data-url");
// 	var cdata = {did:did};
// 	if(confirm("Are you sure you want to delete this record?"))
// 	{
// 		$.ajax({
// 				url:ajaxurl,
// 				type : "POST",
// 				data : cdata,
// 				success : function(response)
// 				{
// 					if(response)
// 					{
// 						$("tr[id=row-"+did+"]").remove();
// 						$("option[value="+did+"]").remove();
// 					}
// 				}
// 		});	
// 	}
// });

$("body").on("click",".del-membership",function(e){
	e.preventDefault();
	var ajaxurl = $(this).attr("data-url");
	var did = $(this).attr("did");
	var cdata = {did:did};
	if (confirm(i18n.t("confirm_message")))
	{
		$.ajax({
			url:ajaxurl,
			type:"POST",
			data:cdata,
			success:function(response){					
						$("#row-"+did).fadeOut("slow");
						//var flash = "<div class='message success' onclick=\"this.classList.add('hidden')\">Success! Record Deleted Successfully.</div>"
						//$(".content-wrapper").prepend(flash);					
					},
			error : function(e){
				if (confirm(i18n.t("error_message")))
						console.log(e.responseText);
					}
		});
	}
});

$("body").on("click",".add-role",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		},
		error : function(e)
		{
			if (confirm(i18n.t("error_message")));
			// alert(e.responseText);
			console.log(e.responseText);
		}
	});
	
});

$("body").on("click",".save-role",function(){
	var name = $(".role_name").val();
	var ajaxurl = $(this).attr("data-url");
	var regex = /^[A-Za-z0-9 ]+$/
	var isValid = regex.test(name);
	if(name != "")
	{
		if(name.length<=50)
		{
			if(!isValid){
				if (confirm(i18n.t("specialChar_message")));
			}else{
				var curr_data = { role : name};
				$.ajax({
					url : ajaxurl,
					type : "POST",
					data : curr_data,
					success : function(response){					
							if(response)
							{
								response = $.parseJSON(response);
								$("#roles_list").prepend(response[0]);
								$(".roles_list").append(response[1]);
								var name = $(".role_name").val("");
							}
					}
				});
			}
		}else{
				if (confirm(i18n.t("onlychar_message")));
			}	
	}else{
		if (confirm(i18n.t("category_message")));
	}
	
});

$("body").on("click",".del-role",function(e){
	e.preventDefault();
	var ajaxurl = $(this).attr("data-url");
	var did = $(this).attr("del-id");
	// var cdata = {did:did};
	if (confirm(i18n.t("confirm_message")))
	{
		$.ajax({
			url:ajaxurl,
			type:"POST",
			// data:cdata,
			success:function(response){					
						$("#row-"+did).fadeOut("slow");
						$(".roles_list option[value="+did+"]").remove();
						//var flash = "<div class='message success' onclick=\"this.classList.add('hidden')\">Success! Record Deleted Successfully.</div>"
						//$(".content-wrapper").prepend(flash);					
					},
			error : function(e){
				if (confirm(i18n.t("error_message")))
						console.log(e.responseText);
					}
		});
	}
});


$("body").on("click",".add-spec",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		},
		error : function(e)
		{
			if (confirm(i18n.t("error_message")));
			// alert(e.responseText);
			console.log(e.responseText);
		}
	});
	
});

$("body").on("click",".save-spec",function(){
	var name = $(".spec_name").val();
	var ajaxurl = $(this).attr("data-url");
	var regex = /^[A-Za-z0-9 ]+$/
	var isValid = regex.test(name);

	if(name != "")
	{
		if(name.length<=50)
		{
			if(!isValid){
				if (confirm(i18n.t("specialChar_message")));
			}else{
				var curr_data = { name : name};
				$.ajax({
					url : ajaxurl,
					type : "POST",
					data : curr_data,
					success : function(response){					
							if(response)
							{
								response = $.parseJSON(response);
								var name = $(".spec_name").val("");
								$("#specialization_list").prepend(response[0]);
								$(".specialization_list").append(response[1]);
								$('#specialization').multiselect('destroy');
								$('#specialization').multiselect('rebuild');
								var name = $(".role_name").val("");
								$('#empty_row').hide();
							}
					},
					error : function(e){
						alert(e);
						console.log(e.responseText);
					}
				});	
			}
		}else{
			if (confirm(i18n.t("onlychar_message")));
		}
	}else{
		if (confirm(i18n.t("category_message")));
	}
	
});

$("body").on("click",".del-spec",function(e){
	e.preventDefault();
	var ajaxurl = $(this).attr("data-url");
	var did = $(this).attr("del-id");
	
	if (confirm(i18n.t("confirm_message")))
	{
		$.ajax({
			url:ajaxurl,
			type:"POST",			
			success:function(response){					
						$("#row-"+did).fadeOut("slow");
						$(".specialization_list option[value="+did+"]").remove();
						$('#specialization').multiselect('destroy');
						$('#specialization').multiselect('rebuild');
						//var flash = "<div class='message success' onclick=\"this.classList.add('hidden')\">Success! Record Deleted Successfully.</div>"
						//$(".content-wrapper").prepend(flash);					
					},
			error : function(e){
				if (confirm(i18n.t("error_message")))
						console.log(e.responseText);
					}
		});
	}
});

$("body").on("click",".interest-list",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		}
	});
	
});

$("body").on("click",".save-interest",function(){
	var interest = $(".interest").val();
	var ajaxurl = $(this).attr("data-url");
	var regex = /^[A-Za-z0-9 ]+$/
	var isValid = regex.test(interest);

	if(interest != "")
	{
		if(interest.length<=50)
		{
			if(!isValid){
				if (confirm(i18n.t("specialChar_message")));
			}else{
				var curr_data = { interest : interest};
				$.ajax({
					url : ajaxurl,
					type : "POST",
					data : curr_data,
					success : function(response){					
							if(response)
							{	
								response = $.parseJSON(response);						
								var interest = $(".interest").val("");
								$("#interest_list").prepend(response[0]);
								$(".interest_list").append(response[1]);						
								$(".interest").val("");
								$("#empty_row").hide();
							}
					},
					error : function(e){
						alert(e);
						console.log(e.responseText);
					}
				});
			}
		}else{
			if (confirm(i18n.t("maximum_message")));
		}
	}else{
		if (confirm(i18n.t("insert_message")));
	}
	
});

$("body").on("click",".del-interest",function(e){
	e.preventDefault();
	var ajaxurl = $(this).attr("data-url");
	var did = $(this).attr("del-id");
	
	if (confirm(i18n.t("confirm_message")))
	{
		$.ajax({
			url:ajaxurl,
			type:"POST",			
			success:function(response){					
						$("#row-"+did).fadeOut("slow");
						$(".interest_list option[value="+did+"]").remove();						
						//var flash = "<div class='message success' onclick=\"this.classList.add('hidden')\">Success! Record Deleted Successfully.</div>"
						//$(".content-wrapper").prepend(flash);					
					},
			error : function(e){
				if (confirm(i18n.t("error_message")))
						console.log(e.responseText);
					}
		});
	}
});

$("body").on("click",".source-list",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		}
	});
	
});


$("body").on("click",".save-source",function(){
	var source = $(".source").val();
	var ajaxurl = $(this).attr("data-url");
	var regex = /^[A-Za-z0-9 ]+$/
	var isValid = regex.test(source);
	if(source != "")
	{
		if(source.length<=50)
		{
			if(!isValid){
				if (confirm(i18n.t("specialChar_message")));
			}else{
				var curr_data = { source : source};
				$.ajax({
					url : ajaxurl,
					type : "POST",
					data : curr_data,
					success : function(response){					
							if(response)
							{	
								response = $.parseJSON(response);					
								$("#source_list").prepend(response[0]);
								$(".source_list").append(response[1]);						
								$(".source").val("");
							}
					},
					error : function(e){
						alert(e);
						console.log(e.responseText);
					}
				});
			}
		}else{
			if (confirm(i18n.t("maximum_message")));
		}
	}else{
		if (confirm(i18n.t("source_message")));
	}
	
});

$("body").on("click",".del-source",function(e){
	e.preventDefault();
	var ajaxurl = $(this).attr("data-url");
	var did = $(this).attr("del-id");
	
	if (confirm(i18n.t("confirm_message")))
	{
		$.ajax({
			url:ajaxurl,
			type:"POST",			
			success:function(response){					
						$("#row-"+did).fadeOut("slow");
						$(".source_list option[value="+did+"]").remove();						
						//var flash = "<div class='message success' onclick=\"this.classList.add('hidden')\">Success! Record Deleted Successfully.</div>"
						//$(".content-wrapper").prepend(flash);					
					},
			error : function(e){
				if (confirm(i18n.t("error_message")))
						console.log(e.responseText);
					}
		});
	}
});


$("body").on("click",".level-list",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		}
	});
	
});

// $("body").on("click",".save-level",function(){
// 	var ajaxurl = $(this).attr("data-url");
// 	var level = $(".level").val();
// 	var regex = /^[A-Za-z0-9 ]+$/
// 	var isValid = regex.test(level);

// 	if(level != "")
// 	{	
// 		if(level.length<=50)
// 		{
// 			if(!isValid){
// 				alert("Special characters not allow.")
// 			}else{
// 				var curr_data = { level : level};
// 				$.ajax({
// 					url:ajaxurl,
// 					data : curr_data,
// 					type:"POST",
// 					success:function(response){
// 						if(response)
// 								{	
// 									response = $.parseJSON(response);					
// 									$("#level_list").prepend(response[0]);
// 									$(".level_list").append(response[1]);						
// 									$(".level").val("");
// 									$("#noRecord").remove();
// 								}
// 					},
// 					error : function(e){
// 									alert("There was an error deleting record,Please try again later.");
// 									console.log(e.responseText);
// 								}
// 				});
// 			}
// 		}else{
// 			alert("Please Enter Maximum 50 Chars.");
// 		}
// 	}
// 	else{
// 		alert("Please Enter Level");
// 	}
// });

// $("body").on("click",".del-level",function(e){
// 	e.preventDefault();
// 	var ajaxurl = $(this).attr("data-url");
// 	var did = $(this).attr("del-id");
	
// 	if(confirm('Are you sure you want to delete this record?'))
// 	{
// 		$.ajax({
// 			url:ajaxurl,
// 			type:"POST",			
// 			success:function(response){					
// 						$("#row-"+did).fadeOut("slow");
// 						$(".level_list option[value="+did+"]").remove();						
// 						//var flash = "<div class='message success' onclick=\"this.classList.add('hidden')\">Success! Record Deleted Successfully.</div>"
// 						//$(".content-wrapper").prepend(flash);					
// 					},
// 			error : function(e){
// 						alert("There was an error deleting record,Please try again later.");
// 						console.log(e.responseText);
// 					}
// 		});
// 	}
// });

$("body").on("click",".del_panel",function(){
	var del_id = $(this).attr("del_id");
	var ajaxurl = $(this).attr("data-url");
	var curr_data = { workout_id : del_id};
if (confirm(i18n.t("deleteWorkout_message")))
	{
		$.ajax({
			url:ajaxurl,
			data:curr_data,
			success:function(response)
					{   
						if(response)
						{							
							$("#remove_panel_"+del_id).remove();
						}else{
							if (confirm(i18n.t("errorwhile_message")));
						}
					}
		});
	}
});


$("body").on("change","#mem_list",function(){
	$(".dp-item").removeClass("sel_date"); 
	$(".workout_area").html("<div class='work_out_datalist'>Select Record Date For Today Workout</div>");
	$("#note_area").html('');
	$(".btn.btn-success").html('');
	var uid = $(this).val();
	var ajaxurl = $(this).attr("data-url");	/*getworkoutdates*/	
	var curr_data = {uid:uid};
	if(uid != "") {
		$.ajax({
			url : ajaxurl,
			data : curr_data,
			type : "POST",
			success : function(response){
				console.log(response); 
					if(response != false) {
						var dates = $.parseJSON(response);				
						$("#date_range").val(dates);
						
						var assigned_dates = $("#date_range").val();
						var dates = assigned_dates.split(",");
						$("a").removeClass(" sel_date");
						for(var i=0;i<dates.length;i++)
						{				
							$("[data-moment="+dates[i]+"]").addClass(" sel_date");							
						}						
						$(".dp-selected").removeClass("sel_date"); 
					}
			},
			error : function(e) {
				if (confirm(i18n.t("error_message")))
					console.log(e.responseText);
				}
		});
	}
});

$("body").on("change",".show_workout",function(){
	  $("#box-widget").activateBox();
	if(this.checked)
	{
		var cat_id = $(this).attr("id");
		var ajaxurl = $("#get_url").val();
		var curr_data = {cat_id:cat_id};
		$.ajax({
			url:ajaxurl,
			type:"POST",
			data:curr_data,
			success:function(response){
						if(response != false)
						{
							$(".activity_data").append(response);
						}else{
							if (confirm(i18n.t("noactivity_message")));
						}						
					},
			error:function(e){
				if (confirm(i18n.t("error_message")))
					console.log(e.responseText);
				}
		});
		
	}else{
		var cat_id = $(this).attr("id");		
		$("#act_block_"+cat_id).remove();
	}	
});

$("body").on("click",".view_measurment",function(){
var ajaxurl = $(this).attr("data-url");
var user_id = $(this).attr("data-val");
var curr_data = {user_id:user_id};
	$.ajax({
		url:ajaxurl,
		data:curr_data,
		type:"POST",
		success : function(result){
					$('.gym-modal').modal('show');			
					$(".gym-modal .modal-content").html(result);	
				},
		error:function(e){
			if (confirm(i18n.t("error_message")))
					console.log(e.responseText);
				}
	});
});

$("body").on("click",".delete_measurment",function(){
	var did = $(this).attr("did");
	var ajaxurl = $(this).attr("data-url");	
if (confirm(i18n.t("deleteWorkout_message")))
	{
		$.ajax({
			url:ajaxurl,
			success:function(response)
					{   
						if(response)
						{							
							$("#row_"+did).remove();
						}else{
							if (confirm(i18n.t("errorwhile_message")));
						}
					}
		});
	}
});

$("body").on("click",".del_nutrition_panel",function(){
	var del_id = $(this).attr("del_id");
	var ajaxurl = $(this).attr("data-url");
	var curr_data = { workout_id : del_id};	
if (confirm(i18n.t("deleteWorkout_message")))
	{
		$.ajax({
			url:ajaxurl,
			data:curr_data,
			success:function(response)
					{   
						if(response)
						{							
							$("#remove_panel_"+del_id).remove();
						}else{
							if (confirm(i18n.t("errorwhile_message")));
						}
					}
		});
	}
});

$("body").on("click","#eventplace_list",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		}
	});
	
});


// $("body").on("click",".save-event-place",function(){
// 	var place_name = $(".place_name").val();
// 	var ajaxurl = $(this).attr("data-url");
// 	if(place_name != "")
// 	{		
// 		var curr_data = { place_name : place_name};
// 		$.ajax({
// 			url : ajaxurl,
// 			type : "POST",
// 			data : curr_data,
// 			success : function(response){					
// 					if(response)
// 					{	
// 						$('#empty_row').hide();
// 						response = $.parseJSON(response);					
// 						$("#events_place_list").prepend(response[0]);
// 						$(".events_place_list").append(response[1]);						
// 						$(".events_place_list").val("");
// 						$(".place_name").val('');
// 					}
// 			},
// 			error : function(e){
// 				alert(e);
// 				console.log(e.responseText);
// 			}
// 		});		
// 	}else{
// 		alert("Please Enter Place Name.");
// 	}
	
// });

$("body").on("click",".del-event-place",function(e){
	e.preventDefault();
	var ajaxurl = $(this).attr("data-url");
	var did = $(this).attr("del-id");
	
	if (confirm(i18n.t("confirm_message")))
	{
		$.ajax({
			url:ajaxurl,
			type:"POST",			
			success:function(response){					
						$("#row-"+did).fadeOut("slow");
						$(".events_place_list option[value="+did+"]").remove();						
						//var flash = "<div class='message success' onclick=\"this.classList.add('hidden')\">Success! Record Deleted Successfully.</div>"
						//$(".content-wrapper").prepend(flash);					
					},
			error : function(e){
				if (confirm(i18n.t("error_message")))
						console.log(e.responseText);
					}
		});
	}
});

$("body").on("click",".view-grp-member",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		}
	});	
});

$("body").on("click",".view-grp-member",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$("#mem_amt").val(result);
		}
	});	
});

$("body").on("click",".amt_pay",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);			
		}
	});	
});

$("body").on("change",".gen_membership_id",function(){
	var mid = $(this).val();
	$("#total_amount").val('');
	var ajaxurl = $(this).attr("data-url");	
	var curr_data = {mid:mid};
	$.ajax({
		url:ajaxurl,
		data : curr_data,
		type : "POST",
		success : function(result){			
			$("#total_amount").val(result);	
		}
	});	
});

$("body").on("click",".view_invoice",function(){
	var ajaxurl = $(this).attr("data-url");	
	$.ajax({
		url:ajaxurl,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		}
	});	
});


$("body").on("click",".view_income_expense",function(){
	var ajaxurl = $(this).attr("data-url");	
	var type = $(this).attr("type");
	var curr_data = {type:type};
	$.ajax({
		url:ajaxurl,
		data : curr_data,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		}
	});	
});

$("body").on("click",".view_notice",function(){
	var ajaxurl = $(this).attr("data-url");	
	var id = $(this).attr("id");
	var curr_data = {id:id};
	$.ajax({
		url:ajaxurl,
		data : curr_data,
		type : "POST",
		success : function(result){			
			$('.gym-modal').modal('show');			
			$(".gym-modal .modal-content").html(result);
		}
	});	
});

 $("body").on("change",".membership_id",function(){
	var m_id = $(this).val();
	var ajaxurl = $("#mem_class_url").val();
	var curr_data = { m_id : m_id};
	//alert(curr_data);
	$(".class_list").html("");
	$.ajax({
		url : ajaxurl,
		type : "POST",
		data : curr_data,
		success : function(response){
			$(".class_list").append(response);
			$(".class_list").multiselect("rebuild");
			return false;
		},
		error : function(e){
			alert("Error: Could not fetch class list");
			console.log(e.responseText);
		}
	});
}); 

$("body").on("change",".mem_list_workout",function(){
	var member_id = $(this).val();	
	$("#append").html("");
	var ajaxurl = $("#getcategory").attr("data-url");
	var curr_data = {member_id:member_id};
	$.ajax({
		url : ajaxurl,
		type : "POST",
		data : curr_data,
		success : function(result)
		{		
			$("#append").append(result);			
		},
		error : function(e)
		{
			console.log(e.responseText);
		}
	});
});
});