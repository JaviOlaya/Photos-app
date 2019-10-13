import app from './app';

async function main() {
    await app.listen(app.get('port'));
    console.log('Servidor funcionando en puerto', app.get('port'));    
}

main();
