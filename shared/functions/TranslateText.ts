const translate = require('google-translate-api');


export function translateToPortuguese(text: string) {
   translate(text, { to: 'pt' }).then((res: any) => {
      console.log(res.text);
   }).catch((err: string) => {
      console.error(err);
   });
}

// translateToPortuguese('sdkndl')