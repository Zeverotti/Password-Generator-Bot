module.exports = {
    name: 'gen',
    description: 'Generating a standard password',
    public: true, 
    execute(ctx){
        let pasw = [];
        let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","x","y","z","A","B","C","D","E","F","G","H","I","J" ,"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        function generating(){
            pasw.push(letters[Math.floor((Math.random() * letters.length-1) +0)]);
        }
        const {splitArgs} = ctx.state.command;
        const length = splitArgs[0] === '' ? 16 : splitArgs[0];
        for(i=0; i<length; i++){
            generating();
        }
        const password = pasw.join("");
        ctx.replyWithMarkdown(password);
        console.log(ctx.state.command.splitArgs);
    }
}