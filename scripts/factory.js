import Photographer from "./models/photographer.js";
import Media from "./models/media.js";

const factory = { Photographer, Media };

const createElement = (type, attr) => new factory[type](attr);

export default createElement;
