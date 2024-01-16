const express = require( 'express' )
const cors = require( 'cors' )
const { Telegraf } = require('telegraf')

const PORT = process.env.PORT || 3002

const app = express()

const TOKEN = '6656093660:AAHtN6NHi-aeCB50yj34Tui-eZ5-fPDhEtg'
const CHAT_ID = '1228397178'


const bot = new Telegraf(TOKEN)
app.use( cors() )
app.use( express.json() )
app.post( '/api/sendEmail', async ( req, res ) => {

    let text = [
        'Имя клиента: ' + req.body.name,
        'Номер телефона клиента: ' + req.body.phone,
    ]

    let msg = ''

    text.forEach(text => {
        msg += text + '\n'
    })


    await bot.telegram.sendMessage(CHAT_ID, msg)


    res.send( {
        'success': true
    } )
} )


app.listen( PORT, () => {
    console.log( `server starter ${ PORT }` )
} )