// yt data
const MAX_RES = 16;
export const PID = `UU1iJBzr65trRbJBxyuEVrYw`;  // chanID
export const ytKEY = process.env.NODE_ENV === 'production' ?
                    `AIzaSyAKjOPOdAIaDmGqtimApPGCtolkZWrCL_8` :
                    `AIzaSyAKjOPOdAIaDmGqtimApPGCtolkZWrC_8`;
                    // `AIzaSyAKjOPOdAIaDmGqtimApPGCtolkZWrCL_8`; prod

export const ytURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PID}&maxResults=${MAX_RES}&key=${ytKEY}`


export const firebaseConfig = process.env.NODE_ENV !== 'production' ? 
                {
                    apiKey: "AIzaSyCvEzJzhf8hTXC-r4FUjy57b66buOlZIGs",
                    authDomain: "sizee192.firebaseapp.com",
                    databaseURL: "https://sizee192.firebaseio.com",
                    projectId: "sizee192",
                    storageBucket: "sizee192.appspot.com",
                    messagingSenderId: "695453048182",
                    appId: "1:695453048182:web:2204e326ac2340ae462e57"
                } :
                {
                    apiKey: "AIzaSyChM8h3DO4d8qQd2MZyQSUQg7aWTv48FQE",
                    authDomain: "sizee109.firebaseapp.com",
                    databaseURL: "https://sizee109.firebaseio.com",
                    projectId: "sizee109",
                    storageBucket: "sizee109.appspot.com",
                    messagingSenderId: "172351022918",
                    appId: "1:172351022918:web:be854bab2dc4182a0b6747"
                };