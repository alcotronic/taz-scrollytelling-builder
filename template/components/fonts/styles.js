import css from 'styled-jsx/css';

import './fa-brands-400.ttf';
import './fa-brands-400.woff';
import './fa-brands-400.woff2';
import './fa-regular-400.ttf';
import './fa-regular-400.woff';
import './fa-regular-400.woff2';
import './fa-solid-900.ttf';
import './fa-solid-900.woff';
import './fa-solid-900.woff2';

import './DroidSerif-Regular-webfont.woff';
import './Taz-Bold_tazze_private_only.woff';
import './Taz_4_.woff';
import './Taz_5_.woff';
import './Taz_6_.woff';
import './Taz_7_.woff';
import './Taz_8_.woff';

import './poppins.ttf';
import './poppins.woff';
import './poppins-bold.ttf';
import './poppins-bold.woff';
import './poppins-italic.ttf';
import './poppins-italic.woff';

import './lora.ttf';
import './lora.woff';
import './lora-bold.ttf';
import './lora-bold.woff';
import './lora-italic.ttf';
import './lora-italic.woff';
import './lora-bold-italic.ttf';
import './lora-bold-italic.woff';

const path = './assets/fonts';

export default css`

  @font-face {
    font-family: DroidSerif;
    src:
      url("${path}/DroidSerif-Regular-webfont.woff") format("woff");
  }

  @font-face {
    font-family: "logo";
    src:
      url("${path}/Taz-Bold_tazze_private_only.woff") format("woff");
  }

  @font-face {
    font-family: taz;
    src:
      url("${path}/Taz_5_.woff") format("woff");
  }

  @font-face {
    font-family: taz_bold;
    src:
      url("${path}/Taz_7_.woff") format("woff");
  }

  @font-face {
    font-family: taz_light;
    src:
      url("${path}/Taz_4_.woff") format("woff");
  }

  @font-face {
    font-family: taz_light_i;
    src:
      url("${path}/Taz_4_italic.woff") format("woff");
  }

  @font-face {
    font-family: taz_sbold;
    src:
      url("${path}/Taz_6_.woff") format("woff");
  }

  @font-face {
    font-family: taz_xbold;
    src:
      url("${path}/Taz_8_.woff") format("woff");
  }

  @font-face {
    font-family: 'Font Awesome 5 Brands';
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src:
      url("${path}/fa-brands-400.woff") format("woff"),
      url("${path}/fa-brands-400.woff2") format("woff2"),
      url("${path}/fa-brands-400.ttf") format("truetype");
  }

  @font-face {
    font-family: 'Font Awesome 5 Free';
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src:
      url("${path}/fa-regular-400.woff") format("woff"),
      url("${path}/fa-regular-400.woff2") format("woff2"),
      url("${path}/fa-regular-400.ttf") format("truetype");
  }

  @font-face {
    font-family: 'Font Awesome 5 Free';
    font-style: normal;
    font-weight: 900;
    font-display: auto;
    src:
      url("${path}/fa-solid-900.woff") format("woff"),
      url("${path}/fa-solid-900.woff") format("woff"),
      url("${path}/fa-solid-900.ttf") format("truetype");
  }


  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src:
      url('${path}/poppins.woff') format('woff'),
      url('${path}/poppins.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src:
      url('${path}/poppins-bold.woff') format('woff'),
      url('${path}/poppins-bold.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    src:
      url('${path}/poppins-italic.woff') format('woff'),
      url('${path}/poppins-italic.ttf') format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 400;
    src: url(${path}/lora.woff) format('woff'),
         url(${path}/lora.ttf) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    src: url(${path}/lora-bold.woff) format('woff'),
         url(${path}/lora-bold.ttf) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: italic;
    font-weight: 700;
    src: url(${path}/lora-bold-italic.woff) format('woff'),
         url(${path}/lora-bold-italic.ttf) format('truetype');
  }

  @font-face {
    font-display: swap;
    font-family: 'Lora';
    font-style: italic;
    font-weight: 400;
    src: url(${path}/lora-italic.woff) format('woff'),
         url(${path}/lora-italic.ttf) format('truetype');
  }

`;
