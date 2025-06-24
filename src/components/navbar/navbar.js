import { VARIANT_LOGO_SQUARE } from "/assets/js/constants.js";

const LOGO_IMG_ID = `70eac545-0a73-4c4d-08fd-a74c3063b200`;
const LOGO_URL = `${window.env.CLOUD_IMAGE_URL}${LOGO_IMG_ID}/${VARIANT_LOGO_SQUARE}`;
console.log("LOGO URL: ",LOGO_URL);
//Load images for this component
document.getElementById('navbar-logo').src =  LOGO_URL