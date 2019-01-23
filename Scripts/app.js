let myGlobalVariable = 0;

//self-executing anonymous fiunction
// IIFE -- immediately invoked function expression
(function()
{

    function start() {
        console.log("App Started...");
    }
    window.addEventListener("load", start);
})();