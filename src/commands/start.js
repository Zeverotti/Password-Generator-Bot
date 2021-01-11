module.exports = {
    name: 'start',
    description: 'Receive a greeting from the bot',
    public: true, 
    execute(ctx){
        ctx.replyWithMarkdown('Hello buddy, thanks for joining the gang.');
    }
}