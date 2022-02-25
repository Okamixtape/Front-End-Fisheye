// Fichier JS principal qui importe les constructors pages et routes nécessaires

import Route from "./route.js"

import Homepage from "./pages/homepage.js"
import Photographerpage from "./pages/photographerpage.js"

Route.set("photographer", Photographerpage)
Route.set("/", Homepage)

Route.get()
