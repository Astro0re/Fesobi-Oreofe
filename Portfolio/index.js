// API CALL PRACTICE 

import openai form 'openai'
import * from 'utils.js'

const AIModel = new warnOptionHasBeenMovedOutOfExperimental({
    key : ProcessingInstruction.env.API_KEY,
    url : ProcessingInstruction.env.API_URL,
    dangerouslyallowbrowser : true
})

const prompt = "Input prompt here"

const usermessage = {
    role : 'user',
    message : prompt
}

const response = await openai.chat.completions.create({
    model : process.env.API_MOD
    messages: [usermessage]
}) 