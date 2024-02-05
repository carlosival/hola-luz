
export class ClientCLiController(){

    constructor(){}

    async getSuspiciousfromFile(dirFile){
        if (fs.existsSync(dirFile)) {
            const ext = getExtension(dirFile);
            const clients = await parseXML(dirFile);
            const sus = await calculateSuspicous(clients);
            printSuspicious(sus);
            console.log(cowsay.say({ text: `Find The File with ext ${ext}` }));
          } else {
            console.log(`We can't  read this file ${'dirFile'}`);
            console.log(cowsay.say({ text: 'We could not Find The File' }));
          }
    }
}