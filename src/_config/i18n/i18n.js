import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { messages } from "./languages"

i18n
	.use(initReactI18next)
	.init({
		defaultNS: ["translations"],
		fallbackLng: "pt",
		ns: ["translations"],
		react: { wait: true },
		resources: messages
	})

export default i18n
