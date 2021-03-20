import cFonts from 'cfonts';
import constants from 'cfonts/lib/constants.js';
const { COLORS } = constants;

import express from 'express';

cFonts.say('upc-destroyer', { colors: [ COLORS.white, COLORS.red ] });



const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("ok");
});


const port = 2000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

